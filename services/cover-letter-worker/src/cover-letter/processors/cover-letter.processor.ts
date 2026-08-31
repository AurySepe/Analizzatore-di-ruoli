import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { PrismaService } from '../../commons/prisma/prisma.service';
import { S3StorageService } from '../../commons/storage/s3-storage.service';
import { CoverLetterGeneratorService, CoverLetterTailoring } from '../generator/cover-letter-generator.service';
import { CoverLetterPdfService } from '../pdf/cover-letter-pdf.service';
import {
  COVER_LETTER_QUEUE_NAME,
  GENERATE_COVER_LETTER_EVENT,
  GenerateCoverLetterTaskEvent,
} from '@analizzatore/contracts';
import { JobCoverLetterPdfStatus } from '@analizzatore/database';

@Processor(COVER_LETTER_QUEUE_NAME, { concurrency: 2 })
export class CoverLetterProcessor extends WorkerHost {
  private readonly logger = new Logger(CoverLetterProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly s3StorageService: S3StorageService,
    private readonly generatorService: CoverLetterGeneratorService,
    private readonly pdfService: CoverLetterPdfService,
  ) {
    super();
  }

  async process(job: Job<GenerateCoverLetterTaskEvent, void, string>): Promise<void> {
    const { jobOfferId, forceRegenerate } = job.data;
    this.logger.log(`📥 [CoverLetterWorker] Inizio elaborazione Cover Letter per JobOffer [ID: ${jobOfferId}]...`);

    const offer = await this.prisma.jobOffer.findUnique({
      where: { id: jobOfferId },
      include: {
        company: true,
        coverLetter: true,
      },
    });

    if (!offer) {
      this.logger.warn(`⚠️ [CoverLetterWorker] JobOffer [ID: ${jobOfferId}] non trovata.`);
      return;
    }

    try {
      let clData: CoverLetterTailoring;

      if (offer.coverLetter && !forceRegenerate) {
        this.logger.log(`ℹ️ [CoverLetterWorker] Cover Letter già presente per [ID: ${jobOfferId}], rigenero PDF...`);
        clData = {
          customLabel: offer.coverLetter.customLabel || '',
          recipientName: offer.coverLetter.recipientName || '',
          recipientTitle: offer.coverLetter.recipientTitle || '',
          recipientCompany: offer.coverLetter.recipientCompany,
          recipientAddress: offer.coverLetter.recipientAddress || '',
          recipientRole: offer.coverLetter.recipientRole,
          date: offer.coverLetter.date,
          salutation: offer.coverLetter.salutation,
          experienceParagraph1: offer.coverLetter.experienceParagraph1,
          experienceParagraph2: offer.coverLetter.experienceParagraph2,
          companyMotivation: offer.coverLetter.companyMotivation,
          callToAction: offer.coverLetter.callToAction,
          signoff: offer.coverLetter.signoff,
          explanation: offer.coverLetter.explanation || '',
        };
      } else {
        const generated = await this.generatorService.generate({
          title: offer.title,
          location: offer.location,
          company: offer.company,
          rawDescription: offer.rawDescription,
          descriptionMarkdown: offer.descriptionMarkdown,
          skills: offer.skills,
        });

        clData = generated;

        await this.prisma.jobCoverLetter.upsert({
          where: { jobOfferId },
          update: {
            customLabel: clData.customLabel,
            recipientName: clData.recipientName,
            recipientTitle: clData.recipientTitle,
            recipientCompany: clData.recipientCompany,
            recipientAddress: clData.recipientAddress,
            recipientRole: clData.recipientRole,
            date: clData.date,
            salutation: clData.salutation,
            experienceParagraph1: clData.experienceParagraph1,
            experienceParagraph2: clData.experienceParagraph2,
            companyMotivation: clData.companyMotivation,
            callToAction: clData.callToAction || 'Happy to talk through any of this in more detail.',
            signoff: clData.signoff || 'Sincerely,',
            explanation: clData.explanation,
            pdfStatus: JobCoverLetterPdfStatus.GENERATING,
            updatedAt: new Date(),
          },
          create: {
            jobOfferId,
            customLabel: clData.customLabel,
            recipientName: clData.recipientName,
            recipientTitle: clData.recipientTitle,
            recipientCompany: clData.recipientCompany,
            recipientAddress: clData.recipientAddress,
            recipientRole: clData.recipientRole,
            date: clData.date,
            salutation: clData.salutation,
            experienceParagraph1: clData.experienceParagraph1,
            experienceParagraph2: clData.experienceParagraph2,
            companyMotivation: clData.companyMotivation,
            callToAction: clData.callToAction || 'Happy to talk through any of this in more detail.',
            signoff: clData.signoff || 'Sincerely,',
            explanation: clData.explanation,
            pdfStatus: JobCoverLetterPdfStatus.GENERATING,
          },
        });
      }

      // 2. Compilazione PDF
      this.logger.log(`📄 [CoverLetterWorker] Compilazione PDF in corso per [ID: ${jobOfferId}]...`);
      const pdfBuffer = await this.pdfService.generatePdf({
        customLabel: clData.customLabel,
        recipientName: clData.recipientName,
        recipientTitle: clData.recipientTitle,
        recipientCompany: clData.recipientCompany,
        recipientAddress: clData.recipientAddress,
        recipientRole: clData.recipientRole,
        date: clData.date,
        salutation: clData.salutation,
        experienceParagraph1: clData.experienceParagraph1,
        experienceParagraph2: clData.experienceParagraph2,
        companyMotivation: clData.companyMotivation,
        callToAction: clData.callToAction,
        signoff: clData.signoff,
      });

      // 3. Upload S3 MinIO
      const storageKey = `cover-letters/${jobOfferId}.pdf`;
      await this.s3StorageService.uploadFile(storageKey, pdfBuffer);

      // 4. Aggiorna stato READY
      await this.prisma.jobCoverLetter.update({
        where: { jobOfferId },
        data: {
          storageKey,
          pdfStatus: JobCoverLetterPdfStatus.READY,
          updatedAt: new Date(),
        },
      });

      this.logger.log(`🎉 [CoverLetterWorker] Cover Letter e PDF salvati con successo per [ID: ${jobOfferId}]!`);
    } catch (err: any) {
      const attemptsMade = job.attemptsMade ?? 0;
      const totalAttempts = job.opts.attempts || 1;
      const isFinalAttempt = attemptsMade + 1 >= totalAttempts;

      this.logger.error(
        `❌ [CoverLetterWorker] Errore elaborazione [ID: ${jobOfferId}] (tentativo ${attemptsMade + 1}/${totalAttempts}): ${err.message}`,
      );

      if (isFinalAttempt) {
        this.logger.error(`🛑 [CoverLetterWorker] Tentativi esauriti per [ID: ${jobOfferId}]. Marcatura FAILED a database.`);
        await this.prisma.jobCoverLetter.updateMany({
          where: { jobOfferId },
          data: {
            pdfStatus: JobCoverLetterPdfStatus.FAILED,
            updatedAt: new Date(),
          },
        });
      }

      throw err;
    }
  }
}
