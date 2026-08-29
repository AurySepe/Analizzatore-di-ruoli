import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../commons/prisma/prisma.service';
import { S3StorageService } from '../../commons/storage/s3-storage.service';
import { CurriculumQueueService } from './curriculum-queue.service';
import { PdfGeneratorService } from '../pdf/pdf-generator.service';
import { CurriculumLlmService } from '../services/curriculum-llm.service';
import { ResumeTailoring, mergeResumeWithTailoring } from '../pdf/schema';
import { baseResumeData } from '../../data/base-data';

@Injectable()
export class CurriculumConsumerService {
  private readonly logger = new Logger(CurriculumConsumerService.name);
  private isRunning = false;

  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: CurriculumQueueService,
    private readonly pdfGeneratorService: PdfGeneratorService,
    private readonly curriculumLlmService: CurriculumLlmService,
    private readonly s3StorageService: S3StorageService,
  ) {}

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.consumerLoop().catch(err => {
      this.logger.error('❌ Errore critico nel Consumer Loop Curriculum:', err);
    });
  }

  private async consumerLoop() {
    this.logger.log('⚙️ Consumer Curriculum avviato: in attesa di annunci da elaborare...');

    while (true) {
      const job = this.queueService.dequeue();

      if (!job) {
        await new Promise(res => setTimeout(res, 2000));
        continue;
      }

      try {
        this.logger.log(`📄 Generazione curriculum PDF personalizzato via AI per l'annuncio: "${job.title}" (${job.id})...`);

        const jobOffer = await this.prisma.jobOffer.findUnique({
          where: { id: job.id },
          include: { company: true },
        });

        if (!jobOffer) {
          this.logger.warn(`⚠️ Annuncio con ID ${job.id} non trovato nel DB, salto.`);
          this.queueService.markCompleted(job.id);
          continue;
        }

        const storageKey = `curriculums/cv_${job.id}.pdf`;

        // 1. Uso dei dati base del candidato
        const initialResumeData = baseResumeData;

        // 2. Generazione dell'oggetto personalizzazione (ResumeTailoring) tramite Gemini AI
        const tailoring: ResumeTailoring = await this.curriculumLlmService.generateTailoring(jobOffer);

        // 3. Merging tra dati base e personalizzazioni LLM per creare il FullResumeData finale
        const finalResumeData = mergeResumeWithTailoring(initialResumeData, tailoring);

        // 4. Generazione effettiva del PDF in-memory tramite Puppeteer (buffer)
        const pdfBuffer = await this.pdfGeneratorService.generateBufferFromData(finalResumeData);

        // 5. Upload diretto del PDF nell'Object Storage (MinIO / S3)
        await this.s3StorageService.upload(storageKey, pdfBuffer, 'application/pdf');

        // 6. Salvataggio record JobCurriculum con storageKey, spiegazione e modelli relazionali
        await this.prisma.jobCurriculum.create({
          data: {
            jobOfferId: jobOffer.id,
            storageKey: storageKey,
            explanation: tailoring.explanation,
            customLabel: tailoring.customLabel,
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

        this.logger.log(`✅ Curriculum PDF personalizzato creato e caricato in S3 per "${job.title}" -> Key: ${storageKey}`);
        this.queueService.markCompleted(job.id);
      } catch (err: any) {
        this.logger.error(`❌ Errore durante la creazione del curriculum PDF per l'annuncio "${job.title}":`, err?.message || err);
        this.queueService.markCompleted(job.id);
      }
    }
  }
}
