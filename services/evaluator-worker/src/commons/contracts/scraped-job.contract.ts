export interface ScrapedJobOfferEvent {
  externalId: string;
  source: 'ARBEITNOW' | 'REMOTIVE' | 'JOBICY' | 'WEWORKREMOTELY';
  url: string;
  title: string;
  companyName: string;
  location?: string | null;
  remoteType?: string;
  salaryMin?: number | null;
  salaryMax?: number | null;
  currency?: string | null;
  contractType?: string | null;
  rawDescription: string;
  descriptionMarkdown?: string | null;
  datePosted?: string | null; // ISO String
  tags?: string[];
}

export const INGESTION_QUEUE_NAME = 'ingestion-jobs';
export const JOB_OFFER_SCRAPED_EVENT = 'JOB_OFFER_SCRAPED';
