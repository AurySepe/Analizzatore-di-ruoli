import { Injectable, Logger } from '@nestjs/common';
import { Ollama } from 'ollama';
import { aiConfig } from '../../../../config/ai.config';
import { AiEvaluatorProvider, LlmEvaluationResult } from './ai-provider.interface';

@Injectable()
export class OllamaProviderService implements AiEvaluatorProvider {
  readonly name = `Ollama (${aiConfig.ollama.model})`;
  readonly modelEnum = 'GEMMA_4_12B' as const;
  private readonly logger = new Logger(OllamaProviderService.name);

  private readonly ollama = new Ollama({ host: aiConfig.ollama.baseUrl });

  isAvailable(): boolean {
    return Boolean(aiConfig.ollama.baseUrl && aiConfig.ollama.model);
  }

  async evaluate(prompt: string): Promise<LlmEvaluationResult> {
    return this.callLocalLlmWithRetry(prompt, 5);
  }

  private async callLocalLlmWithRetry(prompt: string, maxAttempts = 5): Promise<LlmEvaluationResult> {
    let currentNumCtx = 8192;
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        this.logger.log(`🤖 Chiamata Ollama (${aiConfig.ollama.model}) - Tentativo ${attempt}/${maxAttempts} (num_ctx: ${currentNumCtx})...`);

        const response = await this.ollama.chat({
          model: aiConfig.ollama.model,
          messages: [
            {
              role: 'system',
              content: 'Sei un reclutatore AI estremamente severo e selettivo. Rispondi ESCLUSIVAMENTE in formato JSON valido.',
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
          format: 'json',
          options: {
            temperature: 0.1,
            num_ctx: currentNumCtx,
            num_predict: 4096,
          },
        });

        const textOutput = response.message?.content || '';
        if (!textOutput || textOutput.trim().length === 0) {
          throw new Error('L\'AI locale ha restituito una risposta vuota.');
        }

        return this.parseLlmJsonOutput(textOutput);
      } catch (err: any) {
        lastError = err;
        if (err.status_code === 404 || err.message?.includes('404') || err.message?.includes('not found')) {
          throw new Error(`Modello "${aiConfig.ollama.model}" non trovato su Ollama (HTTP 404). Esegui nel terminale: 'ollama run ${aiConfig.ollama.model}' per scaricarlo.`);
        }

        const nextNumCtx = currentNumCtx * 2;
        this.logger.warn(`⚠️ Tentativo ${attempt}/${maxAttempts} per "${aiConfig.ollama.model}" fallito (${err.message || err}). Raddoppio finestra di contesto da ${currentNumCtx} a ${nextNumCtx}...`);
        currentNumCtx = nextNumCtx;

        await new Promise(res => setTimeout(res, 1000));
      }
    }

    throw new Error(`Impossibile ottenere una risposta valida da Ollama dopo ${maxAttempts} tentativi. Ultimo errore: ${lastError?.message || lastError}`);
  }

  private parseLlmJsonOutput(text: string): LlmEvaluationResult {
    try {
      let cleanText = text.trim();
      const codeBlockMatch = cleanText.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
      if (codeBlockMatch) {
        cleanText = codeBlockMatch[1].trim();
      }

      if (!cleanText.startsWith('{')) {
        const firstBrace = cleanText.indexOf('{');
        const lastBrace = cleanText.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
          cleanText = cleanText.substring(firstBrace, lastBrace + 1);
        }
      }

      const parsed = JSON.parse(cleanText);

      const desireMatchScore = typeof parsed.desireMatchScore === 'number' ? Math.min(100, Math.max(0, parsed.desireMatchScore)) : 50;
      const competenceScore = typeof parsed.competenceScore === 'number' ? Math.min(100, Math.max(0, parsed.competenceScore)) : 50;
      const overallScore = typeof parsed.overallScore === 'number'
        ? Math.min(100, Math.max(0, parsed.overallScore))
        : Math.round(desireMatchScore * 0.70 + competenceScore * 0.30);

      const priority = ['HIGH', 'MEDIUM', 'LOW', 'DISQUALIFIED'].includes(parsed.priority)
        ? parsed.priority
        : (desireMatchScore >= 80 ? 'HIGH' : desireMatchScore >= 50 ? 'MEDIUM' : desireMatchScore >= 25 ? 'LOW' : 'DISQUALIFIED');

      return {
        evaluatorModel: 'GEMMA_4_12B',
        desireMatchScore,
        competenceScore,
        overallScore,
        priority,
        desireMatchReasoning: parsed.desireMatchReasoning || parsed.detailedReasoning || 'Analisi desiderata completata.',
        competenceMatch: parsed.competenceMatch || 'Valutazione competenza completata.',
        detailedReasoning: parsed.detailedReasoning || text,
        pros: Array.isArray(parsed.pros) ? parsed.pros : [],
        cons: Array.isArray(parsed.cons) ? parsed.cons : [],
      };

    } catch (e) {
      this.logger.error('❌ Errore nel parsing del JSON restituito da Ollama:', (e as Error).message);
      this.logger.error('📌 Output grezzo dell AI:', text);
      throw new Error(`Impossibile decodificare il JSON da Ollama: ${(e as Error).message}`);
    }
  }
}
