import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ExtractorArbeitnowModule } from './extractor-arbeitnow.module';

async function bootstrap() {
  const logger = new Logger('ExtractorArbeitnowBootstrap');
  const app = await NestFactory.createApplicationContext(ExtractorArbeitnowModule);
  app.enableShutdownHooks();

  logger.log('💼 Microservizio Extractor Arbeitnow (Standalone) avviato con successo!');
}

bootstrap().catch((err) => {
  console.error('Fatal error starting Extractor Arbeitnow:', err);
  process.exit(1);
});
