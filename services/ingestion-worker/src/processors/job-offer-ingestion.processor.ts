import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { PrismaService } from '../prisma/prisma.service';
import {
  INGESTION_QUEUE_NAME,
  JOB_OFFER_SCRAPED_EVENT,
  ScrapedJobOfferEvent,
} from '@analizzatore/contracts';
import { JobSource, RemoteType } from '@prisma/client';

@Processor(INGESTION_QUEUE_NAME)
export class JobOfferIngestionProcessor extends WorkerHost {
  private readonly logger = new Logger(JobOfferIngestionProcessor.name);

  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async process(job: Job<ScrapedJobOfferEvent, any, string>): Promise<any> {
    if (job.name !== JOB_OFFER_SCRAPED_EVENT) {
      this.logger.debug(`Ignorato evento non riconosciuto: ${job.name}`);
      return;
    }

    const payload = job.data;
    this.logger.log(`📥 [IngestionWorker] Elaborazione offerta: "${payload.title}" (${payload.companyName}) - Fonte: ${payload.source}`);

    try {
      // 1. Risoluzione o creazione Company nel DB Principale
      const company = await this.prisma.company.upsert({
        where: { name: payload.companyName.trim() },
        create: { name: payload.companyName.trim() },
        update: {},
      });

      // Mappatura RemoteType
      let remoteTypeEnum: RemoteType = RemoteType.UNSPECIFIED;
      if (payload.remoteType === 'FULL_REMOTE' || payload.remoteType === 'REMOTE') {
        remoteTypeEnum = RemoteType.REMOTE;
      } else if (payload.remoteType === 'HYBRID') {
        remoteTypeEnum = RemoteType.HYBRID;
      } else if (payload.remoteType === 'ON_SITE') {
        remoteTypeEnum = RemoteType.ON_SITE;
      }

      const sourceEnum = (JobSource as any)[payload.source] || JobSource.ARBEITNOW;

      // 2. Upsert idempotente su JobOffer nel DB Principale
      const existingOffer = await this.prisma.jobOffer.findUnique({
        where: { url: payload.url },
      });

      const datePosted = payload.datePosted ? new Date(payload.datePosted) : null;
      const skillsJson = payload.tags && payload.tags.length > 0 ? JSON.stringify(payload.tags) : null;

      if (!existingOffer) {
        const newOffer = await this.prisma.jobOffer.create({
          data: {
            externalId: payload.externalId,
            source: sourceEnum,
            url: payload.url,
            title: payload.title,
            companyId: company.id,
            location: payload.location || null,
            remoteType: remoteTypeEnum,
            salaryMin: payload.salaryMin || null,
            salaryMax: payload.salaryMax || null,
            currency: payload.currency || 'EUR',
            contractType: payload.contractType || null,
            rawDescription: payload.rawDescription,
            descriptionMarkdown: payload.descriptionMarkdown || null,
            datePosted,
            skills: skillsJson,
          },
        });

        this.logger.log(`✨ [IngestionWorker] Creato nuovo annuncio [ID: ${newOffer.id}] "${newOffer.title}"`);
      } else {
        await this.prisma.jobOffer.update({
          where: { id: existingOffer.id },
          data: {
            title: payload.title,
            location: payload.location || null,
            rawDescription: payload.rawDescription,
            descriptionMarkdown: payload.descriptionMarkdown || null,
            datePosted: datePosted || existingOffer.datePosted,
            skills: skillsJson || existingOffer.skills,
          },
        });

        this.logger.log(`🔄 [IngestionWorker] Aggiornato annuncio [ID: ${existingOffer.id}] "${existingOffer.title}"`);
      }

      return { status: 'SUCCESS', url: payload.url };
    } catch (err: any) {
      this.logger.error(`❌ Errore ingestion annuncio "${payload.title}" (${payload.url}):`, err.message);
      throw err;
    }
  }
}
