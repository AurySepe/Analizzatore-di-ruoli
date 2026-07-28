import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../../commons/prisma/prisma.service';
import { aiConfig } from '../../../../config/ai.config';
import { userProfileConfig } from '../../../../config/user-profile.config';
import { EvaluatorQueueService } from './evaluator-queue.service';
import { GemmaCloudProviderService } from '../providers/gemma-cloud-provider.service';
import { LlmEvaluationResult } from '../providers/ai-provider.interface';

@Injectable()
export class GemmaCloudConsumerService {
  private readonly logger = new Logger(GemmaCloudConsumerService.name);
  private isRunning = false;

  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: EvaluatorQueueService,
    private readonly gemmaCloudProvider: GemmaCloudProviderService,
  ) {}

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.consumerLoop().catch(err => {
      this.logger.error(`❌ Errore critico nel Consumer ${this.gemmaCloudProvider.name}:`, err);
    });
  }

  private async consumerLoop() {
    const isAvail = this.gemmaCloudProvider.isAvailable();
    this.logger.log(`💎 Consumer ${this.gemmaCloudProvider.name} avviato (limite: max 30 req/min, pacing: 2s - Disponibile: ${isAvail}, Strategy: ${aiConfig.strategy})`);

    let notAvailableLogged = false;

    while (true) {
      if (!this.gemmaCloudProvider.isAvailable() || aiConfig.strategy === 'ollama_only') {
        if (!notAvailableLogged) {
          this.logger.warn(`⚠️ Consumer ${this.gemmaCloudProvider.name} NON ATTIVO! Reason: isAvailable=${this.gemmaCloudProvider.isAvailable()}, Strategy=${aiConfig.strategy}`);
          notAvailableLogged = true;
        }
        await new Promise(res => setTimeout(res, 5000));
        continue;
      }
      notAvailableLogged = false;

      // Pesca l'annuncio dalla coda condivisa Denque
      const job = this.queueService.dequeue();
      if (!job) {
        await new Promise(res => setTimeout(res, 1000));
        continue;
      }

      const startTime = Date.now();

      try {
        this.logger.log(`💎 [${this.gemmaCloudProvider.name} Consumer] Pescato annuncio "${job.title}" da Denque (Rimanenti in coda: ${this.queueService.size})`);
        await this.evaluateJobOffer(job.id);
        this.queueService.markCompleted(job.id);
      } catch (err: any) {
        const errMsg = err?.message || String(err);
        const isQuotaExhausted = errMsg.includes('QuotaExhausted') || errMsg.includes('quota') || errMsg.includes('Per-Day') || errMsg.includes('DAILY');
        const isRateLimit = err?.status === 429 || errMsg.includes('429') || errMsg.includes('RESOURCE_EXHAUSTED');

        if (isQuotaExhausted) {
          this.logger.warn(`🛑 [${this.gemmaCloudProvider.name} Consumer] Quota giornaliera esaurita per ${this.gemmaCloudProvider.name}! Rimesso annuncio in coda per gli altri Consumer. Pausa di raffreddamento di 15 minuti...`);
          this.queueService.requeueToFront(job);
          await new Promise(res => setTimeout(res, 15 * 60 * 1000));
          continue;
        } else if (isRateLimit) {
          this.logger.warn(`⚠️ [${this.gemmaCloudProvider.name} Consumer] Hit 429 Rate Limit (RPM/Pacing) per "${job.title}". Pausa di raffreddamento (20s) e requeue in Denque...`);
          this.queueService.requeueToFront(job);
          await new Promise(res => setTimeout(res, 20000));
          continue;
        } else {
          this.logger.error(`❌ [${this.gemmaCloudProvider.name} Consumer] Errore irrecuperabile per "${job.title}": ${errMsg}. Registrazione come UNANALYZABLE.`);
          await this.saveUnanalyzableEvaluation(job.id, job.title, err);
          this.queueService.markCompleted(job.id);
        }
      }


      // Pacing di sicurezza: max 30 req/min (almeno 2000ms tra ogni richiesta: 60000ms / 30 = 2000ms)
      const elapsedTime = Date.now() - startTime;
      const minInterval = 2000;
      if (elapsedTime < minInterval) {
        await new Promise(res => setTimeout(res, minInterval - elapsedTime));
      }
    }
  }

  private async evaluateJobOffer(jobOfferId: string) {
    const jobOffer = await this.prisma.jobOffer.findUnique({
      where: { id: jobOfferId },
      include: { company: true },
    });

    if (!jobOffer) return;

    const prompt = this.buildPrompt(jobOffer);
    const result = await this.gemmaCloudProvider.evaluate(prompt);
    await this.saveEvaluationToDb(jobOfferId, jobOffer.title, result);
  }

  private buildPrompt(jobOffer: any): string {
    const fullDesc = jobOffer.descriptionMarkdown || jobOffer.rawDescription || '';
    return `Sei un severissimo ed esigente reclutatore AI per sviluppatori di alto livello.
Il tuo compito è valutare questo annuncio con CRITERI RIGIDI E SELETTIVI. Non assegnare punteggi alti a ruoli generici!

--- DESIDERATA E CRITERI DI RICERCA SPECIFICI DELL'UTENTE ---
${userProfileConfig.searchCriteriaText}

--- PROFILO E CURRICULUM UTENTE ---
${userProfileConfig.resumeText}

--- OFFERTA DI LAVORO DA VALUTARE ---
Titolo: ${jobOffer.title}
Azienda: ${jobOffer.company.name}
Luogo / Modalità: ${jobOffer.location || 'N/D'} (${jobOffer.remoteType})
Descrizione:
${fullDesc}

--- REGOLE RIGIDE PER L'ASSEGNAZIONE DEI PUNTEGGI ---
1. "desireMatchScore" (0-100): Valuta QUANTO L'ANNUNCIO CORRISPONDE IN MODO SPECIFICO E CHIRURGICO ai desiderata dell'utente.
2. "competenceScore" (0-100): Valuta la corrispondenza tecnica.
3. "overallScore" (0-100): Punteggio finale ponderato.
4. "priority": "HIGH" | "MEDIUM" | "LOW" | "DISQUALIFIED".
5. "desireMatchReasoning": sintesi di 1-2 frasi.
6. "competenceMatch": sintesi di 1-2 frasi.
7. "detailedReasoning": breve analisi in Markdown (max 80 parole).
8. "pros" e "cons": punti di forza e criticità.

Rispondi ESCLUSIVAMENTE in formato JSON valido.`;
  }

  private async saveEvaluationToDb(jobOfferId: string, title: string, result: LlmEvaluationResult) {
    const prosJson = result.pros ? JSON.stringify(result.pros) : null;
    const consJson = result.cons ? JSON.stringify(result.cons) : null;
    const evalStatus = result.status || 'SUCCESS';
    const evalModel = result.evaluatorModel || 'GEMMA_4_31B';

    const evaluation = await this.prisma.jobEvaluation.upsert({
      where: { jobOfferId },
      update: {
        status: evalStatus,
        evaluatorModel: evalModel,
        desireMatchScore: result.desireMatchScore,
        competenceScore: result.competenceScore,
        overallScore: result.overallScore,
        priority: result.priority,
        desireMatchReasoning: result.desireMatchReasoning,
        competenceMatch: result.competenceMatch,
        detailedReasoning: result.detailedReasoning,
        pros: prosJson,
        cons: consJson,
        updatedAt: new Date(),
      },
      create: {
        jobOfferId,
        status: evalStatus,
        evaluatorModel: evalModel,
        desireMatchScore: result.desireMatchScore,
        competenceScore: result.competenceScore,
        overallScore: result.overallScore,
        priority: result.priority,
        desireMatchReasoning: result.desireMatchReasoning,
        competenceMatch: result.competenceMatch,
        detailedReasoning: result.detailedReasoning,
        pros: prosJson,
        cons: consJson,
      },
    });

    this.logger.log(`✅ [${this.gemmaCloudProvider.name} Consumer] Valutazione salvata per "${title}": Model=${evalModel}, Status=${evalStatus}, Priority=${evaluation.priority}`);
  }

  private async saveUnanalyzableEvaluation(jobOfferId: string, title: string, error: any) {
    const errorMsg = error?.message || String(error);
    await this.prisma.jobEvaluation.upsert({
      where: { jobOfferId },
      update: {
        status: 'UNANALYZABLE',
        evaluatorModel: 'GEMMA_4_31B',
        desireMatchScore: 0,
        competenceScore: 0,
        overallScore: 0,
        priority: 'DISQUALIFIED',
        desireMatchReasoning: 'Impossibile analizzare l annuncio.',
        competenceMatch: 'Impossibile analizzare l annuncio.',
        detailedReasoning: `Analisi non riuscita a causa di un errore irrecuperabile del modello ${this.gemmaCloudProvider.name}: ${errorMsg}`,
        pros: null,
        cons: null,
        updatedAt: new Date(),
      },
      create: {
        jobOfferId,
        status: 'UNANALYZABLE',
        evaluatorModel: 'GEMMA_4_31B',
        desireMatchScore: 0,
        competenceScore: 0,
        overallScore: 0,
        priority: 'DISQUALIFIED',
        desireMatchReasoning: 'Impossibile analizzare l annuncio.',
        competenceMatch: 'Impossibile analizzare l annuncio.',
        detailedReasoning: `Analisi non riuscita a causa di un errore irrecuperabile del modello ${this.gemmaCloudProvider.name}: ${errorMsg}`,
        pros: null,
        cons: null,
      },
    });

    this.logger.warn(`⚠️ [${this.gemmaCloudProvider.name} Consumer] Annuncio "${title}" registrato come UNANALYZABLE.`);
  }
}
