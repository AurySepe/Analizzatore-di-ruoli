import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { ArbeitnowPrismaService } from '../prisma/arbeitnow-prisma.service';
import {
  INGESTION_QUEUE_NAME,
  JOB_OFFER_SCRAPED_EVENT,
  ScrapedJobOfferEvent,
} from '../../../commons/contracts/scraped-job.contract';

@Injectable()
export class ArbeitnowOutboxRelayService {
  private readonly logger = new Logger(ArbeitnowOutboxRelayService.name);

  constructor(
    private readonly prisma: ArbeitnowPrismaService,
    @InjectQueue(INGESTION_QUEUE_NAME) private readonly ingestionQueue: Queue,
  ) {}

  async processPendingOutbox(batchSize = 50): Promise<number> {
    const pendingJobs = await this.prisma.arbeitnowScrapedJob.findMany({
      where: { outboxStatus: 'PENDING' },
      take: batchSize,
      orderBy: { createdAt: 'asc' },
    });

    if (pendingJobs.length === 0) {
      return 0;
    }

    this.logger.log(`📤 [OutboxRelay] Trovati ${pendingJobs.length} annunci PENDING da spedire a BullMQ...`);
    let publishedCount = 0;

    for (const job of pendingJobs) {
      try {
        const payload: ScrapedJobOfferEvent = {
          externalId: job.externalId,
          source: 'ARBEITNOW',
          url: job.url,
          title: job.title,
          companyName: job.companyName,
          location: job.location,
          remoteType: job.remoteType,
          salaryMin: job.salaryMin,
          salaryMax: job.salaryMax,
          currency: job.currency,
          contractType: job.contractType,
          rawDescription: job.rawDescription,
          descriptionMarkdown: job.descriptionMarkdown,
          datePosted: job.datePosted ? job.datePosted.toISOString() : null,
          tags: job.tags ? JSON.parse(job.tags) : [],
        };

        // Aggiunge il job a BullMQ con jobId univoco per deduplicazione idempotente
        await this.ingestionQueue.add(JOB_OFFER_SCRAPED_EVENT, payload, {
          jobId: `arbeitnow-${job.externalId}`,
          attempts: 3,
          backoff: { type: 'exponential', delay: 2000 },
          removeOnComplete: true,
        });

        await this.prisma.arbeitnowScrapedJob.update({
          where: { id: job.id },
          data: {
            outboxStatus: 'PUBLISHED',
            publishedAt: new Date(),
            lastError: null,
          },
        });

        publishedCount++;
      } catch (err: any) {
        this.logger.error(`❌ Errore pubblicazione outbox per job ${job.id} (${job.title}):`, err.message);
        await this.prisma.arbeitnowScrapedJob.update({
          where: { id: job.id },
          data: {
            retryCount: { increment: 1 },
            lastError: err.message || 'Unknown queue error',
            outboxStatus: job.retryCount >= 5 ? 'FAILED' : 'PENDING',
          },
        });
      }
    }

    this.logger.log(`✅ [OutboxRelay] Spediti con successo ${publishedCount}/${pendingJobs.length} annunci a BullMQ.`);
    return publishedCount;
  }
}
