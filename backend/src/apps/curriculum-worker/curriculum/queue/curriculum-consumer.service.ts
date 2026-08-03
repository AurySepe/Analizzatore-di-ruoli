import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from '../../../../commons/prisma/prisma.service';
import { CurriculumQueueService } from './curriculum-queue.service';
import { PdfGeneratorService } from '../pdf/pdf-generator.service';
import { CurriculumLlmService } from '../services/curriculum-llm.service';
import { ResumeTailoring, mergeResumeWithTailoring } from '../pdf/schema';
import { baseResumeData } from '../../data/base-data';

@Injectable()
export class CurriculumConsumerService {
  private readonly logger = new Logger(CurriculumConsumerService.name);
  private isRunning = false;
  private readonly storageDir: string;

  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: CurriculumQueueService,
    private readonly pdfGeneratorService: PdfGeneratorService,
    private readonly curriculumLlmService: CurriculumLlmService,
  ) {
    this.storageDir = path.resolve(process.cwd(), 'storage', 'resumes');
    if (!fs.existsSync(this.storageDir)) {
      fs.mkdirSync(this.storageDir, { recursive: true });
    }
  }

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

        const fileName = `cv_${job.id}.pdf`;
        const filePath = path.join(this.storageDir, fileName);

        // 1. Uso dei dati base del candidato
        const initialResumeData = baseResumeData;

        // 2. Generazione dell'oggetto personalizzazione (ResumeTailoring) tramite Gemini AI
        const tailoring: ResumeTailoring = await this.curriculumLlmService.generateTailoring(jobOffer);

        // 3. Merging tra dati base e personalizzazioni LLM per creare il FullResumeData finale
        const finalResumeData = mergeResumeWithTailoring(initialResumeData, tailoring);

        // 4. Generazione effettiva del PDF in-memory tramite Puppeteer
        await this.pdfGeneratorService.generateFromData(finalResumeData, filePath);

        // 5. Salvataggio record JobCurriculum con percorso file, spiegazione e dati JSON delle personalizzazioni
        await this.prisma.jobCurriculum.create({
          data: {
            jobOfferId: jobOffer.id,
            filePath: filePath,
            explanation: tailoring.explanation,
            tailoringData: JSON.stringify(tailoring),
          },
        });

        this.logger.log(`✅ Curriculum PDF personalizzato creato con successo per "${job.title}" -> File: ${filePath}`);
        this.queueService.markCompleted(job.id);
      } catch (err: any) {
        this.logger.error(`❌ Errore durante la creazione del curriculum PDF per l'annuncio "${job.title}":`, err?.message || err);
        this.queueService.markCompleted(job.id);
      }
    }
  }
}
