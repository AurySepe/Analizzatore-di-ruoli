import { Module } from '@nestjs/common';
import { GeminiProviderService } from './providers/gemini-provider.service';
import { Gemini35ProviderService } from './providers/gemini35-provider.service';
import { JobEvaluationProcessor } from './processors/job-evaluation.processor';

@Module({
  providers: [
    GeminiProviderService,
    Gemini35ProviderService,
    JobEvaluationProcessor,
  ],
  exports: [JobEvaluationProcessor],
})
export class EvaluatorModule {}





