import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../prisma/prisma.service';
import {
  INGESTION_QUEUE_NAME,
  JOB_OFFER_SCRAPED_EVENT,
  ScrapedJobOfferEvent,
  addSafeQueueJob,
} from '@analizzatore/contracts';

@Injectable()
export class JobicyOutboxRelayService {
  private readonly logger = new Logger(JobicyOutboxRelayService.name);

  constructor(
    private readonly prisma: PrismaService,
    @InjectQueue(INGESTION_QUEUE_NAME) private readonly ingestionQueue: Queue,
  ) {}

  async processPendingEvents(): Promise<number> {
    const pendingJobs = await this.prisma.jobicyScrapedJob.findMany({
      where: { outboxStatus: 'PENDING' },
      take: 50,
      orderBy: { createdAt: 'asc' },
    });

    if (pendingJobs.length === 0) {
      return 0;
    }

    this.logger.log(`📬 [Jobicy Relay] Invio di ${pendingJobs.length} offerte a BullMQ...`);
    let publishedCount = 0;

    for (const job of pendingJobs) {
      try {
        const payload: ScrapedJobOfferEvent = {
          externalId: job.externalId,
          source: 'JOBICY',
          url: job.url,
          title: job.title,
          companyName: job.companyName,
          location: job.location,
          remoteType: 'FULL_REMOTE',
          salaryMin: job.salaryMin,
          salaryMax: job.salaryMax,
          currency: job.currency,
          contractType: job.contractType,
          rawDescription: job.rawDescription,
          descriptionMarkdown: job.descriptionMarkdown,
          datePosted: job.datePosted ? job.datePosted.toISOString() : null,
          tags: job.tags ? JSON.parse(job.tags) : [],
        };

        await addSafeQueueJob(this.ingestionQueue, JOB_OFFER_SCRAPED_EVENT, payload, {
          jobId: `jobicy-${job.externalId}`,
          attempts: 3,
          backoff: { type: 'exponential', delay: 1000 },
          removeOnComplete: true,
        });

        await this.prisma.jobicyScrapedJob.update({
          where: { id: job.id },
          data: {
            outboxStatus: 'PUBLISHED',
            publishedAt: new Date(),
            lastError: null,
          },
        });

        publishedCount++;
      } catch (err: any) {
        this.logger.error(`❌ Errore pubblicazione offerta Jobicy ${job.externalId} su BullMQ: ${err.message}`);
        await this.prisma.jobicyScrapedJob.update({
          where: { id: job.id },
          data: {
            retryCount: { increment: 1 },
            lastError: err.message,
            outboxStatus: job.retryCount >= 5 ? 'FAILED' : 'PENDING',
          },
        });
      }
    }

    this.logger.log(`✅ [Jobicy Relay] ${publishedCount} eventi pubblicati con successo.`);
    return publishedCount;
  }
}
