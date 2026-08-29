import { Controller, Get, Post, Patch, Body, Param, Query, NotFoundException, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiExtraModels, ApiProduces } from '@nestjs/swagger';
import { ApplicationStatus } from '@prisma/client';
import { Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { JobOffersService } from './job-offers.service';
import { JobOfferDto, CreateJobOfferDto } from './dto/job-offer.dto';
import { JobOfferFilterQueryDto } from './dto/job-offer-query.dto';
import { UpdateJobOfferStatusDto } from './dto/update-job-offer-status.dto';
import { UpdateCurriculumTailoringDto, WorkTailoringDto, ProjectTailoringDto } from './dto/update-curriculum-tailoring.dto';
import { JobCurriculumDto } from './dto/job-curriculum.dto';
import { JobOffersFunnelAnalyticsDto } from './dto/funnel-analytics.dto';
import { PaginatedDto, ApiPaginatedResponse } from '../../../commons/pagination/paginated.dto';
import { S3StorageService } from '../../../commons/storage/s3-storage.service';
import { mapJobOfferToDto } from './job-offer.mapper';

@ApiTags('job-offers')
@ApiExtraModels(JobCurriculumDto, UpdateCurriculumTailoringDto, WorkTailoringDto, ProjectTailoringDto, JobOffersFunnelAnalyticsDto)
@Controller('job-offers')
export class JobOffersController {
  constructor(
    private readonly jobOffersService: JobOffersService,
    private readonly s3StorageService: S3StorageService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crea o aggiorna un annuncio di lavoro' })
  @ApiResponse({ status: 201, type: JobOfferDto })
  async create(@Body() createDto: CreateJobOfferDto): Promise<JobOfferDto> {
    const rawOffer = await this.jobOffersService.saveOrUpdate(createDto);
    return mapJobOfferToDto(rawOffer);
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
      data: paginated.data.map((item) => mapJobOfferToDto(item)),
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
    return offers.map((item) => mapJobOfferToDto(item));
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
      data: paginated.data.map((item) => mapJobOfferToDto(item)),
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
      data: paginated.data.map((item) => mapJobOfferToDto(item)),
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
  @ApiResponse({ status: 200, type: JobOffersFunnelAnalyticsDto })
  async getFunnelAnalytics(): Promise<JobOffersFunnelAnalyticsDto> {
    const rawAnalytics = await this.jobOffersService.getFunnelAnalytics();
    return new JobOffersFunnelAnalyticsDto(rawAnalytics);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Recupera un singolo annuncio di lavoro tramite ID' })
  @ApiResponse({ status: 200, type: JobOfferDto })
  async findOne(@Param('id') id: string): Promise<JobOfferDto> {
    const rawOffer = await this.jobOffersService.findOne(id);
    if (!rawOffer) {
      throw new NotFoundException(`Annuncio con ID "${id}" non trovato`);
    }

    return mapJobOfferToDto(rawOffer);
  }

  @Get(':id/curriculum/pdf')
  @ApiOperation({ summary: 'Scarica o visualizza il file PDF del curriculum personalizzato generato per l annuncio' })
  @ApiProduces('application/pdf')
  @ApiResponse({ status: 200, description: 'File PDF del curriculum personalizzato' })
  async getCurriculumPdf(@Param('id') id: string, @Res() res: Response) {
    const rawOffer = await this.jobOffersService.findOne(id);
    if (!rawOffer || !rawOffer.curriculum) {
      throw new NotFoundException(`Curriculum PDF per l'annuncio "${id}" non ancora disponibile.`);
    }

    const rawKey = rawOffer.curriculum.storageKey;
    const storageKey = rawKey && rawKey.startsWith('curriculums/') ? rawKey : `curriculums/cv_${id}.pdf`;

    const sanitizedTitle = (rawOffer.title || 'Role')
      .trim()
      .replace(/[^a-zA-Z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    const downloadFileName = `AurelioSepe-${sanitizedTitle}-cv.pdf`;

    // 1. Prova recupero da Object Storage (S3 / MinIO)
    try {
      const s3Object = await this.s3StorageService.getStream(storageKey);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename="${downloadFileName}"`);
      if (s3Object.contentLength) {
        res.setHeader('Content-Length', s3Object.contentLength);
      }
      return s3Object.stream.pipe(res);
    } catch {
      // 2. Fallback resiliente al filesystem locale
      const fileName = `cv_${id}.pdf`;
      const candidates = [
        rawKey,
        path.resolve(process.cwd(), 'storage', 'resumes', fileName),
        path.resolve('/app/storage/resumes', fileName),
      ].filter(Boolean) as string[];

      for (const cand of candidates) {
        if (fs.existsSync(cand)) {
          res.setHeader('Content-Type', 'application/pdf');
          res.setHeader('Content-Disposition', `inline; filename="${downloadFileName}"`);
          return res.sendFile(path.resolve(cand));
        }
      }
      throw new NotFoundException(`Curriculum PDF non trovato in S3 (${storageKey}) o su disco locale.`);
    }
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
    if (!updated) {
      throw new NotFoundException(`Annuncio con ID "${id}" non trovato`);
    }
    return mapJobOfferToDto(updated);
  }

  @Patch(':id/curriculum')
  @ApiOperation({ summary: 'Aggiorna i dati di personalizzazione del curriculum e rigenera il PDF' })
  @ApiResponse({ status: 200, type: JobOfferDto })
  async updateCurriculumTailoring(
    @Param('id') id: string,
    @Body() dto: UpdateCurriculumTailoringDto,
  ): Promise<JobOfferDto> {
    const updated = await this.jobOffersService.updateCurriculumTailoring(id, dto);
    if (!updated) {
      throw new NotFoundException(`Annuncio con ID "${id}" non trovato`);
    }
    return mapJobOfferToDto(updated);
  }
}
