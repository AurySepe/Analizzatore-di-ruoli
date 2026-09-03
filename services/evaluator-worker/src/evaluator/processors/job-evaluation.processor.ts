import { InjectQueue, Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger, OnApplicationBootstrap } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { DelayedError, Job, Queue } from 'bullmq';
import { PrismaService } from '../../commons/prisma/prisma.service';
import { GeminiProviderService } from '../providers/gemini-provider.service';
import { Gemini35ProviderService } from '../providers/gemini35-provider.service';
import { AiEvaluatorProvider, LlmEvaluationResult } from '../providers/ai-provider.interface';
import { isGoogleQuotaError, extractGoogleQuotaInfo } from '../providers/base-google-genai.provider';
import {
  EVALUATION_QUEUE_NAME,
  EVALUATE_JOB_EVENT,
  EvaluateJobOfferTaskEvent,
  userProfileConfig,
} from '@analizzatore/contracts';
import { EvaluationPriority, EvaluationStatus, EvaluatorModel, JobEvaluationProcessStatus } from '@analizzatore/database';
import { buildEvaluationPrompt } from '../utils/prompt-builder';

const REDIS_KEY_QUOTA_PAUSED_UNTIL = 'evaluator:quota_paused_until';

@Processor(EVALUATION_QUEUE_NAME, {
  concurrency: 2,
})
export class JobEvaluationProcessor extends WorkerHost implements OnApplicationBootstrap {
  private readonly logger = new Logger(JobEvaluationProcessor.name);
  private currentProviderIndex = 0;

  constructor(
    private readonly prisma: PrismaService,
    private readonly gemini31Provider: GeminiProviderService,
    private readonly gemini35Provider: Gemini35ProviderService,
    @InjectQueue(EVALUATION_QUEUE_NAME)
    private readonly evaluationQueue: Queue<EvaluateJobOfferTaskEvent>,
  ) {
    super();
  }

  /**
   * Calcola la data e l'ora del prossimo reset delle quote Google Gemini (ore 09:00:00 Europe/Rome).
   */
  private getNextDailyQuotaResetTime(): Date {
    const now = new Date();
    const romeTimeNow = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Rome' }));
    const today9Rome = new Date(romeTimeNow);
    today9Rome.setHours(9, 0, 0, 0);

    if (romeTimeNow.getTime() >= today9Rome.getTime()) {
      today9Rome.setDate(today9Rome.getDate() + 1);
    }

    const diffMs = today9Rome.getTime() - romeTimeNow.getTime();
    return new Date(now.getTime() + diffMs);
  }

  async onApplicationBootstrap() {
    try {
      const isPaused = await this.evaluationQueue.isPaused();
      const client = await this.evaluationQueue.client;
      const pausedUntilStr = await client.get(REDIS_KEY_QUOTA_PAUSED_UNTIL);

      if (pausedUntilStr) {
        const pausedUntil = new Date(pausedUntilStr);
        const now = new Date();

        if (now.getTime() >= pausedUntil.getTime()) {
          this.logger.log(
            `🌅 [EvaluatorWorker] Bootstrap: l'orario di reset quote (${pausedUntil.toLocaleString('it-IT', { timeZone: 'Europe/Rome' })}) è già trascorso! Auto-recovery immediato della coda "${EVALUATION_QUEUE_NAME}".`,
          );
          await this.evaluationQueue.resume();
          await client.del(REDIS_KEY_QUOTA_PAUSED_UNTIL);
        } else {
          const remainingMinutes = Math.round((pausedUntil.getTime() - now.getTime()) / 60000);
          const hours = Math.floor(remainingMinutes / 60);
          const minutes = remainingMinutes % 60;
          this.logger.warn(
            `⏳ [EvaluatorWorker] Bootstrap: la coda "${EVALUATION_QUEUE_NAME}" è in pausa per quota esaurita fino alle ${pausedUntil.toLocaleString('it-IT', { timeZone: 'Europe/Rome' })} (riattivazione prevista tra ${hours}h ${minutes}m).`,
          );
          if (!isPaused) {
            await this.evaluationQueue.pause();
          }
        }
      } else if (isPaused) {
        this.logger.log(
          `ℹ️ [EvaluatorWorker] Coda "${EVALUATION_QUEUE_NAME}" rilevata in stato PAUSED su Redis all'avvio. Auto-resume in corso...`,
        );
        await this.evaluationQueue.resume();
      } else {
        this.logger.log(`🚀 [EvaluatorWorker] Coda "${EVALUATION_QUEUE_NAME}" attiva e pronta all'elaborazione.`);
      }
    } catch (err: any) {
      this.logger.error(`❌ [EvaluatorWorker] Errore verifica stato coda all'avvio:`, err.message);
    }
  }

