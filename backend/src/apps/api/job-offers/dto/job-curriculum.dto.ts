import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class JobCurriculumDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  jobOfferId: string;

  @ApiProperty()
  @IsString()
  filePath: string;

  @ApiProperty()
  @IsString()
  explanation: string;

  @ApiProperty({ description: 'Oggetto JSON di personalizzazione del curriculum (ResumeTailoring)', required: false, nullable: true })
  @IsOptional()
  tailoringData?: any | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(data: Partial<JobCurriculumDto>) {
    Object.assign(this, data);
  }
}
