import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CompaniesService } from './companies.service';
import { CompanyJobOffersBreakdownDto, CompanyJobOffersCountsDto, CompanySummaryDto } from './dto/company-job-offers.dto';
import { CompanyDto } from '../job-offers/dto/company.dto';
import { mapJobOfferToDto } from '../job-offers/job-offer.mapper';
import { JobOfferWithRelations } from '../job-offers/job-offers.service';

@ApiTags('Companies')
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  @ApiOperation({ summary: 'Recupera l\'elenco di tutte le aziende registrate con i conteggi sintetici delle loro offerte' })
  @ApiResponse({ status: 200, type: [CompanySummaryDto] })
  async findAll(): Promise<CompanySummaryDto[]> {
    const rawCompanies = await this.companiesService.findAllCompanies();
    return rawCompanies.map((c) => new CompanySummaryDto(c));
  }

  @Get(':companyId/job-offers')
  @ApiOperation({ summary: 'Recupera tutte le offerte di una specifica azienda suddivise per stato (conteggi per pendenti/squalificate, dettaglio completo per le attive)' })
  @ApiParam({ name: 'companyId', description: 'UUID dell\'azienda' })
  @ApiResponse({ status: 200, type: CompanyJobOffersBreakdownDto })
  async getCompanyJobOffers(@Param('companyId') companyId: string): Promise<CompanyJobOffersBreakdownDto> {
    const rawBreakdown = await this.companiesService.getCompanyJobOffers(companyId);

    const companyDto = new CompanyDto({
      id: rawBreakdown.company.id,
      name: rawBreakdown.company.name,
      websiteUrl: rawBreakdown.company.websiteUrl ?? null,
      linkedinUrl: rawBreakdown.company.linkedinUrl ?? null,
      industry: rawBreakdown.company.industry ?? null,
      fundingStage: rawBreakdown.company.fundingStage ?? null,
      companySizeRange: rawBreakdown.company.companySizeRange ?? null,
      employeeCount: rawBreakdown.company.employeeCount ?? null,
      eligibleOffersCount: rawBreakdown.counts.eligibleOffersCount,
      activeOffersCount: rawBreakdown.counts.activeOffersCount,
      savedOrAppliedCount: rawBreakdown.counts.savedOrAppliedCount,
      newOffersCount: rawBreakdown.counts.newOffersCount,
    });

    const countsDto = new CompanyJobOffersCountsDto(rawBreakdown.counts);

    const offersDto = (rawBreakdown.offers as unknown as JobOfferWithRelations[]).map((offer) =>
      mapJobOfferToDto(offer),
    );

    return new CompanyJobOffersBreakdownDto({
      company: companyDto,
      counts: countsDto,
      offers: offersDto,
    });
  }
}
