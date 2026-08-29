import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { ArbeitnowFetcherService } from './arbeitnow-fetcher.service';
import { ArbeitnowOutboxRelayService } from './arbeitnow-outbox-relay.service';

@Injectable()
export class ArbeitnowSchedulerService implements OnModuleInit {
  private readonly logger = new Logger(ArbeitnowSchedulerService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly fetcher: ArbeitnowFetcherService,
    private readonly outboxRelay: ArbeitnowOutboxRelayService,
  ) {}

  async onModuleInit() {
    this.logger.log('🚀 Avvio del microservizio Arbeitnow Extractor (Isolated)...');
    await this.runExtractionCycle();
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleCronExtraction() {
    this.logger.log('⏰ Trigger pianificato estrazione Arbeitnow (@Cron EVERY_30_MINUTES)');
    await this.runExtractionCycle();
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async handleOutboxRelayCron() {
    await this.outboxRelay.processPendingOutbox();
  }

  async runExtractionCycle() {
    this.logger.log('🌐 Avvio ciclo di estrazione Arbeitnow...');

    let syncState = await this.prisma.arbeitnowSyncState.findUnique({
      where: { id: 'DEFAULT' },
    });

    if (!syncState) {
      syncState = await this.prisma.arbeitnowSyncState.create({
        data: { id: 'DEFAULT', status: 'IDLE' },
      });
    }

    if (syncState.status === 'RUNNING') {
      this.logger.warn('⚠️ Ciclo di estrazione precedente ancora in RUNNING. Salto turno.');
      return;
    }

    await this.prisma.arbeitnowSyncState.update({
      where: { id: 'DEFAULT' },
      data: { status: 'RUNNING', lastRunAt: new Date() },
    });

    try {
      const { jobs, lastPage, hasErrors } = await this.fetcher.fetchJobs(
        syncState.lastSyncTimestamp || undefined,
      );

      this.logger.log(`📥 Ricevute ${jobs.length} offerte valide da Arbeitnow. Salvataggio transazionale...`);

      let latestDateInBatch = syncState.lastSyncTimestamp;

      for (const job of jobs) {
        if (!latestDateInBatch || (job.datePosted && job.datePosted > latestDateInBatch)) {
          latestDateInBatch = job.datePosted;
        }

        await this.prisma.arbeitnowScrapedJob.upsert({
          where: { url: job.url },
          create: {
            externalId: job.externalId,
            title: job.title,
            companyName: job.companyName,
            url: job.url,
            location: job.location,
            remoteType: job.remoteType,
            rawDescription: job.rawDescription,
            descriptionMarkdown: job.descriptionMarkdown,
            datePosted: job.datePosted,
            tags: JSON.stringify(job.tags),
            outboxStatus: 'PENDING',
          },
          update: {
            title: job.title,
            companyName: job.companyName,
            rawDescription: job.rawDescription,
            descriptionMarkdown: job.descriptionMarkdown,
          },
        });
      }

      await this.prisma.arbeitnowSyncState.update({
        where: { id: 'DEFAULT' },
        data: {
          status: hasErrors ? 'ERROR' : 'IDLE',
          lastPage,
          lastSyncTimestamp: latestDateInBatch,
          lastError: hasErrors ? 'Error encountered during fetch' : null,
        },
      });

      this.logger.log('💾 Salvataggio completato nello schema locale. Trigger Outbox Relay immediato...');
      await this.outboxRelay.processPendingOutbox();
    } catch (err: any) {
      this.logger.error('❌ Errore critico ciclo estrazione Arbeitnow:', err);
      await this.prisma.arbeitnowSyncState.update({
        where: { id: 'DEFAULT' },
        data: { status: 'ERROR', lastError: err.message },
      });
    }
  }
}
