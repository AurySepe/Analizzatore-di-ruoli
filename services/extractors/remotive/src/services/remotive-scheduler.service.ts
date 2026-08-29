import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RemotiveFetcherService } from './remotive-fetcher.service';
import { RemotiveOutboxRelayService } from './remotive-outbox-relay.service';

@Injectable()
export class RemotiveSchedulerService implements OnApplicationBootstrap {
  private readonly logger = new Logger(RemotiveSchedulerService.name);
  private isProcessing = false;

  constructor(
    private readonly fetcher: RemotiveFetcherService,
    private readonly relay: RemotiveOutboxRelayService,
  ) {}

  async onApplicationBootstrap() {
    this.logger.log('🚀 Avvio iniziale estrattore Remotive...');
    await this.runScrapeCycle();
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleCron() {
    this.logger.log('⏰ Trigger schedulato scraping Remotive...');
    await this.runScrapeCycle();
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async handleOutboxCron() {
    await this.relay.processPendingEvents();
  }

  private async runScrapeCycle() {
    if (this.isProcessing) {
      this.logger.warn('⚠️ Ciclo scraping già in corso, salto...');
      return;
    }

    this.isProcessing = true;
    try {
      await this.fetcher.fetchAndStore();
      await this.relay.processPendingEvents();
    } catch (err: any) {
      this.logger.error(`❌ Errore durante il ciclo di scraping Remotive: ${err.message}`);
    } finally {
      this.isProcessing = false;
    }
  }
}
