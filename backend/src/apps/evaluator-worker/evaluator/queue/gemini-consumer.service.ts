import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../../commons/prisma/prisma.service';
import { aiConfig } from '../../../../config/ai.config';
import { userProfileConfig } from '../../../../config/user-profile.config';
import { LlmEvaluationResult } from '../providers/ai-provider.interface';
import { GeminiProviderService } from '../providers/gemini-provider.service';
import { EvaluatorQueueService } from './evaluator-queue.service';

@Injectable()
export class GeminiConsumerService {
  private readonly logger = new Logger(GeminiConsumerService.name);
  private isRunning = false;

  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: EvaluatorQueueService,
    private readonly geminiProvider: GeminiProviderService,
  ) { }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.consumerLoop().catch(err => {
      this.logger.error('❌ Errore critico nel Consumer Gemini:', err);
    });
  }

  private async consumerLoop() {
    const isAvail = this.geminiProvider.isAvailable();
    this.logger.log(`✨ Gemini Consumer avviato (limite: max 15 req/min, pacing: 4s - Disponibile: ${isAvail}, Strategy: ${aiConfig.strategy})`);

    let notAvailableLogged = false;

    while (true) {
      if (!this.geminiProvider.isAvailable() || aiConfig.strategy === 'ollama_only') {
        if (!notAvailableLogged) {
          this.logger.warn(`⚠️ Gemini Consumer NON ATTIVO! Reason: isAvailable=${this.geminiProvider.isAvailable()}, Strategy=${aiConfig.strategy}`);
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
        this.logger.log(`✨ [Gemini Consumer] Pescato annuncio "${job.title}" da Denque (Rimanenti in coda: ${this.queueService.size})`);
        await this.evaluateJobOffer(job.id);
        this.queueService.markCompleted(job.id);
      } catch (err: any) {
        const errMsg = err?.message || String(err);
        const isQuotaExhausted = errMsg.includes('QuotaExhausted') || errMsg.includes('quota') || errMsg.includes('Per-Day') || errMsg.includes('DAILY');
        const isRateLimit = err?.status === 429 || errMsg.includes('429') || errMsg.includes('RESOURCE_EXHAUSTED');

        if (isQuotaExhausted) {
          this.logger.warn(`🛑 [Gemini Consumer] Quota giornaliera esaurita (QuotaExhausted/DailyLimit) per Gemini Cloud! Rimesso annuncio in coda per gli altri Consumer. Pausa di raffreddamento del Consumer Gemini per 15 minuti...`);
          this.queueService.requeueToFront(job);
          await new Promise(res => setTimeout(res, 15 * 60 * 1000));
          continue;
        } else if (isRateLimit) {
          this.logger.warn(`⚠️ [Gemini Consumer] Hit 429 Rate Limit (RPM/Pacing) per "${job.title}". Pausa di raffreddamento (20s) e requeue in Denque...`);
          this.queueService.requeueToFront(job);
          await new Promise(res => setTimeout(res, 20000));
          continue;
        } else {
          this.logger.error(`❌ [Gemini Consumer] Errore irrecuperabile per "${job.title}": ${errMsg}. Registrazione come UNANALYZABLE.`);
          await this.saveUnanalyzableEvaluation(job.id, job.title, err);
          this.queueService.markCompleted(job.id);
        }
      }


      // Pacing di sicurezza: max 15 req/min (almeno 4000ms tra ogni richiesta: 60000ms / 15 = 4000ms)
      const elapsedTime = Date.now() - startTime;
      const minInterval = 4000;
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

    if (!jobOffer) {
      throw new Error(`Offerta di lavoro con ID ${jobOfferId} non trovata.`);
    }

    const prompt = this.buildPrompt(jobOffer);
    const result = await this.geminiProvider.evaluate(prompt);
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
    const evalModel = result.evaluatorModel || 'GEMINI_3_1_FLASH_LITE';

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

    this.logger.log(`✅ [Gemini Consumer] Valutazione salvata per "${title}": Model=${evaluation.evaluatorModel}, Status=${evaluation.status}, Priority=${evaluation.priority}`);
  }

  private async saveUnanalyzableEvaluation(jobOfferId: string, title: string, err: any) {
    const unanalyzableResult: LlmEvaluationResult = {
      status: 'UNANALYZABLE',
      evaluatorModel: 'UNKNOWN',
      desireMatchScore: 0,
      competenceScore: 0,
      overallScore: 0,
      priority: 'DISQUALIFIED',
      desireMatchReasoning: 'Non analizzabile: i provider AI non sono riusciti ad elaborare l annuncio.',
      competenceMatch: 'Non analizzabile.',
      detailedReasoning: `### ⚠️ Annuncio Non Analizzabile\n\nImpossibile completare l'analisi automatica dell'annuncio con i provider AI attivi.\n\n**Dettaglio Errore:**\n\`\`\`\n${err?.message || err}\n\`\`\``,
      pros: [],
      cons: ['Errore irrecuperabile durante l analisi AI dei provider.'],
    };

    await this.saveEvaluationToDb(jobOfferId, title, unanalyzableResult);
  }

}
