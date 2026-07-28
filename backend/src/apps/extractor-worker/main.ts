import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ExtractorWorkerModule } from './extractor-worker.module';

async function bootstrapExtractorWorker() {
  const logger = new Logger('ExtractorWorker');
  logger.log('🚀 Avvio del Worker di Estrazione Annunci (Standalone Process)...');

  await NestFactory.createApplicationContext(ExtractorWorkerModule);

  logger.log('✅ Worker di Estrazione Annunci avviato ed attivo con @Cron.');
}

bootstrapExtractorWorker().catch(err => {
  console.error('❌ Errore critico nel Worker di Estrazione:', err);
  process.exit(1);
});
