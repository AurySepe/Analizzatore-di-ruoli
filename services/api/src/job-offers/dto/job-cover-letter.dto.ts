import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum } from 'class-validator';
import { JobCoverLetterPdfStatus } from '@analizzatore/database';

export enum CoverLetterPdfStatusEnum {
  PENDING = 'PENDING',
  GENERATING = 'GENERATING',
  READY = 'READY',
  FAILED = 'FAILED',
}

export class JobCoverLetterDto {
  @ApiProperty({ description: 'ID univoco della cover letter' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'ID dell offerta di lavoro associata' })
  @IsString()
  jobOfferId: string;

  @ApiProperty({ description: 'Titolo professionale personalizzato per l intestazione', nullable: true, required: false })
  @IsOptional()
  @IsString()
  customLabel: string | null;

  @ApiProperty({ description: 'Nome della persona destinataria', nullable: true, required: false })
  @IsOptional()
  @IsString()
  recipientName: string | null;

  @ApiProperty({ description: 'Titolo del team o del hiring manager', nullable: true, required: false })
  @IsOptional()
  @IsString()
  recipientTitle: string | null;

  @ApiProperty({ description: 'Nome dell azienda destinataria' })
  @IsString()
  recipientCompany: string;

  @ApiProperty({ description: 'Location e modalita di lavoro dell azienda', nullable: true, required: false })
  @IsOptional()
  @IsString()
  recipientAddress: string | null;

  @ApiProperty({ description: 'Ruolo della posizione lavorativa' })
  @IsString()
  recipientRole: string;

  @ApiProperty({ description: 'Data della lettera formattata in inglese' })
  @IsString()
  date: string;

  @ApiProperty({ description: 'Saluto iniziale' })
  @IsString()
  salutation: string;

  @ApiProperty({ description: 'Primo paragrafo: Esempio concreto MioCFO e metriche di impatto' })
  @IsString()
  experienceParagraph1: string;

  @ApiProperty({ description: 'Secondo paragrafo: Metodologia AI-native in Antigravity IDE' })
  @IsString()
  experienceParagraph2: string;

  @ApiProperty({ description: 'Terzo paragrafo: Motivazione specifica per l azienda' })
  @IsString()
  companyMotivation: string;

  @ApiProperty({ description: 'Frase di chiusura e invito al colloquio' })
  @IsString()
  callToAction: string;

  @ApiProperty({ description: 'Firma di chiusura' })
  @IsString()
  signoff: string;

  @ApiProperty({ description: 'Spiegazione strategica generata dall AI', nullable: true, required: false })
  @IsOptional()
  @IsString()
  explanation: string | null;

  @ApiProperty({ description: 'Chiave di archiviazione del PDF su MinIO S3', nullable: true, required: false })
  @IsOptional()
  @IsString()
  storageKey: string | null;

  @ApiProperty({ enum: CoverLetterPdfStatusEnum, description: 'Stato di compilazione del PDF' })
  @IsEnum(CoverLetterPdfStatusEnum)
  pdfStatus: CoverLetterPdfStatusEnum;

  @ApiProperty({ description: 'Data di creazione' })
  createdAt: Date;

  @ApiProperty({ description: 'Data di ultimo aggiornamento' })
  updatedAt: Date;
}
