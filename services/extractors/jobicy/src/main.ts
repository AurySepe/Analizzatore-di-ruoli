import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { JobicyExtractorModule } from './jobicy-extractor.module';

async function bootstrap() {
  const logger = new Logger('JobicyExtractorWorker');
  logger.log('🚀 Avvio del Worker Estrattore Jobicy (Microservizio Autonomo con Outbox Pattern)...');

  const app = await NestFactory.createApplicationContext(JobicyExtractorModule);
  app.enableShutdownHooks();

  logger.log('✅ Worker Estrattore Jobicy avviato ed operativo.');
}

bootstrap().catch((err) => {
  console.error('❌ Errore critico nel Worker Jobicy:', err);
  process.exit(1);
});
