import { Injectable, Logger } from '@nestjs/common';
import * as TurndownService from 'turndown';
import { XMLParser } from 'fast-xml-parser';
import { PrismaService } from '../prisma/prisma.service';

const turndown = new (TurndownService as any)({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
});

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  processEntities: false,
  htmlEntities: true,
});

@Injectable()
export class WeWorkRemotelyFetcherService {
  private readonly logger = new Logger(WeWorkRemotelyFetcherService.name);

  private readonly feedUrls = [
    'https://weworkremotely.com/categories/remote-full-stack-programming-jobs.rss',
    'https://weworkremotely.com/categories/remote-back-end-programming-jobs.rss',
    'https://weworkremotely.com/categories/remote-front-end-programming-jobs.rss',
    'https://weworkremotely.com/categories/remote-devops-sysadmin-jobs.rss',
    'https://weworkremotely.com/categories/remote-management-and-finance-jobs.rss',
  ];

  private readonly techAndProductKeywords = [
    'software', 'developer', 'engineer', 'frontend', 'front-end', 'backend', 'back-end', 'fullstack', 'full-stack', 'full stack',
    'architect', 'tech lead', 'technical lead', 'devops', 'cloud', 'infrastructure', 'platform',
    'node', 'typescript', 'javascript', 'react', 'python', 'java', 'golang', 'rust', 'c#', '.net',
    'data engineer', 'machine learning', 'ai engineer',
    'product manager', 'product owner', 'product engineer', 'head of product', 'product lead', 'lead product', 'group product'
  ];

  private readonly excludedRoleKeywords = [
    'hr ', 'human resources', 'recruiter', 'recruitment', 'sales', 'accountant',
    'marketing', 'office manager', 'customer support', 'virtual assistant', 'copywriter', 'finance'
  ];

  private readonly englishMarkers = [
    'responsibilities', 'requirements', 'qualifications', 'we offer', 'about us',
    'about the role', 'your profile', 'what you will do', 'experience', 'skills', 'who you are'
  ];

  constructor(private readonly prisma: PrismaService) {}

  async fetchAndStore(): Promise<number> {
    this.logger.log('🔍 [WeWorkRemotely] Avvio scraping dai feed RSS...');

    const syncState = await this.prisma.weWorkRemotelySyncState.upsert({
      where: { source: 'WEWORKREMOTELY' },
      update: { lastSyncAt: new Date() },
      create: { source: 'WEWORKREMOTELY', lastSyncAt: new Date() },
    });

    let savedCount = 0;

    for (const feedUrl of this.feedUrls) {
      try {
        const response = await fetch(feedUrl, { headers: { 'User-Agent': 'AnalizzatoreRuoli/2.0' } });
        if (!response.ok) {
          this.logger.error(`❌ HTTP ${response.status} da ${feedUrl}`);
          continue;
        }

        const xmlText = await response.text();
        const parsedObj = xmlParser.parse(xmlText);
        const channel = parsedObj?.rss?.channel;
        const items = Array.isArray(channel?.item) ? channel.item : channel?.item ? [channel.item] : [];

        for (const item of items) {
          const externalId = String(item.guid?.['#text'] || item.guid || item.link);
          const jobUrl = String(item.link || '');
          let rawTitle = String(item.title || '');
          let companyName = 'WeWorkRemotely Employer';
          let title = rawTitle;

          if (rawTitle.includes(':')) {
            const parts = rawTitle.split(':');
            companyName = parts[0].trim();
            title = parts.slice(1).join(':').trim();
          }

          const location = String(item.region || 'Remote');
          const rawDescription = String(item.description || '');
          const publicationDate = item.pubDate ? new Date(item.pubDate) : null;
          const tags = Array.isArray(item.category) ? item.category : item.category ? [item.category] : [];

          // Watermark check
          if (syncState.lastSuccessfulSyncAt && publicationDate && publicationDate <= syncState.lastSuccessfulSyncAt) {
            continue;
          }

          // Filtro Esclusione Ruoli non IT
          const titleLower = title.toLowerCase();
          if (this.excludedRoleKeywords.some((ex) => titleLower.includes(ex))) {
            continue;
          }

          // Filtro Ruoli Tech / Product
          const tagsLower = tags.map((t: string) => String(t).toLowerCase()).join(' ');
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

          await this.prisma.weWorkRemotelyScrapedJob.upsert({
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
        this.logger.error(`❌ Errore parsing feed ${feedUrl}: ${err.message}`);
      }
    }

    await this.prisma.weWorkRemotelySyncState.update({
      where: { source: 'WEWORKREMOTELY' },
      data: {
        lastSuccessfulSyncAt: new Date(),
        itemsExtracted: { increment: savedCount },
      },
    });

    this.logger.log(`✅ [WeWorkRemotely] Scraping completato. ${savedCount} nuove offerte registrate/aggiornate.`);
    return savedCount;
  }
}
