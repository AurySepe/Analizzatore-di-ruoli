import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bullmq';
import { PrismaModule } from './prisma/prisma.module';
import { JobicyFetcherService } from './services/jobicy-fetcher.service';
import { JobicyOutboxRelayService } from './services/jobicy-outbox-relay.service';
import { JobicySchedulerService } from './services/jobicy-scheduler.service';
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
    JobicyFetcherService,
    JobicyOutboxRelayService,
    JobicySchedulerService,
  ],
})
export class JobicyExtractorModule {}
