import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { EVALUATION_QUEUE_NAME } from '@analizzatore/contracts';
import { GeminiProviderService } from './providers/gemini-provider.service';
import { Gemini35ProviderService } from './providers/gemini35-provider.service';
import { JobEvaluationProcessor } from './processors/job-evaluation.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: EVALUATION_QUEUE_NAME,
    }),
  ],
  providers: [
    GeminiProviderService,
    Gemini35ProviderService,
    JobEvaluationProcessor,
  ],
  exports: [JobEvaluationProcessor],
})
export class EvaluatorModule {}





