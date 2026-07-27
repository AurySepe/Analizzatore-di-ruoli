import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ArbeitnowExtractor } from './arbeitnowExtractor';
import { JobOffersService } from '../job-offers/job-offers.service';
import { ExtractorRegistry } from './extractorRegistry';

@Injectable()
export class ExtractorsService implements OnModuleInit {
  private readonly logger = new Logger(ExtractorsService.name);
  private readonly registry = new ExtractorRegistry();

  constructor(private readonly jobOffersService: JobOffersService) {
    // Registrazione delle fonti di estrazione pre-configurate
    this.registry.register(
      new ArbeitnowExtractor({
        keywords: ['TypeScript', 'Node.js', 'Software', 'Engineer', 'Developer', 'Frontend', 'Backend', 'Fullstack'],
        onlyRemote: false,
        limit: 15,
      })
    );
  }

  async onModuleInit() {
    this.logger.log('🚀 Avvio del Worker di Estrazione Annunci NestJS...');
    // Esecuzione immediata all'avvio dell'applicazione NestJS
    await this.runExtractionCycle();
  }

  // Scansione automatica ogni 30 minuti tramite NestJS Schedule
  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleCronExtraction() {
    this.logger.log('⏰ Scansione pianificata attivata (@Cron EVERY_30_MINUTES)');
    await this.runExtractionCycle();
  }

  async runExtractionCycle() {
    this.logger.log('🌐 Avvio ciclo di estrazione da tutte le fonti...');

    try {
      const offerInputs = await this.registry.extractAll();
      this.logger.log(`📥 Estratti ${offerInputs.length} annunci in totale. Salvataggio in SQLite...`);

      let count = 0;
      for (const input of offerInputs) {
        await this.jobOffersService.saveOrUpdate(input as any);
        count++;
      }

      this.logger.log(`✅ Salvate/Aggiornate con successo ${count}/${offerInputs.length} offerte nel DB.`);
    } catch (error) {
      this.logger.error('❌ Errore durante il ciclo di estrazione:', error);
    }
  }
}
