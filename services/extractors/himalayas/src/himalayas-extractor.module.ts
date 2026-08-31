import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bullmq';
import { PrismaModule } from './prisma/prisma.module';
import { HimalayasFetcherService } from './services/himalayas-fetcher.service';
import { HimalayasOutboxRelayService } from './services/himalayas-outbox-relay.service';
import { HimalayasSchedulerService } from './services/himalayas-scheduler.service';
import { INGESTION_QUEUE_NAME } from '@analizzatore/contracts';

import { HimalayasApiClient } from './client/himalayas-api.client';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
      },
    }),
    BullModule.registerQueue({
      name: INGESTION_QUEUE_NAME,
    }),
    PrismaModule,
  ],
  providers: [
    HimalayasApiClient,
    HimalayasFetcherService,
    HimalayasOutboxRelayService,
    HimalayasSchedulerService,
  ],
  exports: [HimalayasApiClient],
})
export class HimalayasExtractorModule {}
