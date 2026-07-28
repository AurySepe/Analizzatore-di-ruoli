import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../../../commons/prisma/prisma.service';
import { ExtractorRegistry } from './extractor-registry';
import { ArbeitnowExtractor } from './arbeitnow-extractor';
import { RemotiveExtractor } from './remotive-extractor';
import { RawExtractedJob } from './base-extractor';

@Injectable()
export class ExtractorsService implements OnModuleInit {
  private readonly logger = new Logger(ExtractorsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly registry: ExtractorRegistry,
  ) {
    this.registry.register(
      new ArbeitnowExtractor({
        onlyTechAndProduct: true,
        onlyEnglish: true,
        onlyRemote: false,
      }),
    );
    this.registry.register(
      new RemotiveExtractor({
        onlyTechAndProduct: true,
        onlyEnglish: true,
      }),
    );
  }


  async onModuleInit() {
    this.logger.log('🚀 Avvio del Worker di Estrazione Annunci NestJS...');
    await this.runExtractionCycle();
  }

  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleCronExtraction() {
    this.logger.log('⏰ Scansione pianificata attivata (@Cron EVERY_30_MINUTES)');
    await this.runExtractionCycle();
  }

  async runExtractionCycle() {
    this.logger.log('🌐 Avvio ciclo di estrazione incrementale da tutte le fonti...');

    const extractors = this.registry.getExtractors();

    for (const extractor of extractors) {
      const sourceName = extractor.sourceName;
      this.logger.log(`⏳ Recupero watermark SyncState per fonte "${sourceName}"...`);

      try {
        const syncState = await this.prisma.syncState.findUnique({
          where: { source: sourceName },
        });

        const lastSyncWatermark = syncState?.lastSyncedAt ?? undefined;

        const extractedJobs = await extractor.extract(lastSyncWatermark);
        this.logger.log(`📥 Estratte ${extractedJobs.length} offerte da "${sourceName}". Salvataggio nel DB...`);

        const savedCount = await this.saveExtractedJobs(extractedJobs);

        const newWatermark = extractedJobs.length > 0
          ? new Date(Math.max(...extractedJobs.map(j => (j.datePosted ? new Date(j.datePosted).getTime() : Date.now()))))
          : new Date();

        await this.prisma.syncState.upsert({
          where: { source: sourceName },
          update: {
            lastSyncedAt: newWatermark,
            totalJobsExtracted: { increment: savedCount },
            lastStatus: 'SUCCESS',
          },
          create: {
            source: sourceName,
            lastSyncedAt: newWatermark,
            totalJobsExtracted: savedCount,
            lastStatus: 'SUCCESS',
          },
        });

        this.logger.log(`✅ [${sourceName}] Sincronizzazione completata: ${savedCount}/${extractedJobs.length} offerte salvate. Watermark aggiornato a ${newWatermark.toISOString()}.`);
      } catch (err: any) {
        this.logger.error(`❌ Errore durante l estrazione/salvataggio per fonte "${sourceName}":`, err);

        await this.prisma.syncState.upsert({
          where: { source: sourceName },
          update: {
            lastStatus: 'ERROR',
          },
          create: {
            source: sourceName,
            lastSyncedAt: new Date(0),
            totalJobsExtracted: 0,
            lastStatus: 'ERROR',
          },
        });
      }
    }
  }

  private async saveExtractedJobs(rawJobs: RawExtractedJob[]): Promise<number> {
    let savedCount = 0;

    for (const dto of rawJobs) {
      try {
        const company = await this.prisma.company.upsert({
          where: { name: dto.companyName },
          update: {},
          create: { name: dto.companyName },
        });

        const whereClause = dto.externalId
          ? { source_externalId: { source: dto.source, externalId: dto.externalId } }
          : { url: dto.url };

        const remoteType = dto.isRemote ? 'REMOTE' : 'UNSPECIFIED';

        await this.prisma.jobOffer.upsert({
          where: whereClause,
          update: {
            title: dto.title,
            location: dto.location ?? null,
            remoteType,
            rawDescription: dto.rawDescription,
            descriptionMarkdown: dto.descriptionMarkdown ?? null,
            updatedAt: new Date(),
          },
          create: {
            externalId: dto.externalId ?? null,
            source: dto.source,
            url: dto.url,
            title: dto.title,
            location: dto.location ?? null,
            remoteType,
            rawDescription: dto.rawDescription,
            descriptionMarkdown: dto.descriptionMarkdown ?? null,
            datePosted: dto.datePosted ?? new Date(),
            companyId: company.id,
          },
        });

        savedCount++;
      } catch (err) {
        this.logger.error(`❌ Errore salvataggio offerta "${dto.title}" (${dto.url}):`, err);
      }
    }

    return savedCount;
  }
}
