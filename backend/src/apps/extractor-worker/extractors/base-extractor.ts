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

export abstract class BaseExtractor {
  protected readonly logger = new Logger(this.constructor.name);
  public abstract readonly sourceName: JobSource;
  public abstract readonly baseUrl: string;


  public abstract extract(lastSyncTimestamp?: Date): Promise<RawExtractedJob[]>;

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
