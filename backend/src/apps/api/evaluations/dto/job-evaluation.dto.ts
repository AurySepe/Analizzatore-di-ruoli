import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsArray, ValidateIf } from 'class-validator';

export class JobEvaluationDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  jobOfferId: string;

  @ApiProperty({ description: 'Punteggio di aderenza ai desiderata dell utente (0-100)' })
  @IsNumber()
  desireMatchScore: number;

  @ApiProperty({ description: 'Punteggio di competenza tecnica (0-100)' })
  @IsNumber()
  competenceScore: number;

  @ApiProperty({ description: 'Punteggio globale bilanciato (0-100)' })
  @IsNumber()
  overallScore: number;

  @ApiProperty({ description: 'Livello di priorità: HIGH, MEDIUM, LOW, DISQUALIFIED' })
  @IsString()
  priority: string;

  @ApiProperty({ description: 'Stato dell analisi: SUCCESS | UNANALYZABLE' })
  @IsString()
  status: string;

  @ApiProperty({ description: 'Modello AI che ha analizzato l annuncio: GEMINI_3_1_FLASH_LITE | GEMMA_4_12B | UNKNOWN' })
  @IsString()
  evaluatorModel: string;


  @ApiProperty({ description: 'Sintesi/Riassunto dell annuncio di lavoro generato dall AI', nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  summary?: string | null;

  @ApiProperty({ description: 'Spiegazione sintetico aderenza desiderata', nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  desireMatchReasoning: string | null;

  @ApiProperty({ description: 'Valutazione delle competenze dell utente rispetto al ruolo' })
  @IsString()
  competenceMatch: string;

  @ApiProperty({ description: 'Spiegazione dettagliata dell AI in Markdown' })
  @IsString()
  detailedReasoning: string;

  @ApiProperty({ type: [String], nullable: true, required: false })
  @IsArray()
  @IsOptional()
  pros: string[] | null;

  @ApiProperty({ type: [String], nullable: true, required: false })
  @IsArray()
  @IsOptional()
  cons: string[] | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class QueryEvaluationDto {
  @ApiProperty({ nullable: true, required: false, description: 'Filtra per priorità: HIGH, MEDIUM, LOW, DISQUALIFIED' })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  priority?: string | null;

  @ApiProperty({ nullable: true, required: false, description: 'Filtra per punteggio minimo aderenza desiderata (0-100)' })
  @IsNumber()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  minDesireScore?: number | null;

  @ApiProperty({ nullable: true, required: false, description: 'Filtra per punteggio minimo globale (0-100)' })
  @IsNumber()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  minScore?: number | null;
}
