import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  // Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: false,
    }),
  );

  // Enable CORS
  app.enableCors();

  // Configurazione Swagger OpenAPI
  const config = new DocumentBuilder()
    .setTitle('Analizzatore di Ruoli & Job Aggregator API')
    .setDescription('API Backend per la ricerca, estrazione e gestione persistente degli annunci di lavoro tech')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('job-offers', 'Gestione e consultazione degli annunci di lavoro')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Salva il file fisico openapi.json
  const openapiPath = path.resolve(process.cwd(), 'openapi.json');
  fs.writeFileSync(openapiPath, JSON.stringify(document, null, 2));

  const port = process.env.PORT || 3000;
  await app.listen(port);

  logger.log(`🚀 Server NestJS avviato con successo su http://localhost:${port}`);
  logger.log(`📚 Documentazione Swagger/OpenAPI disponibile su http://localhost:${port}/api`);
  logger.log(`📄 Specifica OpenAPI salvata su ${openapiPath}`);
}

bootstrap();
