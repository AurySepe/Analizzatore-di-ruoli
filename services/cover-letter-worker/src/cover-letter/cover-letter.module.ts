import { Module } from '@nestjs/common';
import { CoverLetterGeneratorService } from './generator/cover-letter-generator.service';
import { CoverLetterPdfService } from './pdf/cover-letter-pdf.service';
import { CoverLetterProcessor } from './processors/cover-letter.processor';

@Module({
  providers: [
    CoverLetterGeneratorService,
    CoverLetterPdfService,
    CoverLetterProcessor,
  ],
  exports: [
    CoverLetterGeneratorService,
    CoverLetterPdfService,
  ],
})
export class CoverLetterModule {}
