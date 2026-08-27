import { atom } from 'jotai';
import { atomWithMutation, atomWithQuery } from 'jotai-tanstack-query';
import { queryClientAtom } from 'jotai-tanstack-query';
import { openApiClient } from '@/Core/ApiClient/openApiClient';
import type { components } from '@/Core/OpenApi/schema';

export type JobOfferDto = components['schemas']['JobOfferDto'];
export type PaginatedMetaDto = components['schemas']['PaginatedMetaDto'];
export type UpdateCurriculumTailoringDto = components['schemas']['UpdateCurriculumTailoringDto'];
export type WorkTailoringDto = components['schemas']['WorkTailoringDto'];
export type ProjectTailoringDto = components['schemas']['ProjectTailoringDto'];
export type JobCurriculumDto = components['schemas']['JobCurriculumDto'];
export type CompanyJobOffersBreakdownDto = components['schemas']['CompanyJobOffersBreakdownDto'];
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

export const emptyMeta: PaginatedMetaDto = {
  total: 0,
  page: 1,
  limit: 10,
  totalPages: 1,
};

export const emptyJobOffersFilters: JobOffersFiltersData = {
  title: '',
  source: null,
  priority: null,
  freshness: null,
};
export const initialFiltersState = emptyJobOffersFilters;

export const jobOffersSectionAtom = atom<JobOffersSection>('new');
export const jobOffersPageAtom = atom<number>(1);
export const jobOffersLimitAtom = atom<number>(10);
export const jobOffersFiltersAtom = atom<JobOffersFiltersData>(initialFiltersState);
export const selectedJobOfferIdAtom = atom<string | null>(null);

const parseCountRecord = (value: unknown): Record<string, number> => {
  if (!value || typeof value !== 'object') {
    return {};
  }

  return Object.entries(value).reduce<Record<string, number>>((acc, [key, count]) => {
    if (typeof count === 'number') {
      acc[key] = count;
    }
    return acc;
  }, {});
};

const parseEvaluationProcessingStatus = (payload: unknown): EvaluationProcessingStatusDto => {
  const data = (payload && typeof payload === 'object' ? payload : {}) as Record<string, unknown>;

  return {
    totalJobs: typeof data.totalJobs === 'number' ? data.totalJobs : 0,
    evaluatedJobs: typeof data.evaluatedJobs === 'number' ? data.evaluatedJobs : 0,
    pendingJobs: typeof data.pendingJobs === 'number' ? data.pendingJobs : 0,
    isCategorizing: Boolean(data.isCategorizing),
    isProfileComplete: typeof data.isProfileComplete === 'boolean' ? data.isProfileComplete : true,
    message: typeof data.message === 'string' ? data.message : 'Nessuna attività in corso.',
  };
};

const parseJobOffersFunnelAnalytics = (payload: unknown): JobOffersFunnelAnalyticsDto => {
  const data = (payload && typeof payload === 'object' ? payload : {}) as Record<string, unknown>;
  const rawConversion = (data.conversionRates && typeof data.conversionRates === 'object'
    ? data.conversionRates
    : {}) as Record<string, unknown>;

  const applicationToInterview =
    typeof rawConversion.applicationToInterview === 'number'
      ? rawConversion.applicationToInterview
      : 0;
  const interviewToOffer =
    typeof rawConversion.interviewToOffer === 'number' ? rawConversion.interviewToOffer : 0;
  const offerToAcceptance =
    typeof rawConversion.offerToAcceptance === 'number' ? rawConversion.offerToAcceptance : 0;
  const overallSuccessRate =
    typeof rawConversion.overallSuccessRate === 'number' ? rawConversion.overallSuccessRate : 0;

  return {
    statusCounts: parseCountRecord(data.statusCounts),
    stageTransitions: parseCountRecord(data.stageTransitions),
    rejectionDropOffs: parseCountRecord(data.rejectionDropOffs),
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
): '/api/job-offers' | '/api/job-offers/active' | '/api/job-offers/closed' | '/api/job-offers/disqualified' => {
  switch (section) {
    case 'active':
      return '/api/job-offers/active';
    case 'closed':
      return '/api/job-offers/closed';
    case 'disqualified':
      return '/api/job-offers/disqualified';
    case 'new':
      return '/api/job-offers';
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

      if (error || !data) {
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
      const { data, error } = await openApiClient.GET('/api/job-offers/analytics/funnel');

      if (error || !data) {
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
      const { data, error } = await openApiClient.GET('/api/evaluations/status');

      if (error || !data) {
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
      const { data, error } = await openApiClient.PATCH('/api/job-offers/{id}/status', {
        params: {
          path: { id },
        },
        body: { status },
      });

      if (error || !data) {
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
      const { data, error } = await openApiClient.GET('/api/job-offers/{id}', {
        params: {
          path: { id: selectedId },
        },
      });

      if (error || !data) {
        throw new Error('Impossibile recuperare il dettaglio dell’annuncio.');
      }

      return data ?? null;
    },
  };
});

export interface UpdateCurriculumTailoringData {
  readonly id: string;
  readonly tailoring: UpdateCurriculumTailoringDto;
}

export const updateCurriculumTailoringMutationAtom = atomWithMutation<JobOfferDto, UpdateCurriculumTailoringData, Error>((get) => {
  const queryClient = get(queryClientAtom);

  return {
    mutationKey: ['jobOffers', 'updateCurriculumTailoring'],
    queryClient,
    mutationFn: async ({ id, tailoring }) => {
      const { data, error } = await openApiClient.PATCH('/api/job-offers/{id}/curriculum', {
        params: {
          path: { id },
        },
        body: tailoring,
      });

      if (error || !data) {
        throw new Error(`Errore aggiornamento curriculum: ${error ? JSON.stringify(error) : 'Risposta vuota'}`);
      }

      return data;
    },
    onSuccess: (_data, variables) => {
      void queryClient.invalidateQueries({ queryKey: ['jobOffers', 'detail', variables.id] });
      void queryClient.invalidateQueries({ queryKey: ['jobOffers', 'active'] });
    },
  };
});

export const selectedCompanyIdAtom = atom<string | null>(null);

export const companyJobOffersQueryAtom = atomWithQuery<CompanyJobOffersBreakdownDto | null>((get) => {
  const companyId = get(selectedCompanyIdAtom);
  return {
    queryKey: ['companyJobOffers', companyId],
    enabled: Boolean(companyId),
    queryFn: async () => {
      if (!companyId) return null;
      const { data, error } = await openApiClient.GET('/api/companies/{companyId}/job-offers', {
        params: {
          path: { companyId },
        },
      });
      if (error || !data) throw new Error('Impossibile caricare i dati dell\'azienda.');
      return data;
    },
  };
});
