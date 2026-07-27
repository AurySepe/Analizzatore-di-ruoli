import { Controller, Get, Post, Body, Param, Query, UseGuards, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JobOffersService } from './job-offers.service';
import { JobOfferDto, CreateJobOfferDto, RemoteTypeEnum, ExperienceLevelEnum, ApplicationStatusEnum } from './dto/job-offer.dto';
import { CompanyDto } from './dto/company.dto';
import { QueryPaginationDto } from '../commons/pagination/query-pagination.dto';
import { PaginatedDto, ApiPaginatedResponse } from '../commons/pagination/paginated.dto';
import { AuthGuard } from '../commons/auth/auth.guard';
import { CurrentUser } from '../commons/auth/current-user.decorator';
import { JwtPayload } from '../commons/auth/jwt-payload.interface';

@ApiTags('job-offers')
@ApiBearerAuth()
@UseGuards(AuthGuard())
@Controller('job-offers')
export class JobOffersController {
  constructor(private readonly jobOffersService: JobOffersService) {}

  @Post()
  @ApiOperation({ summary: 'Crea o aggiorna un annuncio di lavoro nel database' })
  async create(
    @CurrentUser() user: JwtPayload,
    @Body() dto: CreateJobOfferDto,
  ): Promise<JobOfferDto> {
    const rawOffer = await this.jobOffersService.saveOrUpdate(dto);

    // Rimappatura esplicita dei campi verso JobOfferDto per evitare Data-Leak
    return this.mapToDto(rawOffer);
  }

  @Get('paginated')
  @ApiOperation({ summary: 'Recupera la lista paginata degli annunci di lavoro' })
  @ApiPaginatedResponse(JobOfferDto)
  async findAllPaginated(
    @Query() queryPagination: QueryPaginationDto,
  ): Promise<PaginatedDto<JobOfferDto>> {
    const paginated = await this.jobOffersService.findAllPaginated(queryPagination);

    return {
      data: paginated.data.map((item) => this.mapToDto(item)),
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

    return new JobOfferDto({
      id: rawOffer.id,
      externalId: rawOffer.externalId ?? null,
      source: rawOffer.source,
      url: rawOffer.url,
      title: rawOffer.title,
      location: rawOffer.location ?? null,
      remoteType: (rawOffer.remoteType as RemoteTypeEnum) ?? RemoteTypeEnum.UNSPECIFIED,
      rawDescription: rawOffer.rawDescription,
      datePosted: rawOffer.datePosted ?? null,
      company: companyDto,
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
