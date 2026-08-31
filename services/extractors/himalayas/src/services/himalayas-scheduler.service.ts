import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HimalayasFetcherService } from './himalayas-fetcher.service';
import { HimalayasOutboxRelayService } from './himalayas-outbox-relay.service';

@Injectable()
export class HimalayasSchedulerService implements OnApplicationBootstrap {
  private readonly logger = new Logger(HimalayasSchedulerService.name);
  private isProcessing = false;

  constructor(
    private readonly fetcher: HimalayasFetcherService,
    private readonly relay: HimalayasOutboxRelayService,
  ) {}

  async onApplicationBootstrap() {
    this.logger.log('🚀 Avvio iniziale estrattore Himalayas...');
    await this.runScrapeCycle();
  }

  // Himalayas aggiorna i listing ogni ora circa; ogni 45 min è un buon bilanciamento
  @Cron('0 */45 * * * *')
  async handleCron() {
    this.logger.log('⏰ Trigger schedulato scraping Himalayas...');
    await this.runScrapeCycle();
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async handleOutboxCron() {
    await this.relay.processPendingEvents();
  }

  private async runScrapeCycle() {
    if (this.isProcessing) {
      this.logger.warn('⚠️ Ciclo scraping Himalayas già in corso, salto...');
      return;
    }

    this.isProcessing = true;
    try {
      await this.fetcher.fetchAndStore();
      await this.relay.processPendingEvents();
    } catch (err: any) {
      this.logger.error(`❌ Errore durante il ciclo di scraping Himalayas: ${err.message}`);
    } finally {
      this.isProcessing = false;
    }
  }
}
