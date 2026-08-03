import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray, IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class WorkTailoringDto {
  @ApiProperty({ description: 'Nome azienda (es. MioCFO, Commigo, University of Salerno)' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Posizione o titolo ricoperto', required: false })
  @IsString()
  @IsOptional()
  position?: string;

  @ApiProperty({ description: 'Bullet points riformulati per l annuncio' })
  @IsString()
  summary: string;

  @ApiProperty({ description: 'Se false, esclude l esperienza dal CV', required: false })
  @IsBoolean()
  @IsOptional()
  include?: boolean;
}

export class ProjectTailoringDto {
  @ApiProperty({ description: 'Nome del progetto' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Descrizione e bullet points del progetto' })
  @IsString()
  description: string;
}

export class UpdateCurriculumTailoringDto {
  @ApiProperty({ description: 'Titolo professionale personalizzato per l annuncio', required: false })
  @IsString()
  @IsOptional()
  customLabel?: string;

  @ApiProperty({ type: [WorkTailoringDto], description: 'Elenco delle esperienze lavorative da includere/modificare', required: false })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => WorkTailoringDto)
  work?: WorkTailoringDto[];

  @ApiProperty({ type: [ProjectTailoringDto], description: 'Elenco dei progetti tecnici da includere', required: false })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ProjectTailoringDto)
  projects?: ProjectTailoringDto[];

  @ApiProperty({ type: [String], description: 'Titoli delle pubblicazioni da selezionare', required: false })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  selectedPublicationTitles?: string[];

  @ApiProperty({ description: 'Spiegazione testuale delle motivazioni delle modifiche', required: false })
  @IsString()
  @IsOptional()
  explanation?: string;
}
