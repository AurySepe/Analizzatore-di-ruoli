import { Injectable } from '@nestjs/common';
import { PrismaService } from '../commons/prisma/prisma.service';
import { CreateJobOfferDto } from './dto/job-offer.dto';
import { QueryPaginationDto } from '../commons/pagination/query-pagination.dto';
import { paginate, PaginationOption } from '../commons/pagination/pagination';

@Injectable()
export class JobOffersService {
  constructor(private readonly prisma: PrismaService) {}

  async saveOrUpdate(dto: CreateJobOfferDto) {
    // 1. Upsert Azienda
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

    // 2. Identification clause
    const whereClause = dto.externalId 
      ? { source_externalId: { source: dto.source, externalId: dto.externalId } }
      : { url: dto.url };

    const skillsJson = dto.skills ? JSON.stringify(dto.skills) : null;

    // 3. Upsert Offerta
    const offer = await this.prisma.jobOffer.upsert({
      where: whereClause,
      update: {
        title: dto.title,
        location: dto.location ?? null,
        remoteType: dto.remoteType ?? 'UNSPECIFIED',
        rawDescription: dto.rawDescription,
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

  async findAllPaginated(queryPagination: QueryPaginationDto) {
    const { skip, take } = paginate(queryPagination);

    // Esegue le query in parallelo per ottimizzare i tempi di risposta
    const [offers, total] = await Promise.all([
      this.prisma.jobOffer.findMany({
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        include: { company: true },
      }),
      this.prisma.jobOffer.count(),
    ]);

    return PaginationOption(offers, total, queryPagination);
  }

  async findOne(id: string) {
    return this.prisma.jobOffer.findUnique({
      where: { id },
      include: { company: true },
    });
  }
}
