import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, ValidateIf } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export class CompanyDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ type: 'string', nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  websiteUrl: string | null;

  @ApiProperty({ type: 'string', nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  linkedinUrl: string | null;

  @ApiProperty({ type: 'string', nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  industry: string | null;

  @ApiProperty({ type: 'string', nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  fundingStage: string | null;

  @ApiProperty({ type: 'string', nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  companySizeRange: string | null;

  @ApiProperty({ nullable: true, required: false, type: 'integer' })
  @IsInt()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  employeeCount: number | null;

  @ApiProperty({ nullable: true, required: false, type: 'integer' })
  @IsInt()
  @IsOptional()
  eligibleOffersCount?: number;

  @ApiProperty({ nullable: true, required: false, type: 'integer' })
  @IsInt()
  @IsOptional()
  activeOffersCount?: number;

  @ApiProperty({ nullable: true, required: false, type: 'integer' })
  @IsInt()
  @IsOptional()
  savedOrAppliedCount?: number;

  @ApiProperty({ nullable: true, required: false, type: 'integer' })
  @IsInt()
  @IsOptional()
  newOffersCount?: number;

  constructor(data: CompanyDto) {
    Object.assign(this, plainToInstance(CompanyDto, data));
  }
}

export class CreateCompanyDto extends OmitType(CompanyDto, ['id'] as const) {}