  /**
   * Riattiva automaticamente la coda di valutazione ogni giorno alle 09:00 CEST (Europe/Rome),
   * in corrispondenza del reset della quota giornaliera (RPD) delle API Google Gemini.
   */
  @Cron('0 0 9 * * *', { timeZone: 'Europe/Rome' })
  async handleDailyQuotaReset() {
    try {
      const client = await this.evaluationQueue.client;
      await client.del(REDIS_KEY_QUOTA_PAUSED_UNTIL);

      const isPaused = await this.evaluationQueue.isPaused();
      if (isPaused) {
        this.logger.log(
          `🌅 [EvaluatorWorker] Reset quota giornaliera Google Gemini alle 09:00 CEST: riattivazione coda "${EVALUATION_QUEUE_NAME}"!`,
        );
        await this.evaluationQueue.resume();
      } else {
        this.logger.log(`⏰ [EvaluatorWorker] Trigger 09:00 CEST: la coda "${EVALUATION_QUEUE_NAME}" è già attiva.`);
      }
    } catch (err: any) {
      this.logger.error(`❌ [EvaluatorWorker] Errore durante il resume della coda alle 09:00:`, err.message);
    }
  }

  private isProfileComplete(): boolean {
    return Boolean(
      userProfileConfig.resumeText &&
        userProfileConfig.resumeText.trim().length > 0 &&
        userProfileConfig.searchCriteriaText &&
        userProfileConfig.searchCriteriaText.trim().length > 0,
    );
  }

  private getOrderedProviders(): AiEvaluatorProvider[] {
    const allProviders: AiEvaluatorProvider[] = [];
    if (this.gemini31Provider.isAvailable()) {
      allProviders.push(this.gemini31Provider);
    }
    if (this.gemini35Provider.isAvailable()) {
      allProviders.push(this.gemini35Provider);
    }

    if (allProviders.length === 0) {
      throw new Error('Nessun provider AI Gemini disponibile per la valutazione.');
    }

    const startIndex = this.currentProviderIndex % allProviders.length;
    this.currentProviderIndex = (this.currentProviderIndex + 1) % allProviders.length;

    // Riordina l'array partendo dal provider primario prescelto per questo ciclo (Round-Robin 50/50)
    return [
      ...allProviders.slice(startIndex),
      ...allProviders.slice(0, startIndex),
    ];
  }

  /**
   * Esegue la valutazione con In-Process Failover tra i modelli disponibili.
   * Se un modello fallisce per errore di quota, tenta immediatamente l'altro provider.
   */
  private async evaluateWithFailover(prompt: string, jobTitle: string, companyName: string): Promise<LlmEvaluationResult> {
    const providers = this.getOrderedProviders();
    let lastQuotaError: any = null;

    for (let i = 0; i < providers.length; i++) {
      const provider = providers[i];
      try {
        this.logger.log(`✨ Valutazione con provider: ${provider.name} per "${jobTitle}" (${companyName})`);
        return await provider.evaluate(prompt);
      } catch (err: any) {
        if (extractGoogleQuotaInfo(err).isQuota) {
          this.logger.warn(`⚠️ [EvaluatorWorker] Quota esaurita su ${provider.name} (${err.message}).`);
          lastQuotaError = err;
          // Se ci sono altri provider disponibili, prova il successivo all'istante
          if (i + 1 < providers.length) {
            this.logger.log(`🔄 [EvaluatorWorker] Tentativo di fallback immediato su ${providers[i + 1].name}...`);
            continue;
          }
        } else {
          // Se non è un errore di quota (es. errore di parsing o timeout), solleva direttamente
          throw err;
        }
      }
    }

    // Se siamo arrivati qui, tutti i provider hanno restituito un errore di quota
    throw lastQuotaError || new Error('Tutti i provider AI Gemini hanno esaurito le quote.');
  }

