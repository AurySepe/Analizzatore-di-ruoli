import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsEnum, ValidateIf, IsArray } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { JobSource } from '@analizzatore/database';
import { CompanyDto, CreateCompanyDto } from './company.dto';
import { JobEvaluationDto } from '../../evaluations/dto/job-evaluation.dto';
import { JobCurriculumDto } from './job-curriculum.dto';
import { JobCoverLetterDto } from './job-cover-letter.dto';



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
  SCREENING = 'SCREENING',
  INTERVIEWING = 'INTERVIEWING',
  OFFER = 'OFFER',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  ARCHIVED = 'ARCHIVED',
}

export enum JobEvaluationProcessStatusEnum {
  NOT_EVALUATED = 'NOT_EVALUATED',
  PENDING = 'PENDING',
  EVALUATING = 'EVALUATING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export class JobStatusHistoryDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ enum: ApplicationStatusEnum, nullable: true })
  fromStatus: ApplicationStatusEnum | null;

  @ApiProperty({ enum: ApplicationStatusEnum })
  toStatus: ApplicationStatusEnum;

  @ApiProperty()
  createdAt: Date;

  constructor(data: JobStatusHistoryDto) {
    Object.assign(this, plainToInstance(JobStatusHistoryDto, data));
  }
}

export enum JobOfferFreshnessEnum {
  HOT = 'HOT',
  RECENT = 'RECENT',
  AGING = 'AGING',
  OLD = 'OLD',
}

export function calculateFreshness(datePosted: Date | null | undefined, createdAt: Date): JobOfferFreshnessEnum {
  const refDate = datePosted ? new Date(datePosted) : new Date(createdAt);
  const now = new Date();
  const diffInDays = (now.getTime() - refDate.getTime()) / (1000 * 60 * 60 * 24);

  if (diffInDays < 7) {
    return JobOfferFreshnessEnum.HOT;
  }
  if (diffInDays < 30) {
    return JobOfferFreshnessEnum.RECENT;
  }
  if (diffInDays < 90) {
    return JobOfferFreshnessEnum.AGING;
  }
  return JobOfferFreshnessEnum.OLD;
}


export class JobOfferDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty({ type: 'string', nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  externalId: string | null;

  @ApiProperty({ enum: JobSource })
  @IsEnum(JobSource)
  source: JobSource;


  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty({ type: 'string', nullable: true, required: false })
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

  @ApiProperty({ type: 'string', nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  descriptionMarkdown: string | null;

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

  @ApiProperty({ type: 'string', nullable: true, required: false, default: 'EUR' })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  currency: string | null;

  @ApiProperty({ type: 'string', nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  contractType: string | null;

  @ApiProperty({ type: 'string', nullable: true, required: false })
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

  @ApiProperty({ enum: JobEvaluationProcessStatusEnum, default: JobEvaluationProcessStatusEnum.PENDING })
  @IsEnum(JobEvaluationProcessStatusEnum)
  evaluationProcessStatus: JobEvaluationProcessStatusEnum;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  notes: string | null;

  @ApiProperty({ type: () => JobEvaluationDto, nullable: true, required: false })
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  evaluation: JobEvaluationDto | null;

  @ApiProperty({ type: () => JobCurriculumDto, nullable: true, required: false })
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  curriculum?: JobCurriculumDto | null;

  @ApiProperty({ type: () => JobCoverLetterDto, nullable: true, required: false })
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  coverLetter?: JobCoverLetterDto | null;

  @ApiProperty({ enum: JobOfferFreshnessEnum, example: JobOfferFreshnessEnum.HOT })
  @IsEnum(JobOfferFreshnessEnum)
  freshness: JobOfferFreshnessEnum;

  @ApiProperty({ type: () => [JobStatusHistoryDto], required: false })
  @IsOptional()
  statusHistory?: JobStatusHistoryDto[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(data: JobOfferDto) {
    Object.assign(this, plainToInstance(JobOfferDto, data));
  }
}

export class CreateJobOfferDto extends OmitType(JobOfferDto, ['id', 'freshness', 'createdAt', 'updatedAt', 'company', 'evaluation'] as const) {
  @ApiProperty({ type: () => CreateCompanyDto })
  company: CreateCompanyDto;
}
