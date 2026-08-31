import { Injectable, Logger } from '@nestjs/common';
import * as TurndownService from 'turndown';
import { PrismaService } from '../prisma/prisma.service';

const turndown = new (TurndownService as any)({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
});

import { components } from '../generated/remoteok-api';

export type RemoteokApiJob = components['schemas']['RemoteokFeedItem'];

@Injectable()
export class RemoteokFetcherService {
  private readonly logger = new Logger(RemoteokFetcherService.name);
  private readonly apiUrl = 'https://remoteok.com/api';

  /**
   * Ruoli tech/product/data da raccogliere.
   */
  private readonly techRoleKeywords = [
    'software', 'developer', 'engineer', 'frontend', 'backend', 'fullstack',
    'full-stack', 'full stack', 'architect', 'tech lead', 'technical lead',
    'devops', 'cloud', 'infrastructure', 'platform', 'sre', 'reliability',
    'node', 'typescript', 'javascript', 'react', 'python', 'java', 'golang',
    'rust', 'c#', '.net', 'data engineer', 'ml engineer', 'ai engineer',
    'machine learning', 'product manager', 'product owner', 'product engineer',
    'head of product', 'principal', 'staff engineer', 'mobile', 'ios', 'android',
    'embedded', 'firmware', 'security engineer', 'qa engineer', 'test engineer',
    'data scientist', 'analytics engineer', 'database', 'api developer',
    'solutions architect', 'systems engineer', 'programmer', 'web developer',
    'data analyst', 'bi developer', 'sysadmin'
  ];

  /**
   * Ruoli esclusi: non-tech, agency, o ruoli founder/co-founder.
   */
  private readonly excludedRoleKeywords = [
    'founder', 'co-founder', 'cofounder', 'founding engineer',
    'hr ', 'human resources', 'recruiter', 'recruitment',
    'sales', 'accountant', 'accounting', 'marketing', 'seo specialist',
    'office manager', 'customer support', 'customer success representative',
    'virtual assistant', 'copywriter', 'content writer', 'graphic designer',
    'social media', 'community manager', 'executive assistant',
    'piping engineer', 'actuary', 'music expert', 'interpreter', 'songwriting',
    'audio engineer', 'advocate', 'investigator', 'instructor'
  ];

  private readonly targetTags = [
    '', // Main feed (ultimi 100 annunci)
    'dev',
    'engineer',
    'developer',
    'software',
    'backend',
    'frontend',
    'fullstack',
    'python',
    'golang',
    'rust',
    'react',
    'node',
    'ai',
    'data',
    'cloud',
    'devops',
    'security',
    'lead',
    'architect',
  ];

  constructor(private readonly prisma: PrismaService) { }

  async fetchAndStore(): Promise<number> {
    this.logger.log(`🔍 [RemoteOK] Avvio scraping multi-tag su ${this.targetTags.length} categorie...`);

    const allItemsMap = new Map<string, RemoteokApiJob>();

    for (const tag of this.targetTags) {
      const url = tag ? `${this.apiUrl}?tag=${encodeURIComponent(tag)}` : this.apiUrl;
      try {
        const response = await fetch(url, {
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          const json = await response.json();
          if (Array.isArray(json)) {
            for (const item of json) {
              if (item.id && item.position) {
                allItemsMap.set(String(item.id), item);
              }
            }
          }
        }
      } catch (err: any) {
        this.logger.warn(`⚠️ [RemoteOK] Errore tag "${tag}": ${err.message}`);
      }

      // Rate limit delicato tra le richieste
      await new Promise((r) => setTimeout(r, 250));
    }

    const items = Array.from(allItemsMap.values());
    this.logger.log(`📦 [RemoteOK] Raccolti ${items.length} annunci univoci totali dai feed tematici.`);

    let savedCount = 0;

    for (const item of items) {
      if (!item.id || !item.position) {
        continue;
      }

      const externalId = String(item.id);
      const slug = item.slug || null;
      const jobUrl = item.url || item.apply_url || `https://remoteok.com/remote-jobs/${item.id}`;
      const title = (item.position || '').trim();
      const companyName = item.company || 'Unknown';
      const location = item.location && item.location.trim().length > 0 ? item.location.trim() : 'Remote (Worldwide)';
      const rawDescription = item.description || '';
      const publicationDate = item.date ? new Date(item.date) : item.epoch ? new Date(item.epoch * 1000) : null;
      const tags = Array.isArray(item.tags) ? item.tags : [];

      const salaryMin = typeof item.salary_min === 'number' && item.salary_min > 0 ? item.salary_min : null;
      const salaryMax = typeof item.salary_max === 'number' && item.salary_max > 0 ? item.salary_max : null;
      const currency = 'USD';

      const titleLower = title.toLowerCase();

      // === FILTRO 1: Escludi ruoli non tech / operativi / non digitali ===
      if (this.excludedRoleKeywords.some((kw) => titleLower.includes(kw))) {
        continue;
      }

      // === FILTRO 2: Tieni solo ruoli con qualifica tech/data/product esplicita nel titolo ===
      if (!this.techRoleKeywords.some((kw) => titleLower.includes(kw))) {
        continue;
      }

      const descriptionMarkdown = rawDescription ? turndown.turndown(rawDescription) : '';

      const existing = await this.prisma.remoteokScrapedJob.findFirst({
        where: {
          OR: [{ externalId }, { url: jobUrl }],
        },
        select: { id: true },
      });

      if (existing) {
        await this.prisma.remoteokScrapedJob.update({
          where: { id: existing.id },
          data: {
            externalId,
            url: jobUrl,
            slug,
            title,
            companyName,
            location,
            rawDescription,
            descriptionMarkdown,
            salaryMin,
            salaryMax,
            currency,
            datePosted: publicationDate,
            tags: JSON.stringify(tags),
          },
        });
      } else {
        await this.prisma.remoteokScrapedJob.create({
          data: {
            externalId,
            url: jobUrl,
            slug,
            title,
            companyName,
            location,
            remoteType: 'REMOTE',
            rawDescription,
            descriptionMarkdown,
            salaryMin,
            salaryMax,
            currency,
            datePosted: publicationDate,
            tags: JSON.stringify(tags),
            outboxStatus: 'PENDING',
          },
        });
        savedCount++;
      }
    }

    await this.prisma.remoteokSyncState.upsert({
      where: { source: 'REMOTEOK' },
      update: {
        lastSuccessfulSyncAt: new Date(),
        itemsExtracted: { increment: savedCount },
      },
      create: {
        source: 'REMOTEOK',
        lastSuccessfulSyncAt: new Date(),
        itemsExtracted: savedCount,
      },
    });

    this.logger.log(`✅ [RemoteOK] Scraping completato. ${savedCount} nuove offerte registrate in outbox.`);
    return savedCount;
  }
}
