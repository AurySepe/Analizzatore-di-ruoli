import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../../commons/prisma/prisma.service';
import { aiConfig } from '../../../../config/ai.config';
import { userProfileConfig } from '../../../../config/user-profile.config';
import { EvaluatorQueueService } from './evaluator-queue.service';
import { GemmaCloudProviderService } from '../providers/gemma-cloud-provider.service';
import { LlmEvaluationResult } from '../providers/ai-provider.interface';
import { EvaluatorErrorHandler } from './evaluator-error-handler';

import { SlidingWindowRateLimiter } from '../utils/rate-limiter';

@Injectable()
export class GemmaCloudConsumerService {
  private readonly logger = new Logger(GemmaCloudConsumerService.name);
  private isRunning = false;
  private readonly rateLimiter = new SlidingWindowRateLimiter(28, 60000); // Max 28 req/min

  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: EvaluatorQueueService,
    private readonly gemmaCloudProvider: GemmaCloudProviderService,
  ) {}

  start() {
    if (this.isRunning) return;
    this.isRunning = true;

    const concurrency = 3; // 3 worker paralleli per Gemma Cloud
    const isAvail = this.gemmaCloudProvider.isAvailable();
    this.logger.log(`💎 Consumer ${this.gemmaCloudProvider.name} avviato con ${concurrency} worker paralleli (limite: max 28 req/min - Disponibile: ${isAvail}, Strategy: ${aiConfig.strategy})`);

    for (let i = 1; i <= concurrency; i++) {
      this.runWorker(i).catch(err => {
        this.logger.error(`❌ Errore critico nel Worker #${i} di ${this.gemmaCloudProvider.name}:`, err);
      });
    }
  }

  private async runWorker(workerId: number) {
    let notAvailableLogged = false;

    while (true) {
      if (!this.gemmaCloudProvider.isAvailable() || aiConfig.strategy === 'ollama_only') {
        if (!notAvailableLogged && workerId === 1) {
          this.logger.warn(`⚠️ Consumer ${this.gemmaCloudProvider.name} NON ATTIVO! Reason: isAvailable=${this.gemmaCloudProvider.isAvailable()}, Strategy=${aiConfig.strategy}`);
          notAvailableLogged = true;
        }
        await new Promise(res => setTimeout(res, 5000));
        continue;
      }
      notAvailableLogged = false;

      // Verifica se il provider e in cooldown a causa di rate limit 429 recenti
      const cooldownMs = EvaluatorErrorHandler.getRemainingCooldownMs(this.gemmaCloudProvider.name);
      if (cooldownMs > 0) {
        await new Promise(res => setTimeout(res, Math.min(cooldownMs, 5000)));
        continue;
      }

      // Pesca l annuncio dalla coda condivisa Denque
      const job = this.queueService.dequeue();
      if (!job) {
        await new Promise(res => setTimeout(res, 1000));
        continue;
      }

      // Attendi token dal rate limiter prima dell invio
      await this.rateLimiter.waitForToken();

      try {
        this.logger.log(`💎 [${this.gemmaCloudProvider.name} Worker #${workerId}] Pescato annuncio "${job.title}" da Denque (Rimanenti in coda: ${this.queueService.size})`);
        await this.evaluateJobOffer(job.id);
        EvaluatorErrorHandler.recordSuccess(this.gemmaCloudProvider.name);
        this.queueService.markCompleted(job.id);
      } catch (err: any) {
        const action = EvaluatorErrorHandler.handleError(this.gemmaCloudProvider.name, err);

        if (action.type === 'TEMPORARY_RETRY' || action.type === 'DAILY_PAUSE') {
          this.queueService.requeueToFront(job);
          await new Promise((res) => setTimeout(res, action.waitMs));
          continue;
        } else {
          await this.saveUnanalyzableEvaluation(job.id, job.title, err);
          this.queueService.markCompleted(job.id);
        }
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
1. "summary": Sintesi/Riassunto chiaro e conciso dell'annuncio di lavoro (ruolo, responsabilità chiave e requisiti principali in 2-4 frasi).
2. "desireMatchScore" (0-100): Valuta QUANTO L'ANNUNCIO CORRISPONDE IN MODO SPECIFICO E CHIRURGICO ai desiderata dell'utente.
3. "competenceScore" (0-100): Valuta la corrispondenza tecnica.
4. "overallScore" (0-100): Punteggio finale ponderato.
5. "priority": "HIGH" | "MEDIUM" | "LOW" | "DISQUALIFIED".
6. "desireMatchReasoning": sintesi di 1-2 frasi.
7. "competenceMatch": sintesi di 1-2 frasi.
8. "detailedReasoning": breve analisi in Markdown (max 80 parole).
9. "pros" e "cons": punti di forza e criticità.

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
        summary: result.summary ?? null,
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
        summary: result.summary ?? null,
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
