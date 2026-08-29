import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { RemotiveExtractorModule } from './remotive-extractor.module';

async function bootstrap() {
  const logger = new Logger('RemotiveExtractorWorker');
  logger.log('🚀 Avvio del Worker Estrattore Remotive (Microservizio Autonomo con Outbox Pattern)...');

  const app = await NestFactory.createApplicationContext(RemotiveExtractorModule);
  app.enableShutdownHooks();

  logger.log('✅ Worker Estrattore Remotive avviato ed operativo.');
}

bootstrap().catch((err) => {
  console.error('❌ Errore critico nel Worker Remotive:', err);
  process.exit(1);
});
