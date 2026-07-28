import { Controller, Get, Post, Body, Param, Query, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JobOffersService } from './job-offers.service';
import { JobOfferDto, CreateJobOfferDto, RemoteTypeEnum, ExperienceLevelEnum, ApplicationStatusEnum } from './dto/job-offer.dto';
import { JobOfferFilterQueryDto } from './dto/job-offer-query.dto';
import { CompanyDto } from './dto/company.dto';
import { JobEvaluationDto } from '../evaluations/dto/job-evaluation.dto';
import { PaginatedDto } from '../../../commons/pagination/paginated.dto';
import { ApiPaginatedResponse } from '../../../commons/pagination/paginated.dto';

@ApiTags('job-offers')
@Controller('job-offers')
export class JobOffersController {
  constructor(private readonly jobOffersService: JobOffersService) {}

  @Post()
  @ApiOperation({ summary: 'Crea o aggiorna un annuncio di lavoro' })
  @ApiResponse({ status: 201, type: JobOfferDto })
  async create(@Body() createDto: CreateJobOfferDto): Promise<JobOfferDto> {
    const rawOffer = await this.jobOffersService.saveOrUpdate(createDto);
    return this.mapToDto(rawOffer);
  }

  @Get('paginated')
  @ApiOperation({ summary: 'Recupera la lista paginata e filtrata degli annunci di lavoro (con punteggi AI)' })
  @ApiPaginatedResponse(JobOfferDto)
  async findAllPaginated(
    @Query() query: JobOfferFilterQueryDto,
  ): Promise<PaginatedDto<JobOfferDto>> {
    const paginated = await this.jobOffersService.findAllPaginated(query);

    return {
      data: paginated.data.map((item: any) => this.mapToDto(item)),
      meta: paginated.meta,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Recupera un singolo annuncio di lavoro tramite ID' })
  async findOne(@Param('id') id: string): Promise<JobOfferDto> {
    const rawOffer = await this.jobOffersService.findOne(id);
    if (!rawOffer) {
      throw new NotFoundException(`Annuncio con ID "${id}" non trovato`);
    }

    return this.mapToDto(rawOffer);
  }

  private mapToDto(rawOffer: any): JobOfferDto {
    const parsedSkills = rawOffer.skills ? JSON.parse(rawOffer.skills) : [];

    const companyDto = new CompanyDto({
      id: rawOffer.company.id,
      name: rawOffer.company.name,
      websiteUrl: rawOffer.company.websiteUrl ?? null,
      linkedinUrl: rawOffer.company.linkedinUrl ?? null,
      industry: rawOffer.company.industry ?? null,
      fundingStage: rawOffer.company.fundingStage ?? null,
      companySizeRange: rawOffer.company.companySizeRange ?? null,
      employeeCount: rawOffer.company.employeeCount ?? null,
    });

    let evaluationDto: JobEvaluationDto | null = null;
    if (rawOffer.evaluation) {
      evaluationDto = {
        id: rawOffer.evaluation.id,
        jobOfferId: rawOffer.evaluation.jobOfferId,
        desireMatchScore: rawOffer.evaluation.desireMatchScore ?? rawOffer.evaluation.overallScore,
        competenceScore: rawOffer.evaluation.competenceScore ?? 50,
        overallScore: rawOffer.evaluation.overallScore,
        priority: rawOffer.evaluation.priority,
        status: rawOffer.evaluation.status,
        evaluatorModel: rawOffer.evaluation.evaluatorModel,
        desireMatchReasoning: rawOffer.evaluation.desireMatchReasoning ?? null,
        competenceMatch: rawOffer.evaluation.competenceMatch,
        detailedReasoning: rawOffer.evaluation.detailedReasoning,
        pros: rawOffer.evaluation.pros ? JSON.parse(rawOffer.evaluation.pros) : [],
        cons: rawOffer.evaluation.cons ? JSON.parse(rawOffer.evaluation.cons) : [],
        createdAt: rawOffer.evaluation.createdAt,
        updatedAt: rawOffer.evaluation.updatedAt,
      };
    }


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
      salaryMin: rawOffer.salaryMin ?? null,
      salaryMax: rawOffer.salaryMax ?? null,
      currency: rawOffer.currency ?? 'EUR',
      contractType: rawOffer.contractType ?? null,
      roleCategory: rawOffer.roleCategory ?? null,
      experienceLevel: (rawOffer.experienceLevel as ExperienceLevelEnum) ?? ExperienceLevelEnum.UNSPECIFIED,
      skills: parsedSkills,
      status: (rawOffer.status as ApplicationStatusEnum) ?? ApplicationStatusEnum.NEW,
      notes: rawOffer.notes ?? null,
      createdAt: rawOffer.createdAt,
      updatedAt: rawOffer.updatedAt,
    });
  }
}
