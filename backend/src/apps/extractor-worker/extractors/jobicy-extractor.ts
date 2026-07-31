import { z } from 'zod';
import { JobSource } from '@prisma/client';
import { convertToMarkdown } from '../../../commons/utils/html-to-markdown';
import { BaseExtractor, RawExtractedJob, ExtractionResult } from './base-extractor';

export const jobicyJobItemSchema = z.object({
  id: z.union([z.number(), z.string()]),
  url: z.string().url(),
  jobTitle: z.string(),
  companyName: z.string(),
  jobCategory: z.union([z.string(), z.array(z.string())]).optional(),
  jobType: z.union([z.string(), z.array(z.string())]).optional(),
  pubDate: z.string(),
  jobGeo: z.string().optional().default('Worldwide'),
  jobLevel: z.string().optional(),
  jobExcerpt: z.string().optional().default(''),
  jobDescription: z.string().optional().default(''),
});

export const jobicyApiResponseSchema = z.object({
  status: z.union([z.string(), z.number()]).optional(),
  apiVersion: z.string().optional(),
  totalCount: z.number().optional(),
  jobs: z.array(jobicyJobItemSchema).default([]),
});

export type JobicyJobItem = z.infer<typeof jobicyJobItemSchema>;

export type JobicyCategory = 'dev' | 'engineering' | 'data-science';

export interface JobicyExtractorOptions {
  onlyTechAndProduct?: boolean;
  onlyEnglish?: boolean;
  onlyEurope?: boolean;
}

export class JobicyExtractor extends BaseExtractor {
  public readonly sourceName = JobSource.JOBICY;
  public readonly baseUrl = 'https://jobicy.com/api/v2/remote-jobs';

  private readonly onlyTechAndProduct: boolean;
  private readonly onlyEnglish: boolean;
  private readonly onlyEurope: boolean;

  // Keyword positive per Ruoli Software & Product Engineer
  private readonly techAndProductKeywords = [
    'software', 'developer', 'engineer', 'frontend', 'backend', 'fullstack', 'full-stack', 'full stack',
    'architect', 'tech lead', 'technical lead', 'devops', 'cloud', 'infrastructure', 'platform',
    'node', 'typescript', 'javascript', 'react', 'python', 'java', 'golang', 'rust', 'c#', '.net',
    'data engineer', 'machine learning', 'ai engineer',
    'product manager', 'product owner', 'product engineer', 'head of product', 'product lead', 'lead product', 'group product'
  ];

  // Keyword negative da ESCLUDERE (ruoli non-IT, marketing/sales puri, assistenza)
  private readonly excludedRoleKeywords = [
    'hr ', 'human resources', 'recruiter', 'recruitment', 'sales', 'accountant',
    'marketing', 'office manager', 'customer support', 'virtual assistant', 'copywriter'
  ];

  // Indicatori di lingua inglese
  private readonly englishMarkers = [
    'responsibilities', 'requirements', 'qualifications', 'we offer', 'about us',
    'about the role', 'your profile', 'what you will do', 'experience', 'skills', 'who you are'
  ];

  constructor(options: JobicyExtractorOptions = {}) {
    super();
    this.onlyTechAndProduct = options.onlyTechAndProduct ?? true;
    this.onlyEnglish = options.onlyEnglish ?? true;
    this.onlyEurope = options.onlyEurope ?? true;
  }

