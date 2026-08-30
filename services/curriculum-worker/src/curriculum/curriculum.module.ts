import { Module } from '@nestjs/common';
import { CurriculumLlmService } from './services/curriculum-llm.service';
import { CurriculumProcessor } from './processors/curriculum.processor';

@Module({
  providers: [
    CurriculumLlmService,
    CurriculumProcessor,
  ],
  exports: [CurriculumLlmService, CurriculumProcessor],
})
export class CurriculumModule {}
