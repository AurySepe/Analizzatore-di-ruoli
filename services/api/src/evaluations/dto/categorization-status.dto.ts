import { ApiProperty } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { IsBoolean, IsInt, IsString, IsArray, ValidateNested } from 'class-validator';

export class ActiveProcessingJobDto {
  @ApiProperty({ description: 'ID univoco dell annuncio' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Titolo della posizione lavorativa' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Nome dell azienda' })
  @IsString()
  companyName: string;

  @ApiProperty({ type: 'string', nullable: true, description: 'Luogo di lavoro' })
  @IsString()
  location: string | null;

  @ApiProperty({ description: 'Modalità di lavoro: REMOTE | HYBRID | ON_SITE | UNSPECIFIED' })
  @IsString()
  remoteType: string;

  @ApiProperty({ description: 'Fonte dell annuncio' })
  @IsString()
  source: string;

  @ApiProperty({ description: 'Stato di avanzamento: PENDING | EVALUATING' })
  @IsString()
  evaluationProcessStatus: string;

  @ApiProperty({ type: 'string', nullable: true, description: 'Anteprima sintetica della descrizione' })
  @IsString()
  descriptionSnippet: string | null;

  @ApiProperty({ type: 'string', nullable: true, description: 'Range salariale formattato' })
  @IsString()
  salaryRange: string | null;

  @ApiProperty()
  createdAt: Date;

  constructor(data: ActiveProcessingJobDto) {
    Object.assign(this, plainToInstance(ActiveProcessingJobDto, data));
  }
}

export class RecentEvaluatedJobDto {
  @ApiProperty({ description: 'ID della valutazione' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'ID dell annuncio correlato' })
  @IsString()
  jobOfferId: string;

  @ApiProperty({ description: 'Titolo della posizione' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Nome azienda' })
  @IsString()
  companyName: string;

  @ApiProperty({ type: 'integer', description: 'Punteggio globale assegnato da Gemini' })
  @IsInt()
  overallScore: number;

  @ApiProperty({ description: 'Priorità assegnata' })
  @IsString()
  priority: string;

  @ApiProperty({ description: 'Modello AI utilizzato' })
  @IsString()
  evaluatorModel: string;

  @ApiProperty({ type: 'string', nullable: true, description: 'Sintesi della valutazione' })
  @IsString()
  summary: string | null;

  @ApiProperty()
  evaluatedAt: Date;

  constructor(data: RecentEvaluatedJobDto) {
    Object.assign(this, plainToInstance(RecentEvaluatedJobDto, data));
  }
}

export class CategorizationStatusDto {
  @ApiProperty({ type: 'integer', description: 'Numero totale di annunci nel database' })
  @IsInt()
  totalJobs: number;

  @ApiProperty({ type: 'integer', description: 'Numero di annunci già valutati con successo' })
  @IsInt()
  evaluatedJobs: number;

  @ApiProperty({ type: 'integer', description: 'Numero di annunci in coda o in lavorazione' })
  @IsInt()
  pendingJobs: number;

  @ApiProperty({ type: 'integer', description: 'Numero di annunci attualmente sotto elaborazione attiva con Gemini' })
  @IsInt()
  evaluatingCount: number;

  @ApiProperty({ type: Boolean, description: 'Indica se il processo di categorizzazione è attualmente attivo' })
  @IsBoolean()
  isCategorizing: boolean;

  @ApiProperty({ type: Boolean, description: 'Indica se il profilo utente è completo di CV e criteri' })
  @IsBoolean()
  isProfileComplete: boolean;

  @ApiProperty({ description: 'Messaggio sintetico sullo stato' })
  @IsString()
  message: string;

  @ApiProperty({ type: () => [ActiveProcessingJobDto], description: 'Lista dei job attualmente in elaborazione o in coda' })
  @IsArray()
  @ValidateNested({ each: true })
  activeJobs: ActiveProcessingJobDto[];

  @ApiProperty({ type: () => [RecentEvaluatedJobDto], description: 'Ultime valutazioni completate' })
  @IsArray()
  @ValidateNested({ each: true })
  recentEvaluatedJobs: RecentEvaluatedJobDto[];

  constructor(data: CategorizationStatusDto) {
    Object.assign(this, plainToInstance(CategorizationStatusDto, data));
  }
}
