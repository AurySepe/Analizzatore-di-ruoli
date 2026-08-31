import { Injectable, Logger } from '@nestjs/common';
import * as TurndownService from 'turndown';
import { PrismaService } from '../prisma/prisma.service';
import { HimalayasApiClient, HimalayasJob } from '../client/himalayas-api.client';

const turndown = new (TurndownService as any)({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
});

@Injectable()
export class HimalayasFetcherService {
  private readonly logger = new Logger(HimalayasFetcherService.name);

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

  constructor(
    private readonly prisma: PrismaService,
    private readonly apiClient: HimalayasApiClient,
  ) {}

  async fetchAndStore(): Promise<number> {
    this.logger.log('🔍 [Himalayas] Avvio scraping tramite client OpenAPI tipizzato...');

    let savedCount = 0;
    let pageCount = 0;
    const maxPagesPerCycle = 50; // 50 pagine da 20 = 1000 annunci per ciclo
    let currentCursor: string | undefined = undefined;
    let hasMore = true;

    while (hasMore && pageCount < maxPagesPerCycle) {
      pageCount++;

      const data = await this.apiClient.browseJobs({
        limit: 20,
        cursor: currentCursor,
      });

      if (!data) {
        this.logger.warn(`⚠️ [Himalayas] Nessun dato ricevuto alla pagina ${pageCount}, interrompo.`);
        break;
      }

      const jobs: HimalayasJob[] = data.jobs || [];
      const nextCursor = data.nextCursor;

      for (const item of jobs) {
        const externalId = String(item.guid || item.applicationLink);
        const jobUrl = item.applicationLink || item.guid;
        const title = (item.title || '').trim();
        const companyName = item.companyName || 'Unknown';
        const location = Array.isArray(item.locationRestrictions)
          ? item.locationRestrictions.join(', ')
          : (item.locationRestrictions || 'Remote');
        const rawDescription = item.description || item.excerpt || '';
        const publicationDate = item.pubDate ? new Date(item.pubDate * 1000) : null;
        const tags: string[] = Array.isArray(item.categories)
          ? item.categories.map((t: any) => (typeof t === 'string' ? t : t.name || t.slug || '')).filter(Boolean)
          : [];
        
        const salaryMin: number | null = item.minSalary ?? null;
        const salaryMax: number | null = item.maxSalary ?? null;
        const currency: string | null = item.currency ?? 'USD';

        const titleLower = title.toLowerCase();

        // === FILTRO 1: Escludi ruoli non tech / founding ===
        if (this.excludedRoleKeywords.some((kw) => titleLower.includes(kw))) {
          continue;
        }

        // === FILTRO 2: Tieni solo ruoli tech/product/data ===
        const tagsLower = tags.map((t) => t.toLowerCase()).join(' ');
        const combinedText = `${titleLower} ${tagsLower}`;
        if (!this.techRoleKeywords.some((kw) => combinedText.includes(kw))) {
          continue;
        }

        // Nota: La verifica della presenza del salario e della retribuzione esplicita 
        // viene demandata direttamente al worker AI (Gemini) durante la valutazione della descrizione completa.

        const descriptionMarkdown = rawDescription ? turndown.turndown(rawDescription) : '';

        const existing = await this.prisma.himalayasScrapedJob.findUnique({
          where: { externalId },
          select: { id: true },
        });

        if (existing) {
          await this.prisma.himalayasScrapedJob.update({
            where: { externalId },
            data: {
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
          await this.prisma.himalayasScrapedJob.create({
            data: {
              externalId,
              url: jobUrl,
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

      if (!nextCursor || jobs.length === 0) {
        hasMore = false;
      } else {
        currentCursor = nextCursor;
      }

      // Rispetto dei rate limits
      await new Promise((r) => setTimeout(r, 120));
    }

    await this.prisma.himalayasSyncState.upsert({
      where: { source: 'HIMALAYAS' },
      update: {
        lastSuccessfulSyncAt: new Date(),
        itemsExtracted: { increment: savedCount },
      },
      create: {
        source: 'HIMALAYAS',
        lastSuccessfulSyncAt: new Date(),
        itemsExtracted: savedCount,
      },
    });

    this.logger.log(`✅ [Himalayas] Scraping completato. Esaminate ${pageCount} pagine, ${savedCount} nuove offerte registrate.`);
    return savedCount;
  }
}
