import { Injectable } from '@nestjs/common';
import { Prisma, ApplicationStatus, EvaluationPriority } from '@prisma/client';
import { PrismaService } from '../../../commons/prisma/prisma.service';
import { CreateJobOfferDto, JobOfferFreshnessEnum } from './dto/job-offer.dto';
import { JobOfferFilterQueryDto } from './dto/job-offer-query.dto';
import { paginate, PaginationOption } from '../../../commons/pagination/pagination';

@Injectable()
export class JobOffersService {
  constructor(private readonly prisma: PrismaService) {}

  async saveOrUpdate(dto: CreateJobOfferDto) {
    const company = await this.prisma.company.upsert({
      where: { name: dto.company.name },
      update: {
        ...(dto.company.websiteUrl && { websiteUrl: dto.company.websiteUrl }),
        ...(dto.company.linkedinUrl && { linkedinUrl: dto.company.linkedinUrl }),
        ...(dto.company.industry && { industry: dto.company.industry }),
        ...(dto.company.fundingStage && { fundingStage: dto.company.fundingStage }),
        ...(dto.company.companySizeRange && { companySizeRange: dto.company.companySizeRange }),
        ...(dto.company.employeeCount !== null && dto.company.employeeCount !== undefined && { employeeCount: dto.company.employeeCount }),
      },
      create: {
        name: dto.company.name,
        websiteUrl: dto.company.websiteUrl ?? null,
        linkedinUrl: dto.company.linkedinUrl ?? null,
        industry: dto.company.industry ?? null,
        fundingStage: dto.company.fundingStage ?? null,
        companySizeRange: dto.company.companySizeRange ?? null,
        employeeCount: dto.company.employeeCount ?? null,
      },
    });

    const whereClause = dto.externalId 
      ? { source_externalId: { source: dto.source, externalId: dto.externalId } }
      : { url: dto.url };

    const skillsJson = dto.skills ? JSON.stringify(dto.skills) : null;

    const offer = await this.prisma.jobOffer.upsert({
      where: whereClause,
      update: {
        title: dto.title,
        location: dto.location ?? null,
        remoteType: dto.remoteType ?? 'UNSPECIFIED',
        rawDescription: dto.rawDescription,
        descriptionMarkdown: dto.descriptionMarkdown ?? null,
        salaryMin: dto.salaryMin ?? null,
        salaryMax: dto.salaryMax ?? null,
        currency: dto.currency ?? 'EUR',
        contractType: dto.contractType ?? null,
        roleCategory: dto.roleCategory ?? null,
        experienceLevel: dto.experienceLevel ?? 'UNSPECIFIED',
        skills: skillsJson,
        updatedAt: new Date(),
      },
      create: {
        externalId: dto.externalId ?? null,
        source: dto.source,
        url: dto.url,
        title: dto.title,
        location: dto.location ?? null,
        remoteType: dto.remoteType ?? 'UNSPECIFIED',
        rawDescription: dto.rawDescription,
        descriptionMarkdown: dto.descriptionMarkdown ?? null,
        datePosted: dto.datePosted ? new Date(dto.datePosted) : new Date(),
        companyId: company.id,
        salaryMin: dto.salaryMin ?? null,
        salaryMax: dto.salaryMax ?? null,
        currency: dto.currency ?? 'EUR',
        contractType: dto.contractType ?? null,
        roleCategory: dto.roleCategory ?? null,
        experienceLevel: dto.experienceLevel ?? 'UNSPECIFIED',
        skills: skillsJson,
      },
      include: {
        company: true,
      },
    });

    return offer;
  }

