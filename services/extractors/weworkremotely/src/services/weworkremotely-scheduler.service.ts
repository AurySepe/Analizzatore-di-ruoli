import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { WeWorkRemotelyFetcherService } from './weworkremotely-fetcher.service';
import { WeWorkRemotelyOutboxRelayService } from './weworkremotely-outbox-relay.service';

@Injectable()
export class WeWorkRemotelySchedulerService implements OnApplicationBootstrap {
  private readonly logger = new Logger(WeWorkRemotelySchedulerService.name);
  private isProcessing = false;

  constructor(
    private readonly fetcher: WeWorkRemotelyFetcherService,
    private readonly relay: WeWorkRemotelyOutboxRelayService,
  ) {}

  async onApplicationBootstrap() {
    this.logger.log('🚀 Avvio iniziale estrattore WeWorkRemotely...');
    await this.runScrapeCycle();
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleCron() {
    this.logger.log('⏰ Trigger schedulato scraping WeWorkRemotely...');
    await this.runScrapeCycle();
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async handleOutboxCron() {
    await this.relay.processPendingEvents();
  }

  private async runScrapeCycle() {
    if (this.isProcessing) {
      this.logger.warn('⚠️ Ciclo scraping WeWorkRemotely già in corso, salto...');
      return;
    }

    this.isProcessing = true;
    try {
      await this.fetcher.fetchAndStore();
      await this.relay.processPendingEvents();
    } catch (err: any) {
      this.logger.error(`❌ Errore durante il ciclo di scraping WeWorkRemotely: ${err.message}`);
    } finally {
      this.isProcessing = false;
    }
  }
}
