import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CompaniesService } from './companies.service';
import { CompanyJobOffersBreakdownDto, CompanySummaryDto } from './dto/company-job-offers.dto';

@ApiTags('Companies')
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  @ApiOperation({ summary: 'Recupera l\'elenco di tutte le aziende registrate con i conteggi sintetici delle loro offerte' })
  @ApiResponse({ status: 200, type: [CompanySummaryDto] })
  async findAll(): Promise<CompanySummaryDto[]> {
    return this.companiesService.findAllCompanies();
  }

  @Get(':companyId/job-offers')
  @ApiOperation({ summary: 'Recupera tutte le offerte di una specifica azienda suddivise per stato (conteggi per pendenti/squalificate, dettaglio completo per le attive)' })
  @ApiParam({ name: 'companyId', description: 'UUID dell\'azienda' })
  @ApiResponse({ status: 200, type: CompanyJobOffersBreakdownDto })
  async getCompanyJobOffers(@Param('companyId') companyId: string): Promise<CompanyJobOffersBreakdownDto> {
    return this.companiesService.getCompanyJobOffers(companyId);
  }
}
