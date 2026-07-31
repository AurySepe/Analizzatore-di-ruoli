import { JobSource } from '@prisma/client';
import { convertToMarkdown } from '../../../commons/utils/html-to-markdown';
import { BaseExtractor, RawExtractedJob, ExtractionResult } from './base-extractor';

export interface ArbeitnowExtractorOptions {
  keywords?: string[];
  onlyRemote?: boolean;
  onlyTechAndProduct?: boolean;
  onlyEnglish?: boolean;
  onlyEurope?: boolean;
}

export class ArbeitnowExtractor extends BaseExtractor {
  public readonly sourceName = JobSource.ARBEITNOW;
  public readonly baseUrl = 'https://www.arbeitnow.com/api/job-board-api';


  private readonly keywords: string[];
  private readonly onlyRemote: boolean;
  private readonly onlyTechAndProduct: boolean;
  private readonly onlyEnglish: boolean;
  private readonly onlyEurope: boolean;

  // Keyword positive per Ruoli Software & Prodotto
  private readonly techAndProductKeywords = [
    'software', 'developer', 'engineer', 'frontend', 'backend', 'fullstack', 'full-stack', 'full stack',
    'architect', 'tech lead', 'technical lead', 'devops', 'cloud', 'infrastructure', 'platform',
    'node', 'typescript', 'javascript', 'react', 'python', 'java', 'golang', 'rust', 'c#', '.net',
    'data engineer', 'machine learning', 'ai engineer',
    'product manager', 'product owner', 'head of product', 'product lead', 'lead product', 'group product'
  ];

  // Keyword negative da ESCLUDERE tassativamente (ruoli non-IT, amministrazione, tirocini in tedesco)
  private readonly excludedRoleKeywords = [
    'hr ', 'human resources', 'recruiter', 'recruitment', 'sales', 'accountant', 'buchhalter',
    'marketing', 'office manager', 'ausbildung', 'praktikum', 'vertrieb', 'sachbearbeiter',
    'projektassistent', 'assistenz', 'personalreferent', 'steuerfachangestellter'
  ];

  // Indicatori di lingua tedesca
  private readonly germanMarkers = [
    'aufgaben', 'profil', 'anforderungen', 'wir bieten', 'über uns', 'uber uns',
    'mitarbeiter', 'fachrichtung', 'ausbildung', 'kontakt', 'voraussetzungen', 'unser team'
  ];

  // Indicatori di lingua inglese
  private readonly englishMarkers = [
    'responsibilities', 'requirements', 'qualifications', 'we offer', 'about us',
    'about the role', 'your profile', 'what you will do', 'experience', 'skills', 'who you are'
  ];

  constructor(options: ArbeitnowExtractorOptions = {}) {
    super();
    this.keywords = options.keywords || [];
    this.onlyRemote = options.onlyRemote ?? false;
    this.onlyTechAndProduct = options.onlyTechAndProduct ?? true;
    this.onlyEnglish = options.onlyEnglish ?? true;
    this.onlyEurope = options.onlyEurope ?? true;
  }

  async extract(lastSyncTimestamp?: Date): Promise<ExtractionResult> {
    const extractedJobs: RawExtractedJob[] = [];
    let currentPage = 1;
    let hasMorePages = true;
    let stopPagination = false;
    let hasErrors = false;

    this.logger.log(
      `🔍 [${this.sourceName}] Inizio estrazione (Tech/Product: ${this.onlyTechAndProduct}, Solo Inglese: ${this.onlyEnglish}, Solo Europa: ${this.onlyEurope}, Watermark: ${lastSyncTimestamp ? lastSyncTimestamp.toISOString() : 'Nessuno'})...`,
    );

    while (hasMorePages && !stopPagination) {
      this.logger.log(`📄 [${this.sourceName}] Download pagina ${currentPage}... (${this.baseUrl})`);

      try {
        const response = await this.fetchWithRetry(`${this.baseUrl}?page=${currentPage}`);

        if (!response.ok) {
          this.logger.error(`❌ HTTP ${response.status} durante il fetch da ${this.sourceName}`);
          hasErrors = true;
          break;
        }

        const data = await response.json();
        const rawJobsList: any[] = data.data || [];

        if (rawJobsList.length === 0) {
          hasMorePages = false;
          break;
        }

        for (const item of rawJobsList) {
          const itemPostedDate = item.created_at ? new Date(item.created_at * 1000) : new Date();

          if (lastSyncTimestamp && itemPostedDate <= lastSyncTimestamp) {
            this.logger.log(`⏹️ [${this.sourceName}] Raggiunto watermark ultimo sync (${itemPostedDate.toISOString()} <= ${lastSyncTimestamp.toISOString()}). Interruzione anticipata delta sync.`);
            stopPagination = true;
            break;
          }

          if (this.onlyRemote && !item.remote) {
            continue;
          }

          if (this.onlyEurope && !this.isEuropeanLocation(item.location)) {
            continue;
          }

          const titleLower = (item.title || '').toLowerCase();
          const descriptionLower = (item.description || '').toLowerCase();
          const tagsLower = Array.isArray(item.tags) ? item.tags.map((t: string) => t.toLowerCase()) : [];
          const combinedSearchText = `${titleLower} ${tagsLower.join(' ')}`;

          // 1. Filtro Esclusione Ruoli Non-IT / Non-Prodotto
          const isExcluded = this.excludedRoleKeywords.some((ex) => titleLower.includes(ex));
          if (isExcluded) {
            continue;
          }

          // 2. Filtro Ruoli Tech & Product
          if (this.onlyTechAndProduct) {
            const isTechOrProduct = this.techAndProductKeywords.some((kw) => combinedSearchText.includes(kw));
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

          extractedJobs.push({
            externalId: item.slug || String(item.id),
            source: this.sourceName,
            url: item.url,
            title: item.title,
            companyName: item.company_name,
            location: item.location || 'Remote',
            isRemote: Boolean(item.remote),
            rawDescription: rawDesc,
            descriptionMarkdown: markdownDesc,
            datePosted: itemPostedDate,
            tags: Array.isArray(item.tags) ? item.tags : [],
          });
        }

        if (data.links && data.links.next && !stopPagination && currentPage < 15) {
          currentPage++;
          await new Promise((res) => setTimeout(res, 2000));
        } else {
          hasMorePages = false;
        }
      } catch (err) {
        this.logger.error(`❌ Errore durante l estrazione da ${this.sourceName} pagina ${currentPage}:`, err);
        hasErrors = true;
        break;
      }
    }

    this.logger.log(`✅ [${this.sourceName}] Estrazione completata. Totale offerte valide filtrate: ${extractedJobs.length} (hasErrors: ${hasErrors})`);
    return { jobs: extractedJobs, hasErrors };
  }

  private isEnglishContent(text: string): boolean {
    let germanScore = 0;
    let englishScore = 0;

    for (const marker of this.germanMarkers) {
      if (text.includes(marker)) germanScore++;
    }

    for (const marker of this.englishMarkers) {
      if (text.includes(marker)) englishScore++;
    }

    // Se ci sono marcatori tedeschi rilevanti e pochi marcatori inglesi, la descrizione è in tedesco
    if (germanScore > englishScore && germanScore >= 2) {
      return false;
    }

    return true;
  }
}
