import { atom } from 'jotai';
import { atomWithMutation, atomWithQuery } from 'jotai-tanstack-query';
import { queryClientAtom } from 'jotai-tanstack-query';
import { openApiClient } from '@/Core/ApiClient/openApiClient';
import type { components } from '@/Core/OpenApi/schema';

export type JobOfferDto = components['schemas']['JobOfferDto'];
export type PaginatedMetaDto = components['schemas']['PaginatedMetaDto'];
export type JobOfferSource = JobOfferDto['source'] | 'WE_WORK_REMOTELY';
export type JobOfferStatus = JobOfferDto['status'];
export type JobOfferFreshness = JobOfferDto['freshness'];
export type JobOffersSection = 'new' | 'active' | 'closed' | 'disqualified';
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

export interface JobOffersFunnelAnalyticsDto {
  readonly statusCounts: Readonly<Record<string, number>>;
  readonly stageTransitions: Readonly<Record<string, number>>;
  readonly rejectionDropOffs: Readonly<Record<string, number>>;
  readonly conversionRates: {
    readonly applicationToInterview: number;
    readonly interviewToOffer: number;
    readonly offerToAcceptance: number;
    readonly overallSuccessRate: number;
  };
}

export interface JobOffersFiltersData {
  readonly title: string;
  readonly source: JobOfferSource | null;
  readonly priority: JobOfferPriority | null;
  readonly freshness: JobOfferFreshness | null;
}

export const emptyJobOffersFilters: JobOffersFiltersData = {
  title: '',
  source: null,
  priority: null,
  freshness: null,
};

export const jobOffersPageAtom = atom(1);
export const jobOffersLimitAtom = atom(8);
export const selectedJobOfferIdAtom = atom<string | null>(null);
export const jobOffersFiltersAtom = atom<JobOffersFiltersData>(emptyJobOffersFilters);
export const jobOffersSectionAtom = atom<JobOffersSection>('new');

const emptyMeta: PaginatedMetaDto = {
  total: 0,
  page: 1,
  limit: 8,
  totalPages: 1,
};

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null;
};

const parseNumberRecord = (value: unknown, errorMessage: string): Readonly<Record<string, number>> => {
  if (!isRecord(value)) {
    throw new Error(errorMessage);
  }

  return Object.fromEntries(
    Object.entries(value).filter((entry): entry is [string, number] => typeof entry[1] === 'number'),
  );
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

const parseJobOffersFunnelAnalytics = (payload: unknown): JobOffersFunnelAnalyticsDto => {
  if (!isRecord(payload)) {
    throw new Error('Risposta analytics funnel non valida.');
  }

  const { statusCounts, stageTransitions, rejectionDropOffs, conversionRates } = payload;
  if (!isRecord(conversionRates)) {
    throw new Error('Formato conversion rates non riconosciuto.');
  }

  const {
    applicationToInterview,
    interviewToOffer,
    offerToAcceptance,
    overallSuccessRate,
  } = conversionRates;

  if (
    typeof applicationToInterview !== 'number' ||
    typeof interviewToOffer !== 'number' ||
    typeof offerToAcceptance !== 'number' ||
    typeof overallSuccessRate !== 'number'
  ) {
    throw new Error('Formato conversion rates non valido.');
  }

  return {
    statusCounts: parseNumberRecord(statusCounts, 'Formato conteggi stato non valido.'),
    stageTransitions: parseNumberRecord(stageTransitions, 'Formato transizioni non valido.'),
    rejectionDropOffs: parseNumberRecord(rejectionDropOffs, 'Formato drop-off non valido.'),
    conversionRates: {
      applicationToInterview,
      interviewToOffer,
      offerToAcceptance,
      overallSuccessRate,
    },
  };
};

const getJobOffersPath = (
  section: JobOffersSection,
): '/job-offers' | '/job-offers/active' | '/job-offers/closed' | '/job-offers/disqualified' => {
  switch (section) {
    case 'active':
      return '/job-offers/active';
    case 'closed':
      return '/job-offers/closed';
    case 'disqualified':
      return '/job-offers/disqualified';
    case 'new':
      return '/job-offers';
  }
};

export const jobOffersQueryAtom = atomWithQuery<PaginatedJobOffersResponse>((get) => {
  const page = get(jobOffersPageAtom);
  const limit = get(jobOffersLimitAtom);
  const queryClient = get(queryClientAtom);
  const filters = get(jobOffersFiltersAtom);
  const section = get(jobOffersSectionAtom);
  const normalizedTitle = filters.title.trim();
  const path = getJobOffersPath(section);

  return {
    queryKey: ['jobOffers', section, section === 'active' ? 'all' : page, section === 'active' ? 'all' : limit, filters],
    queryClient,
    queryFn: async () => {
      const { data, error } = await openApiClient.GET(path, {
        params: {
          query: {
            ...(section === 'active' ? {} : { page, limit }),
            ...(normalizedTitle ? { search: normalizedTitle } : {}),
            ...(filters.source ? { source: filters.source as JobOfferDto['source'] } : {}),
            ...(filters.priority ? { priority: filters.priority } : {}),
            ...(filters.freshness ? { freshness: filters.freshness } : {}),
          },
        },
      });

      if (error) {
        throw new Error('Impossibile recuperare gli annunci di lavoro.');
      }

      if (Array.isArray(data)) {
        return {
          data,
          meta: {
            total: data.length,
            page: 1,
            limit: data.length,
            totalPages: 1,
          },
        };
      }

      return {
        data: data.data ?? [],
        meta: data.meta ?? { ...emptyMeta, page, limit },
      };
    },
  };
});

export const jobOffersFunnelAnalyticsQueryAtom = atomWithQuery<JobOffersFunnelAnalyticsDto>((get) => {
  const queryClient = get(queryClientAtom);

  return {
    queryKey: ['jobOffers', 'analytics', 'funnel'],
    queryClient,
    queryFn: async () => {
      const { data, error } = await openApiClient.GET('/job-offers/analytics/funnel');

      if (error) {
        throw new Error('Impossibile recuperare il funnel analytics.');
      }

      return parseJobOffersFunnelAnalytics(data);
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

export interface UpdateJobOfferStatusData {
  readonly id: string;
  readonly status: JobOfferStatus;
}

export const updateJobOfferStatusMutationAtom = atomWithMutation<JobOfferDto, UpdateJobOfferStatusData, Error>((get) => {
  const queryClient = get(queryClientAtom);

  return {
    mutationKey: ['jobOffers', 'updateStatus'],
    queryClient,
    mutationFn: async ({ id, status }) => {
      const { data, error } = await openApiClient.PATCH('/job-offers/{id}/status', {
        params: {
          path: { id },
        },
        body: { status },
      });

      if (error) {
        throw new Error('Impossibile aggiornare lo stato dell’annuncio.');
      }

      return data;
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
