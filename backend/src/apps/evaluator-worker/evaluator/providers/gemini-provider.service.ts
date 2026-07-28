import { Injectable, Logger } from '@nestjs/common';
import { aiConfig } from '../../../../config/ai.config';
import { AiEvaluatorProvider } from './ai-provider.interface';
import { BaseGoogleGenAiProvider } from './base-google-genai.provider';

@Injectable()
export class GeminiProviderService extends BaseGoogleGenAiProvider implements AiEvaluatorProvider {
  protected readonly logger = new Logger(GeminiProviderService.name);
  readonly name = `Gemini (${aiConfig.gemini.model})`;
  readonly modelEnum = 'GEMINI_3_1_FLASH_LITE' as const;
  protected readonly modelName = aiConfig.gemini.model;
  protected readonly apiKey = aiConfig.gemini.apiKey;

  constructor() {
    super();
    this.initClient();
  }
}
