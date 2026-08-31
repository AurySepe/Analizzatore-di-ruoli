import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateCoverLetterDto {
  @ApiProperty({ description: 'Titolo professionale personalizzato per l intestazione', required: false })
  @IsOptional()
  @IsString()
  customLabel?: string;

  @ApiProperty({ description: 'Nome della persona destinataria', required: false })
  @IsOptional()
  @IsString()
  recipientName?: string;

  @ApiProperty({ description: 'Titolo del team o del hiring manager', required: false })
  @IsOptional()
  @IsString()
  recipientTitle?: string;

  @ApiProperty({ description: 'Nome dell azienda destinataria', required: false })
  @IsOptional()
  @IsString()
  recipientCompany?: string;

  @ApiProperty({ description: 'Location e modalita di lavoro dell azienda', required: false })
  @IsOptional()
  @IsString()
  recipientAddress?: string;

  @ApiProperty({ description: 'Ruolo della posizione lavorativa', required: false })
  @IsOptional()
  @IsString()
  recipientRole?: string;

  @ApiProperty({ description: 'Data della lettera formattata in inglese', required: false })
  @IsOptional()
  @IsString()
  date?: string;

  @ApiProperty({ description: 'Saluto iniziale', required: false })
  @IsOptional()
  @IsString()
  salutation?: string;

  @ApiProperty({ description: 'Primo paragrafo: Esempio concreto MioCFO e metriche di impatto', required: false })
  @IsOptional()
  @IsString()
  experienceParagraph1?: string;

  @ApiProperty({ description: 'Secondo paragrafo: Metodologia AI-native in Antigravity IDE', required: false })
  @IsOptional()
  @IsString()
  experienceParagraph2?: string;

  @ApiProperty({ description: 'Terzo paragrafo: Motivazione specifica per l azienda', required: false })
  @IsOptional()
  @IsString()
  companyMotivation?: string;

  @ApiProperty({ description: 'Frase di chiusura e invito al colloquio', required: false })
  @IsOptional()
  @IsString()
  callToAction?: string;

  @ApiProperty({ description: 'Firma di chiusura', required: false })
  @IsOptional()
  @IsString()
  signoff?: string;
}
