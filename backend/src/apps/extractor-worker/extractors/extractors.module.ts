import { Module } from '@nestjs/common';
import { ExtractorsService } from './extractors.service';
import { ExtractorRegistry } from './extractor-registry';

@Module({
  providers: [ExtractorsService, ExtractorRegistry],
  exports: [ExtractorsService, ExtractorRegistry],
})
export class ExtractorsModule {}
