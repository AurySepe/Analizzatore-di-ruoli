import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { WeWorkRemotelyExtractorModule } from './weworkremotely-extractor.module';

async function bootstrap() {
  const logger = new Logger('WeWorkRemotelyExtractorWorker');
  logger.log('🚀 Avvio del Worker Estrattore WeWorkRemotely (Microservizio Autonomo con Outbox Pattern)...');

  const app = await NestFactory.createApplicationContext(WeWorkRemotelyExtractorModule);
  app.enableShutdownHooks();

  logger.log('✅ Worker Estrattore WeWorkRemotely avviato ed operativo.');
}

bootstrap().catch((err) => {
  console.error('❌ Errore critico nel Worker WeWorkRemotely:', err);
  process.exit(1);
});
