import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { HimalayasExtractorModule } from './himalayas-extractor.module';

async function bootstrap() {
  const logger = new Logger('HimalayasExtractorWorker');
  logger.log('🚀 Avvio del Worker Estrattore Himalayas (Microservizio Autonomo con Outbox Pattern)...');

  const app = await NestFactory.createApplicationContext(HimalayasExtractorModule);
  app.enableShutdownHooks();

  logger.log('✅ Worker Estrattore Himalayas avviato ed operativo.');
}

bootstrap().catch((err) => {
  console.error('❌ Errore critico nel Worker Himalayas:', err);
  process.exit(1);
});
