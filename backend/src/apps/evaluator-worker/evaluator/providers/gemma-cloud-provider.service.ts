import { Injectable, Logger } from '@nestjs/common';
import { aiConfig } from '../../../../config/ai.config';
import { AiEvaluatorProvider } from './ai-provider.interface';
import { BaseGoogleGenAiProvider } from './base-google-genai.provider';

@Injectable()
export class GemmaCloudProviderService extends BaseGoogleGenAiProvider implements AiEvaluatorProvider {
  protected readonly logger = new Logger(GemmaCloudProviderService.name);
  readonly name = `Gemma Cloud (${aiConfig.gemmaCloud.model})`;
  readonly modelEnum = 'GEMMA_4_31B' as const;
  protected readonly modelName = aiConfig.gemmaCloud.model;
  protected readonly apiKey = aiConfig.gemmaCloud.apiKey;
  protected override readonly useStructuredSchema = false;
  protected override readonly timeoutMs = 35000;

  constructor() {
    super();
    this.initClient();
  }
}
