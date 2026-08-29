import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('ExtractorArbeitnow');
  const app = await NestFactory.createApplicationContext(AppModule);
  app.enableShutdownHooks();

  logger.log('💼 Microservizio Extractor Arbeitnow avviato con successo!');
}

bootstrap().catch((err) => {
  console.error('Fatal error starting Extractor Arbeitnow:', err);
  process.exit(1);
});
