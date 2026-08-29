import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, EvaluationPriority } from '@analizzatore/database';
import { PrismaService } from '../commons/prisma/prisma.service';
import { userProfileConfig } from '../config/user-profile.config';
import { QueryEvaluationDto } from './dto/job-evaluation.dto';

@Injectable()
export class EvaluationsApiService {
  constructor(private readonly prisma: PrismaService) {}

  async getCategorizationStatus() {
    const [totalJobs, evaluatedJobs, pendingJobs] = await Promise.all([
      this.prisma.jobOffer.count(),
      this.prisma.jobEvaluation.count(),
      this.prisma.jobOffer.count({ where: { evaluation: null } }),
    ]);

    const isProfileComplete = Boolean(
      userProfileConfig.resumeText && userProfileConfig.resumeText.trim().length > 0 &&
      userProfileConfig.searchCriteriaText && userProfileConfig.searchCriteriaText.trim().length > 0
    );

    return {
      totalJobs,
      evaluatedJobs,
      pendingJobs,
      isCategorizing: pendingJobs > 0 && isProfileComplete,
      isProfileComplete,
      message: !isProfileComplete
        ? 'Profilo incompleto (inserisci CV e criteri di ricerca per avviare l AI)'
        : pendingJobs > 0
        ? `Categorizzazione in corso (${pendingJobs} annunci in attesa)...`
        : 'Tutti gli annunci sono stati valutati con successo.',
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
