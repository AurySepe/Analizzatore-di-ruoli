import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { EvaluationsApiService } from './evaluations.api.service';
import { QueryEvaluationDto } from './dto/job-evaluation.dto';

@ApiTags('Evaluations')
@Controller('evaluations')
export class EvaluationsController {
  constructor(private readonly evaluationsApiService: EvaluationsApiService) {}

  @Get('status')
  @ApiOperation({ summary: 'Restituisce le metriche in tempo reale sullo stato di categorizzazione degli annunci' })
  async getStatus() {
    return this.evaluationsApiService.getCategorizationStatus();
  }

  @Get()
  @ApiOperation({ summary: 'Recupera tutte le valutazioni salvate, filtrate per priorità o punteggio minimo' })
  @ApiQuery({ name: 'priority', required: false, description: 'Filtra per priorità: HIGH, MEDIUM, LOW, DISQUALIFIED' })
  @ApiQuery({ name: 'minScore', required: false, description: 'Filtra per punteggio minimo (0-100)' })
  async findAll(@Query() query: QueryEvaluationDto): Promise<any[]> {
    return this.evaluationsApiService.findAllEvaluations(query);
  }

  @Get(':jobOfferId')
  @ApiOperation({ summary: 'Recupera la valutazione salvata per una specifica offerta' })
  async findOne(@Param('jobOfferId') jobOfferId: string): Promise<any> {
    return this.evaluationsApiService.findOneEvaluation(jobOfferId);
  }
}
