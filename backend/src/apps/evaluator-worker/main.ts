import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { EvaluatorWorkerModule } from './evaluator-worker.module';


async function bootstrapEvaluatorWorker() {
  const logger = new Logger('EvaluatorWorker');
  logger.log('🚀 Avvio del Worker di Categorizzazione AI con Ollama (Standalone Process)...');

  await NestFactory.createApplicationContext(EvaluatorWorkerModule);

  logger.log('✅ Worker di Categorizzazione AI avviato ed attivo.');
}

bootstrapEvaluatorWorker().catch(err => {
  console.error('❌ Errore critico nel Worker AI Evaluator:', err);
  process.exit(1);
});
