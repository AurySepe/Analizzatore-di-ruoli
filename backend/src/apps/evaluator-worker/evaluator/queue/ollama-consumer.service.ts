import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../../../commons/prisma/prisma.service';
import { aiConfig } from '../../../../config/ai.config';
import { userProfileConfig } from '../../../../config/user-profile.config';
import { LlmEvaluationResult } from '../providers/ai-provider.interface';
import { OllamaProviderService } from '../providers/ollama-provider.service';
import { EvaluatorQueueService } from './evaluator-queue.service';

@Injectable()
export class OllamaConsumerService {
  private readonly logger = new Logger(OllamaConsumerService.name);
  private isRunning = false;

  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: EvaluatorQueueService,
    private readonly ollamaProvider: OllamaProviderService,
  ) { }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.consumerLoop().catch(err => {
      this.logger.error('❌ Errore critico nel Consumer Ollama:', err);
    });
  }

  private async consumerLoop() {
    this.logger.log('🤖 Ollama Consumer avviato (elaborazione locale sequenziale da Denque)...');

    while (true) {
      if (!this.ollamaProvider.isAvailable() || aiConfig.strategy === 'gemini_only') {
        await new Promise(res => setTimeout(res, 5000));
        continue;
      }

      // Pesca l'annuncio dalla coda condivisa Denque
      const job = this.queueService.dequeue();
      if (!job) {
        await new Promise(res => setTimeout(res, 1000));
        continue;
      }

      try {
        this.logger.log(`🤖 [Ollama Consumer] Pescato annuncio "${job.title}" da Denque (Rimanenti in coda: ${this.queueService.size})`);
        await this.evaluateJobOffer(job.id);
        this.queueService.markCompleted(job.id);
      } catch (err: any) {
        this.logger.error(`❌ [Ollama Consumer] Errore durante l elaborazione di "${job.title}": ${err?.message || err}. Registrazione come UNANALYZABLE.`);
        await this.saveUnanalyzableEvaluation(job.id, job.title, err);
        this.queueService.markCompleted(job.id);
      }

      // Pausa di cortesia per l'hardware locale
      await new Promise(res => setTimeout(res, 500));
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
    const result = await this.ollamaProvider.evaluate(prompt);
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
    const evalModel = result.evaluatorModel || 'GEMMA_4_12B';

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

    this.logger.log(`✅ [Ollama Consumer] Valutazione salvata per "${title}": Model=${evaluation.evaluatorModel}, Status=${evaluation.status}, Priority=${evaluation.priority}`);
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
