import { ApiProperty } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CategorizationStatusDto {
  @ApiProperty({ type: 'integer', description: 'Numero totale di annunci nel database' })
  @IsInt()
  totalJobs: number;

  @ApiProperty({ type: 'integer', description: 'Numero di annunci già valutati con successo' })
  @IsInt()
  evaluatedJobs: number;

  @ApiProperty({ type: 'integer', description: 'Numero di annunci in attesa di valutazione' })
  @IsInt()
  pendingJobs: number;

  @ApiProperty({ description: 'Indica se il processo di categorizzazione è attualmente attivo' })
  @IsBoolean()
  isCategorizing: boolean;

  @ApiProperty({ description: 'Indica se il profilo utente è completo di CV e criteri' })
  @IsBoolean()
  isProfileComplete: boolean;

  @ApiProperty({ description: 'Messaggio sintetico sullo stato' })
  @IsString()
  message: string;

  constructor(data: CategorizationStatusDto) {
    Object.assign(this, plainToInstance(CategorizationStatusDto, data));
  }
}
