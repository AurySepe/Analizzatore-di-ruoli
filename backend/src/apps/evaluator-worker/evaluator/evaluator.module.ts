import { Module } from '@nestjs/common';
import { EvaluatorService } from './evaluator.service';
import { GeminiProviderService } from './providers/gemini-provider.service';
import { GemmaCloudProviderService } from './providers/gemma-cloud-provider.service';
import { EvaluatorQueueService } from './queue/evaluator-queue.service';
import { EvaluatorProducerService } from './queue/evaluator-producer.service';
import { GeminiConsumerService } from './queue/gemini-consumer.service';
import { GemmaCloudConsumerService } from './queue/gemma-cloud-consumer.service';

@Module({
  providers: [
    EvaluatorService,
    GeminiProviderService,
    GemmaCloudProviderService,
    EvaluatorQueueService,
    EvaluatorProducerService,
    GeminiConsumerService,
    GemmaCloudConsumerService,
  ],
  exports: [EvaluatorService],
})
export class EvaluatorModule {}