  async findAllPaginated(
    query: JobOfferFilterQueryDto,
    options?: {
      allowedStatuses?: ApplicationStatus[];
      excludeDisqualified?: boolean;
      onlyDisqualified?: boolean;
    },
  ) {
    const { skip, take } = paginate(query);

    const evaluationFilters: Prisma.JobEvaluationWhereInput = {};
    
    if (options?.onlyDisqualified) {
      evaluationFilters.priority = EvaluationPriority.DISQUALIFIED;
    } else if (query.priority) {
      const pUpper = query.priority.toUpperCase();
      const priorityHierarchy: Record<string, EvaluationPriority[]> = {
        HIGH: [EvaluationPriority.HIGH],
        MEDIUM: [EvaluationPriority.MEDIUM, EvaluationPriority.HIGH],
        LOW: [EvaluationPriority.LOW, EvaluationPriority.MEDIUM, EvaluationPriority.HIGH],
        DISQUALIFIED: [EvaluationPriority.DISQUALIFIED, EvaluationPriority.LOW, EvaluationPriority.MEDIUM, EvaluationPriority.HIGH],
      };

      const allowedPriorities = priorityHierarchy[pUpper] || [pUpper as EvaluationPriority];
      evaluationFilters.priority = { in: allowedPriorities };
    } else if (options?.excludeDisqualified) {
      evaluationFilters.priority = { not: EvaluationPriority.DISQUALIFIED };
    }

    if (query.evaluatorModel) {
      evaluationFilters.evaluatorModel = { equals: query.evaluatorModel as any };
    }

    if (query.minDesireScore !== undefined && query.minDesireScore !== null) {
      evaluationFilters.desireMatchScore = { gte: Number(query.minDesireScore) };
    }
    if (query.minCompetenceScore !== undefined && query.minCompetenceScore !== null) {
      evaluationFilters.competenceScore = { gte: Number(query.minCompetenceScore) };
    }
    if (query.minScore !== undefined && query.minScore !== null) {
      evaluationFilters.overallScore = { gte: Number(query.minScore) };
    }

    const whereClause: Prisma.JobOfferWhereInput = {};

    if (query.source) {
      whereClause.source = query.source;
    }

    if (query.status) {
      whereClause.status = query.status as ApplicationStatus;
    } else if (options?.allowedStatuses && options.allowedStatuses.length > 0) {
      whereClause.status = { in: options.allowedStatuses };
    } else if (!options?.onlyDisqualified) {
      whereClause.status = ApplicationStatus.NEW;
    }

    if (!query.includePending) {
      whereClause.evaluation = {
        isNot: null,
        ...(Object.keys(evaluationFilters).length > 0 && { is: evaluationFilters }),
      };
    } else if (Object.keys(evaluationFilters).length > 0) {
      whereClause.evaluation = { is: evaluationFilters };
    }


    if (query.remoteType) {
      whereClause.remoteType = query.remoteType;
    }

    if (query.freshness) {
      const nowMs = Date.now();
      const d7 = new Date(nowMs - 7 * 24 * 60 * 60 * 1000);
      const d30 = new Date(nowMs - 30 * 24 * 60 * 60 * 1000);
      const d90 = new Date(nowMs - 90 * 24 * 60 * 60 * 1000);

      let freshnessCondition: Prisma.JobOfferWhereInput;

      switch (query.freshness) {
        case JobOfferFreshnessEnum.HOT:
          freshnessCondition = {
            OR: [
              { datePosted: { gte: d7 } },
              { datePosted: null, createdAt: { gte: d7 } },
            ],
          };
          break;
        case JobOfferFreshnessEnum.RECENT:
          freshnessCondition = {
            OR: [
              { datePosted: { gte: d30, lt: d7 } },
              { datePosted: null, createdAt: { gte: d30, lt: d7 } },
            ],
          };
          break;
        case JobOfferFreshnessEnum.AGING:
          freshnessCondition = {
            OR: [
              { datePosted: { gte: d90, lt: d30 } },
              { datePosted: null, createdAt: { gte: d90, lt: d30 } },
            ],
          };
          break;
        case JobOfferFreshnessEnum.OLD:
          freshnessCondition = {
            OR: [
              { datePosted: { lt: d90 } },
              { datePosted: null, createdAt: { lt: d90 } },
            ],
          };
          break;
      }

      whereClause.AND = [
        ...(Array.isArray(whereClause.AND) ? whereClause.AND : whereClause.AND ? [whereClause.AND] : []),
        freshnessCondition,
      ];
    }

    if (query.search && query.search.trim().length > 0) {
      const searchStr = query.search.trim();
      whereClause.OR = [
        { title: { contains: searchStr, mode: 'insensitive' } },
        { company: { name: { contains: searchStr, mode: 'insensitive' } } },
      ];
    }

    const [offers, total] = await Promise.all([
      this.prisma.jobOffer.findMany({
        where: whereClause,
        skip,
        take,
        orderBy: [
          { evaluation: { priority: 'asc' } },
          { evaluation: { overallScore: 'desc' } },
          { evaluation: { desireMatchScore: 'desc' } },
          { createdAt: 'desc' },
        ],
        include: { company: true, evaluation: true, statusHistory: { orderBy: { createdAt: 'asc' } } },
      }),
      this.prisma.jobOffer.count({ where: whereClause }),
    ]);

    return PaginationOption(offers, total, query);
  }

  async findOne(id: string) {
    return this.prisma.jobOffer.findUnique({
      where: { id },
      include: { company: true, evaluation: true, statusHistory: { orderBy: { createdAt: 'asc' } } },
    });
  }

