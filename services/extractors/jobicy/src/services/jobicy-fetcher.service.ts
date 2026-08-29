import { Injectable, Logger } from '@nestjs/common';
import * as TurndownService from 'turndown';
import { PrismaService } from '../prisma/prisma.service';

const turndown = new (TurndownService as any)({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
});

@Injectable()
export class JobicyFetcherService {
  private readonly logger = new Logger(JobicyFetcherService.name);
  private readonly baseUrl = 'https://jobicy.com/api/v2/remote-jobs';

  private readonly techAndProductKeywords = [
    'software', 'developer', 'engineer', 'frontend', 'backend', 'fullstack', 'full-stack', 'full stack',
    'architect', 'tech lead', 'technical lead', 'devops', 'cloud', 'infrastructure', 'platform',
    'node', 'typescript', 'javascript', 'react', 'python', 'java', 'golang', 'rust', 'c#', '.net',
    'data engineer', 'machine learning', 'ai engineer',
    'product manager', 'product owner', 'product engineer', 'head of product', 'product lead', 'lead product', 'group product'
  ];

  private readonly excludedRoleKeywords = [
    'hr ', 'human resources', 'recruiter', 'recruitment', 'sales', 'accountant',
    'marketing', 'office manager', 'customer support', 'virtual assistant', 'copywriter'
  ];

  private readonly englishMarkers = [
    'responsibilities', 'requirements', 'qualifications', 'we offer', 'about us',
    'about the role', 'your profile', 'what you will do', 'experience', 'skills', 'who you are'
  ];

  private readonly europeanLocations = [
    'anywhere', 'worldwide', 'remote', 'europe', 'eu', 'emea', 'italy', 'germany',
    'france', 'spain', 'netherlands', 'switzerland', 'austria', 'uk', 'united kingdom',
    'ireland', 'poland', 'sweden', 'norway', 'denmark', 'finland', 'portugal', 'estonia', 'czech'
  ];

  constructor(private readonly prisma: PrismaService) {}

  async fetchAndStore(): Promise<number> {
    this.logger.log('🔍 [Jobicy] Avvio scraping da API...');

    const syncState = await this.prisma.jobicySyncState.upsert({
      where: { source: 'JOBICY' },
      update: { lastSyncAt: new Date() },
      create: { source: 'JOBICY', lastSyncAt: new Date() },
    });

    const categories = ['dev', 'engineering', 'data-science'];
    let savedCount = 0;

    for (const category of categories) {
      const url = `${this.baseUrl}?industry=${category}&count=100`;
      try {
        const response = await fetch(url, { headers: { 'User-Agent': 'AnalizzatoreRuoli/2.0' } });
        if (!response.ok) {
          this.logger.error(`❌ HTTP ${response.status} da ${url}`);
          continue;
        }

        const data: any = await response.json();
        const jobs: any[] = data.jobs || [];

        for (const item of jobs) {
          const externalId = String(item.id);
          const jobUrl = item.url;
          const title = item.jobTitle || '';
          const companyName = item.companyName || 'Unknown';
          const location = item.jobGeo || 'Remote';
          const rawDescription = item.jobDescription || item.jobExcerpt || '';
          const publicationDate = item.pubDate ? new Date(item.pubDate) : null;
          const tags = Array.isArray(item.jobCategory) ? item.jobCategory : [item.jobCategory].filter(Boolean);

          // Watermark check
          if (syncState.lastSuccessfulSyncAt && publicationDate && publicationDate <= syncState.lastSuccessfulSyncAt) {
            continue;
          }

          // Filtro Europa
          const locLower = location.toLowerCase();
          const isEurope = this.europeanLocations.some((loc) => locLower.includes(loc));
          if (!isEurope) continue;

          // Filtro Esclusione Ruoli non IT
          const titleLower = title.toLowerCase();
          if (this.excludedRoleKeywords.some((ex) => titleLower.includes(ex))) {
            continue;
          }

          // Filtro Ruoli Tech / Product
          const tagsLower = tags.map((t: string) => t.toLowerCase()).join(' ');
          const combinedText = `${titleLower} ${tagsLower}`;
          if (!this.techAndProductKeywords.some((kw) => combinedText.includes(kw))) {
            continue;
          }

          // Filtro Lingua Inglese
          const descLower = rawDescription.toLowerCase();
          const isEnglish = this.englishMarkers.some((marker) => descLower.includes(marker));
          if (!isEnglish && rawDescription.length > 100) {
            continue;
          }

          const descriptionMarkdown = rawDescription ? turndown.turndown(rawDescription) : '';

          await this.prisma.jobicyScrapedJob.upsert({
            where: { externalId },
            update: {
              title,
              companyName,
              location,
              rawDescription,
              descriptionMarkdown,
              datePosted: publicationDate,
              tags: JSON.stringify(tags),
            },
            create: {
              externalId,
              url: jobUrl,
              title,
              companyName,
              location,
              remoteType: 'REMOTE',
              rawDescription,
              descriptionMarkdown,
              datePosted: publicationDate,
              tags: JSON.stringify(tags),
              outboxStatus: 'PENDING',
            },
          });

          savedCount++;
        }
      } catch (err: any) {
        this.logger.error(`❌ Errore scraping Jobicy (categoria ${category}): ${err.message}`);
      }
    }

    await this.prisma.jobicySyncState.update({
      where: { source: 'JOBICY' },
      data: {
        lastSuccessfulSyncAt: new Date(),
        itemsExtracted: { increment: savedCount },
      },
    });

    this.logger.log(`✅ [Jobicy] Scraping completato. ${savedCount} nuove offerte registrate/aggiornate.`);
    return savedCount;
  }
}
