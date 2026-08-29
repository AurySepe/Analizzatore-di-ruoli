import { CompanyDto } from './dto/company.dto';
import { JobEvaluationDto } from '../evaluations/dto/job-evaluation.dto';
import { JobCurriculumDto } from './dto/job-curriculum.dto';
import {
  JobOfferDto,
  RemoteTypeEnum,
  ExperienceLevelEnum,
  ApplicationStatusEnum,
  JobStatusHistoryDto,
  calculateFreshness,
} from './dto/job-offer.dto';
import { JobOfferWithRelations } from './job-offers.service';

export function mapJobOfferToDto(rawOffer: JobOfferWithRelations): JobOfferDto {
  const parsedSkills: string[] = rawOffer.skills ? JSON.parse(rawOffer.skills) : [];

  const rawCompany = rawOffer.company;
  const companyDto = new CompanyDto({
    id: rawCompany.id,
    name: rawCompany.name,
    websiteUrl: rawCompany.websiteUrl ?? null,
    linkedinUrl: rawCompany.linkedinUrl ?? null,
    industry: rawCompany.industry ?? null,
    fundingStage: rawCompany.fundingStage ?? null,
    companySizeRange: rawCompany.companySizeRange ?? null,
    employeeCount: rawCompany.employeeCount ?? null,
    eligibleOffersCount: (rawCompany as any).eligibleOffersCount ?? 0,
    activeOffersCount: (rawCompany as any).activeOffersCount ?? 0,
    savedOrAppliedCount: (rawCompany as any).savedOrAppliedCount ?? 0,
    newOffersCount: (rawCompany as any).newOffersCount ?? 0,
  });

  let evaluationDto: JobEvaluationDto | null = null;
  if (rawOffer.evaluation) {
    evaluationDto = new JobEvaluationDto({
      id: rawOffer.evaluation.id,
      jobOfferId: rawOffer.evaluation.jobOfferId,
      desireMatchScore: rawOffer.evaluation.desireMatchScore ?? rawOffer.evaluation.overallScore,
      competenceScore: rawOffer.evaluation.competenceScore ?? 50,
      overallScore: rawOffer.evaluation.overallScore,
      priority: rawOffer.evaluation.priority,
      status: rawOffer.evaluation.status,
      evaluatorModel: rawOffer.evaluation.evaluatorModel,
      summary: rawOffer.evaluation.summary ?? null,
      desireMatchReasoning: rawOffer.evaluation.desireMatchReasoning ?? null,
      competenceMatch: rawOffer.evaluation.competenceMatch,
      detailedReasoning: rawOffer.evaluation.detailedReasoning,
      pros: rawOffer.evaluation.pros ? JSON.parse(rawOffer.evaluation.pros) : [],
      cons: rawOffer.evaluation.cons ? JSON.parse(rawOffer.evaluation.cons) : [],
      createdAt: rawOffer.evaluation.createdAt,
      updatedAt: rawOffer.evaluation.updatedAt,
    });
  }

  let curriculumDto: JobCurriculumDto | null = null;
  if (rawOffer.curriculum) {
    curriculumDto = new JobCurriculumDto({
      id: rawOffer.curriculum.id,
      jobOfferId: rawOffer.curriculum.jobOfferId,
      storageKey: rawOffer.curriculum.storageKey,
      explanation: rawOffer.curriculum.explanation,
      customLabel: rawOffer.curriculum.customLabel,
      work: (rawOffer.curriculum.work || []).map((w) => ({
        name: w.name,
        position: w.position,
        summary: w.summary,
        include: w.include,
      })),
      projects: (rawOffer.curriculum.projects || []).map((p) => ({
        name: p.name,
        description: p.description,
      })),
      selectedPublicationTitles: (rawOffer.curriculum.publications || []).map((pub) => pub.title),
      createdAt: rawOffer.curriculum.createdAt,
      updatedAt: rawOffer.curriculum.updatedAt,
    });
  }

  const statusHistory = (rawOffer.statusHistory || []).map(
    (h) =>
      new JobStatusHistoryDto({
        id: h.id,
        fromStatus: h.fromStatus as ApplicationStatusEnum | null,
        toStatus: h.toStatus as ApplicationStatusEnum,
        createdAt: h.createdAt,
      }),
  );

  return new JobOfferDto({
    id: rawOffer.id,
    externalId: rawOffer.externalId ?? null,
    source: rawOffer.source,
    url: rawOffer.url,
    title: rawOffer.title,
    location: rawOffer.location ?? null,
    remoteType: (rawOffer.remoteType as RemoteTypeEnum) ?? RemoteTypeEnum.UNSPECIFIED,
    rawDescription: rawOffer.rawDescription,
    descriptionMarkdown: rawOffer.descriptionMarkdown ?? null,
    datePosted: rawOffer.datePosted ?? null,
    company: companyDto,
    evaluation: evaluationDto,
    curriculum: curriculumDto,
    salaryMin: rawOffer.salaryMin ?? null,
    salaryMax: rawOffer.salaryMax ?? null,
    currency: rawOffer.currency ?? 'EUR',
    contractType: rawOffer.contractType ?? null,
    roleCategory: rawOffer.roleCategory ?? null,
    experienceLevel: (rawOffer.experienceLevel as ExperienceLevelEnum) ?? ExperienceLevelEnum.UNSPECIFIED,
    skills: parsedSkills,
    status: (rawOffer.status as ApplicationStatusEnum) ?? ApplicationStatusEnum.NEW,
    freshness: calculateFreshness(rawOffer.datePosted, rawOffer.createdAt),
    statusHistory,
    notes: rawOffer.notes ?? null,
    createdAt: rawOffer.createdAt,
    updatedAt: rawOffer.updatedAt,
  });
}
