import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';
import { ApiModule } from '../src/apps/api/api.module';
import { PrismaService } from '../src/commons/prisma/prisma.service';
import { S3StorageService } from '../src/commons/storage/s3-storage.service';
import { JobCurriculumDto } from '../src/apps/api/job-offers/dto/job-curriculum.dto';
import { UpdateCurriculumTailoringDto, WorkTailoringDto, ProjectTailoringDto } from '../src/apps/api/job-offers/dto/update-curriculum-tailoring.dto';

// Disabilita le connessioni a DB ed S3 durante la pura generazione dello schema Swagger
PrismaService.prototype.onModuleInit = async () => {};
S3StorageService.prototype.onModuleInit = async () => {};

async function generateOpenApiSpec() {
  const app = await NestFactory.create(ApiModule, { logger: false });

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Analizzatore di Ruoli & Job Aggregator API')
    .setDescription('API Gateway per la ricerca, estrazione e gestione degli annunci di lavoro')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('job-offers', 'Gestione e consultazione degli annunci di lavoro')
    .addTag('Evaluations', 'Consultazione valutazioni AI')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [JobCurriculumDto, WorkTailoringDto, ProjectTailoringDto, UpdateCurriculumTailoringDto],
  });
  const openapiPath = path.resolve(process.cwd(), 'openapi.json');
  fs.writeFileSync(openapiPath, JSON.stringify(document, null, 2), 'utf-8');

  console.log(`✅ Specifica OpenAPI generata con successo in: ${openapiPath}`);
  await app.close();
  process.exit(0);
}

generateOpenApiSpec().catch((err) => {
  console.error('❌ Errore durante la generazione della specifica OpenAPI:', err);
  process.exit(1);
});
