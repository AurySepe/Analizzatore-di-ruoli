import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, ApplicationStatus, EvaluationPriority } from '@analizzatore/database';
import * as path from 'path';
import { PrismaService } from '../commons/prisma/prisma.service';
import { S3StorageService } from '../commons/storage/s3-storage.service';
import { CreateJobOfferDto, JobOfferFreshnessEnum } from './dto/job-offer.dto';
import { JobOfferFilterQueryDto } from './dto/job-offer-query.dto';
import { paginate, PaginationOption } from '../commons/pagination/pagination';
import type { UpdateCurriculumTailoringDto } from './dto/update-curriculum-tailoring.dto';
import { JobOffersAnalyticsService } from './job-offers-analytics.service';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import {
  CURRICULUM_QUEUE_NAME,
  GENERATE_CURRICULUM_EVENT,
  GenerateCurriculumTaskEvent,
} from '@analizzatore/contracts';

export const defaultOfferInclude = {
  company: true,
  evaluation: true,
  curriculum: {
    include: {
      work: { orderBy: { order: 'asc' as const } },
      projects: { orderBy: { order: 'asc' as const } },
      publications: { orderBy: { order: 'asc' as const } },
    },
  },
  statusHistory: { orderBy: { createdAt: 'asc' as const } },
};

export type JobOfferWithRelations = Prisma.JobOfferGetPayload<{ include: typeof defaultOfferInclude }>;

