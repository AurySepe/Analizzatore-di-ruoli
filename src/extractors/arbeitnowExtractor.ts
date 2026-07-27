import { z } from 'zod';
import { BaseExtractor } from './baseExtractor';
import { CreateJobOfferInput, RemoteType } from '../types/jobOffer';

export interface ArbeitnowExtractorConfig {
  keywords?: string[];       // Parole chiave (es. ["TypeScript", "Node.js", "Backend"])
  onlyRemote?: boolean;      // Filtra solo annunci con flag Remote
  locations?: string[];      // Filtra solo annunci che contengono queste location (es. ["Berlin", "Remote"])
  limit?: number;            // Numero massimo di annunci da estrarre
}

// 1. Definizione dello Schema Zod per la validazione a runtime della risposta API
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

  async extract(): Promise<CreateJobOfferInput[]> {
    console.log(`🔍 [${this.sourceName}] Inizio estrazione offerte di lavoro in Europa...`);

    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`Errore risposta API Arbeitnow: ${response.statusText} (${response.status})`);
      }

      const rawJson = await response.json();

      // 2. Validazione a runtime con Zod
      const parseResult = ArbeitnowApiResponseSchema.safeParse(rawJson);

      if (!parseResult.success) {
        console.error(`❌ [${this.sourceName}] Risposta API non valida secondo lo schema Zod:`, parseResult.error.format());
        return [];
      }

      let jobs = parseResult.data.data;

      // 3. Filtraggio per keywords
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

      // 4. Filtraggio per location
      if (this.config.locations && this.config.locations.length > 0) {
        const lowerLocations = this.config.locations.map(l => l.toLowerCase());
        jobs = jobs.filter(job => {
          const jobLoc = (job.location || '').toLowerCase();
          return lowerLocations.some(loc => jobLoc.includes(loc));
        });
      }

      // 5. Filtraggio per opzione solo Remote
      if (this.config.onlyRemote) {
        jobs = jobs.filter(job => job.remote);
      }

      // 6. Limitazione del numero di risultati
      if (this.config.limit && this.config.limit > 0) {
        jobs = jobs.slice(0, this.config.limit);
      }

      console.log(`📊 [${this.sourceName}] Trovate ${jobs.length} offerte pertinenti e validate a runtime.`);

      // 7. Mappatura nel formato standard CreateJobOfferInput
      return jobs.map(job => this.mapToJobOfferInput(job));
    } catch (error) {
      console.error(`❌ [${this.sourceName}] Errore durante l'estrazione:`, error);
      return [];
    }
  }

  private mapToJobOfferInput(job: ArbeitnowJob): CreateJobOfferInput {
    let remoteType: RemoteType = 'UNSPECIFIED';
    if (job.remote) {
      remoteType = 'REMOTE';
    } else if (job.location && job.location.toLowerCase().includes('hybrid')) {
      remoteType = 'HYBRID';
    } else if (job.location) {
      remoteType = 'ON_SITE';
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
      contractType: job.job_types.length > 0 ? job.job_types.join(', ') : undefined,
      skills: job.tags,
      company: {
        name: job.company_name,
        websiteUrl: undefined,
        fundingStage: undefined,
        employeeCount: undefined,
      },
    };
  }
}