  async extract(lastSyncTimestamp?: Date): Promise<ExtractionResult> {
    const extractedJobsMap = new Map<string, RawExtractedJob>();
    let hasErrors = false;

    // Categorie/Industries tech ufficiali supportate dall API di Jobicy
    const categoriesToFetch: JobicyCategory[] = [
      'dev',
      'engineering',
      'data-science'
    ];

    const countToFetch = 100; // Valore massimo consigliato/supportato dall API pubblica di Jobicy per singola richiesta

    this.logger.log(
      `🔍 [${this.sourceName}] Inizio estrazione multi-categoria (Tech/Product: ${this.onlyTechAndProduct}, Solo Inglese: ${this.onlyEnglish}, Solo Europa: ${this.onlyEurope}, Watermark: ${lastSyncTimestamp ? lastSyncTimestamp.toISOString() : 'Nessuno'})...`,
    );

    for (const category of categoriesToFetch) {
      const requestUrl = `${this.baseUrl}?industry=${category}&count=${countToFetch}`;
      this.logger.log(`📄 [${this.sourceName}] Fetch categoria/industria "${category}"... (${requestUrl})`);

      try {
        const response = await this.fetchWithRetry(requestUrl);

        if (!response.ok) {
          this.logger.error(`❌ HTTP ${response.status} durante il fetch della categoria ${category} da ${this.sourceName}`);
          hasErrors = true;
          continue;
        }

        const jsonPayload = await response.json();
        const parseResult = jobicyApiResponseSchema.safeParse(jsonPayload);

        if (!parseResult.success) {
          this.logger.error(`❌ Validazione Zod fallita per ${this.sourceName} (cat: ${category}):`, parseResult.error.format());
          hasErrors = true;
          continue;
        }

        const rawJobs = parseResult.data.jobs;

        for (const item of rawJobs) {
          const externalId = String(item.id);
          if (extractedJobsMap.has(externalId)) continue;

          const itemPostedDate = item.pubDate ? new Date(item.pubDate) : new Date();

          // Watermark check
          if (lastSyncTimestamp && itemPostedDate <= lastSyncTimestamp) {
            continue;
          }

          // 1. Filtro Europa su jobGeo
          if (this.onlyEurope && !this.isEuropeanLocation(item.jobGeo)) {
            continue;
          }

          const titleLower = (item.jobTitle || '').toLowerCase();
          const categoryStr = Array.isArray(item.jobCategory) ? item.jobCategory.join(' ') : (item.jobCategory || '');
          const combinedText = `${titleLower} ${categoryStr.toLowerCase()} ${category}`;

          // 2. Filtro Esclusione Ruoli non IT
          const isExcluded = this.excludedRoleKeywords.some((ex) => titleLower.includes(ex));
          if (isExcluded) {
            continue;
          }

          // 3. Filtro Ruoli Tech & Product
          if (this.onlyTechAndProduct) {
            const isTechOrProduct = this.techAndProductKeywords.some((kw) => combinedText.includes(kw));
            if (!isTechOrProduct) {
              continue;
            }
          }

          const rawDesc = item.jobDescription || item.jobExcerpt || '';
          const descriptionLower = rawDesc.toLowerCase();

          // 4. Filtro Lingua Inglese
          if (this.onlyEnglish) {
            const isEnglish = this.isEnglishContent(descriptionLower);
            if (!isEnglish) {
              continue;
            }
          }

          const markdownDesc = convertToMarkdown(rawDesc);

          extractedJobsMap.set(externalId, {
            externalId,
            source: this.sourceName,
            url: item.url,
            title: item.jobTitle,
            companyName: item.companyName,
            location: item.jobGeo || 'Remote',
            isRemote: true,
            rawDescription: rawDesc,
            descriptionMarkdown: markdownDesc,
            datePosted: itemPostedDate,
            tags: Array.isArray(item.jobCategory) ? item.jobCategory : [categoryStr].filter(Boolean),
          });
        }

        // Cortesia tra le richieste per evitare rate limits
        await new Promise((res) => setTimeout(res, 1000));
      } catch (err: any) {
        this.logger.error(`❌ Errore durante l estrazione della categoria ${category} da ${this.sourceName}:`, err?.message || err);
        hasErrors = true;
      }
    }

    const result = Array.from(extractedJobsMap.values());
    this.logger.log(`✅ [${this.sourceName}] Estrazione completata da tutte le categorie tech. Totale offerte uniche filtrate: ${result.length} (hasErrors: ${hasErrors})`);
    return { jobs: result, hasErrors };
  }

  private isEnglishContent(text: string): boolean {
    let englishScore = 0;
    for (const marker of this.englishMarkers) {
      if (text.includes(marker)) englishScore++;
    }
    return englishScore >= 1 || text.length === 0;
  }
}
