import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('WorkerIngestion');
  const app = await NestFactory.createApplicationContext(AppModule);
  app.enableShutdownHooks();

  logger.log('📥 Microservizio Ingestion Worker avviato e in ascolto su BullMQ!');
}

bootstrap().catch((err) => {
  console.error('Fatal error starting Ingestion Worker:', err);
  process.exit(1);
});
