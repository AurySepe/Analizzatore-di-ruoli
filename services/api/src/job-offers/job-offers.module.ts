import { Module } from '@nestjs/common';
import { JobOffersController } from './job-offers.controller';
import { JobOffersService } from './job-offers.service';
import { JobOffersAnalyticsService } from './job-offers-analytics.service';
import { PrismaModule } from '../commons/prisma/prisma.module';
import { S3StorageModule } from '../commons/storage/s3-storage.module';

@Module({
  imports: [
    PrismaModule,
    S3StorageModule,
  ],
  controllers: [JobOffersController],
  providers: [JobOffersService, JobOffersAnalyticsService],
  exports: [JobOffersService],
})
export class JobOffersModule {}
