import { ApiProperty } from '@nestjs/swagger';
import { CompanyDto } from '../../job-offers/dto/company.dto';
import { JobOfferDto } from '../../job-offers/dto/job-offer.dto';

export class CompanySummaryDto extends CompanyDto {
  @ApiProperty({ description: 'Numero totale di offerte collegate a questa azienda' })
  totalOffersCount: number;

  @ApiProperty({ description: 'Numero di offerte ancora da elaborare dall\'AI' })
  pendingEvaluationCount: number;

  @ApiProperty({ description: 'Numero di offerte squalificate dall\'AI' })
  disqualifiedCount: number;
}

export class CompanyJobOffersBreakdownDto {
  @ApiProperty({ type: CompanyDto })
  company: CompanyDto;

  @ApiProperty()
  counts: {
    totalOffers: number;
    pendingEvaluationCount: number;
    disqualifiedCount: number;
    eligibleOffersCount: number;
    activeOffersCount: number;
    savedOrAppliedCount: number;
    newOffersCount: number;
  };

  @ApiProperty({
    type: [JobOfferDto],
    description: 'Informazioni complete delle sole offerte idonee (escluse quelle squalificate ed in attesa di valutazione)',
  })
  offers: JobOfferDto[];
}
