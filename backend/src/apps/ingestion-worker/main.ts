import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { IngestionWorkerModule } from './ingestion-worker.module';

async function bootstrap() {
  const logger = new Logger('IngestionWorkerBootstrap');
  const app = await NestFactory.createApplicationContext(IngestionWorkerModule);
  app.enableShutdownHooks();

  logger.log('📥 Ingestion Worker avviato e in ascolto sulla coda BullMQ!');
}

bootstrap().catch((err) => {
  console.error('Fatal error starting Ingestion Worker:', err);
  process.exit(1);
});
