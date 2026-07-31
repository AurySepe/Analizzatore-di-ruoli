import { JobSource } from '@prisma/client';
import { convertToMarkdown } from '../../../commons/utils/html-to-markdown';
import { BaseExtractor, RawExtractedJob, ExtractionResult } from './base-extractor';
import * as Parser from 'rss-parser';

export interface WeWorkRemotelyExtractorOptions {
  onlyTechAndProduct?: boolean;
  onlyEnglish?: boolean;
}

export class WeWorkRemotelyExtractor extends BaseExtractor {
  public readonly sourceName = JobSource.WE_WORK_REMOTELY;
  public readonly baseUrl = 'https://weworkremotely.com';

  private readonly parser: Parser;
  private readonly onlyTechAndProduct: boolean;
  private readonly onlyEnglish: boolean;

  // Feeds di WWR pertinenti a Software Engineering & Product
  private readonly feedUrls = [
    'https://weworkremotely.com/categories/remote-full-stack-programming-jobs.rss',
    'https://weworkremotely.com/categories/remote-back-end-programming-jobs.rss',
    'https://weworkremotely.com/categories/remote-front-end-programming-jobs.rss',
    'https://weworkremotely.com/categories/remote-devops-sysadmin-jobs.rss',
    'https://weworkremotely.com/categories/remote-management-and-finance-jobs.rss', // contiene Product Manager
  ];

  // Keyword positive per Ruoli Software & Product Engineer
  private readonly techAndProductKeywords = [
    'software', 'developer', 'engineer', 'frontend', 'front-end', 'backend', 'back-end', 'fullstack', 'full-stack', 'full stack',
    'architect', 'tech lead', 'technical lead', 'devops', 'cloud', 'infrastructure', 'platform',
    'node', 'typescript', 'javascript', 'react', 'python', 'java', 'golang', 'rust', 'c#', '.net',
    'data engineer', 'machine learning', 'ai engineer',
    'product manager', 'product owner', 'product engineer', 'head of product', 'product lead', 'lead product', 'group product'
  ];

  // Keyword negative da ESCLUDERE (ruoli non-IT, marketing/sales puri, assistenza)
  private readonly excludedRoleKeywords = [
    'hr ', 'human resources', 'recruiter', 'recruitment', 'sales', 'accountant',
    'marketing', 'office manager', 'customer support', 'virtual assistant', 'copywriter', 'finance'
  ];

  // Indicatori di lingua inglese
  private readonly englishMarkers = [
    'responsibilities', 'requirements', 'qualifications', 'we offer', 'about us',
    'about the role', 'your profile', 'what you will do', 'experience', 'skills', 'who you are'
  ];

  constructor(options: WeWorkRemotelyExtractorOptions = {}) {
    super();
    this.parser = new Parser({
      customFields: {
        item: ['region', 'category'],
      },
    });
    this.onlyTechAndProduct = options.onlyTechAndProduct ?? true;
    this.onlyEnglish = options.onlyEnglish ?? true;
  }

  async extract(lastSyncTimestamp?: Date): Promise<ExtractionResult> {
    const extractedJobsMap = new Map<string, RawExtractedJob>();
    let hasErrors = false;

    this.logger.log(
      `🔍 [${this.sourceName}] Inizio estrazione RSS (Tech/Product: ${this.onlyTechAndProduct}, Solo Inglese: ${this.onlyEnglish}, Watermark: ${lastSyncTimestamp ? lastSyncTimestamp.toISOString() : 'Nessuno'})...`,
    );

    for (const feedUrl of this.feedUrls) {
      this.logger.log(`📄 [${this.sourceName}] Fetching feed RSS: ${feedUrl}`);

      try {
        const feed = await this.parser.parseURL(feedUrl);

        for (const item of feed.items) {
          if (!item.guid || !item.link || !item.title) {
            continue;
          }

          const externalId = item.guid || item.link;

          // Se l'annuncio è già stato elaborato da un altro feed della stessa esecuzione, saltalo
          if (extractedJobsMap.has(externalId)) {
            continue;
          }

          // Data di pubblicazione
          const datePosted = item.pubDate ? new Date(item.pubDate) : new Date();

          // Filtro Watermark: se la data di pubblicazione è precedente all'ultimo sync, ignora
          if (lastSyncTimestamp && datePosted <= lastSyncTimestamp) {
            continue;
          }

          // Titolo e Azienda (WWR tipicamente formatta i titoli come "Company: Job Title")
          let title = item.title.trim();
          let companyName = 'WeWorkRemotely Employer';

          if (title.includes(':')) {
            const parts = title.split(':');
            companyName = parts[0].trim();
            title = parts.slice(1).join(':').trim();
          }

          // Contenuto grezzo HTML e Markdown
          const rawDescription = item.content || item.contentSnippet || '';
          const descriptionMarkdown = convertToMarkdown(rawDescription) || '';

          // 1. Filtro Ruolo (Tech & Product)
          if (this.onlyTechAndProduct && !this.isTechOrProductRole(title)) {
            continue;
          }

          // 2. Filtro Lingua Inglese
          if (this.onlyEnglish && !this.isEnglishDescription(title, descriptionMarkdown)) {
            continue;
          }

          // Location & Region da RSS
          const region = (item as any).region || 'Worldwide / Remote';
          const location = region ? `Remote (${region})` : 'Remote';

          extractedJobsMap.set(externalId, {
            externalId,
            source: this.sourceName,
            url: item.link,
            title,
            companyName,
            location,
            isRemote: true,
            rawDescription,
            descriptionMarkdown,
            datePosted,
          });
        }
      } catch (error: any) {
        this.logger.error(`❌ Errore durante il fetch o parsing del feed RSS WWR (${feedUrl}): ${error.message}`);
        hasErrors = true;
      }
    }

    const jobs = Array.from(extractedJobsMap.values());
    this.logger.log(`✅ [${this.sourceName}] Estrazione completata. Annunci totali estratti: ${jobs.length}`);

    return {
      jobs,
      hasErrors,
    };
  }

  private isTechOrProductRole(title: string): boolean {
    const lowerTitle = title.toLowerCase();

    // Scarta se contiene keyword negative
    if (this.excludedRoleKeywords.some((keyword) => lowerTitle.includes(keyword))) {
      return false;
    }

    // Accetta se contiene keyword positive Tech / Product
    return this.techAndProductKeywords.some((keyword) => lowerTitle.includes(keyword));
  }

  private isEnglishDescription(title: string, markdown: string): boolean {
    const textToEvaluate = `${title} ${markdown}`.toLowerCase();
    return this.englishMarkers.some((marker) => textToEvaluate.includes(marker));
  }
}
