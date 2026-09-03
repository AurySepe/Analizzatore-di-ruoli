import { ApiProperty } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';

export class SankeyNodeDto {
  @ApiProperty({ description: 'ID univoco del nodo (es. src_ARBEITNOW, prio_HIGH, st_SAVED)' })
  id: string;

  @ApiProperty({ description: 'Etichetta leggibile del nodo' })
  name: string;

  @ApiProperty({ description: 'Categoria o colonna del nodo', enum: ['source', 'priority', 'selection', 'application', 'outcome'] })
  category: 'source' | 'priority' | 'selection' | 'application' | 'outcome';

  @ApiProperty({ description: 'Volume totale degli annunci transitati o presenti nel nodo' })
  count: number;

  constructor(data: SankeyNodeDto) {
    Object.assign(this, plainToInstance(SankeyNodeDto, data));
  }
}

export class SankeyLinkDto {
  @ApiProperty({ description: 'ID del nodo sorgente' })
  source: string;

  @ApiProperty({ description: 'ID del nodo destinazione' })
  target: string;

  @ApiProperty({ description: 'Volume del flusso di annunci' })
  value: number;

  constructor(data: SankeyLinkDto) {
    Object.assign(this, plainToInstance(SankeyLinkDto, data));
  }
}

export class SankeyDataDto {
  @ApiProperty({ type: () => [SankeyNodeDto] })
  nodes: SankeyNodeDto[];

  @ApiProperty({ type: () => [SankeyLinkDto] })
  links: SankeyLinkDto[];

  constructor(data: SankeyDataDto) {
    Object.assign(this, plainToInstance(SankeyDataDto, data));
  }
}

export class FunnelConversionRatesDto {
  @ApiProperty({ description: 'Percentuale di conversione da candidatura a colloquio' })
  applicationToInterview: number;

  @ApiProperty({ description: 'Percentuale di conversione da colloquio ad offerta' })
  interviewToOffer: number;

  @ApiProperty({ description: 'Percentuale di successo complessiva (offerte su candidature)' })
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

  @ApiProperty({ type: () => SankeyDataDto, description: 'Dati per il diagramma di flusso continuo Sankey' })
  sankey: SankeyDataDto;

  constructor(data: JobOffersFunnelAnalyticsDto) {
    Object.assign(this, plainToInstance(JobOffersFunnelAnalyticsDto, data));
  }
}
