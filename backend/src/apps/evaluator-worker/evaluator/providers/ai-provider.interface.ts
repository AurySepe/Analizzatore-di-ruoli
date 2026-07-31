export type EvaluatorModelType = 'GEMINI_3_1_FLASH_LITE' | 'GEMINI_3_5_FLASH_LITE' | 'GEMMA_4_12B' | 'GEMMA_4_31B' | 'UNKNOWN';


export interface LlmEvaluationResult {
  status?: 'SUCCESS' | 'UNANALYZABLE';
  evaluatorModel?: EvaluatorModelType;
  desireMatchScore: number;
  competenceScore: number;
  overallScore: number;
  priority: 'HIGH' | 'MEDIUM' | 'LOW' | 'DISQUALIFIED';
  desireMatchReasoning: string;
  competenceMatch: string;
  detailedReasoning: string;
  pros: string[];
  cons: string[];
}

export interface AiEvaluatorProvider {
  readonly name: string;
  readonly modelEnum: EvaluatorModelType;
  isAvailable(): boolean;
  evaluate(prompt: string): Promise<LlmEvaluationResult>;
}