@Injectable()
export class JobOffersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3StorageService: S3StorageService,
    private readonly analyticsService: JobOffersAnalyticsService,
    @InjectQueue(CURRICULUM_QUEUE_NAME) private readonly curriculumQueue: Queue,
  ) {}

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
      include: defaultOfferInclude,
    });

    const [offerWithCounts] = await this.attachCompanyActiveCounts([offer]);
    return offerWithCounts;
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

    const [rawOffers, total] = await Promise.all([
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
        include: defaultOfferInclude,
      }),
      this.prisma.jobOffer.count({ where: whereClause }),
    ]);

    const offers = await this.attachCompanyActiveCounts(rawOffers);
    return PaginationOption(offers, total, query);
  }

  async findOne(id: string) {
    const offer = await this.prisma.jobOffer.findUnique({
      where: { id },
      include: defaultOfferInclude,
    });

    if (offer) {
      await this.attachCompanyActiveCounts([offer]);
    }
    return offer;
  }

  async updateStatus(id: string, status: ApplicationStatus) {
    const existing = await this.prisma.jobOffer.findUnique({ where: { id } });
    if (!existing) return null;

    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.jobOffer.update({
        where: { id },
        data: { status },
        include: defaultOfferInclude,
      });

      await tx.jobStatusHistory.create({
        data: {
          jobOfferId: id,
          fromStatus: existing.status,
          toStatus: status,
        },
      });

      if (updated) {
        await this.attachCompanyActiveCounts([updated]);
      }

      return updated;
    });
  }

  private async attachCompanyActiveCounts<T extends { company?: any }>(offers: T[]): Promise<T[]> {
    const companyIds = Array.from(new Set(offers.map((o) => o.company?.id).filter(Boolean)));
    if (companyIds.length === 0) return offers;

    const companyOffers = await this.prisma.jobOffer.findMany({
      where: {
        companyId: { in: companyIds },
        evaluation: {
          is: {
            priority: { not: EvaluationPriority.DISQUALIFIED },
          },
        },
      },
      select: {
        companyId: true,
        status: true,
      },
    });

    const activeStatuses: ApplicationStatus[] = [
      ApplicationStatus.NEW,
      ApplicationStatus.SAVED,
      ApplicationStatus.APPLIED,
      ApplicationStatus.SCREENING,
      ApplicationStatus.INTERVIEWING,
      ApplicationStatus.OFFER,
    ];

    const eligibleMap = new Map<string, number>();
    const activeMap = new Map<string, number>();
    const savedOrAppliedMap = new Map<string, number>();
    const newOffersMap = new Map<string, number>();

    companyOffers.forEach((o) => {
      eligibleMap.set(o.companyId, (eligibleMap.get(o.companyId) ?? 0) + 1);
      if (activeStatuses.includes(o.status)) {
        activeMap.set(o.companyId, (activeMap.get(o.companyId) ?? 0) + 1);
      }
      if (o.status === ApplicationStatus.NEW) {
        newOffersMap.set(o.companyId, (newOffersMap.get(o.companyId) ?? 0) + 1);
      } else if (
        o.status === ApplicationStatus.SAVED ||
        o.status === ApplicationStatus.APPLIED ||
        o.status === ApplicationStatus.SCREENING ||
        o.status === ApplicationStatus.INTERVIEWING ||
        o.status === ApplicationStatus.OFFER ||
        o.status === ApplicationStatus.ACCEPTED
      ) {
        savedOrAppliedMap.set(o.companyId, (savedOrAppliedMap.get(o.companyId) ?? 0) + 1);
      }
    });

    offers.forEach((o) => {
      if (o.company) {
        o.company.eligibleOffersCount = eligibleMap.get(o.company.id) ?? 0;
        o.company.activeOffersCount = activeMap.get(o.company.id) ?? 0;
        o.company.savedOrAppliedCount = savedOrAppliedMap.get(o.company.id) ?? 0;
        o.company.newOffersCount = newOffersMap.get(o.company.id) ?? 0;
      }
    });

    return offers;
  }

  async getFunnelAnalytics() {
    return this.analyticsService.getFunnelAnalytics();
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

    const offers = await this.prisma.jobOffer.findMany({
      where: whereClause,
      orderBy: [
        { evaluation: { priority: 'asc' } },
        { evaluation: { overallScore: 'desc' } },
        { updatedAt: 'desc' },
      ],
      include: defaultOfferInclude,
    });

    return this.attachCompanyActiveCounts(offers);
  }

  async getCompanyJobOffersBreakdown(companyId: string) {
    const company = await this.prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      throw new NotFoundException(`Azienda con ID "${companyId}" non trovata`);
    }

    const offers = await this.prisma.jobOffer.findMany({
      where: { companyId },
      include: defaultOfferInclude,
    });

    const pendingEvaluationCount = offers.filter(
      (o) => !o.evaluation || o.evaluation.status !== 'SUCCESS',
    ).length;

    const disqualifiedCount = offers.filter(
      (o) => o.evaluation && o.evaluation.priority === 'DISQUALIFIED',
    ).length;

    const newOffersCount = offers.filter(
      (o) =>
        o.evaluation &&
        o.evaluation.status === 'SUCCESS' &&
        o.evaluation.priority !== 'DISQUALIFIED' &&
        o.status === 'NEW',
    ).length;

    const savedOrAppliedCount = offers.filter(
      (o) =>
        o.evaluation &&
        o.evaluation.status === 'SUCCESS' &&
        o.evaluation.priority !== 'DISQUALIFIED' &&
        o.status !== 'NEW' &&
        o.status !== 'REJECTED' &&
        o.status !== 'ARCHIVED',
    ).length;

    const eligibleOffers = offers.filter(
      (o) =>
        o.evaluation &&
        o.evaluation.status === 'SUCCESS' &&
        o.evaluation.priority !== 'DISQUALIFIED',
    );

    return {
      company,
      counts: {
        total: offers.length,
        savedOrAppliedCount,
        newOffersCount,
        pendingEvaluationCount,
        disqualifiedCount,
      },
      offers: eligibleOffers,
    };
  }

  async getActiveJobOffers(companyId?: string) {
    const whereClause: any = {
      status: {
        in: ['SAVED', 'APPLIED', 'SCREENING', 'INTERVIEWING', 'OFFER', 'ACCEPTED'],
      },
    };

    if (companyId) {
      whereClause.companyId = companyId;
    }

    const offers = await this.prisma.jobOffer.findMany({
      where: whereClause,
      orderBy: [
        { evaluation: { priority: 'asc' } },
        { evaluation: { overallScore: 'desc' } },
        { updatedAt: 'desc' },
      ],
      include: defaultOfferInclude,
    });

    return this.attachCompanyActiveCounts(offers);
  }

  async updateCurriculumTailoring(jobOfferId: string, dto: UpdateCurriculumTailoringDto) {
    const curriculum = await this.prisma.jobCurriculum.findUnique({
      where: { jobOfferId },
      include: {
        work: { orderBy: { order: 'asc' } },
        projects: { orderBy: { order: 'asc' } },
        publications: { orderBy: { order: 'asc' } },
      },
    });

    if (!curriculum) {
      throw new NotFoundException(`Nessun curriculum trovato per l'annuncio con ID "${jobOfferId}"`);
    }

    // Invia task per rigenerare il PDF al Curriculum Worker tramite BullMQ
    const payload: GenerateCurriculumTaskEvent = {
      jobOfferId,
      forceRegenerate: true,
    };

    await this.curriculumQueue.add(GENERATE_CURRICULUM_EVENT, payload, {
      jobId: `cv-gen-${jobOfferId}-${Date.now()}`,
      attempts: 3,
      backoff: { type: 'exponential', delay: 2000 },
      removeOnComplete: true,
    });

    // Aggiornamento del record nel DB con transazione relazionale
    await this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      if (dto.work) {
        await tx.jobCurriculumWork.deleteMany({ where: { curriculumId: curriculum.id } });
      }
      if (dto.projects) {
        await tx.jobCurriculumProject.deleteMany({ where: { curriculumId: curriculum.id } });
      }
      if (dto.selectedPublicationTitles) {
        await tx.jobCurriculumPublication.deleteMany({ where: { curriculumId: curriculum.id } });
      }

      await tx.jobCurriculum.update({
        where: { id: curriculum.id },
        data: {
          explanation: dto.explanation ?? curriculum.explanation,
          customLabel: dto.customLabel !== undefined ? dto.customLabel : curriculum.customLabel,
          work: dto.work
            ? {
                create: dto.work.map((w, idx) => ({
                  name: w.name,
                  position: w.position || '',
                  summary: w.summary,
                  include: w.include !== false,
                  order: idx,
                })),
              }
            : undefined,
          projects: dto.projects
            ? {
                create: dto.projects.map((p, idx) => ({
                  name: p.name,
                  description: p.description,
                  order: idx,
                })),
              }
            : undefined,
          publications: dto.selectedPublicationTitles
            ? {
                create: dto.selectedPublicationTitles.map((title, idx) => ({
                  title,
                  order: idx,
                })),
              }
            : undefined,
        },
      });
    });

    // Restituzione dell'annuncio aggiornato
    return this.findOne(jobOfferId);
  }
}

