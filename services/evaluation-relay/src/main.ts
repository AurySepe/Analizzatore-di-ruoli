import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { EvaluationRelayModule } from './evaluation-relay.module';

async function bootstrap() {
  const logger = new Logger('EvaluationRelayBootstrap');
  logger.log('🚀 Avvio del microservizio Evaluation Outbox Relay...');

  const app = await NestFactory.createApplicationContext(EvaluationRelayModule);
  app.enableShutdownHooks();

  logger.log('✅ Microservizio Evaluation Outbox Relay avviato.');
}

bootstrap().catch((err) => {
  console.error('❌ Errore irreversibile avvio Evaluation Outbox Relay:', err);
  process.exit(1);
});
