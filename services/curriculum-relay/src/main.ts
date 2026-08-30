import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { CurriculumRelayModule } from './curriculum-relay.module';

async function bootstrap() {
  const logger = new Logger('CurriculumRelayBootstrap');
  logger.log('🚀 Avvio del microservizio Curriculum Outbox Relay...');

  const app = await NestFactory.createApplicationContext(CurriculumRelayModule);
  app.enableShutdownHooks();

  logger.log('✅ Microservizio Curriculum Outbox Relay avviato.');
}

bootstrap().catch((err) => {
  console.error('❌ Errore irreversibile avvio Curriculum Outbox Relay:', err);
  process.exit(1);
});
