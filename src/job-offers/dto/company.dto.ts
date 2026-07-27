import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, ValidateIf } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export class CompanyDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  websiteUrl: string | null;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  linkedinUrl: string | null;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  industry: string | null;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  fundingStage: string | null;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  companySizeRange: string | null;

  @ApiProperty({ nullable: true, required: false, type: 'integer' })
  @IsInt()
  @ValidateIf((_, val) => val !== null)
  @IsOptional()
  employeeCount: number | null;

  constructor(data: CompanyDto) {
    Object.assign(this, plainToInstance(CompanyDto, data));
  }
}
