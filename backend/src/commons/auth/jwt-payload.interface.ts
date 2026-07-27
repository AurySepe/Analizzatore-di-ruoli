import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsOptional } from 'class-validator';

export class JwtPayload {
  @ApiProperty({ type: 'integer' })
  @IsNumber()
  sub: number;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  role?: string;
}
