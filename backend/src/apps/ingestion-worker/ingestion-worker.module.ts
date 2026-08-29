import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bullmq';
import { PrismaModule } from '../../commons/prisma/prisma.module';
import { JobOfferIngestionProcessor } from './processors/job-offer-ingestion.processor';
import { INGESTION_QUEUE_NAME } from '../../commons/contracts/scraped-job.contract';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
      },
    }),
    BullModule.registerQueue({
      name: INGESTION_QUEUE_NAME,
    }),
  ],
  providers: [JobOfferIngestionProcessor],
})
export class IngestionWorkerModule {}
