import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { JobicyFetcherService } from './jobicy-fetcher.service';
import { JobicyOutboxRelayService } from './jobicy-outbox-relay.service';

@Injectable()
export class JobicySchedulerService implements OnApplicationBootstrap {
  private readonly logger = new Logger(JobicySchedulerService.name);
  private isProcessing = false;

  constructor(
    private readonly fetcher: JobicyFetcherService,
    private readonly relay: JobicyOutboxRelayService,
  ) {}

  async onApplicationBootstrap() {
    this.logger.log('🚀 Avvio iniziale estrattore Jobicy...');
    await this.runScrapeCycle();
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleCron() {
    this.logger.log('⏰ Trigger schedulato scraping Jobicy...');
    await this.runScrapeCycle();
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async handleOutboxCron() {
    await this.relay.processPendingEvents();
  }

  private async runScrapeCycle() {
    if (this.isProcessing) {
      this.logger.warn('⚠️ Ciclo scraping Jobicy già in corso, salto...');
      return;
    }

    this.isProcessing = true;
    try {
      await this.fetcher.fetchAndStore();
      await this.relay.processPendingEvents();
    } catch (err: any) {
      this.logger.error(`❌ Errore durante il ciclo di scraping Jobicy: ${err.message}`);
    } finally {
      this.isProcessing = false;
    }
  }
}
