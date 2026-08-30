import { Module } from '@nestjs/common';
import { PdfGeneratorService } from './pdf-generator.service';
import { PdfProcessor } from './processors/pdf.processor';

@Module({
  providers: [PdfGeneratorService, PdfProcessor],
  exports: [PdfGeneratorService, PdfProcessor],
})
export class PdfModule {}
