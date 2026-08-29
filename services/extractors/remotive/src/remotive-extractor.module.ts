import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bullmq';
import { PrismaModule } from './prisma/prisma.module';
import { RemotiveFetcherService } from './services/remotive-fetcher.service';
import { RemotiveOutboxRelayService } from './services/remotive-outbox-relay.service';
import { RemotiveSchedulerService } from './services/remotive-scheduler.service';
import { INGESTION_QUEUE_NAME } from '@analizzatore/contracts';

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
    RemotiveFetcherService,
    RemotiveOutboxRelayService,
    RemotiveSchedulerService,
  ],
})
export class RemotiveExtractorModule {}
