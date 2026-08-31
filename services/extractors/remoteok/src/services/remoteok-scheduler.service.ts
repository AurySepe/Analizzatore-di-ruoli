import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RemoteokFetcherService } from './remoteok-fetcher.service';
import { RemoteokOutboxRelayService } from './remoteok-outbox-relay.service';

@Injectable()
export class RemoteokSchedulerService implements OnApplicationBootstrap {
  private readonly logger = new Logger(RemoteokSchedulerService.name);
  private isProcessing = false;

  constructor(
    private readonly fetcher: RemoteokFetcherService,
    private readonly relay: RemoteokOutboxRelayService,
  ) {}

  async onApplicationBootstrap() {
    this.logger.log('🚀 Avvio iniziale estrattore RemoteOK...');
    await this.runScrapeCycle();
  }

  // RemoteOK aggiorna frequentemente il feed; ogni 30 min è ottimale
  @Cron('0 */30 * * * *')
  async handleCron() {
    this.logger.log('⏰ Trigger schedulato scraping RemoteOK...');
    await this.runScrapeCycle();
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async handleOutboxCron() {
    await this.relay.processPendingEvents();
  }

  private async runScrapeCycle() {
    if (this.isProcessing) {
      this.logger.warn('⚠️ Ciclo scraping RemoteOK già in corso, salto...');
      return;
    }

    this.isProcessing = true;
    try {
      await this.fetcher.fetchAndStore();
      await this.relay.processPendingEvents();
    } catch (err: any) {
      this.logger.error(`❌ Errore durante il ciclo di scraping RemoteOK: ${err.message}`);
    } finally {
      this.isProcessing = false;
    }
  }
}
