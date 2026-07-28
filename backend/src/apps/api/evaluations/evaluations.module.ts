import { Module } from '@nestjs/common';
import { EvaluationsController } from './evaluations.controller';
import { EvaluationsApiService } from './evaluations.api.service';

@Module({
  controllers: [EvaluationsController],
  providers: [EvaluationsApiService],
  exports: [EvaluationsApiService],
})
export class EvaluationsModule {}
