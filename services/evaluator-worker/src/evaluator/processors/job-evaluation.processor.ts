import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { PrismaService } from '../../commons/prisma/prisma.service';
import { aiConfig } from '../../config/ai.config';
import { GeminiProviderService } from '../providers/gemini-provider.service';
import { Gemini35ProviderService } from '../providers/gemini35-provider.service';
import { AiEvaluatorProvider, LlmEvaluationResult } from '../providers/ai-provider.interface';
import {
  EVALUATION_QUEUE_NAME,
  EVALUATE_JOB_EVENT,
  EvaluateJobOfferTaskEvent,
  userProfileConfig,
} from '@analizzatore/contracts';
import { EvaluationPriority, EvaluationStatus, EvaluatorModel, JobEvaluationProcessStatus } from '@analizzatore/database';
import { buildEvaluationPrompt } from '../utils/prompt-builder';

@Processor(EVALUATION_QUEUE_NAME, {
  concurrency: 3,
  limiter: {
    max: 15,
    duration: 60000,
  },
})
export class JobEvaluationProcessor extends WorkerHost {
  private readonly logger = new Logger(JobEvaluationProcessor.name);
  private currentProviderIndex = 0;

  constructor(
    private readonly prisma: PrismaService,
    private readonly gemini31Provider: GeminiProviderService,
    private readonly gemini35Provider: Gemini35ProviderService,
  ) {
    super();
  }

  private isProfileComplete(): boolean {
    return Boolean(
      userProfileConfig.resumeText &&
        userProfileConfig.resumeText.trim().length > 0 &&
        userProfileConfig.searchCriteriaText &&
        userProfileConfig.searchCriteriaText.trim().length > 0,
    );
  }

  private selectProvider(): AiEvaluatorProvider {
    const availableProviders: AiEvaluatorProvider[] = [];
    if (this.gemini31Provider.isAvailable()) {
      availableProviders.push(this.gemini31Provider);
    }
    if (this.gemini35Provider.isAvailable()) {
      availableProviders.push(this.gemini35Provider);
    }

    if (availableProviders.length === 0) {
      throw new Error('Nessun provider AI Gemini disponibile per la valutazione.');
    }

    const provider = availableProviders[this.currentProviderIndex % availableProviders.length];
    this.currentProviderIndex = (this.currentProviderIndex + 1) % availableProviders.length;
    return provider;
  }

  async process(job: Job<EvaluateJobOfferTaskEvent, any, string>): Promise<any> {
    if (job.name !== EVALUATE_JOB_EVENT) {
      this.logger.debug(`Ignorato evento non riconosciuto: ${job.name}`);
      return;
    }

    const { jobOfferId, forceReevaluation } = job.data;
    this.logger.log(`🤖 [EvaluatorWorker] Avvio valutazione annuncio [ID: ${jobOfferId}]`);

    if (!this.isProfileComplete()) {
      this.logger.warn('⚠️ Profilo utente incompleto: impossibile procedere con la valutazione.');
      throw new Error('Profilo utente incompleto');
    }

    // 1. Recupero dell'annuncio
    const jobOffer = await this.prisma.jobOffer.findUnique({
      where: { id: jobOfferId },
      include: { company: true, evaluation: true },
    });

    if (!jobOffer) {
      this.logger.warn(`⚠️ Annuncio non trovato con ID ${jobOfferId}. Salto.`);
      return;
    }

    if (jobOffer.evaluation && !forceReevaluation) {
      this.logger.log(`ℹ️ Annuncio [ID: ${jobOfferId}] già valutato. Salto.`);
      return;
    }

    // Aggiornamento stato di processo in EVALUATING
    await this.prisma.jobOffer.update({
      where: { id: jobOffer.id },
      data: { evaluationProcessStatus: JobEvaluationProcessStatus.EVALUATING },
    });

    try {
      const provider = this.selectProvider();
      this.logger.log(`✨ Valutazione con provider: ${provider.name} per "${jobOffer.title}" (${jobOffer.company.name})`);

      const prompt = buildEvaluationPrompt(
        jobOffer.title,
        jobOffer.descriptionMarkdown || jobOffer.rawDescription,
        jobOffer.company.name,
        userProfileConfig.resumeText,
        userProfileConfig.searchCriteriaText,
      );

      const result: LlmEvaluationResult = await provider.evaluate(prompt);

      const prosJson = result.pros && result.pros.length > 0 ? JSON.stringify(result.pros) : null;
      const consJson = result.cons && result.cons.length > 0 ? JSON.stringify(result.cons) : null;

      // 2. Persistenza della valutazione e stato COMPLETED nel Database Centrale
      const [evaluation] = await this.prisma.$transaction([
        this.prisma.jobEvaluation.upsert({
          where: { jobOfferId: jobOffer.id },
          create: {
            jobOfferId: jobOffer.id,
            desireMatchScore: result.desireMatchScore,
            competenceScore: result.competenceScore,
            overallScore: result.overallScore,
            priority: result.priority as EvaluationPriority,
            status: (result.status as EvaluationStatus) || EvaluationStatus.SUCCESS,
            evaluatorModel: (result.evaluatorModel as EvaluatorModel) || EvaluatorModel.GEMINI_3_1_FLASH_LITE,
            summary: result.summary,
            desireMatchReasoning: result.desireMatchReasoning,
            competenceMatch: result.competenceMatch,
            detailedReasoning: result.detailedReasoning,
            pros: prosJson,
            cons: consJson,
          },
          update: {
            desireMatchScore: result.desireMatchScore,
            competenceScore: result.competenceScore,
            overallScore: result.overallScore,
            priority: result.priority as EvaluationPriority,
            status: (result.status as EvaluationStatus) || EvaluationStatus.SUCCESS,
            evaluatorModel: (result.evaluatorModel as EvaluatorModel) || EvaluatorModel.GEMINI_3_1_FLASH_LITE,
            summary: result.summary,
            desireMatchReasoning: result.desireMatchReasoning,
            competenceMatch: result.competenceMatch,
            detailedReasoning: result.detailedReasoning,
            pros: prosJson,
            cons: consJson,
          },
        }),
        this.prisma.jobOffer.update({
          where: { id: jobOffer.id },
          data: { evaluationProcessStatus: JobEvaluationProcessStatus.COMPLETED },
        }),
      ]);

      this.logger.log(`✅ [EvaluatorWorker] Valutazione completata per "${jobOffer.title}": Score ${evaluation.overallScore}/100 - Priority: ${evaluation.priority}`);
      return { status: 'SUCCESS', evaluationId: evaluation.id, overallScore: evaluation.overallScore };
    } catch (err: any) {
      this.logger.error(`❌ [EvaluatorWorker] Errore valutazione per "${jobOffer.title}":`, err.message);
      await this.prisma.jobOffer.update({
        where: { id: jobOffer.id },
        data: { evaluationProcessStatus: JobEvaluationProcessStatus.FAILED },
      });
      throw err;
    }
  }
}
