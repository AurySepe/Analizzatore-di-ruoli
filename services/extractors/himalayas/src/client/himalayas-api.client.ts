import { Injectable, Logger } from '@nestjs/common';
import createClient, { Client } from 'openapi-fetch';
import type { paths, components } from '../generated/himalayas-api';

export type HimalayasJob = components['schemas']['Job'];
export type HimalayasJobsResponse = components['schemas']['JobsResponse'];

@Injectable()
export class HimalayasApiClient {
  private readonly logger = new Logger(HimalayasApiClient.name);
  private readonly client: Client<paths>;

  constructor() {
    this.client = createClient<paths>({
      baseUrl: 'https://himalayas.app',
      headers: {
        'User-Agent': 'AnalizzatoreRuoli/2.0',
        'Accept': 'application/json',
      },
    });
  }

  /**
   * Sfoglia il feed completo con Cursor Pagination
   */
  async browseJobs(params?: { limit?: number; cursor?: string }): Promise<HimalayasJobsResponse | null> {
    try {
      const response = await this.client.GET('/jobs/api', {
        params: {
          query: {
            limit: params?.limit ?? 20,
            cursor: params?.cursor,
          },
        },
      });

      if (response.error) {
        this.logger.error(`❌ Errore chiamata /jobs/api: ${JSON.stringify(response.error)}`);
        return null;
      }

      return response.data as HimalayasJobsResponse;
    } catch (err: any) {
      this.logger.error(`❌ Eccezione durante browseJobs: ${err.message}`);
      return null;
    }
  }

  /**
   * Ricerca filtrata per query o filtri specifici
   */
  async searchJobs(params: {
    q?: string;
    country?: string;
    worldwide?: boolean;
    sort?: 'recent' | 'relevant' | 'salaryDesc';
    page?: number;
  }): Promise<HimalayasJobsResponse | null> {
    try {
      const response = await this.client.GET('/jobs/api/search', {
        params: {
          query: {
            q: params.q,
            country: params.country,
            worldwide: params.worldwide,
            sort: params.sort,
            page: params.page,
          },
        },
      });

      if (response.error) {
        this.logger.error(`❌ Errore chiamata /jobs/api/search: ${JSON.stringify(response.error)}`);
        return null;
      }

      return response.data as HimalayasJobsResponse;
    } catch (err: any) {
      this.logger.error(`❌ Eccezione durante searchJobs: ${err.message}`);
      return null;
    }
  }
}
