import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsEnum, ValidateIf, IsArray } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { CompanyDto } from './company.dto';

export enum RemoteTypeEnum {
  REMOTE = 'REMOTE',
  HYBRID = 'HYBRID',
  ON_SITE = 'ON_SITE',
  UNSPECIFIED = 'UNSPECIFIED',
}

export enum ExperienceLevelEnum {
  ENTRY_LEVEL = 'ENTRY_LEVEL',
  JUNIOR = 'JUNIOR',
  MID = 'MID',
  SENIOR = 'SENIOR',
  LEAD = 'LEAD',
  EXECUTIVE = 'EXECUTIVE',
  UNSPECIFIED = 'UNSPECIFIED',
}

export enum ApplicationStatusEnum {
  NEW = 'NEW',
  SAVED = 'SAVED',
  APPLIED = 'APPLIED',
  INTERVIEWING = 'INTERVIEWING',
  REJECTED = 'REJECTED',
  ARCHIVED = 'ARCHIVED',
}

export class JobOfferDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  externalId: string | null;

  @ApiProperty()
  @IsString()
  source: string;

  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  location: string | null;

  @ApiProperty({ enum: RemoteTypeEnum, default: RemoteTypeEnum.UNSPECIFIED })
  @IsEnum(RemoteTypeEnum)
  remoteType: RemoteTypeEnum;

  @ApiProperty()
  @IsString()
  rawDescription: string;

  @ApiProperty({ nullable: true, required: false })
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  datePosted: Date | null;

  @ApiProperty({ type: () => CompanyDto })
  company: CompanyDto;

  @ApiProperty({ nullable: true, required: false })
  @IsNumber()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  salaryMin: number | null;

  @ApiProperty({ nullable: true, required: false })
  @IsNumber()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  salaryMax: number | null;

  @ApiProperty({ nullable: true, required: false, default: 'EUR' })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  currency: string | null;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  contractType: string | null;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  roleCategory: string | null;

  @ApiProperty({ enum: ExperienceLevelEnum, default: ExperienceLevelEnum.UNSPECIFIED })
  @IsEnum(ExperienceLevelEnum)
  experienceLevel: ExperienceLevelEnum;

  @ApiProperty({ type: [String], required: false })
  @IsArray()
  @IsOptional()
  skills: string[];

  @ApiProperty({ enum: ApplicationStatusEnum, default: ApplicationStatusEnum.NEW })
  @IsEnum(ApplicationStatusEnum)
  status: ApplicationStatusEnum;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  notes: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(data: JobOfferDto) {
    Object.assign(this, plainToInstance(JobOfferDto, data));
  }
}

export class CreateJobOfferDto extends OmitType(JobOfferDto, ['id', 'createdAt', 'updatedAt'] as const) {}
