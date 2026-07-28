import { atom } from 'jotai';
import { atomWithQuery } from 'jotai-tanstack-query';
import { queryClientAtom } from 'jotai-tanstack-query';
import { openApiClient } from '@/Core/ApiClient/openApiClient';
import type { components } from '@/Core/OpenApi/schema';

export type JobOfferDto = components['schemas']['JobOfferDto'];
export type PaginatedMetaDto = components['schemas']['PaginatedMetaDto'];
export type JobOfferSource = JobOfferDto['source'];
export type JobOfferPriority = 'HIGH' | 'MEDIUM' | 'LOW' | 'DISQUALIFIED';

export interface EvaluationProcessingStatusDto {
  readonly totalJobs: number;
  readonly evaluatedJobs: number;
  readonly pendingJobs: number;
  readonly isCategorizing: boolean;
  readonly isProfileComplete: boolean;
  readonly message: string;
}

export interface PaginatedJobOffersResponse {
  readonly data: readonly JobOfferDto[];
  readonly meta: PaginatedMetaDto;
}

export interface JobOffersFiltersData {
  readonly title: string;
  readonly source: JobOfferSource | null;
  readonly priority: JobOfferPriority | null;
}

export const emptyJobOffersFilters: JobOffersFiltersData = {
  title: '',
  source: null,
  priority: null,
};

export const jobOffersPageAtom = atom(1);
export const jobOffersLimitAtom = atom(8);
export const selectedJobOfferIdAtom = atom<string | null>(null);
export const jobOffersFiltersAtom = atom<JobOffersFiltersData>(emptyJobOffersFilters);

const emptyMeta: PaginatedMetaDto = {
  total: 0,
  page: 1,
  limit: 8,
  totalPages: 1,
};

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null;
};

const parseEvaluationProcessingStatus = (payload: unknown): EvaluationProcessingStatusDto => {
  if (!isRecord(payload)) {
    throw new Error('Risposta stato elaborazione non valida.');
  }

  const { totalJobs, evaluatedJobs, pendingJobs, isCategorizing, isProfileComplete, message } = payload;

  if (
    typeof totalJobs !== 'number' ||
    typeof evaluatedJobs !== 'number' ||
    typeof pendingJobs !== 'number' ||
    typeof isCategorizing !== 'boolean' ||
    typeof isProfileComplete !== 'boolean' ||
    typeof message !== 'string'
  ) {
    throw new Error('Formato stato elaborazione non riconosciuto.');
  }

  return {
    totalJobs,
    evaluatedJobs,
    pendingJobs,
    isCategorizing,
    isProfileComplete,
    message,
  };
};

export const jobOffersQueryAtom = atomWithQuery<PaginatedJobOffersResponse>((get) => {
  const page = get(jobOffersPageAtom);
  const limit = get(jobOffersLimitAtom);
  const queryClient = get(queryClientAtom);
  const filters = get(jobOffersFiltersAtom);
  const normalizedTitle = filters.title.trim();

  return {
    queryKey: ['jobOffers', 'paginated', page, limit, filters],
    queryClient,
    queryFn: async () => {
      const { data, error } = await openApiClient.GET('/job-offers/paginated', {
        params: {
          query: {
            page,
            limit,
            ...(normalizedTitle ? { search: normalizedTitle } : {}),
            ...(filters.source ? { source: filters.source } : {}),
            ...(filters.priority ? { priority: filters.priority } : {}),
          },
        },
      });

      if (error) {
        throw new Error('Impossibile recuperare gli annunci di lavoro.');
      }

      return {
        data: data.data ?? [],
        meta: data.meta ?? { ...emptyMeta, page, limit },
      };
    },
  };
});

export const evaluationProcessingStatusQueryAtom = atomWithQuery<EvaluationProcessingStatusDto>((get) => {
  const queryClient = get(queryClientAtom);

  return {
    queryKey: ['evaluations', 'status'],
    queryClient,
    refetchInterval: 5000,
    queryFn: async () => {
      const { data, error } = await openApiClient.GET('/evaluations/status');

      if (error) {
        throw new Error('Impossibile recuperare lo stato di elaborazione degli annunci.');
      }

      return parseEvaluationProcessingStatus(data);
    },
  };
});

export const selectedJobOfferQueryAtom = atomWithQuery<JobOfferDto | null>((get) => {
  const selectedId = get(selectedJobOfferIdAtom);
  const queryClient = get(queryClientAtom);

  return {
    queryKey: ['jobOffers', 'detail', selectedId],
    queryClient,
    enabled: selectedId !== null,
    queryFn: async () => {
      if (selectedId === null) {
        return null;
      }

      const { data, error } = await openApiClient.GET('/job-offers/{id}', {
        params: {
          path: { id: selectedId },
        },
      });

      if (error) {
        throw new Error('Impossibile recuperare il dettaglio dell’annuncio.');
      }

      return data ?? null;
    },
  };
});
