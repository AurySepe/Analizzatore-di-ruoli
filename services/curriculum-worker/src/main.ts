import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { CurriculumWorkerModule } from './curriculum-worker.module';

async function bootstrapCurriculumWorker() {
  const logger = new Logger('CurriculumWorker');
  logger.log('🚀 Avvio del Worker per la Creazione dei Curriculum (Standalone Process)...');

  await NestFactory.createApplicationContext(CurriculumWorkerModule);

  logger.log('✅ Worker per la Creazione dei Curriculum avviato ed attivo.');
}

bootstrapCurriculumWorker().catch(err => {
  console.error('❌ Errore critico nel Worker Curriculum:', err);
  process.exit(1);
});
