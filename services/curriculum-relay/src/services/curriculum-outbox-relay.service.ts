import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../commons/prisma/prisma.service';
import {
  CURRICULUM_TAILORING_QUEUE_NAME,
  GENERATE_CURRICULUM_TAILORING_EVENT,
  GenerateCurriculumTailoringTaskEvent,
  PDF_RENDERING_QUEUE_NAME,
  GENERATE_PDF_EVENT,
  GeneratePdfTaskEvent,
  addSafeQueueJob,
} from '@analizzatore/contracts';
import { OutboxStatus } from '@analizzatore/database';

@Injectable()
export class CurriculumOutboxRelayService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(CurriculumOutboxRelayService.name);
  private isRunning = false;
  private intervalRef: NodeJS.Timeout | null = null;

  constructor(
    private readonly prisma: PrismaService,
    @InjectQueue(CURRICULUM_TAILORING_QUEUE_NAME)
    private readonly tailoringQueue: Queue<GenerateCurriculumTailoringTaskEvent>,
    @InjectQueue(PDF_RENDERING_QUEUE_NAME)
    private readonly pdfQueue: Queue<GeneratePdfTaskEvent>,
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
    this.logger.log(`🚀 [CurriculumOutboxRelay] Avviato monitoraggio eventi PENDING (intervallo: ${intervalMs}ms)...`);

    this.intervalRef = setInterval(() => {
      this.processPendingEvents().catch((err) => {
        this.logger.error('❌ Errore durante il ciclo Curriculum Outbox Relay:', err);
      });
    }, intervalMs);
  }

  stopRelay() {
    this.isRunning = false;
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
      this.intervalRef = null;
    }
    this.logger.log('🛑 [CurriculumOutboxRelay] Relay arrestato.');
  }

  async processPendingEvents() {
    await Promise.all([
      this.processPendingTailoringEvents(),
      this.processPendingPdfEvents(),
    ]);
  }

  private async processPendingTailoringEvents() {
    const pendingRecords = await this.prisma.jobCurriculumOutbox.findMany({
      where: { status: OutboxStatus.PENDING },
      orderBy: { createdAt: 'asc' },
      take: 25,
    });

    if (pendingRecords.length === 0) return;

    this.logger.log(`📬 [CurriculumOutboxRelay] Trovati ${pendingRecords.length} eventi TAILORING PENDING da pubblicare...`);

    for (const record of pendingRecords) {
      try {
        await addSafeQueueJob(
          this.tailoringQueue,
          GENERATE_CURRICULUM_TAILORING_EVENT,
          {
            jobOfferId: record.jobOfferId,
            forceRegenerate: record.forceRegenerate,
          },
          {
            jobId: `cv-tailor-${record.jobOfferId}-${record.updatedAt.getTime()}`,
            attempts: 5,
            backoff: { type: 'exponential', delay: 5000 },
            removeOnComplete: true,
          },
        );

        await this.prisma.jobCurriculumOutbox.update({
          where: { id: record.id },
          data: {
            status: OutboxStatus.PUBLISHED,
            lastError: null,
          },
        });

        this.logger.log(`✅ [CurriculumOutboxRelay] Evento Tailoring Outbox [ID: ${record.id}] pubblicato su "${CURRICULUM_TAILORING_QUEUE_NAME}".`);
      } catch (err: any) {
        this.logger.error(`❌ Errore pubblicazione Tailoring Outbox [ID: ${record.id}]:`, err.message);

        await this.prisma.jobCurriculumOutbox.update({
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

  private async processPendingPdfEvents() {
    const pendingRecords = await this.prisma.jobCurriculumPdfOutbox.findMany({
      where: { status: OutboxStatus.PENDING },
      orderBy: { createdAt: 'asc' },
      take: 25,
    });

    if (pendingRecords.length === 0) return;

    this.logger.log(`📬 [CurriculumOutboxRelay] Trovati ${pendingRecords.length} eventi PDF PENDING da pubblicare...`);

    for (const record of pendingRecords) {
      try {
        await addSafeQueueJob(
          this.pdfQueue,
          GENERATE_PDF_EVENT,
          {
            jobOfferId: record.jobOfferId,
            templateName: record.templateName || undefined,
            forceRegenerate: record.forceRegenerate,
          },
          {
            jobId: `cv-pdf-${record.jobOfferId}-${record.updatedAt.getTime()}`,
            attempts: 5,
            backoff: { type: 'exponential', delay: 5000 },
            removeOnComplete: true,
          },
        );

        await this.prisma.jobCurriculumPdfOutbox.update({
          where: { id: record.id },
          data: {
            status: OutboxStatus.PUBLISHED,
            lastError: null,
          },
        });

        this.logger.log(`✅ [CurriculumOutboxRelay] Evento PDF Outbox [ID: ${record.id}] pubblicato su "${PDF_RENDERING_QUEUE_NAME}".`);
      } catch (err: any) {
        this.logger.error(`❌ Errore pubblicazione PDF Outbox [ID: ${record.id}]:`, err.message);

        await this.prisma.jobCurriculumPdfOutbox.update({
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
