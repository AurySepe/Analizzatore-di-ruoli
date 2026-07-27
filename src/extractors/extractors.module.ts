import { Module } from '@nestjs/common';
import { ExtractorsService } from './extractors.service';
import { JobOffersModule } from '../job-offers/job-offers.module';

@Module({
  imports: [JobOffersModule],
  providers: [ExtractorsService],
  exports: [ExtractorsService],
})
export class ExtractorsModule {}
