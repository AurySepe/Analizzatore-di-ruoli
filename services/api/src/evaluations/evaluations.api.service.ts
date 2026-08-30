import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, EvaluationPriority } from '@analizzatore/database';
import { PrismaService } from '../commons/prisma/prisma.service';
import { userProfileConfig } from '@analizzatore/contracts';
import { CategorizationStatusDto } from './dto/categorization-status.dto';
import { QueryEvaluationDto } from './dto/job-evaluation.dto';

@Injectable()
export class EvaluationsApiService {
  constructor(private readonly prisma: PrismaService) {}

  async getCategorizationStatus(): Promise<CategorizationStatusDto> {
    const [totalJobs, evaluatedJobs, pendingJobs, evaluatingCount, activeOffers, recentEvaluations] = await Promise.all([
      this.prisma.jobOffer.count(),
      this.prisma.jobEvaluation.count(),
      this.prisma.jobOffer.count({
        where: {
          evaluationProcessStatus: { in: ['PENDING', 'EVALUATING'] },
        },
      }),
      this.prisma.jobOffer.count({
        where: {
          evaluationProcessStatus: 'EVALUATING',
        },
      }),
      this.prisma.jobOffer.findMany({
        where: {
          evaluationProcessStatus: { in: ['EVALUATING', 'PENDING'] },
        },
        include: { company: true },
        orderBy: [{ evaluationProcessStatus: 'desc' }, { createdAt: 'desc' }],
        take: 8,
      }),
      this.prisma.jobEvaluation.findMany({
        include: {
          jobOffer: {
            include: { company: true },
          },
        },
        orderBy: { createdAt: 'desc' },
        take: 6,
      }),
    ]);

    const isProfileComplete = Boolean(
      userProfileConfig.resumeText &&
        userProfileConfig.resumeText.trim().length > 0 &&
        userProfileConfig.searchCriteriaText &&
        userProfileConfig.searchCriteriaText.trim().length > 0,
    );

    const activeJobs = activeOffers.map((o) => ({
      id: o.id,
      title: o.title,
      companyName: o.company.name,
      location: o.location ?? null,
      remoteType: o.remoteType,
      source: o.source,
      evaluationProcessStatus: o.evaluationProcessStatus,
      descriptionSnippet: o.rawDescription ? `${o.rawDescription.slice(0, 160).replace(/\s+/g, ' ').trim()}...` : null,
      salaryRange:
        o.salaryMin && o.salaryMax
          ? `${o.salaryMin.toLocaleString('it-IT')} - ${o.salaryMax.toLocaleString('it-IT')} ${o.currency || 'EUR'}`
          : o.salaryMin
            ? `Da ${o.salaryMin.toLocaleString('it-IT')} ${o.currency || 'EUR'}`
            : null,
      createdAt: o.createdAt,
    }));

    const recentEvaluatedJobs = recentEvaluations.map((e) => ({
      id: e.id,
      jobOfferId: e.jobOfferId,
      title: e.jobOffer.title,
      companyName: e.jobOffer.company.name,
      overallScore: e.overallScore,
      priority: e.priority,
      evaluatorModel: e.evaluatorModel,
      summary: e.summary ?? null,
      evaluatedAt: e.createdAt,
    }));

    return {
      totalJobs,
      evaluatedJobs,
      pendingJobs,
      evaluatingCount,
      isCategorizing: pendingJobs > 0 && isProfileComplete,
      isProfileComplete,
      message: !isProfileComplete
        ? 'Profilo incompleto (inserisci CV e criteri di ricerca per avviare l AI)'
        : pendingJobs > 0
          ? `Categorizzazione in corso (${pendingJobs} annunci in coda)...`
          : 'Tutti gli annunci sono stati valutati con successo.',
      activeJobs,
      recentEvaluatedJobs,
    };
  }

  async findAllEvaluations(query: QueryEvaluationDto) {
    const where: Prisma.JobEvaluationWhereInput = {};
    if (query.priority) {
      where.priority = query.priority.toUpperCase() as EvaluationPriority;
    }
    if (query.minDesireScore !== undefined && query.minDesireScore !== null) {
      where.desireMatchScore = { gte: Number(query.minDesireScore) };
    }
    if (query.minScore !== undefined && query.minScore !== null) {
      where.overallScore = { gte: Number(query.minScore) };
    }

    return this.prisma.jobEvaluation.findMany({
      where,
      orderBy: [
        { priority: 'asc' },
        { overallScore: 'desc' },
        { desireMatchScore: 'desc' },
        { createdAt: 'desc' },
      ],
    });
  }

  async findOneEvaluation(jobOfferId: string) {
    const evaluation = await this.prisma.jobEvaluation.findUnique({
      where: { jobOfferId },
    });

    if (!evaluation) {
      throw new NotFoundException(`Valutazione per l offerta ${jobOfferId} non trovata.`);
    }

    return evaluation;
  }
}
