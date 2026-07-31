import { Logger } from '@nestjs/common';
import { JobSource } from '@prisma/client';

export interface RawExtractedJob {
  externalId: string;
  source: JobSource;
  url: string;
  title: string;
  companyName: string;
  location?: string;
  isRemote?: boolean;
  rawDescription: string;
  descriptionMarkdown?: string | null;
  datePosted?: Date;
  tags?: string[];
}

export interface ExtractionResult {
  jobs: RawExtractedJob[];
  hasErrors: boolean;
}

export abstract class BaseExtractor {
  protected readonly logger = new Logger(this.constructor.name);
  public abstract readonly sourceName: JobSource;
  public abstract readonly baseUrl: string;


  protected isEuropeanLocation(location?: string): boolean {
    // Se la location non è specificata, è vuota o generica, NON escludiamo l annuncio
    if (!location) return true;

    const locLower = location.toLowerCase().trim();
    if (!locLower) return true;

    // Se menziona esplicitamente Europe, EU, EMEA, Worldwide, Anywhere, Global o l Italia / Paesi Europei, includi sempre
    const europeanOrGlobalMarkers = [
      'europe', 'eu', 'emea', 'worldwide', 'anywhere', 'global', 'remote',
      'italy', 'italia', 'germany', 'france', 'spain', 'uk', 'united kingdom', 'netherlands', 'switzerland'
    ];
    const hasEuropeanOrGlobalMarker = europeanOrGlobalMarkers.some((marker) => locLower.includes(marker));

    // Esclusioni esplicite ed inequivocabili di regioni non europee
    const explicitNonEuropeanExclusions = [
      'usa only', 'us only', 'united states only', 'us / canada', 'us & canada', 'us/canada',
      'north america only', 'americas only', 'latam only', 'latin america only',
      'apac only', 'asia only', 'australia only', 'india only', 'brazil only', 'canada only'
    ];

    const isExplicitlyNonEuropean = explicitNonEuropeanExclusions.some((ex) => locLower.includes(ex));

    // Escludi SOLTANTO se c è un esclusione esplicita non-europea E non è presente un marcatore europeo/globale
    if (isExplicitlyNonEuropean && !hasEuropeanOrGlobalMarker) {
      return false;
    }

    return true;
  }

  public abstract extract(lastSyncTimestamp?: Date): Promise<ExtractionResult>;

  protected async fetchWithRetry(url: string, retries = 4, backoffMs = 5000): Promise<Response> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url);
        if (response.status === 429) {
          const retryAfterHeader = response.headers.get('retry-after');
          const retryAfterSec = retryAfterHeader ? parseInt(retryAfterHeader, 10) : 0;
          const waitTime = retryAfterSec > 0 ? retryAfterSec * 1000 : backoffMs * attempt;

          this.logger.warn(
            `⚠️ HTTP 429 Rate Limit su ${url}. Attesa di ${Math.round(waitTime / 1000)}s (tentativo ${attempt}/${retries})...`,
          );
          await new Promise((res) => setTimeout(res, waitTime));
          continue;
        }
        return response;
      } catch (err) {
        if (attempt === retries) throw err;
        await new Promise((res) => setTimeout(res, backoffMs));
      }
    }
    throw new Error(`Impossibile completare il fetch da ${url} dopo ${retries} tentativi.`);
  }
}

