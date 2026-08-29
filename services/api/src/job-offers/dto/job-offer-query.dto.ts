import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsEnum, IsBoolean } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { JobSource } from '@analizzatore/database';
import { QueryPaginationDto } from '../../commons/pagination/query-pagination.dto';
import { RemoteTypeEnum, ApplicationStatusEnum, JobOfferFreshnessEnum } from './job-offer.dto';


export class JobOfferFilterQueryDto extends QueryPaginationDto {
  @ApiPropertyOptional({ enum: JobOfferFreshnessEnum, description: 'Filtra per freschezza dell annuncio (HOT, RECENT, AGING, OLD)' })
  @IsOptional()
  @IsEnum(JobOfferFreshnessEnum)
  freshness?: JobOfferFreshnessEnum;
  @ApiPropertyOptional({ description: 'Filtra per priorità AI: HIGH, MEDIUM, LOW, DISQUALIFIED' })
  @IsOptional()
  @IsString()
  priority?: string;

  @ApiPropertyOptional({ description: 'Filtra per punteggio minimo aderenza ai desiderata (0-100)' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minDesireScore?: number;

  @ApiPropertyOptional({ description: 'Filtra per punteggio minimo competenza tecnica (0-100)' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minCompetenceScore?: number;

  @ApiPropertyOptional({ description: 'Filtra per punteggio globale minimo (0-100)' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minScore?: number;

  @ApiPropertyOptional({ enum: RemoteTypeEnum, description: 'Filtra per modalità di lavoro (REMOTE, HYBRID, ON_SITE)' })
  @IsOptional()
  @IsEnum(RemoteTypeEnum)
  remoteType?: RemoteTypeEnum;

  @ApiPropertyOptional({ description: 'Cerca per testo nel titolo o nel nome azienda' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ enum: JobSource, description: 'Filtra per fonte dell annuncio (ARBEITNOW, REMOTIVE)' })
  @IsOptional()
  @IsEnum(JobSource)
  source?: JobSource;


  @ApiPropertyOptional({ description: 'Filtra per modello AI utilizzato per l analisi (es. GEMINI_3_1_FLASH_LITE, GEMMA_4_12B)' })
  @IsOptional()
  @IsString()
  evaluatorModel?: string;

  @ApiPropertyOptional({ enum: ApplicationStatusEnum, description: 'Filtra per stato dell annuncio (es. NEW, SAVED, APPLIED, INTERVIEWING, REJECTED, ARCHIVED)' })
  @IsOptional()
  @IsEnum(ApplicationStatusEnum)
  status?: ApplicationStatusEnum;

  @ApiPropertyOptional({ description: 'Includi anche gli annunci non ancora valutati dall AI (default: false)' })
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  includePending?: boolean;
}

