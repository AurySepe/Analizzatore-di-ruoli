import { Injectable, Logger } from '@nestjs/common';
import * as TurndownService from 'turndown';
import { PrismaService } from '../prisma/prisma.service';

const turndown = new (TurndownService as any)({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
});

@Injectable()
export class RemotiveFetcherService {
  private readonly logger = new Logger(RemotiveFetcherService.name);
  private readonly baseUrl = 'https://remotive.com/api/remote-jobs';

  private readonly techAndProductKeywords = [
    'software', 'developer', 'engineer', 'frontend', 'backend', 'fullstack', 'full-stack', 'full stack',
    'architect', 'tech lead', 'technical lead', 'devops', 'cloud', 'infrastructure', 'platform',
    'node', 'typescript', 'javascript', 'react', 'python', 'java', 'golang', 'rust', 'c#', '.net',
    'data engineer', 'machine learning', 'ai engineer',
    'product manager', 'product owner', 'product engineer', 'head of product', 'product lead', 'lead product', 'group product'
  ];

  private readonly excludedRoleKeywords = [
    'hr ', 'human resources', 'recruiter', 'recruitment', 'sales', 'accountant',
    'marketing', 'office manager', 'customer support', 'virtual assistant'
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
    this.logger.log('🔍 [Remotive] Avvio scraping da API...');

    const syncState = await this.prisma.remotiveSyncState.upsert({
      where: { source: 'REMOTIVE' },
      update: { lastSyncAt: new Date() },
      create: { source: 'REMOTIVE', lastSyncAt: new Date() },
    });

    const categories = ['software-dev', 'devops', 'data', 'product'];
    let savedCount = 0;

    for (const category of categories) {
      const url = `${this.baseUrl}?category=${category}`;
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
          const title = item.title || '';
          const companyName = item.company_name || 'Unknown';
          const location = item.candidate_required_location || 'Remote';
          const rawDescription = item.description || '';
          const publicationDate = item.publication_date ? new Date(item.publication_date) : null;
          const tags = item.tags || [];

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
          const combinedText = `${titleLower} ${(item.category || '').toLowerCase()} ${tagsLower}`;
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

          await this.prisma.remotiveScrapedJob.upsert({
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
        this.logger.error(`❌ Errore scraping categoria ${category}: ${err.message}`);
      }
    }

    await this.prisma.remotiveSyncState.update({
      where: { source: 'REMOTIVE' },
      data: {
        lastSuccessfulSyncAt: new Date(),
        itemsExtracted: { increment: savedCount },
      },
    });

    this.logger.log(`✅ [Remotive] Scraping completato. ${savedCount} nuove offerte registrate/aggiornate.`);
    return savedCount;
  }
}
