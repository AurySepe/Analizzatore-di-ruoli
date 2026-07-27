import { z } from 'zod';
import { BaseExtractor } from './base-extractor';
import { RemoteTypeEnum, ExperienceLevelEnum, ApplicationStatusEnum } from '../job-offers/dto/job-offer.dto';

export interface ArbeitnowExtractorConfig {
  keywords?: string[];
  onlyRemote?: boolean;
  locations?: string[];
  limit?: number;
}

export const ArbeitnowJobSchema = z.object({
  slug: z.string(),
  company_name: z.string(),
  title: z.string(),
  description: z.string(),
  remote: z.boolean(),
  url: z.string(),
  tags: z.array(z.string()).default([]),
  job_types: z.array(z.string()).default([]),
  location: z.string().nullish().transform(val => val ?? 'Europe'),
  created_at: z.number().nullish().transform(val => val ?? Math.floor(Date.now() / 1000)),
});

export const ArbeitnowApiResponseSchema = z.object({
  data: z.array(ArbeitnowJobSchema).default([]),
});

export type ArbeitnowJob = z.infer<typeof ArbeitnowJobSchema>;

export class ArbeitnowExtractor extends BaseExtractor {
  readonly name = 'Arbeitnow European Tech Extractor';
  readonly sourceName = 'Arbeitnow';

  private readonly apiUrl = 'https://www.arbeitnow.com/api/job-board-api';

  constructor(private readonly config: ArbeitnowExtractorConfig = {}) {
    super();
  }

  async extract(): Promise<any[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`Errore risposta API Arbeitnow: ${response.statusText} (${response.status})`);
      }

      const rawJson = await response.json();
      const parseResult = ArbeitnowApiResponseSchema.safeParse(rawJson);

      if (!parseResult.success) {
        console.error(`❌ [${this.sourceName}] Risposta API non valida secondo Zod:`, parseResult.error.format());
        return [];
      }

      let jobs = parseResult.data.data;

      if (this.config.keywords && this.config.keywords.length > 0) {
        const lowerKeywords = this.config.keywords.map(k => k.toLowerCase());
        jobs = jobs.filter(job => {
          const title = job.title.toLowerCase();
          const desc = job.description.toLowerCase();
          const tags = job.tags.map(t => t.toLowerCase());

          return lowerKeywords.some(kw => 
            title.includes(kw) || tags.includes(kw) || desc.includes(kw)
          );
        });
      }

      if (this.config.locations && this.config.locations.length > 0) {
        const lowerLocations = this.config.locations.map(l => l.toLowerCase());
        jobs = jobs.filter(job => {
          const jobLoc = (job.location || '').toLowerCase();
          return lowerLocations.some(loc => jobLoc.includes(loc));
        });
      }

      if (this.config.onlyRemote) {
        jobs = jobs.filter(job => job.remote);
      }

      if (this.config.limit && this.config.limit > 0) {
        jobs = jobs.slice(0, this.config.limit);
      }

      return jobs.map(job => this.mapToJobOfferInput(job));
    } catch (error) {
      console.error(`❌ [${this.sourceName}] Errore durante l'estrazione:`, error);
      return [];
    }
  }

  private mapToJobOfferInput(job: ArbeitnowJob): any {
    let remoteType: RemoteTypeEnum = RemoteTypeEnum.UNSPECIFIED;
    if (job.remote) {
      remoteType = RemoteTypeEnum.REMOTE;
    } else if (job.location && job.location.toLowerCase().includes('hybrid')) {
      remoteType = RemoteTypeEnum.HYBRID;
    } else if (job.location) {
      remoteType = RemoteTypeEnum.ON_SITE;
    }

    return {
      externalId: job.slug,
      source: this.sourceName,
      url: job.url,
      title: job.title,
      location: job.location,
      remoteType,
      rawDescription: job.description,
      datePosted: new Date(job.created_at * 1000),
      contractType: job.job_types.length > 0 ? job.job_types.join(', ') : null,
      skills: job.tags,
      roleCategory: null,
      experienceLevel: ExperienceLevelEnum.UNSPECIFIED,
      status: ApplicationStatusEnum.NEW,
      salaryMin: null,
      salaryMax: null,
      currency: 'EUR',
      notes: null,
      company: {
        id: '',
        name: job.company_name,
        websiteUrl: null,
        linkedinUrl: null,
        industry: null,
        fundingStage: null,
        companySizeRange: null,
        employeeCount: null,
      },
    };
  }
}
