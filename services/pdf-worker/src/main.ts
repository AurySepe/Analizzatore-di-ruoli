import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { PdfWorkerModule } from './pdf-worker.module';

async function bootstrap() {
  const logger = new Logger('PdfWorkerBootstrap');
  logger.log('🚀 Avvio del microservizio Pdf Worker...');

  const app = await NestFactory.createApplicationContext(PdfWorkerModule);
  app.enableShutdownHooks();

  logger.log('✅ Microservizio Pdf Worker avviato e in ascolto su BullMQ.');
}

bootstrap().catch((err) => {
  console.error('❌ Errore irreversibile avvio Pdf Worker:', err);
  process.exit(1);
});
