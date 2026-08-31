import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../commons/prisma/prisma.service';
import {
  EVALUATION_QUEUE_NAME,
  EVALUATE_JOB_EVENT,
  EvaluateJobOfferTaskEvent,
  addSafeQueueJob,
} from '@analizzatore/contracts';
import { OutboxStatus } from '@analizzatore/database';

@Injectable()
export class EvaluationOutboxRelayService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(EvaluationOutboxRelayService.name);
  private isRunning = false;
  private intervalRef: NodeJS.Timeout | null = null;

  constructor(
    private readonly prisma: PrismaService,
    @InjectQueue(EVALUATION_QUEUE_NAME)
    private readonly evaluationQueue: Queue<EvaluateJobOfferTaskEvent>,
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
    this.logger.log(`🚀 [EvaluationOutboxRelay] Avviato monitoraggio eventi PENDING (intervallo: ${intervalMs}ms)...`);

    this.intervalRef = setInterval(() => {
      this.processPendingEvents().catch((err) => {
        this.logger.error('❌ Errore durante il ciclo Evaluation Outbox Relay:', err);
      });
    }, intervalMs);
  }

  stopRelay() {
    this.isRunning = false;
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
      this.intervalRef = null;
    }
    this.logger.log('🛑 [EvaluationOutboxRelay] Relay arrestato.');
  }

  async processPendingEvents() {
    const pendingRecords = await this.prisma.jobEvaluationOutbox.findMany({
      where: { status: OutboxStatus.PENDING },
      orderBy: { createdAt: 'asc' },
      take: 25,
    });

    if (pendingRecords.length === 0) return;

    this.logger.log(`📬 [EvaluationOutboxRelay] Trovati ${pendingRecords.length} eventi PENDING da pubblicare su BullMQ...`);

    for (const record of pendingRecords) {
      try {
        await addSafeQueueJob(
          this.evaluationQueue,
          EVALUATE_JOB_EVENT,
          { jobOfferId: record.jobOfferId },
          {
            jobId: `eval-${record.jobOfferId}-${record.updatedAt.getTime()}`,
            attempts: 5,
            backoff: { type: 'exponential', delay: 5000 },
            removeOnComplete: true,
          },
        );

        await this.prisma.jobEvaluationOutbox.update({
          where: { id: record.id },
          data: {
            status: OutboxStatus.PUBLISHED,
            lastError: null,
          },
        });

        this.logger.log(`✅ [EvaluationOutboxRelay] Evento Outbox [ID: ${record.id}] pubblicato su "${EVALUATION_QUEUE_NAME}".`);
      } catch (err: any) {
        this.logger.error(`❌ Errore pubblicazione Evaluation Outbox [ID: ${record.id}]:`, err.message);

        await this.prisma.jobEvaluationOutbox.update({
          where: { id: record.id },
          data: {
            attempts: { increment: 1 },
            lastError: err.message || 'Errore sconosciuto',
            status: record.attempts + 1 >= 5 ? OutboxStatus.FAILED : OutboxStatus.PENDING,
          },
        });
      }
    }
  }
}
