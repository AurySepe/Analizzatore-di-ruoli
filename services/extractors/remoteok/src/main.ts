import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { RemoteokExtractorModule } from './remoteok-extractor.module';

async function bootstrap() {
  const logger = new Logger('RemoteokExtractorWorker');
  logger.log('🚀 Avvio del Worker Estrattore RemoteOK (Microservizio Autonomo con Outbox Pattern)...');

  const app = await NestFactory.createApplicationContext(RemoteokExtractorModule);
  app.enableShutdownHooks();

  logger.log('✅ Worker Estrattore RemoteOK avviato ed operativo.');
}

bootstrap().catch((err) => {
  console.error('❌ Errore critico nel Worker RemoteOK:', err);
  process.exit(1);
});
