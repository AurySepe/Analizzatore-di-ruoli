import { Controller, Get, Post, Patch, Body, Param, Query, NotFoundException, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApplicationStatus } from '@prisma/client';
import { Response } from 'express';
import * as fs from 'fs';
import { JobOffersService } from './job-offers.service';
import { JobOfferDto, CreateJobOfferDto, RemoteTypeEnum, ExperienceLevelEnum, ApplicationStatusEnum, calculateFreshness } from './dto/job-offer.dto';
import { JobOfferFilterQueryDto } from './dto/job-offer-query.dto';
import { UpdateJobOfferStatusDto } from './dto/update-job-offer-status.dto';
import { UpdateCurriculumTailoringDto } from './dto/update-curriculum-tailoring.dto';
import { CompanyDto } from './dto/company.dto';
import { JobEvaluationDto } from '../evaluations/dto/job-evaluation.dto';
import { JobCurriculumDto } from './dto/job-curriculum.dto';
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

  @Get()
  @ApiOperation({ summary: 'Recupera la lista dei nuovi annunci di lavoro non ancora catalogati (stato NEW, esclusi i DISQUALIFIED dall AI)' })
  @ApiPaginatedResponse(JobOfferDto)
  async findAllNew(
    @Query() query: JobOfferFilterQueryDto,
  ): Promise<PaginatedDto<JobOfferDto>> {
    const paginated = await this.jobOffersService.findAllPaginated(query, {
      allowedStatuses: [ApplicationStatus.NEW],
      excludeDisqualified: true,
    });

    return {
      data: paginated.data.map((item: any) => this.mapToDto(item)),
      meta: paginated.meta,
    };
  }

  @Get('active')
  @ApiOperation({ summary: 'Recupera TUTTI gli annunci attivi in gestione senza paginazione (SAVED, APPLIED, SCREENING, INTERVIEWING, OFFER)' })
  @ApiResponse({ status: 200, type: [JobOfferDto] })
  async findActive(
    @Query() query: JobOfferFilterQueryDto,
  ): Promise<JobOfferDto[]> {
    const offers = await this.jobOffersService.findActiveAll(query);
    return offers.map((item: any) => this.mapToDto(item));
  }

  @Get('closed')
  @ApiOperation({ summary: 'Recupera la lista degli annunci conclusi o scartati dall utente (REJECTED, ARCHIVED)' })
  @ApiPaginatedResponse(JobOfferDto)
  async findClosed(
    @Query() query: JobOfferFilterQueryDto,
  ): Promise<PaginatedDto<JobOfferDto>> {
    const closedStatuses = [
      ApplicationStatus.REJECTED,
      ApplicationStatus.ARCHIVED,
    ];
    const paginated = await this.jobOffersService.findAllPaginated(query, {
      allowedStatuses: closedStatuses,
    });

    return {
      data: paginated.data.map((item: any) => this.mapToDto(item)),
      meta: paginated.meta,
    };
  }

  @Get('disqualified')
  @ApiOperation({ summary: 'Recupera la lista degli annunci scartati dall AI (priorità DISQUALIFIED)' })
  @ApiPaginatedResponse(JobOfferDto)
  async findDisqualified(
    @Query() query: JobOfferFilterQueryDto,
  ): Promise<PaginatedDto<JobOfferDto>> {
    const paginated = await this.jobOffersService.findAllPaginated(query, {
      onlyDisqualified: true,
    });

    return {
      data: paginated.data.map((item: any) => this.mapToDto(item)),
      meta: paginated.meta,
    };
  }

  @Get('paginated')
  @ApiOperation({ summary: 'Alias per il recupero dei nuovi annunci non catalogati' })
  @ApiPaginatedResponse(JobOfferDto)
  async findAllPaginated(
    @Query() query: JobOfferFilterQueryDto,
  ): Promise<PaginatedDto<JobOfferDto>> {
    return this.findAllNew(query);
  }

  @Get('analytics/funnel')
  @ApiOperation({ summary: 'Recupera le statistiche ed il funnel di avanzamento/scarto delle candidature' })
  async getFunnelAnalytics() {
    return this.jobOffersService.getFunnelAnalytics();
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

  @Get(':id/curriculum/pdf')
  @ApiOperation({ summary: 'Scarica o visualizza il file PDF del curriculum personalizzato generato per l annuncio' })
  async getCurriculumPdf(@Param('id') id: string, @Res() res: Response) {
    const rawOffer = await this.jobOffersService.findOne(id);
    if (!rawOffer || !rawOffer.curriculum) {
      throw new NotFoundException(`Curriculum PDF per l'annuncio "${id}" non ancora disponibile.`);
    }

    const filePath = rawOffer.curriculum.filePath;
    if (!fs.existsSync(filePath)) {
      throw new NotFoundException(`File PDF non trovato sul disco in: ${filePath}`);
    }

    // Sanitizza il titolo del ruolo (rimuove caratteri speciali/spazi e imposta il formato AurelioSepe-[ruolo]-cv.pdf)
    const sanitizedTitle = (rawOffer.title || 'Role')
      .trim()
      .replace(/[^a-zA-Z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    const downloadFileName = `AurelioSepe-${sanitizedTitle}-cv.pdf`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${downloadFileName}"`);

    return res.sendFile(filePath);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Aggiorna lo stato di un annuncio di lavoro (es. APPLIED, INTERVIEWING, REJECTED, ARCHIVED) e registra la cronologia' })
  @ApiResponse({ status: 200, type: JobOfferDto })
  async updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateJobOfferStatusDto,
  ): Promise<JobOfferDto> {
    const existing = await this.jobOffersService.findOne(id);
    if (!existing) {
      throw new NotFoundException(`Annuncio con ID "${id}" non trovato`);
    }

    const updated = await this.jobOffersService.updateStatus(id, dto.status as ApplicationStatus);
    return this.mapToDto(updated);
  }

  @Patch(':id/curriculum')
  @ApiOperation({ summary: 'Aggiorna i dati di personalizzazione del curriculum e rigenera il PDF' })
  @ApiResponse({ status: 200, type: JobOfferDto })
  async updateCurriculumTailoring(
    @Param('id') id: string,
    @Body() dto: UpdateCurriculumTailoringDto,
  ): Promise<JobOfferDto> {
    const updated = await this.jobOffersService.updateCurriculumTailoring(id, dto);
    return this.mapToDto(updated);
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
      eligibleOffersCount: rawOffer.company.eligibleOffersCount ?? 0,
      activeOffersCount: rawOffer.company.activeOffersCount ?? 0,
      savedOrAppliedCount: rawOffer.company.savedOrAppliedCount ?? 0,
      newOffersCount: rawOffer.company.newOffersCount ?? 0,
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
        summary: rawOffer.evaluation.summary ?? null,
        desireMatchReasoning: rawOffer.evaluation.desireMatchReasoning ?? null,
        competenceMatch: rawOffer.evaluation.competenceMatch,
        detailedReasoning: rawOffer.evaluation.detailedReasoning,
        pros: rawOffer.evaluation.pros ? JSON.parse(rawOffer.evaluation.pros) : [],
        cons: rawOffer.evaluation.cons ? JSON.parse(rawOffer.evaluation.cons) : [],
        createdAt: rawOffer.evaluation.createdAt,
        updatedAt: rawOffer.evaluation.updatedAt,
      };
    }

    let curriculumDto: JobCurriculumDto | null = null;
    if (rawOffer.curriculum) {
      let parsedTailoringData = null;
      if (rawOffer.curriculum.tailoringData) {
        try {
          parsedTailoringData = JSON.parse(rawOffer.curriculum.tailoringData);
        } catch {
          parsedTailoringData = null;
        }
      }

      curriculumDto = new JobCurriculumDto({
        id: rawOffer.curriculum.id,
        jobOfferId: rawOffer.curriculum.jobOfferId,
        filePath: rawOffer.curriculum.filePath,
        explanation: rawOffer.curriculum.explanation,
        tailoringData: parsedTailoringData,
        createdAt: rawOffer.curriculum.createdAt,
        updatedAt: rawOffer.curriculum.updatedAt,
      });
    }

    const statusHistory = rawOffer.statusHistory
      ? rawOffer.statusHistory.map((h: any) => ({
          id: h.id,
          fromStatus: h.fromStatus as ApplicationStatusEnum | null,
          toStatus: h.toStatus as ApplicationStatusEnum,
          createdAt: h.createdAt,
        }))
      : [];

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
}
