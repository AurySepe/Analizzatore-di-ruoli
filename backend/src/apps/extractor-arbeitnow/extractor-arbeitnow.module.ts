import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bullmq';
import { ArbeitnowPrismaService } from './prisma/arbeitnow-prisma.service';
import { ArbeitnowFetcherService } from './services/arbeitnow-fetcher.service';
import { ArbeitnowOutboxRelayService } from './services/arbeitnow-outbox-relay.service';
import { ArbeitnowSchedulerService } from './services/arbeitnow-scheduler.service';
import { INGESTION_QUEUE_NAME } from '../../commons/contracts/scraped-job.contract';

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
  ],
  providers: [
    ArbeitnowPrismaService,
    ArbeitnowFetcherService,
    ArbeitnowOutboxRelayService,
    ArbeitnowSchedulerService,
  ],
})
export class ExtractorArbeitnowModule {}
