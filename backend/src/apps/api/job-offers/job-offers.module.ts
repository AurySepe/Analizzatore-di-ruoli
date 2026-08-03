import { Module } from '@nestjs/common';
import { JobOffersController } from './job-offers.controller';
import { JobOffersService } from './job-offers.service';
import { JobOffersAnalyticsService } from './job-offers-analytics.service';
import { CurriculumModule } from '../../../apps/curriculum-worker/curriculum/curriculum.module';
import { PrismaModule } from '../../../commons/prisma/prisma.module';

@Module({
  imports: [PrismaModule, CurriculumModule],
  controllers: [JobOffersController],
  providers: [JobOffersService, JobOffersAnalyticsService],
  exports: [JobOffersService, JobOffersAnalyticsService],
})
export class JobOffersModule {}
