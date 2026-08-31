import { Logger } from '@nestjs/common';
import { GoogleGenAI, Type } from '@google/genai';
import { LlmEvaluationResult, EvaluatorModelType } from './ai-provider.interface';

export function isGoogleQuotaError(err: any): boolean {
  if (!err) return false;
  const msg = (err.message || '').toUpperCase();
  const status = err.status || err.statusCode;
  return (
    status === 429 ||
    status === 'RESOURCE_EXHAUSTED' ||
    msg.includes('RESOURCE_EXHAUSTED') ||
    msg.includes('QUOTA') ||
    msg.includes('RATE_LIMIT') ||
    msg.includes('DAILY LIMIT') ||
    msg.includes('TOO MANY REQUESTS') ||
    msg.includes('429')
  );
}

export abstract class BaseGoogleGenAiProvider {
  protected abstract readonly logger: Logger;
  public abstract readonly name: string;
  public abstract readonly modelEnum: EvaluatorModelType;
  protected abstract readonly modelName: string;
  protected abstract readonly apiKey: string;

  protected aiClient: GoogleGenAI | null = null;

  protected readonly useStructuredSchema: boolean = true;
  protected readonly timeoutMs: number = 35000;

  protected initClient() {
    if (this.apiKey) {
      this.aiClient = new GoogleGenAI({ apiKey: this.apiKey });
    }
  }

  isAvailable(): boolean {
    return Boolean(this.apiKey && this.aiClient);
  }

  async evaluate(prompt: string): Promise<LlmEvaluationResult> {
    if (!this.aiClient || !this.apiKey) {
      throw new Error(`API Key per ${this.name} non configurata.`);
    }

    const startMs = Date.now();
    this.logger.log(`⏳ [${this.name}] Invio richiesta a Google GenAI Cloud (${this.modelName})...`);

    const config: any = {
      systemInstruction:
        'Sei un reclutatore AI estremamente severo e selettivo per sviluppatori di alto livello. Rispondi ESCLUSIVAMENTE in formato JSON valido.',
      temperature: 0.1,
    };

    if (this.useStructuredSchema) {
      config.responseMimeType = 'application/json';
      config.responseSchema = {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING, description: 'Sintesi/Riassunto dell annuncio di lavoro (ruolo, responsabilita chiave e requisiti principali in 2-4 frasi)' },
          desireMatchScore: { type: Type.INTEGER, description: 'Punteggio da 0 a 100 per la corrispondenza ai desiderata dell utente' },
          competenceScore: { type: Type.INTEGER, description: 'Punteggio da 0 a 100 per le competenze tecniche' },
          overallScore: { type: Type.INTEGER, description: 'Punteggio complessivo finale (0-100)' },
          priority: { type: Type.STRING, enum: ['HIGH', 'MEDIUM', 'LOW', 'DISQUALIFIED'] },
          desireMatchReasoning: { type: Type.STRING, description: 'Motivazione sintetica relativa ai desiderata' },
          competenceMatch: { type: Type.STRING, description: 'Motivazione sintetica relativa alle competenze' },
          detailedReasoning: { type: Type.STRING, description: 'Analisi dettagliata in markdown (max 80 parole)' },
          pros: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: 'Elenco dei punti di forza',
          },
          cons: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: 'Elenco delle criticita',
          },
        },
        required: [
          'summary',
          'desireMatchScore',
          'competenceScore',
          'overallScore',
          'priority',
          'desireMatchReasoning',
          'competenceMatch',
          'detailedReasoning',
          'pros',
          'cons',
        ],
      };
    }

    // Promisify call with timeout
    const apiCallPromise = this.aiClient.models.generateContent({
      model: this.modelName,
      contents: prompt,
      config,
    });

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => {
        reject(new Error(`Timeout di ${this.timeoutMs / 1000}s superato durante la chiamata a ${this.name}`));
      }, this.timeoutMs);
    });

    const response = await Promise.race([apiCallPromise, timeoutPromise]);

    const elapsedSeconds = ((Date.now() - startMs) / 1000).toFixed(2);
    this.logger.log(`⚡ [${this.name}] Risposta ricevuta in ${elapsedSeconds}s!`);

    const textOutput = response.text || '';
    if (!textOutput || textOutput.trim().length === 0) {
      throw new Error(`Google GenAI API (${this.modelName}) ha restituito una risposta vuota.`);
    }

    return this.parseOutput(textOutput);
  }


  protected parseOutput(text: string): LlmEvaluationResult {
    try {
      // 1. Rimuove eventuali blocchi markdown ```json ... ```
      let cleanedText = text.trim();
      cleanedText = cleanedText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');

      // 2. Estrae solo la prima struttura JSON racchiusa tra { e }
      const firstBrace = cleanedText.indexOf('{');
      const lastBrace = cleanedText.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        cleanedText = cleanedText.slice(firstBrace, lastBrace + 1);
      }

      const parsed = JSON.parse(cleanedText);

      const desireMatchScore = typeof parsed.desireMatchScore === 'number' ? Math.min(100, Math.max(0, parsed.desireMatchScore)) : 50;

      const competenceScore = typeof parsed.competenceScore === 'number' ? Math.min(100, Math.max(0, parsed.competenceScore)) : 50;
      const overallScore = typeof parsed.overallScore === 'number'
        ? Math.min(100, Math.max(0, parsed.overallScore))
        : Math.round(desireMatchScore * 0.70 + competenceScore * 0.30);

      const priority = ['HIGH', 'MEDIUM', 'LOW', 'DISQUALIFIED'].includes(parsed.priority)
        ? parsed.priority
        : (desireMatchScore >= 80 ? 'HIGH' : desireMatchScore >= 50 ? 'MEDIUM' : desireMatchScore >= 25 ? 'LOW' : 'DISQUALIFIED');

      return {
        evaluatorModel: this.modelEnum,
        summary: parsed.summary || undefined,
        desireMatchScore,
        competenceScore,
        overallScore,
        priority,
        desireMatchReasoning: parsed.desireMatchReasoning || 'Analisi desiderata completata.',
        competenceMatch: parsed.competenceMatch || 'Valutazione competenza completata.',
        detailedReasoning: parsed.detailedReasoning || text,
        pros: Array.isArray(parsed.pros) ? parsed.pros : [],
        cons: Array.isArray(parsed.cons) ? parsed.cons : [],
      };

    } catch (e) {
      this.logger.error(`❌ Errore nel parsing del JSON da ${this.name}:`, (e as Error).message);
      this.logger.error(`📌 Output grezzo di ${this.name}:`, text);
      throw new Error(`Impossibile decodificare il JSON da ${this.name}: ${(e as Error).message}`);
    }
  }
}
