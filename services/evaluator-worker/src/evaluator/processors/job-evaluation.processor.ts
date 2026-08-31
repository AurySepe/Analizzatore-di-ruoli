import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Job } from 'bullmq';
import { PrismaService } from '../../commons/prisma/prisma.service';
import { GeminiProviderService } from '../providers/gemini-provider.service';
import { Gemini35ProviderService } from '../providers/gemini35-provider.service';
import { AiEvaluatorProvider, LlmEvaluationResult } from '../providers/ai-provider.interface';
import { isGoogleQuotaError } from '../providers/base-google-genai.provider';
import {
  EVALUATION_QUEUE_NAME,
  EVALUATE_JOB_EVENT,
  EvaluateJobOfferTaskEvent,
  userProfileConfig,
} from '@analizzatore/contracts';
import { EvaluationPriority, EvaluationStatus, EvaluatorModel, JobEvaluationProcessStatus } from '@analizzatore/database';
import { buildEvaluationPrompt } from '../utils/prompt-builder';

@Processor(EVALUATION_QUEUE_NAME, {
  concurrency: 6,
  limiter: {
    max: 28,
    duration: 60000,
  },
})
export class JobEvaluationProcessor extends WorkerHost {
  private readonly logger = new Logger(JobEvaluationProcessor.name);
  private currentProviderIndex = 0;

  constructor(
    private readonly prisma: PrismaService,
    private readonly gemini31Provider: GeminiProviderService,
    private readonly gemini35Provider: Gemini35ProviderService,
  ) {
    super();
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

    // Riordina l'array partendo dal provider primario prescelto per questo ciclo
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
        if (isGoogleQuotaError(err)) {
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

  /**
   * Auto-Resume periodico: riattiva il consumo della coda ogni 10 minuti o al reset giornaliero UTC.
   */
  @Cron(CronExpression.EVERY_10_MINUTES)
  async handleAutoResumeInterval(): Promise<void> {
    await this.resumeWorkerIfPaused('Intervallo periodico (10m)');
  }

  @Cron('0 0 * * *')
  async handleDailyQuotaReset(): Promise<void> {
    await this.resumeWorkerIfPaused('Reset giornaliero quote Google Cloud (00:00 UTC)');
  }

  private async resumeWorkerIfPaused(reason: string): Promise<void> {
    if (this.worker && this.worker.isPaused()) {
      this.logger.log(`▶️ [EvaluatorWorker] Auto-Resume attivato (${reason}): riattivazione della coda ${EVALUATION_QUEUE_NAME}...`);
      await this.worker.resume();
      this.logger.log(`✅ [EvaluatorWorker] Coda ${EVALUATION_QUEUE_NAME} riattivata con successo.`);
    }
  }

  async process(job: Job<EvaluateJobOfferTaskEvent, any, string>): Promise<any> {
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

      const prompt = buildEvaluationPrompt(
        jobOffer.title,
        jobOffer.descriptionMarkdown || jobOffer.rawDescription,
        jobOffer.company.name,
        userProfileConfig.resumeText,
        userProfileConfig.searchCriteriaText,
      );

      const result: LlmEvaluationResult = await this.evaluateWithFailover(
        prompt,
        jobOffer.title,
        jobOffer.company.name,
      );

      const prosJson = result.pros && result.pros.length > 0 ? JSON.stringify(result.pros) : null;
      const consJson = result.cons && result.cons.length > 0 ? JSON.stringify(result.cons) : null;

      // 2. Persistenza della valutazione e stato COMPLETED nel Database Centrale
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
      const isQuota = isGoogleQuotaError(err);
      const currentAttempt = job.attemptsMade + 1;
      const maxAttempts = job.opts.attempts || 1;

      if (isQuota) {
        // === GESTIONE ERRORE INFRASTRUTTURALE (QUOTA / RATE LIMIT) ===
        this.logger.warn(
          `⏸️ [EvaluatorWorker] Quote AI esaurite su tutti i modelli. Sospensione immediata del consumo della coda ${EVALUATION_QUEUE_NAME}...`,
        );

        // Mette in pausa il worker: nessun nuovo job verrà prelevato da Redis
        if (this.worker && !this.worker.isPaused()) {
          await this.worker.pause(true);
          this.logger.warn(`🛑 [EvaluatorWorker] Worker ${EVALUATION_QUEUE_NAME} messo in PAUSA. Si risveglierà automaticamente al prossimo ciclo/reset.`);
        }

        // Ripristina lo stato del job a PENDING (non è un errore del job!)
        try {
          await this.prisma.jobOffer.update({
            where: { id: jobOfferId },
            data: { evaluationProcessStatus: JobEvaluationProcessStatus.PENDING },
          });
        } catch (_) {}

        throw err;
      }

      // === GESTIONE ERRORI DI BUSINESS / PAYLOAD CORROTTO ===
      this.logger.error(
        `❌ [EvaluatorWorker] Errore di esecuzione per job [ID: ${jobOfferId}] (Tentativo ${currentAttempt}/${maxAttempts}): ${err.message}`,
        err.stack,
      );

      // Dead Letter Queue Pattern: Aggiorna a FAILED SOLO se tutti i tentativi BullMQ sono esauriti
      if (currentAttempt >= maxAttempts) {
        this.logger.warn(`💀 [EvaluatorWorker] Esauriti tutti i ${maxAttempts} tentativi per job [ID: ${jobOfferId}]. Marcato come FAILED (Dead Letter).`);
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