  async updateStatus(id: string, status: ApplicationStatus) {
    const existing = await this.prisma.jobOffer.findUnique({ where: { id } });
    if (!existing) return null;

    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.jobOffer.update({
        where: { id },
        data: { status },
        include: {
          company: true,
          evaluation: true,
          statusHistory: { orderBy: { createdAt: 'asc' } },
        },
      });

      await tx.jobStatusHistory.create({
        data: {
          jobOfferId: id,
          fromStatus: existing.status,
          toStatus: status,
        },
      });

      return updated;
    });
  }

  async getFunnelAnalytics() {
    const historyEntries = await this.prisma.jobStatusHistory.findMany({
      orderBy: { createdAt: 'asc' },
    });

    const statusCounts = await this.prisma.jobOffer.groupBy({
      by: ['status'],
      _count: { _all: true },
    });

    const counts: Record<string, number> = {};
    for (const item of statusCounts) {
      counts[item.status] = item._count._all;
    }

    const stageTransitions: Record<string, number> = {
      SAVED: 0,
      APPLIED: 0,
      SCREENING: 0,
      INTERVIEWING: 0,
      OFFER: 0,
      ACCEPTED: 0,
      REJECTED: 0,
      ARCHIVED: 0,
    };

    const rejectionDropOffs: Record<string, number> = {
      AFTER_APPLICATION: 0,
      AFTER_SCREENING: 0,
      AFTER_INTERVIEW: 0,
      AFTER_OFFER: 0,
      PRE_APPLICATION: 0,
    };

    for (const entry of historyEntries) {
      if (stageTransitions[entry.toStatus] !== undefined) {
        stageTransitions[entry.toStatus]++;
      }

      if (entry.toStatus === 'REJECTED') {
        switch (entry.fromStatus) {
          case 'APPLIED':
            rejectionDropOffs.AFTER_APPLICATION++;
            break;
          case 'SCREENING':
            rejectionDropOffs.AFTER_SCREENING++;
            break;
          case 'INTERVIEWING':
            rejectionDropOffs.AFTER_INTERVIEW++;
            break;
          case 'OFFER':
            rejectionDropOffs.AFTER_OFFER++;
            break;
          default:
            rejectionDropOffs.PRE_APPLICATION++;
            break;
        }
      }
    }

    const appliedCount = stageTransitions.APPLIED || counts.APPLIED || 0;
    const interviewingCount = stageTransitions.INTERVIEWING || counts.INTERVIEWING || 0;
    const offerCount = stageTransitions.OFFER || counts.OFFER || 0;
    const acceptedCount = stageTransitions.ACCEPTED || counts.ACCEPTED || 0;

    return {
      statusCounts: counts,
      stageTransitions,
      rejectionDropOffs,
      conversionRates: {
        applicationToInterview: appliedCount > 0 ? (interviewingCount / appliedCount) * 100 : 0,
        interviewToOffer: interviewingCount > 0 ? (offerCount / interviewingCount) * 100 : 0,
        offerToAcceptance: offerCount > 0 ? (acceptedCount / offerCount) * 100 : 0,
        overallSuccessRate: appliedCount > 0 ? (acceptedCount / appliedCount) * 100 : 0,
      },
    };
  }

  async findActiveAll(query?: JobOfferFilterQueryDto) {
    const activeStatuses = [
      ApplicationStatus.SAVED,
      ApplicationStatus.APPLIED,
      ApplicationStatus.SCREENING,
      ApplicationStatus.INTERVIEWING,
      ApplicationStatus.OFFER,
    ];

    const whereClause: Prisma.JobOfferWhereInput = {
      status: query?.status ? (query.status as ApplicationStatus) : { in: activeStatuses },
    };

    if (query?.remoteType) {
      whereClause.remoteType = query.remoteType;
    }

    if (query?.source) {
      whereClause.source = query.source;
    }

    if (query?.search && query.search.trim().length > 0) {
      const searchStr = query.search.trim();
      whereClause.OR = [
        { title: { contains: searchStr, mode: 'insensitive' } },
        { company: { name: { contains: searchStr, mode: 'insensitive' } } },
      ];
    }

    return this.prisma.jobOffer.findMany({
      where: whereClause,
      orderBy: [
        { evaluation: { priority: 'asc' } },
        { evaluation: { overallScore: 'desc' } },
        { updatedAt: 'desc' },
      ],
      include: {
        company: true,
        evaluation: true,
        statusHistory: { orderBy: { createdAt: 'asc' } },
      },
    });
  }
}
