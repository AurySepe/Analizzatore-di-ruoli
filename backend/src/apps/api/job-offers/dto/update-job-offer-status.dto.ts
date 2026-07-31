import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { ApplicationStatusEnum } from './job-offer.dto';

export class UpdateJobOfferStatusDto {
  @ApiProperty({ enum: ApplicationStatusEnum, description: 'Nuovo stato dell annuncio' })
  @IsEnum(ApplicationStatusEnum)
  status: ApplicationStatusEnum;
}
