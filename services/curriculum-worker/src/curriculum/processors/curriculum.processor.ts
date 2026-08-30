import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { PrismaService } from '../../commons/prisma/prisma.service';
import { CurriculumLlmService } from '../services/curriculum-llm.service';
import { ResumeTailoring } from '../pdf/schema';
import { JobCurriculumPdfStatus } from '@analizzatore/database';
import {
  CURRICULUM_TAILORING_QUEUE_NAME,
  GENERATE_CURRICULUM_TAILORING_EVENT,
  GenerateCurriculumTailoringTaskEvent,
} from '@analizzatore/contracts';

@Processor(CURRICULUM_TAILORING_QUEUE_NAME, {
  concurrency: 2,
})
export class CurriculumProcessor extends WorkerHost {
  private readonly logger = new Logger(CurriculumProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly curriculumLlmService: CurriculumLlmService,
  ) {
    super();
  }

  async process(job: Job<GenerateCurriculumTailoringTaskEvent, any, string>): Promise<any> {
    if (job.name !== GENERATE_CURRICULUM_TAILORING_EVENT) {
      this.logger.debug(`Ignorato evento non riconosciuto: ${job.name}`);
      return;
    }

    const { jobOfferId, forceRegenerate } = job.data;
    this.logger.log(`🤖 [CurriculumTailorWorker] Inizio elaborazione AI tailoring per offerta [ID: ${jobOfferId}]`);

    const jobOffer = await this.prisma.jobOffer.findUnique({
      where: { id: jobOfferId },
      include: {
        company: true,
        curriculum: {
          include: {
            work: { orderBy: { order: 'asc' } },
            projects: { orderBy: { order: 'asc' } },
            publications: { orderBy: { order: 'asc' } },
          },
        },
      },
    });

    if (!jobOffer) {
      this.logger.warn(`⚠️ Annuncio con ID ${jobOfferId} non trovato nel DB. Salto.`);
      return;
    }

    // Se esiste già un curriculum con personalizzazioni e non è richiesta rigenerazione forzata,
    // preserviamo i dati e inoltriamo subito l'evento di rendering PDF
    if (!forceRegenerate && jobOffer.curriculum && jobOffer.curriculum.work && jobOffer.curriculum.work.length > 0) {
      this.logger.log(`📌 [CurriculumTailorWorker] Curriculum già presente per "${jobOffer.title}". Accodamento rendering PDF...`);
      await this.prisma.jobCurriculumPdfOutbox.upsert({
        where: { jobOfferId: jobOffer.id },
        create: {
          jobOfferId: jobOffer.id,
          status: 'PENDING',
          forceRegenerate: false,
        },
        update: {
          status: 'PENDING',
          forceRegenerate: false,
          attempts: 0,
          lastError: null,
        },
      });
      return { status: 'PRESERVED' };
    }

    // Generazione AI tramite Google Gemini
    this.logger.log(`🤖 [CurriculumTailorWorker] Generazione tailoring via Gemini AI per "${jobOffer.title}" (${jobOffer.company?.name})...`);
    const tailoring: ResumeTailoring = await this.curriculumLlmService.generateTailoring(jobOffer);

    // Salvataggio atomico dei dati generati nel DB e creazione evento Outbox per il rendering PDF
    await this.prisma.$transaction(async (tx) => {
      // Se esisteva già un curriculum precedente, puliamo le tabelle figlie
      if (jobOffer.curriculum) {
        await tx.jobCurriculumWork.deleteMany({ where: { curriculumId: jobOffer.curriculum.id } });
        await tx.jobCurriculumProject.deleteMany({ where: { curriculumId: jobOffer.curriculum.id } });
        await tx.jobCurriculumPublication.deleteMany({ where: { curriculumId: jobOffer.curriculum.id } });
      }

      await tx.jobCurriculum.upsert({
        where: { jobOfferId: jobOffer.id },
        create: {
          jobOfferId: jobOffer.id,
          explanation: tailoring.explanation,
          customLabel: tailoring.customLabel,
          pdfStatus: JobCurriculumPdfStatus.PENDING,
          work: {
            create: (tailoring.work || []).map((w, idx) => ({
              name: w.name,
              position: w.position || '',
              summary: w.summary,
              include: w.include !== false,
              order: idx,
            })),
          },
          projects: {
            create: (tailoring.projects || []).map((p, idx) => ({
              name: p.name,
              description: p.description,
              order: idx,
            })),
          },
          publications: {
            create: (tailoring.selectedPublicationTitles || []).map((title, idx) => ({
              title,
              order: idx,
            })),
          },
        },
        update: {
          explanation: tailoring.explanation,
          customLabel: tailoring.customLabel,
          pdfStatus: JobCurriculumPdfStatus.PENDING,
          work: {
            create: (tailoring.work || []).map((w, idx) => ({
              name: w.name,
              position: w.position || '',
              summary: w.summary,
              include: w.include !== false,
              order: idx,
            })),
          },
          projects: {
            create: (tailoring.projects || []).map((p, idx) => ({
              name: p.name,
              description: p.description,
              order: idx,
            })),
          },
          publications: {
            create: (tailoring.selectedPublicationTitles || []).map((title, idx) => ({
              title,
              order: idx,
            })),
          },
        },
      });

      // Transazione Outbox per il rendering asincrono PDF
      await tx.jobCurriculumPdfOutbox.upsert({
        where: { jobOfferId: jobOffer.id },
        create: {
          jobOfferId: jobOffer.id,
          status: 'PENDING',
          forceRegenerate: !!forceRegenerate,
        },
        update: {
          status: 'PENDING',
          forceRegenerate: !!forceRegenerate,
          attempts: 0,
          lastError: null,
        },
      });
    });

    this.logger.log(`✅ [CurriculumTailorWorker] Dati AI tailoring salvati ed evento PDF inserito nell'Outbox per "${jobOffer.title}"`);
    return { status: 'SUCCESS' };
  }
}

