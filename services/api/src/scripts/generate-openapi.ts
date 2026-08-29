import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';
import { ApiModule } from '../api.module';

async function generateOpenApi() {
  const app = await NestFactory.create(ApiModule, { logger: false });
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Analizzatore di Ruoli API')
    .setDescription('REST API Gateway per l ingestione, visualizzazione e tailoring CV per offerte di lavoro.')
    .setVersion('2.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const outputPath = path.resolve(__dirname, '../../openapi.json');
  fs.writeFileSync(outputPath, JSON.stringify(document, null, 2), 'utf-8');

  console.log(`📄 OpenAPI Spec generata con successo in: ${outputPath}`);
  await app.close();
  process.exit(0);
}

generateOpenApi().catch((err) => {
  console.error('❌ Errore durante la generazione di OpenAPI:', err);
  process.exit(1);
});
