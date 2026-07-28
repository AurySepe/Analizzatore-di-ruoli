import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../commons/prisma/prisma.service';
import { CreateJobOfferDto } from './dto/job-offer.dto';
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

  async findAllPaginated(query: JobOfferFilterQueryDto) {
    const { skip, take } = paginate(query);

    const evaluationFilters: Prisma.JobEvaluationWhereInput = {};
    
    // Gerarchia priorita: quando si seleziona una priorita, si includono quelle pari o superiori
    if (query.priority) {
      const pUpper = query.priority.toUpperCase();
      const priorityHierarchy: Record<string, string[]> = {
        HIGH: ['HIGH'],
        MEDIUM: ['MEDIUM', 'HIGH'],
        LOW: ['LOW', 'MEDIUM', 'HIGH'],
        DISQUALIFIED: ['DISQUALIFIED', 'LOW', 'MEDIUM', 'HIGH'],
      };

      const allowedPriorities = priorityHierarchy[pUpper] || [pUpper];
      evaluationFilters.priority = { in: allowedPriorities };
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
          { evaluation: { desireMatchScore: 'desc' } },
          { createdAt: 'desc' },
        ],
        include: { company: true, evaluation: true },
      }),
      this.prisma.jobOffer.count({ where: whereClause }),
    ]);

    return PaginationOption(offers, total, query);
  }

  async findOne(id: string) {
    return this.prisma.jobOffer.findUnique({
      where: { id },
      include: { company: true, evaluation: true },
    });
  }
}
