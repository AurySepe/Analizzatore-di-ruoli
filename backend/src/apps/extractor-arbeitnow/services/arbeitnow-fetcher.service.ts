import { Injectable, Logger } from '@nestjs/common';
import { convertToMarkdown } from '../../../commons/utils/html-to-markdown';

export interface ArbeitnowRawJobDto {
  slug?: string;
  id?: string | number;
  title?: string;
  company_name?: string;
  url?: string;
  location?: string;
  remote?: boolean;
  description?: string;
  created_at?: number;
  tags?: string[];
  job_types?: string[];
}

export interface ParsedArbeitnowJob {
  externalId: string;
  title: string;
  companyName: string;
  url: string;
  location: string;
  remoteType: string;
  rawDescription: string;
  descriptionMarkdown: string | null;
  datePosted: Date;
  tags: string[];
}

@Injectable()
export class ArbeitnowFetcherService {
  private readonly logger = new Logger(ArbeitnowFetcherService.name);
  public readonly baseUrl = 'https://www.arbeitnow.com/api/job-board-api';

  private readonly techAndProductKeywords = [
    'software', 'developer', 'engineer', 'frontend', 'backend', 'fullstack', 'full-stack', 'full stack',
    'architect', 'tech lead', 'technical lead', 'devops', 'cloud', 'infrastructure', 'platform',
    'node', 'typescript', 'javascript', 'react', 'python', 'java', 'golang', 'rust', 'c#', '.net',
    'data engineer', 'machine learning', 'ai engineer',
    'product manager', 'product owner', 'head of product', 'product lead', 'lead product', 'group product'
  ];

  private readonly excludedRoleKeywords = [
    'hr ', 'human resources', 'recruiter', 'recruitment', 'sales', 'accountant', 'buchhalter',
    'marketing', 'office manager', 'ausbildung', 'praktikum', 'vertrieb', 'sachbearbeiter',
    'projektassistent', 'assistenz', 'personalreferent', 'steuerfachangestellter'
  ];

  private readonly germanMarkers = [
    'aufgaben', 'profil', 'anforderungen', 'wir bieten', 'über uns', 'uber uns',
    'mitarbeiter', 'fachrichtung', 'ausbildung', 'kontakt', 'voraussetzungen', 'unser team'
  ];

  private readonly englishMarkers = [
    'responsibilities', 'requirements', 'qualifications', 'we offer', 'about us',
    'about the role', 'your profile', 'what you will do', 'experience', 'skills', 'who you are'
  ];

  private isEuropeanLocation(location?: string): boolean {
    if (!location) return true;
    const loc = location.toLowerCase();
    if (loc.includes('usa') || loc.includes('united states') || loc.includes('canada') || loc.includes('india')) {
      return false;
    }
    return true;
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

    if (germanScore > englishScore && germanScore >= 2) {
      return false;
    }
    return true;
  }

  async fetchJobs(lastSyncTimestamp?: Date): Promise<{ jobs: ParsedArbeitnowJob[]; lastPage: number; hasErrors: boolean }> {
    const parsedJobs: ParsedArbeitnowJob[] = [];
    let currentPage = 1;
    let hasMorePages = true;
    let stopPagination = false;
    let hasErrors = false;

    this.logger.log(`🔍 [ArbeitnowFetcher] Inizio fetch API (Watermark: ${lastSyncTimestamp ? lastSyncTimestamp.toISOString() : 'Nessuno'})...`);

    while (hasMorePages && !stopPagination && currentPage <= 15) {
      this.logger.log(`📄 [ArbeitnowFetcher] Richiesta pagina ${currentPage}...`);

      try {
        const response = await fetch(`${this.baseUrl}?page=${currentPage}`, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        });

        if (!response.ok) {
          this.logger.error(`❌ HTTP ${response.status} durante fetch pagina ${currentPage}`);
          hasErrors = true;
          break;
        }

        const data: { data?: ArbeitnowRawJobDto[]; links?: { next?: string } } = await response.json();
        const rawJobsList = data.data || [];

        if (rawJobsList.length === 0) {
          hasMorePages = false;
          break;
        }

        for (const item of rawJobsList) {
          const itemPostedDate = item.created_at ? new Date(item.created_at * 1000) : new Date();

          if (lastSyncTimestamp && itemPostedDate <= lastSyncTimestamp) {
            this.logger.log(`⏹️ Raggiunto watermark ultimo sync (${itemPostedDate.toISOString()}). Interruzione delta.`);
            stopPagination = true;
            break;
          }

          if (!this.isEuropeanLocation(item.location)) {
            continue;
          }

          const titleLower = (item.title || '').toLowerCase();
          const descriptionLower = (item.description || '').toLowerCase();
          const tagsLower = Array.isArray(item.tags) ? item.tags.map((t) => t.toLowerCase()) : [];
          const combinedSearchText = `${titleLower} ${tagsLower.join(' ')}`;

          if (this.excludedRoleKeywords.some((ex) => titleLower.includes(ex))) {
            continue;
          }

          if (!this.techAndProductKeywords.some((kw) => combinedSearchText.includes(kw))) {
            continue;
          }

          if (!this.isEnglishContent(descriptionLower)) {
            continue;
          }

          const rawDesc = item.description || '';
          const markdownDesc = convertToMarkdown(rawDesc);
          const externalId = item.slug || String(item.id || item.url || Date.now());

          if (!item.url || !item.title || !item.company_name) {
            continue;
          }

          parsedJobs.push({
            externalId,
            title: item.title,
            companyName: item.company_name,
            url: item.url,
            location: item.location || 'Remote',
            remoteType: item.remote ? 'FULL_REMOTE' : 'HYBRID',
            rawDescription: rawDesc,
            descriptionMarkdown: markdownDesc,
            datePosted: itemPostedDate,
            tags: Array.isArray(item.tags) ? item.tags : [],
          });
        }

        if (data.links?.next && !stopPagination) {
          currentPage++;
          await new Promise((res) => setTimeout(res, 1500));
        } else {
          hasMorePages = false;
        }
      } catch (err) {
        this.logger.error(`❌ Errore fetch Arbeitnow pagina ${currentPage}:`, err);
        hasErrors = true;
        break;
      }
    }

    return { jobs: parsedJobs, lastPage: currentPage, hasErrors };
  }
}
