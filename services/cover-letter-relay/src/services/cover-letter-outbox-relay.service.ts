import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../commons/prisma/prisma.service';
import {
  COVER_LETTER_QUEUE_NAME,
  GENERATE_COVER_LETTER_EVENT,
  GenerateCoverLetterTaskEvent,
  addSafeQueueJob,
} from '@analizzatore/contracts';
import { OutboxStatus } from '@analizzatore/database';

@Injectable()
export class CoverLetterOutboxRelayService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(CoverLetterOutboxRelayService.name);
  private isRunning = false;
  private intervalRef: NodeJS.Timeout | null = null;

  constructor(
    private readonly prisma: PrismaService,
    @InjectQueue(COVER_LETTER_QUEUE_NAME)
    private readonly coverLetterQueue: Queue<GenerateCoverLetterTaskEvent>,
  ) {}

  onModuleInit() {
    this.startRelay();
  }

  onModuleDestroy() {
    this.stopRelay();
  }

  startRelay(intervalMs = 3000) {
    if (this.isRunning) return;
    this.isRunning = true;
    this.logger.log(`🚀 [CoverLetterOutboxRelay] Avviato monitoraggio eventi PENDING (intervallo: ${intervalMs}ms)...`);

    this.intervalRef = setInterval(() => {
      this.processPendingEvents().catch((err) => {
        this.logger.error('❌ Errore durante il ciclo Cover Letter Outbox Relay:', err);
      });
    }, intervalMs);
  }

  stopRelay() {
    this.isRunning = false;
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
      this.intervalRef = null;
    }
    this.logger.log('🛑 [CoverLetterOutboxRelay] Relay arrestato.');
  }

  async processPendingEvents() {
    const pendingRecords = await this.prisma.jobCoverLetterOutbox.findMany({
      where: { status: OutboxStatus.PENDING },
      orderBy: { createdAt: 'asc' },
      take: 25,
    });

    if (pendingRecords.length === 0) return;

    this.logger.log(`📬 [CoverLetterOutboxRelay] Trovati ${pendingRecords.length} eventi COVER_LETTER PENDING da pubblicare...`);

    for (const record of pendingRecords) {
      try {
        await addSafeQueueJob(
          this.coverLetterQueue,
          GENERATE_COVER_LETTER_EVENT,
          {
            jobOfferId: record.jobOfferId,
            forceRegenerate: record.forceRegenerate,
          },
          {
            jobId: `cl-gen-${record.jobOfferId}-${record.updatedAt.getTime()}`,
            attempts: 5,
            backoff: { type: 'exponential', delay: 5000 },
            removeOnComplete: true,
          },
        );

        await this.prisma.jobCoverLetterOutbox.update({
          where: { id: record.id },
          data: {
            status: OutboxStatus.PUBLISHED,
            lastError: null,
          },
        });

        this.logger.log(`✅ [CoverLetterOutboxRelay] Evento CoverLetter [JobOffer: ${record.jobOfferId}] pubblicato su "${COVER_LETTER_QUEUE_NAME}".`);
      } catch (err: any) {
        this.logger.error(`❌ Errore pubblicazione evento CoverLetter [ID: ${record.id}]:`, err.message);
        await this.prisma.jobCoverLetterOutbox.update({
          where: { id: record.id },
          data: {
            attempts: { increment: 1 },
            lastError: err.message,
            status: record.attempts >= 4 ? OutboxStatus.FAILED : OutboxStatus.PENDING,
          },
        });
      }
    }
  }
}
