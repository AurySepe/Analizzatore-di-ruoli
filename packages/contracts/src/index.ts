export type JobSourceType = 'ARBEITNOW' | 'REMOTIVE' | 'JOBICY' | 'WEWORKREMOTELY' | 'MANUAL';

export interface ScrapedJobOfferEvent {
  externalId: string;
  source: JobSourceType;
  url: string;
  title: string;
  companyName: string;
  location?: string | null;
  remoteType?: 'REMOTE' | 'FULL_REMOTE' | 'HYBRID' | 'ON_SITE' | 'UNSPECIFIED';
  salaryMin?: number | null;
  salaryMax?: number | null;
  currency?: string | null;
  contractType?: string | null;
  rawDescription: string;
  descriptionMarkdown?: string | null;
  datePosted?: string | null;
  tags?: string[];
}

export interface GenerateCurriculumTailoringTaskEvent {
  jobOfferId: string;
  forceRegenerate?: boolean;
}

export type GenerateCurriculumTaskEvent = GenerateCurriculumTailoringTaskEvent;

export interface GeneratePdfTaskEvent {
  jobOfferId: string;
  templateName?: string;
  forceRegenerate?: boolean;
}

export interface EvaluateJobOfferTaskEvent {
  jobOfferId: string;
  forceReevaluation?: boolean;
}

export const INGESTION_QUEUE_NAME = 'ingestion-jobs';
export const JOB_OFFER_SCRAPED_EVENT = 'JOB_OFFER_SCRAPED';

export const CURRICULUM_TAILORING_QUEUE_NAME = 'curriculum-tailoring-jobs';
export const GENERATE_CURRICULUM_TAILORING_EVENT = 'GENERATE_CURRICULUM_TAILORING';

// Alias for backwards compatibility
export const CURRICULUM_QUEUE_NAME = CURRICULUM_TAILORING_QUEUE_NAME;
export const GENERATE_CURRICULUM_EVENT = GENERATE_CURRICULUM_TAILORING_EVENT;

export const PDF_RENDERING_QUEUE_NAME = 'pdf-rendering-jobs';
export const GENERATE_PDF_EVENT = 'GENERATE_PDF';

export const EVALUATION_QUEUE_NAME = 'evaluation-jobs';
export const EVALUATE_JOB_EVENT = 'EVALUATE_JOB';

export * from './queue-helper';
export * from './user-profile.config';
