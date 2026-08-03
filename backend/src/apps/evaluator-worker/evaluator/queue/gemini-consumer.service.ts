import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../../commons/prisma/prisma.service';
import { aiConfig } from '../../../../config/ai.config';
import { userProfileConfig } from '../../../../config/user-profile.config';
import { AiEvaluatorProvider, LlmEvaluationResult } from '../providers/ai-provider.interface';
import { GeminiProviderService } from '../providers/gemini-provider.service';
import { Gemini35ProviderService } from '../providers/gemini35-provider.service';
import { EvaluatorQueueService } from './evaluator-queue.service';
import { EvaluatorErrorHandler } from './evaluator-error-handler';

import { SlidingWindowRateLimiter } from '../utils/rate-limiter';

@Injectable()
export class GeminiConsumerService {
  private readonly logger = new Logger(GeminiConsumerService.name);
  private isRunning = false;
  private readonly rateLimiters = new Map<string, SlidingWindowRateLimiter>();

  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: EvaluatorQueueService,
    private readonly gemini31Provider: GeminiProviderService,
    private readonly gemini35Provider: Gemini35ProviderService,
  ) {
    // Configura RateLimiter a 14 richieste/minuto per ciascun provider Gemini
    this.rateLimiters.set(this.gemini31Provider.name, new SlidingWindowRateLimiter(14, 60000));
    this.rateLimiters.set(this.gemini35Provider.name, new SlidingWindowRateLimiter(14, 60000));
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;

    const concurrencyPerProvider = 3;

    this.startProviderWorkers(this.gemini31Provider, concurrencyPerProvider);
    this.startProviderWorkers(this.gemini35Provider, concurrencyPerProvider);
  }

  private startProviderWorkers(provider: AiEvaluatorProvider, concurrency: number) {
    const isAvail = provider.isAvailable();
    this.logger.log(
      `✨ Consumer ${provider.name} avviato con ${concurrency} worker paralleli (Disponibile: ${isAvail}, Strategy: ${aiConfig.strategy})`,
    );

    for (let i = 1; i <= concurrency; i++) {
      this.runWorkerLoop(i, provider).catch((err) => {
        this.logger.error(`❌ Errore critico nel Worker #${i} del Provider ${provider.name}:`, err);
      });
    }
  }

  private async runWorkerLoop(workerId: number, provider: AiEvaluatorProvider) {
    const rateLimiter = this.rateLimiters.get(provider.name)!;

    while (true) {
      if (!provider.isAvailable() || aiConfig.strategy === 'ollama_only') {
        await new Promise((res) => setTimeout(res, 5000));
        continue;
      }

      // Verifica se il provider e in cooldown a causa di rate limit 429 recenti
      const cooldownMs = EvaluatorErrorHandler.getRemainingCooldownMs(provider.name);
      if (cooldownMs > 0) {
        await new Promise((res) => setTimeout(res, Math.min(cooldownMs, 5000)));
        continue;
      }

      // Pesca l annuncio dalla coda condivisa Denque
      const job = this.queueService.dequeue();
      if (!job) {
        await new Promise((res) => setTimeout(res, 1000));
        continue;
      }

      // Attendi il token di rate limit prima di inviare la richiesta API
      await rateLimiter.waitForToken();

      try {
        this.logger.log(
          `✨ [${provider.name} Worker #${workerId}] Pescato annuncio "${job.title}" da Denque (Rimanenti in coda: ${this.queueService.size})`,
        );
        await this.evaluateJobOffer(job.id, provider);
        EvaluatorErrorHandler.recordSuccess(provider.name);
        this.queueService.markCompleted(job.id);
      } catch (err: any) {
        const action = EvaluatorErrorHandler.handleError(provider.name, err);

        if (action.type === 'TEMPORARY_RETRY' || action.type === 'DAILY_PAUSE') {
          this.queueService.requeueToFront(job);
          await new Promise((res) => setTimeout(res, action.waitMs));
          continue;
        } else {
          await this.saveUnanalyzableEvaluation(job.id, job.title, provider, err);
          this.queueService.markCompleted(job.id);
        }
      }
    }
  }

  private async evaluateJobOffer(jobOfferId: string, provider: AiEvaluatorProvider) {
    const jobOffer = await this.prisma.jobOffer.findUnique({
      where: { id: jobOfferId },
      include: { company: true },
    });

    if (!jobOffer) {
      throw new Error(`Offerta di lavoro con ID ${jobOfferId} non trovata.`);
    }

    const prompt = this.buildPrompt(jobOffer);
    const result = await provider.evaluate(prompt);
    await this.saveEvaluationToDb(jobOfferId, jobOffer.title, provider, result);
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

  private async saveEvaluationToDb(
    jobOfferId: string,
    title: string,
    provider: AiEvaluatorProvider,
    result: LlmEvaluationResult,
  ) {
    const prosJson = result.pros ? JSON.stringify(result.pros) : null;
    const consJson = result.cons ? JSON.stringify(result.cons) : null;
    const evalStatus = result.status || 'SUCCESS';
    const evalModel = result.evaluatorModel || provider.modelEnum;

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

    this.logger.log(
      `✅ [${provider.name} Consumer] Valutazione salvata per "${title}": Model=${evaluation.evaluatorModel}, Status=${evaluation.status}, Priority=${evaluation.priority}`,
    );
  }

  private async saveUnanalyzableEvaluation(
    jobOfferId: string,
    title: string,
    provider: AiEvaluatorProvider,
    err: any,
  ) {
    const unanalyzableResult: LlmEvaluationResult = {
      status: 'UNANALYZABLE',
      evaluatorModel: provider.modelEnum,
      desireMatchScore: 0,
      competenceScore: 0,
      overallScore: 0,
      priority: 'DISQUALIFIED',
      desireMatchReasoning: 'Impossibile analizzare l annuncio.',
      competenceMatch: 'Impossibile analizzare l annuncio.',
      detailedReasoning: `Analisi non riuscita a causa di un errore irrecuperabile del modello ${provider.name}: ${err?.message || err}`,
      pros: [],
      cons: ['Errore irrecuperabile durante l analisi AI.'],
    };

    await this.saveEvaluationToDb(jobOfferId, title, provider, unanalyzableResult);
  }
}
