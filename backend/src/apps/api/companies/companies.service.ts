import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../commons/prisma/prisma.service';
import { ApplicationStatus, EvaluationPriority } from '@prisma/client';
import { CompanyJobOffersBreakdownDto, CompanySummaryDto } from './dto/company-job-offers.dto';

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllCompanies(): Promise<CompanySummaryDto[]> {
    const companies = await this.prisma.company.findMany({
      orderBy: { name: 'asc' },
      include: {
        jobOffers: {
          select: {
            id: true,
            status: true,
            evaluation: {
              select: {
                priority: true,
              },
            },
          },
        },
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

    return companies.map((c) => {
      const totalOffers = c.jobOffers.length;
      let pendingEvaluationCount = 0;
      let disqualifiedCount = 0;
      let eligibleOffersCount = 0;
      let activeOffersCount = 0;
      let savedOrAppliedCount = 0;
      let newOffersCount = 0;

      c.jobOffers.forEach((jo) => {
        if (!jo.evaluation) {
          pendingEvaluationCount++;
        } else if (jo.evaluation.priority === EvaluationPriority.DISQUALIFIED) {
          disqualifiedCount++;
        } else {
          eligibleOffersCount++;
          if (activeStatuses.includes(jo.status)) {
            activeOffersCount++;
          }
          if (jo.status === ApplicationStatus.NEW) {
            newOffersCount++;
          } else if (
            jo.status === ApplicationStatus.SAVED ||
            jo.status === ApplicationStatus.APPLIED ||
            jo.status === ApplicationStatus.SCREENING ||
            jo.status === ApplicationStatus.INTERVIEWING ||
            jo.status === ApplicationStatus.OFFER ||
            jo.status === ApplicationStatus.ACCEPTED
          ) {
            savedOrAppliedCount++;
          }
        }
      });

      return {
        id: c.id,
        name: c.name,
        websiteUrl: c.websiteUrl,
        linkedinUrl: c.linkedinUrl,
        industry: c.industry,
        fundingStage: c.fundingStage,
        companySizeRange: c.companySizeRange,
        employeeCount: c.employeeCount,
        totalOffersCount: totalOffers,
        eligibleOffersCount,
        activeOffersCount,
        savedOrAppliedCount,
        newOffersCount,
        pendingEvaluationCount,
        disqualifiedCount,
      };
    });
  }

  async getCompanyJobOffers(companyId: string): Promise<CompanyJobOffersBreakdownDto> {
    const company = await this.prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      throw new NotFoundException(`Azienda con ID "${companyId}" non trovata.`);
    }

    const allOffers = await this.prisma.jobOffer.findMany({
      where: { companyId },
      include: {
        company: true,
        evaluation: true,
        curriculum: true,
        statusHistory: { orderBy: { createdAt: 'asc' } },
      },
      orderBy: [
        { evaluation: { overallScore: 'desc' } },
        { createdAt: 'desc' },
      ],
    });

    let pendingEvaluationCount = 0;
    let disqualifiedCount = 0;
    let eligibleOffersCount = 0;
    let savedOrAppliedCount = 0;
    let newOffersCount = 0;
    const activeOffers: typeof allOffers = [];

    const activeStatuses: ApplicationStatus[] = [
      ApplicationStatus.NEW,
      ApplicationStatus.SAVED,
      ApplicationStatus.APPLIED,
      ApplicationStatus.SCREENING,
      ApplicationStatus.INTERVIEWING,
      ApplicationStatus.OFFER,
    ];

    allOffers.forEach((jo) => {
      if (!jo.evaluation) {
        pendingEvaluationCount++;
      } else if (jo.evaluation.priority === EvaluationPriority.DISQUALIFIED) {
        disqualifiedCount++;
      } else {
        eligibleOffersCount++;
        if (activeStatuses.includes(jo.status)) {
          activeOffers.push(jo);
        }
        if (jo.status === ApplicationStatus.NEW) {
          newOffersCount++;
        } else if (
          jo.status === ApplicationStatus.SAVED ||
          jo.status === ApplicationStatus.APPLIED ||
          jo.status === ApplicationStatus.SCREENING ||
          jo.status === ApplicationStatus.INTERVIEWING ||
          jo.status === ApplicationStatus.OFFER ||
          jo.status === ApplicationStatus.ACCEPTED
        ) {
          savedOrAppliedCount++;
        }
      }
    });

    return {
      company: {
        id: company.id,
        name: company.name,
        websiteUrl: company.websiteUrl,
        linkedinUrl: company.linkedinUrl,
        industry: company.industry,
        fundingStage: company.fundingStage,
        companySizeRange: company.companySizeRange,
        employeeCount: company.employeeCount,
      },
      counts: {
        totalOffers: allOffers.length,
        pendingEvaluationCount,
        disqualifiedCount,
        eligibleOffersCount,
        activeOffersCount: activeOffers.length,
        savedOrAppliedCount,
        newOffersCount,
      },
      offers: activeOffers.map((o) => ({
        ...o,
        company: {
          ...o.company,
          eligibleOffersCount,
          activeOffersCount: activeOffers.length,
          savedOrAppliedCount,
          newOffersCount,
        },
      })) as any,
    };
  }
}
