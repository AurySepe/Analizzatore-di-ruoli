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

export interface GenerateCurriculumTaskEvent {
  jobOfferId: string;
  forceRegenerate?: boolean;
}

export const INGESTION_QUEUE_NAME = 'ingestion-jobs';
export const JOB_OFFER_SCRAPED_EVENT = 'JOB_OFFER_SCRAPED';

export const CURRICULUM_QUEUE_NAME = 'curriculum-jobs';
export const GENERATE_CURRICULUM_EVENT = 'GENERATE_CURRICULUM';

export const EVALUATION_QUEUE_NAME = 'evaluation-jobs';
export const EVALUATE_JOB_EVENT = 'EVALUATE_JOB';
