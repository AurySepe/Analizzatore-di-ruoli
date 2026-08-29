import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { WorkTailoringDto, ProjectTailoringDto } from './update-curriculum-tailoring.dto';

export class JobCurriculumDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  jobOfferId: string;

  @ApiProperty({ description: 'Chiave di identificazione dell oggetto in S3/MinIO' })
  @IsString()
  storageKey: string;

  @ApiProperty()
  @IsString()
  explanation: string;

  @ApiProperty({ description: 'Titolo professionale personalizzato per l annuncio', required: false, nullable: true })
  @IsOptional()
  @IsString()
  customLabel?: string | null;

  @ApiProperty({ type: [WorkTailoringDto], description: 'Esperienze lavorative modellate per l annuncio' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WorkTailoringDto)
  work: WorkTailoringDto[];

  @ApiProperty({ type: [ProjectTailoringDto], description: 'Progetti tecnici modellati per l annuncio' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProjectTailoringDto)
  projects: ProjectTailoringDto[];

  @ApiProperty({ type: [String], description: 'Titoli delle pubblicazioni scientifiche selezionate' })
  @IsArray()
  @IsString({ each: true })
  selectedPublicationTitles: string[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(data: Partial<JobCurriculumDto>) {
    Object.assign(this, data);
  }
}
