import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { CoverLetterRelayModule } from './cover-letter-relay.module';

async function bootstrap() {
  const logger = new Logger('CoverLetterRelayBootstrap');
  logger.log('🚀 Avvio del microservizio Cover Letter Outbox Relay...');

  const app = await NestFactory.createApplicationContext(CoverLetterRelayModule);
  app.enableShutdownHooks();

  logger.log('✅ Microservizio Cover Letter Outbox Relay avviato.');
}

bootstrap().catch((err) => {
  console.error('❌ Errore irreversibile avvio Cover Letter Outbox Relay:', err);
  process.exit(1);
});
