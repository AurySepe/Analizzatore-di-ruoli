import { ApiProperty } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { IsInt } from 'class-validator';
import { CompanyDto } from '../../job-offers/dto/company.dto';
import { JobOfferDto } from '../../job-offers/dto/job-offer.dto';

export class CompanySummaryDto extends CompanyDto {
  @ApiProperty({ type: 'integer', description: 'Numero totale di offerte collegate a questa azienda' })
  @IsInt()
  totalOffersCount: number;

  @ApiProperty({ type: 'integer', description: 'Numero di offerte ancora da elaborare dall AI' })
  @IsInt()
  pendingEvaluationCount: number;

  @ApiProperty({ type: 'integer', description: 'Numero di offerte squalificate dall AI' })
  @IsInt()
  disqualifiedCount: number;

  constructor(data: CompanySummaryDto) {
    super(data);
    Object.assign(this, plainToInstance(CompanySummaryDto, data));
  }
}

export class CompanyJobOffersCountsDto {
  @ApiProperty({ type: 'integer', description: 'Numero totale di offerte collegate all azienda' })
  @IsInt()
  totalOffers: number;

  @ApiProperty({ type: 'integer', description: 'Numero di offerte in attesa di valutazione AI' })
  @IsInt()
  pendingEvaluationCount: number;

  @ApiProperty({ type: 'integer', description: 'Numero di offerte squalificate dall AI' })
  @IsInt()
  disqualifiedCount: number;

  @ApiProperty({ type: 'integer', description: 'Numero di offerte idonee' })
  @IsInt()
  eligibleOffersCount: number;

  @ApiProperty({ type: 'integer', description: 'Numero di offerte attualmente attive' })
  @IsInt()
  activeOffersCount: number;

  @ApiProperty({ type: 'integer', description: 'Numero di offerte salvate o applicate' })
  @IsInt()
  savedOrAppliedCount: number;

  @ApiProperty({ type: 'integer', description: 'Numero di offerte in stato NEW' })
  @IsInt()
  newOffersCount: number;

  constructor(data: CompanyJobOffersCountsDto) {
    Object.assign(this, plainToInstance(CompanyJobOffersCountsDto, data));
  }
}

export class CompanyJobOffersBreakdownDto {
  @ApiProperty({ type: CompanyDto })
  company: CompanyDto;

  @ApiProperty({ type: CompanyJobOffersCountsDto })
  counts: CompanyJobOffersCountsDto;

  @ApiProperty({
    type: [JobOfferDto],
    description: 'Informazioni complete delle sole offerte idonee (escluse quelle squalificate ed in attesa di valutazione)',
  })
  offers: JobOfferDto[];

  constructor(data: CompanyJobOffersBreakdownDto) {
    Object.assign(this, plainToInstance(CompanyJobOffersBreakdownDto, data));
  }
}
