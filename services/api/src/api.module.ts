import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bullmq';
import { PrismaModule } from './commons/prisma/prisma.module';
import { S3StorageModule } from './commons/storage/s3-storage.module';
import { JobOffersModule } from './job-offers/job-offers.module';
import { EvaluationsModule } from './evaluations/evaluations.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
      },
    }),
    PrismaModule,
    S3StorageModule,
    JobOffersModule,
    EvaluationsModule,
    CompaniesModule,
  ],
})
export class ApiModule {}
