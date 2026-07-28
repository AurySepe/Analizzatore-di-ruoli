import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';
import { ApiModule } from './api.module';

async function bootstrap() {
  const logger = new Logger('ApiGateway');
  const app = await NestFactory.create(ApiModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: false,
    }),
  );

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Analizzatore di Ruoli & Job Aggregator API')
    .setDescription('API Gateway per la ricerca, estrazione e gestione degli annunci di lavoro')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('job-offers', 'Gestione e consultazione degli annunci di lavoro')
    .addTag('Evaluations', 'Consultazione valutazioni AI')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const openapiPath = path.resolve(process.cwd(), 'openapi.json');
  fs.writeFileSync(openapiPath, JSON.stringify(document, null, 2));

  const port = process.env.PORT || 3000;
  await app.listen(port);

  logger.log(`🚀 API Gateway NestJS avviato con successo su http://localhost:${port}`);
  logger.log(`📚 Documentazione Swagger/OpenAPI disponibile su http://localhost:${port}/api`);
}

bootstrap();