  async process(job: Job<EvaluateJobOfferTaskEvent, any, string>, token?: string): Promise<any> {
    if (job.name !== EVALUATE_JOB_EVENT) {
      this.logger.debug(`Ignorato evento non riconosciuto: ${job.name}`);
      return;
    }

    const { jobOfferId, forceReevaluation } = job.data;
    this.logger.log(`🤖 [EvaluatorWorker] Avvio valutazione annuncio [ID: ${jobOfferId}]`);

    try {
      if (!this.isProfileComplete()) {
        this.logger.warn('⚠️ Profilo utente incompleto: impossibile procedere con la valutazione.');
        throw new Error('Profilo utente incompleto');
      }

      // 1. Recupero dell'annuncio
      const jobOffer = await this.prisma.jobOffer.findUnique({
        where: { id: jobOfferId },
        include: { company: true, evaluation: true },
      });

      if (!jobOffer) {
        this.logger.warn(`⚠️ Annuncio non trovato con ID ${jobOfferId}. Salto.`);
        return;
      }

      if (jobOffer.evaluation && !forceReevaluation) {
        this.logger.log(`ℹ️ Annuncio [ID: ${jobOfferId}] già valutato. Salto.`);
        return;
      }

      // Aggiornamento stato di processo in EVALUATING
      await this.prisma.jobOffer.update({
        where: { id: jobOffer.id },
        data: { evaluationProcessStatus: JobEvaluationProcessStatus.EVALUATING },
      });

      // 2. Costruzione del prompt e chiamata AI con failover
      const companyName = jobOffer.company?.name || 'Azienda non specificata';
      const description = jobOffer.descriptionMarkdown || jobOffer.rawDescription || 'Descrizione non disponibile';
      const prompt = buildEvaluationPrompt(
        jobOffer.title,
        description,
        companyName,
        userProfileConfig.resumeText,
        userProfileConfig.searchCriteriaText,
      );

      const result = await this.evaluateWithFailover(prompt, jobOffer.title, companyName);

      // 3. Salvataggio su database
      const prosJson = Array.isArray(result.pros) ? JSON.stringify(result.pros) : '[]';
      const consJson = Array.isArray(result.cons) ? JSON.stringify(result.cons) : '[]';

      const [evaluation] = await this.prisma.$transaction([
        this.prisma.jobEvaluation.upsert({
          where: { jobOfferId: jobOffer.id },
          create: {
            jobOfferId: jobOffer.id,
            desireMatchScore: result.desireMatchScore,
            competenceScore: result.competenceScore,
            overallScore: result.overallScore,
            priority: result.priority as EvaluationPriority,
            status: (result.status as EvaluationStatus) || EvaluationStatus.SUCCESS,
            evaluatorModel: (result.evaluatorModel as EvaluatorModel) || EvaluatorModel.GEMINI_3_1_FLASH_LITE,
            summary: result.summary,
            desireMatchReasoning: result.desireMatchReasoning,
            competenceMatch: result.competenceMatch,
            detailedReasoning: result.detailedReasoning,
            pros: prosJson,
            cons: consJson,
          },
          update: {
            desireMatchScore: result.desireMatchScore,
            competenceScore: result.competenceScore,
            overallScore: result.overallScore,
            priority: result.priority as EvaluationPriority,
            status: (result.status as EvaluationStatus) || EvaluationStatus.SUCCESS,
            evaluatorModel: (result.evaluatorModel as EvaluatorModel) || EvaluatorModel.GEMINI_3_1_FLASH_LITE,
            summary: result.summary,
            desireMatchReasoning: result.desireMatchReasoning,
            competenceMatch: result.competenceMatch,
            detailedReasoning: result.detailedReasoning,
            pros: prosJson,
            cons: consJson,
          },
        }),
        this.prisma.jobOffer.update({
          where: { id: jobOffer.id },
          data: { evaluationProcessStatus: JobEvaluationProcessStatus.COMPLETED },
        }),
      ]);

      this.logger.log(`✅ [EvaluatorWorker] Valutazione completata per "${jobOffer.title}": Score ${evaluation.overallScore}/100 - Priority: ${evaluation.priority}`);
      return { status: 'SUCCESS', evaluationId: evaluation.id, overallScore: evaluation.overallScore };
    } catch (err: any) {
      const quotaInfo = extractGoogleQuotaInfo(err);
      const currentAttempt = job.attemptsMade + 1;
      const maxAttempts = job.opts.attempts || 1;
      const isFinalAttempt = currentAttempt >= maxAttempts;

      if (quotaInfo.isQuota) {
        try {
          await this.prisma.jobOffer.update({
            where: { id: jobOfferId },
            data: { evaluationProcessStatus: JobEvaluationProcessStatus.PENDING },
          });
        } catch (_) {}

        if (quotaInfo.isDailyLimit) {
          const nextReset = this.getNextDailyQuotaResetTime();
          try {
            const client = await this.evaluationQueue.client;
            await (client as any).set(REDIS_KEY_QUOTA_PAUSED_UNTIL, nextReset.toISOString(), 'EX', 86400);
          } catch (redisErr: any) {
            this.logger.error(`❌ [EvaluatorWorker] Errore salvataggio quota_paused_until in Redis:`, redisErr.message);
          }

          const remainingMinutes = Math.round((nextReset.getTime() - Date.now()) / 60000);
          const hours = Math.floor(remainingMinutes / 60);
          const minutes = remainingMinutes % 60;

          this.logger.warn(
            `⚠️ [EvaluatorWorker] Esaurita quota GIORNALIERA (RPD) su tutti i provider per job [ID: ${jobOfferId}]. ` +
            `Coda "${EVALUATION_QUEUE_NAME}" messa in pausa su Redis fino alle ${nextReset.toLocaleString('it-IT', { timeZone: 'Europe/Rome' })} (${hours}h ${minutes}m). ` +
            `Job riposizionato in testa senza consumare tentativi.`,
          );

          await this.evaluationQueue.pause();
          await job.moveToDelayed(Date.now(), token);
          throw new DelayedError();
        } else {
          const waitSec = Math.round(quotaInfo.retryDelayMs / 1000);
          this.logger.warn(
            `⏳ [EvaluatorWorker] Rate limit temporaneo al minuto (15 RPM) su tutti i provider per job [ID: ${jobOfferId}]. ` +
            `Pausa breve della coda di ${waitSec}s prima di riprendere automaticamente...`,
          );

          await this.evaluationQueue.pause();
          await job.moveToDelayed(Date.now() + quotaInfo.retryDelayMs, token);

          setTimeout(async () => {
            try {
              if (await this.evaluationQueue.isPaused()) {
                this.logger.log(`⚡ [EvaluatorWorker] Fine pausa rate limit (${waitSec}s): riattivazione coda "${EVALUATION_QUEUE_NAME}".`);
                await this.evaluationQueue.resume();
              }
            } catch (resumeErr: any) {
              this.logger.error(`❌ [EvaluatorWorker] Errore resume post-rate limit:`, resumeErr.message);
            }
          }, quotaInfo.retryDelayMs);

          throw new DelayedError();
        }
      }

      this.logger.error(
        `❌ [EvaluatorWorker] Errore non-quota per job [ID: ${jobOfferId}] (Tentativo ${currentAttempt}/${maxAttempts}): ${err.message}`,
      );

      // Dead Letter Queue Pattern: Aggiorna a FAILED SOLO per errori fatali di business a tentativi esauriti
      if (isFinalAttempt) {
        this.logger.warn(`💀 [EvaluatorWorker] Esauriti tutti i ${maxAttempts} tentativi per errore fatale su job [ID: ${jobOfferId}]. Marcato come FAILED.`);
        try {
          await this.prisma.jobOffer.update({
            where: { id: jobOfferId },
            data: { evaluationProcessStatus: JobEvaluationProcessStatus.FAILED },
          });
        } catch (_) {}
      }

      throw err;
    }
  }
}
