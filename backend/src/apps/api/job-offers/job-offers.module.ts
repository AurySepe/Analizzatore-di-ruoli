import { Module } from '@nestjs/common';
import { JobOffersController } from './job-offers.controller';
import { JobOffersService } from './job-offers.service';
import { JobOffersAnalyticsService } from './job-offers-analytics.service';
import { PdfGeneratorService } from '../../../apps/curriculum-worker/curriculum/pdf/pdf-generator.service';
import { PrismaModule } from '../../../commons/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [JobOffersController],
  providers: [JobOffersService, JobOffersAnalyticsService, PdfGeneratorService],
  exports: [JobOffersService, JobOffersAnalyticsService],
})
export class JobOffersModule {}
