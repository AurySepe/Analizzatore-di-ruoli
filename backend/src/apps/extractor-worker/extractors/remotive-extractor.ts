import { z } from 'zod';
import { JobSource } from '@prisma/client';
import { convertToMarkdown } from '../../../commons/utils/html-to-markdown';
import { BaseExtractor, RawExtractedJob } from './base-extractor';

// Schema Zod per validare la risposta dell API Remotive
export const remotiveJobItemSchema = z.object({
  id: z.union([z.number(), z.string()]),
  url: z.string().url(),
  title: z.string(),
  company_name: z.string(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
  job_type: z.string().optional(),
  publication_date: z.string(),
  candidate_required_location: z.string().optional().default('Worldwide'),
  salary: z.string().optional(),
  description: z.string().optional().default(''),
});

export const remotiveApiResponseSchema = z.object({
  jobs: z.array(remotiveJobItemSchema),
});

export type RemotiveJobItem = z.infer<typeof remotiveJobItemSchema>;

export interface RemotiveExtractorOptions {
  onlyTechAndProduct?: boolean;
  onlyEnglish?: boolean;
}

export class RemotiveExtractor extends BaseExtractor {
  public readonly sourceName = JobSource.REMOTIVE;
  public readonly baseUrl = 'https://remotive.com/api/remote-jobs';


  private readonly onlyTechAndProduct: boolean;
  private readonly onlyEnglish: boolean;

  // Keyword positive per Ruoli Software & Product Engineer
  private readonly techAndProductKeywords = [
    'software', 'developer', 'engineer', 'frontend', 'backend', 'fullstack', 'full-stack', 'full stack',
    'architect', 'tech lead', 'technical lead', 'devops', 'cloud', 'infrastructure', 'platform',
    'node', 'typescript', 'javascript', 'react', 'python', 'java', 'golang', 'rust', 'c#', '.net',
    'data engineer', 'machine learning', 'ai engineer',
    'product manager', 'product owner', 'product engineer', 'head of product', 'product lead', 'lead product', 'group product'
  ];

  // Keyword negative da ESCLUDERE (ruoli non-IT o marketing/sales)
  private readonly excludedRoleKeywords = [
    'hr ', 'human resources', 'recruiter', 'recruitment', 'sales', 'accountant',
    'marketing', 'office manager', 'customer support', 'virtual assistant'
  ];

  // Indicatori di lingua inglese
  private readonly englishMarkers = [
    'responsibilities', 'requirements', 'qualifications', 'we offer', 'about us',
    'about the role', 'your profile', 'what you will do', 'experience', 'skills', 'who you are'
  ];

  constructor(options: RemotiveExtractorOptions = {}) {
    super();
    this.onlyTechAndProduct = options.onlyTechAndProduct ?? true;
    this.onlyEnglish = options.onlyEnglish ?? true;
  }

  async extract(lastSyncTimestamp?: Date): Promise<RawExtractedJob[]> {
    const extractedJobsMap = new Map<string, RawExtractedJob>();
    const categoriesToFetch = ['software-dev', 'devops', 'data', 'product'];

    this.logger.log(
      `🔍 [${this.sourceName}] Inizio estrazione (Tech/Product: ${this.onlyTechAndProduct}, Solo Inglese: ${this.onlyEnglish}, Watermark: ${lastSyncTimestamp ? lastSyncTimestamp.toISOString() : 'Nessuno'})...`,
    );

    for (const category of categoriesToFetch) {
      const categoryUrl = `${this.baseUrl}?category=${category}`;
      this.logger.log(`📄 [${this.sourceName}] Download categoria "${category}"... (${categoryUrl})`);

      try {
        const response = await this.fetchWithRetry(categoryUrl);

        if (!response.ok) {
          this.logger.error(`❌ HTTP ${response.status} durante il fetch della categoria ${category} da ${this.sourceName}`);
          continue;
        }

        const jsonPayload = await response.json();

        // Validazione del payload tramite Zod Schema
        const parseResult = remotiveApiResponseSchema.safeParse(jsonPayload);
        if (!parseResult.success) {
          this.logger.error(`❌ Validazione Zod fallita per ${this.sourceName} (cat: ${category}):`, parseResult.error.format());
          continue;
        }

        const rawJobs = parseResult.data.jobs;

        for (const item of rawJobs) {
          const externalId = String(item.id);
          if (extractedJobsMap.has(externalId)) {
            continue; // Evita duplicati tra categorie sovrapposte
          }

          const itemPostedDate = new Date(item.publication_date);

          // Watermark check
          if (lastSyncTimestamp && itemPostedDate <= lastSyncTimestamp) {
            continue;
          }


        const titleLower = item.title.toLowerCase();
        const categoryLower = (item.category || '').toLowerCase();
        const descriptionLower = item.description.toLowerCase();
        const tagsLower = item.tags ? item.tags.map((t) => t.toLowerCase()) : [];
        const combinedText = `${titleLower} ${categoryLower} ${tagsLower.join(' ')}`;

        // 1. Filtro Esclusione Ruoli non IT
        const isExcluded = this.excludedRoleKeywords.some((ex) => titleLower.includes(ex));
        if (isExcluded) {
          continue;
        }

        // 2. Filtro Ruoli Software & Product Engineer
        if (this.onlyTechAndProduct) {
          const isTechOrProduct = this.techAndProductKeywords.some((kw) => combinedText.includes(kw));
          if (!isTechOrProduct) {
            continue;
          }
        }

        // 3. Filtro Lingua Inglese
        if (this.onlyEnglish) {
          const isEnglish = this.isEnglishContent(descriptionLower);
          if (!isEnglish) {
            continue;
          }
        }

        const rawDesc = item.description || '';
        const markdownDesc = convertToMarkdown(rawDesc);

        extractedJobsMap.set(externalId, {
          externalId,
          source: this.sourceName,
          url: item.url,
          title: item.title,
          companyName: item.company_name,
          location: item.candidate_required_location || 'Remote',
          isRemote: true,
          rawDescription: rawDesc,
          descriptionMarkdown: markdownDesc,
          datePosted: itemPostedDate,
          tags: item.tags,
        });
      }
    } catch (err: any) {
      this.logger.error(`❌ Errore durante l estrazione della categoria ${category} da ${this.sourceName}:`, err?.message || err);
    }
  }

  const result = Array.from(extractedJobsMap.values());
  this.logger.log(`✅ [${this.sourceName}] Estrazione completata da tutte le categorie tech. Totale offerte uniche filtrate: ${result.length}`);
  return result;
}


  private isEnglishContent(text: string): boolean {
    let englishScore = 0;
    for (const marker of this.englishMarkers) {
      if (text.includes(marker)) englishScore++;
    }
    return englishScore >= 1 || text.length === 0;
  }
}
