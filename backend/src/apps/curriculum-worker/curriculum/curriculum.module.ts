import { Module } from '@nestjs/common';
import { CurriculumService } from './curriculum.service';
import { CurriculumQueueService } from './queue/curriculum-queue.service';
import { CurriculumProducerService } from './queue/curriculum-producer.service';
import { CurriculumConsumerService } from './queue/curriculum-consumer.service';
import { PdfGeneratorService } from './pdf/pdf-generator.service';
import { CurriculumLlmService } from './services/curriculum-llm.service';

@Module({
  providers: [
    CurriculumService,
    CurriculumQueueService,
    CurriculumProducerService,
    CurriculumConsumerService,
    PdfGeneratorService,
    CurriculumLlmService,
  ],
  exports: [CurriculumService, PdfGeneratorService, CurriculumLlmService],
})
export class CurriculumModule {}
