import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { CoverLetterWorkerModule } from './cover-letter-worker.module';

async function bootstrap() {
  const logger = new Logger('CoverLetterWorkerBootstrap');
  logger.log('🚀 Avvio del microservizio Cover Letter Worker & PDF Compiler...');

  const app = await NestFactory.createApplicationContext(CoverLetterWorkerModule);
  app.enableShutdownHooks();

  logger.log('✅ Microservizio Cover Letter Worker avviato ed in ascolto.');
}

bootstrap().catch((err) => {
  console.error('❌ Errore irreversibile avvio Cover Letter Worker:', err);
  process.exit(1);
});
