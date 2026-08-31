import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bullmq';
import { PrismaModule } from './commons/prisma/prisma.module';
import { CoverLetterOutboxRelayService } from './services/cover-letter-outbox-relay.service';
import { COVER_LETTER_QUEUE_NAME } from '@analizzatore/contracts';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
      },
    }),
    BullModule.registerQueue({
      name: COVER_LETTER_QUEUE_NAME,
      defaultJobOptions: {
        attempts: 3,
        backoff: { type: 'exponential', delay: 3000 },
        removeOnComplete: true,
        removeOnFail: false,
      },
    }),
    PrismaModule,
  ],
  providers: [CoverLetterOutboxRelayService],
})
export class CoverLetterRelayModule {}
