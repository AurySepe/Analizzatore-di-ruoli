import { ApiProperty } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';

export class FunnelConversionRatesDto {
  @ApiProperty({ description: 'Percentuale di conversione da candidatura a colloquio' })
  applicationToInterview: number;

  @ApiProperty({ description: 'Percentuale di conversione da colloquio ad offerta' })
  interviewToOffer: number;

  @ApiProperty({ description: 'Percentuale di conversione da offerta ad accettazione' })
  offerToAcceptance: number;

  @ApiProperty({ description: 'Percentuale di successo complessiva' })
  overallSuccessRate: number;

  constructor(data: FunnelConversionRatesDto) {
    Object.assign(this, plainToInstance(FunnelConversionRatesDto, data));
  }
}

export class JobOffersFunnelAnalyticsDto {
  @ApiProperty({
    type: 'object',
    additionalProperties: { type: 'integer' },
    description: 'Conteggio delle offerte per stato attuale',
  })
  statusCounts: Record<string, number>;

  @ApiProperty({
    type: 'object',
    additionalProperties: { type: 'integer' },
    description: 'Numero di transizioni per fase',
  })
  stageTransitions: Record<string, number>;

  @ApiProperty({
    type: 'object',
    additionalProperties: { type: 'integer' },
    description: 'Rifiuti suddivisi per fase di interruzione',
  })
  rejectionDropOffs: Record<string, number>;

  @ApiProperty({ type: FunnelConversionRatesDto })
  conversionRates: FunnelConversionRatesDto;

  constructor(data: JobOffersFunnelAnalyticsDto) {
    Object.assign(this, plainToInstance(JobOffersFunnelAnalyticsDto, data));
  }
}
