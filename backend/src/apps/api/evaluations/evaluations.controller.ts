import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EvaluationsApiService } from './evaluations.api.service';
import { JobEvaluationDto, QueryEvaluationDto } from './dto/job-evaluation.dto';
import { CategorizationStatusDto } from './dto/categorization-status.dto';

@ApiTags('Evaluations')
@Controller('evaluations')
export class EvaluationsController {
  constructor(private readonly evaluationsApiService: EvaluationsApiService) {}

  @Get('status')
  @ApiOperation({ summary: 'Restituisce le metriche in tempo reale sullo stato di categorizzazione degli annunci' })
  @ApiResponse({ status: 200, type: CategorizationStatusDto })
  async getStatus(): Promise<CategorizationStatusDto> {
    const rawStatus = await this.evaluationsApiService.getCategorizationStatus();
    return new CategorizationStatusDto(rawStatus);
  }

  @Get()
  @ApiOperation({ summary: 'Recupera tutte le valutazioni salvate, filtrate per priorità o punteggio minimo' })
  @ApiQuery({ name: 'priority', required: false, description: 'Filtra per priorità: HIGH, MEDIUM, LOW, DISQUALIFIED' })
  @ApiQuery({ name: 'minScore', required: false, description: 'Filtra per punteggio minimo (0-100)' })
  @ApiResponse({ status: 200, type: [JobEvaluationDto] })
  async findAll(@Query() query: QueryEvaluationDto): Promise<JobEvaluationDto[]> {
    const rawEvaluations = await this.evaluationsApiService.findAllEvaluations(query);
    return rawEvaluations.map((e) => this.mapToEvaluationDto(e));
  }

  @Get(':jobOfferId')
  @ApiOperation({ summary: 'Recupera la valutazione salvata per una specifica offerta' })
  @ApiResponse({ status: 200, type: JobEvaluationDto })
  async findOne(@Param('jobOfferId') jobOfferId: string): Promise<JobEvaluationDto> {
    const rawEvaluation = await this.evaluationsApiService.findOneEvaluation(jobOfferId);
    return this.mapToEvaluationDto(rawEvaluation);
  }

  private mapToEvaluationDto(raw: {
    id: string;
    jobOfferId: string;
    desireMatchScore: number;
    competenceScore: number;
    overallScore: number;
    priority: string;
    status: string;
    evaluatorModel: string;
    summary?: string | null;
    desireMatchReasoning?: string | null;
    competenceMatch: string;
    detailedReasoning: string;
    pros?: string | null;
    cons?: string | null;
    createdAt: Date;
    updatedAt: Date;
  }): JobEvaluationDto {
    return new JobEvaluationDto({
      id: raw.id,
      jobOfferId: raw.jobOfferId,
      desireMatchScore: raw.desireMatchScore,
      competenceScore: raw.competenceScore,
      overallScore: raw.overallScore,
      priority: raw.priority,
      status: raw.status,
      evaluatorModel: raw.evaluatorModel,
      summary: raw.summary ?? null,
      desireMatchReasoning: raw.desireMatchReasoning ?? null,
      competenceMatch: raw.competenceMatch,
      detailedReasoning: raw.detailedReasoning,
      pros: raw.pros ? JSON.parse(raw.pros) : [],
      cons: raw.cons ? JSON.parse(raw.cons) : [],
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    });
  }
}
