import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { PrismaService } from '../../commons/prisma/prisma.service';
import { S3StorageService } from '../../commons/storage/s3-storage.service';
import { PdfGeneratorService } from '../pdf-generator.service';
import { ResumeTailoring, mergeResumeWithTailoring } from '../schema';
import { baseResumeData } from '../../data/base-data';
import { JobCurriculumPdfStatus } from '@analizzatore/database';
import {
  PDF_RENDERING_QUEUE_NAME,
  GENERATE_PDF_EVENT,
  GeneratePdfTaskEvent,
} from '@analizzatore/contracts';

@Processor(PDF_RENDERING_QUEUE_NAME, {
  concurrency: 2,
})
export class PdfProcessor extends WorkerHost {
  private readonly logger = new Logger(PdfProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly pdfGeneratorService: PdfGeneratorService,
    private readonly s3StorageService: S3StorageService,
  ) {
    super();
  }

  async process(job: Job<GeneratePdfTaskEvent, any, string>): Promise<any> {
    if (job.name !== GENERATE_PDF_EVENT) {
      this.logger.debug(`Ignorato evento non riconosciuto: ${job.name}`);
      return;
    }

    const { jobOfferId, templateName } = job.data;
    this.logger.log(`📄 [PdfRendererWorker] Inizio compilazione PDF per offerta [ID: ${jobOfferId}]`);

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

    if (!jobOffer.curriculum) {
      this.logger.warn(`⚠️ Nessun curriculum trovato a DB per l'annuncio ${jobOfferId}. Salto PDF rendering.`);
      return;
    }

    const storageKey = `curriculums/cv_${jobOffer.id}.pdf`;

    // Imposta stato su GENERATING
    await this.prisma.jobCurriculum.update({
      where: { jobOfferId: jobOffer.id },
      data: { pdfStatus: JobCurriculumPdfStatus.GENERATING },
    });

    try {
      const tailoring: ResumeTailoring = {
        explanation: jobOffer.curriculum.explanation || 'Curriculum per annuncio',
        customLabel: jobOffer.curriculum.customLabel || undefined,
        work: (jobOffer.curriculum.work || []).map((w) => ({
          name: w.name,
          position: w.position || undefined,
          summary: w.summary,
          include: w.include,
        })),
        projects: (jobOffer.curriculum.projects || []).map((p) => ({
          name: p.name,
          description: p.description,
        })),
        selectedPublicationTitles: (jobOffer.curriculum.publications || []).map((pub) => pub.title),
      };

      // 1. Merging dati base con tailoring persistito nel DB
      const finalResumeData = mergeResumeWithTailoring(baseResumeData, tailoring);

      // 2. Compilazione del PDF tramite Chromium headless
      this.logger.log(`🖨️ [PdfRendererWorker] Compilazione Chromium buffer PDF per "${jobOffer.title}"...`);
      const pdfBuffer = await this.pdfGeneratorService.generateBufferFromData(finalResumeData);

      // 3. Upload su MinIO S3
      await this.s3StorageService.upload(storageKey, pdfBuffer, 'application/pdf');

      // 4. Aggiornamento storageKey e stato READY nel DB
      await this.prisma.jobCurriculum.update({
        where: { jobOfferId: jobOffer.id },
        data: {
          storageKey,
          pdfStatus: JobCurriculumPdfStatus.READY,
        },
      });

      this.logger.log(`✅ [PdfRendererWorker] PDF compilato e caricato con successo su MinIO -> ${storageKey}`);
      return { status: 'SUCCESS', storageKey };
    } catch (err: any) {
      this.logger.error(`❌ [PdfRendererWorker] Errore durante la compilazione del PDF per offerta [ID: ${jobOfferId}]:`, err.message);

      await this.prisma.jobCurriculum.update({
        where: { jobOfferId: jobOffer.id },
        data: { pdfStatus: JobCurriculumPdfStatus.FAILED },
      });

      throw err;
    }
  }
}
