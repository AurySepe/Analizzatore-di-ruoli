import { Injectable, Logger } from '@nestjs/common';
import { aiConfig } from '../../../../config/ai.config';
import { AiEvaluatorProvider } from './ai-provider.interface';
import { BaseGoogleGenAiProvider } from './base-google-genai.provider';

@Injectable()
export class Gemini35ProviderService extends BaseGoogleGenAiProvider implements AiEvaluatorProvider {
  protected readonly logger = new Logger(Gemini35ProviderService.name);
  readonly name = `Gemini 3.5 (${aiConfig.gemini35.model})`;
  readonly modelEnum = 'GEMINI_3_5_FLASH_LITE' as const;
  protected readonly modelName = aiConfig.gemini35.model;
  protected readonly apiKey = aiConfig.gemini35.apiKey;
  protected override readonly useStructuredSchema = true;
  protected override readonly timeoutMs = 30000;

  constructor() {
    super();
    this.initClient();
  }
}
