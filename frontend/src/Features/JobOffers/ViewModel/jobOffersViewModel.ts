import type { LoadableState } from '@/Commons/loadable-state';
import type {
  EvaluationProcessingStatusDto,
  JobOfferDto,
  JobOfferPriority,
  JobOfferSource,
  JobOffersFiltersData,
  PaginatedJobOffersResponse,
} from '../State/jobOffersAtoms';

interface QueryResultLike<T> {
  readonly data: T | undefined;
  readonly isLoading: boolean;
  readonly isFetching: boolean;
  readonly isError: boolean;
  readonly error: Error | null;
}

export interface JobOfferListItemViewModelDTO {
  readonly id: string;
  readonly title: string;
  readonly companyName: string;
  readonly source: string;
  readonly evaluatorModel: string;
  readonly location: string;
  readonly remoteType: string;
  readonly experienceLevel: string;
  readonly status: string;
  readonly salaryRange: string;
  readonly datePosted: string;
  readonly skillsPreview: readonly string[];
  readonly evaluationSummary: JobOfferEvaluationSummaryViewModelDTO | null;
  readonly isSelected: boolean;
}

export interface JobOfferEvaluationSummaryViewModelDTO {
  readonly overallScore: string;
  readonly priority: string;
  readonly priorityTone: 'high' | 'medium' | 'low' | 'disqualified' | 'neutral';
  readonly evaluatorModel: string;
}

export interface JobOfferEvaluationDetailViewModelDTO extends JobOfferEvaluationSummaryViewModelDTO {
  readonly status: string;
  readonly competenceMatch: string;
  readonly detailedReasoning: string;
  readonly pros: readonly string[];
  readonly cons: readonly string[];
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface JobOfferDetailViewModelDTO {
  readonly id: string;
  readonly title: string;
  readonly source: string;
  readonly url: string;
  readonly externalId: string;
  readonly location: string;
  readonly remoteType: string;
  readonly rawDescription: string;
  readonly datePosted: string;
  readonly salaryRange: string;
  readonly contractType: string;
  readonly roleCategory: string;
  readonly experienceLevel: string;
  readonly status: string;
  readonly notes: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly skills: readonly string[];
  readonly evaluation: JobOfferEvaluationDetailViewModelDTO | null;
  readonly company: {
    readonly id: string;
    readonly name: string;
    readonly websiteUrl: string;
    readonly linkedinUrl: string;
    readonly industry: string;
    readonly fundingStage: string;
    readonly companySizeRange: string;
    readonly employeeCount: string;
  };
}

export interface JobOffersStatsViewModelDTO {
  readonly total: number;
  readonly visible: number;
  readonly page: number;
  readonly totalPages: number;
}

export interface EvaluationProcessingStatusViewModelDTO {
  readonly totalJobs: number;
  readonly evaluatedJobs: number;
  readonly pendingJobs: number;
  readonly evaluatedPercentage: number;
  readonly isCategorizing: boolean;
  readonly isProfileComplete: boolean;
  readonly message: string;
  readonly statusLabel: string;
}

export interface JobOffersFiltersViewModelDTO {
  readonly title: string;
  readonly source: JobOfferSource | null;
  readonly priority: JobOfferPriority | null;
  readonly activeFiltersCount: number;
  readonly sourceOptions: readonly { readonly value: JobOfferSource; readonly label: string }[];
  readonly priorityOptions: readonly { readonly value: JobOfferPriority; readonly label: string }[];
}

export interface JobOffersPaginationViewModelDTO {
  readonly page: number;
  readonly totalPages: number;
  readonly total: number;
  readonly limit: number;
  readonly canGoPrevious: boolean;
  readonly canGoNext: boolean;
}

export interface JobOffersViewModelDTO {
  readonly jobOffersState: LoadableState<readonly JobOfferListItemViewModelDTO[]>;
  readonly selectedJobOfferState: LoadableState<JobOfferDetailViewModelDTO | null>;
  readonly statsState: LoadableState<JobOffersStatsViewModelDTO>;
  readonly processingStatusState: LoadableState<EvaluationProcessingStatusViewModelDTO>;
  readonly filters: JobOffersFiltersViewModelDTO;
  readonly paginationState: LoadableState<JobOffersPaginationViewModelDTO>;
}

const missingValue = 'Non specificato';

const remoteTypeLabels: Record<JobOfferDto['remoteType'], string> = {
  REMOTE: 'Da remoto',
  HYBRID: 'Ibrido',
  ON_SITE: 'In sede',
  UNSPECIFIED: missingValue,
};

const experienceLevelLabels: Record<JobOfferDto['experienceLevel'], string> = {
  ENTRY_LEVEL: 'Entry level',
  JUNIOR: 'Junior',
  MID: 'Mid',
  SENIOR: 'Senior',
  LEAD: 'Lead',
  EXECUTIVE: 'Executive',
  UNSPECIFIED: missingValue,
};

const statusLabels: Record<JobOfferDto['status'], string> = {
  NEW: 'Nuovo',
  SAVED: 'Salvato',
  APPLIED: 'Candidatura inviata',
  INTERVIEWING: 'Colloqui',
  REJECTED: 'Rifiutato',
  ARCHIVED: 'Archiviato',
};

const sourceLabels: Record<JobOfferSource, string> = {
  ARBEITNOW: 'Arbeitnow',
  REMOTIVE: 'Remotive',
};

const sourceOptions: readonly { readonly value: JobOfferSource; readonly label: string }[] = [
  { value: 'ARBEITNOW', label: sourceLabels.ARBEITNOW },
  { value: 'REMOTIVE', label: sourceLabels.REMOTIVE },
];

const priorityLabels: Record<JobOfferPriority, string> = {
  HIGH: 'Alta priorità',
  MEDIUM: 'Media priorità',
  LOW: 'Bassa priorità',
  DISQUALIFIED: 'Da scartare',
};

const priorityOptions: readonly { readonly value: JobOfferPriority; readonly label: string }[] = [
  { value: 'HIGH', label: priorityLabels.HIGH },
  { value: 'MEDIUM', label: priorityLabels.MEDIUM },
  { value: 'LOW', label: priorityLabels.LOW },
  { value: 'DISQUALIFIED', label: priorityLabels.DISQUALIFIED },
];

const formatOptional = (value: unknown): string => {
  if (typeof value !== 'string') {
    return missingValue;
  }
  const normalized = value?.trim();
  return normalized ? normalized : missingValue;
};

const formatDate = (value: unknown): string => {
  if (typeof value !== 'string') {
    return missingValue;
  }
  if (!value) {
    return missingValue;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

const formatDateTime = (value: string): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

const formatPriority = (value: string): string => {
  if (isJobOfferPriority(value)) {
    return priorityLabels[value];
  }

  return value;
};

const isJobOfferPriority = (value: string): value is JobOfferPriority => {
  return value === 'HIGH' || value === 'MEDIUM' || value === 'LOW' || value === 'DISQUALIFIED';
};

const formatEvaluationStatus = (value: string): string => {
  switch (value) {
    case 'SUCCESS':
      return 'Analisi completata';
    case 'UNANALYZABLE':
      return 'Non analizzabile';
    default:
      return value;
  }
};

const getPriorityTone = (
  value: string,
): JobOfferEvaluationSummaryViewModelDTO['priorityTone'] => {
  switch (value) {
    case 'HIGH':
      return 'high';
    case 'MEDIUM':
      return 'medium';
    case 'LOW':
      return 'low';
    case 'DISQUALIFIED':
      return 'disqualified';
    default:
      return 'neutral';
  }
};

const formatScore = (value: number): string => `${Math.round(value)}%`;

type KnownEvaluatorModel = 'GEMINI_3_1_FLASH_LITE' | 'GEMMA_4_12B' | 'GEMMA_4_31B' | 'UNKNOWN';

const evaluatorModelLabels: Record<KnownEvaluatorModel, string> = {
  GEMINI_3_1_FLASH_LITE: 'Gemini 3.1 Flash Lite',
  GEMMA_4_12B: 'Gemma 4 12B',
  GEMMA_4_31B: 'Gemma 4 31B',
  UNKNOWN: 'Modello sconosciuto',
};

const isKnownEvaluatorModel = (value: string): value is KnownEvaluatorModel => {
  return value === 'GEMINI_3_1_FLASH_LITE' || value === 'GEMMA_4_12B' || value === 'GEMMA_4_31B' || value === 'UNKNOWN';
};

const formatEvaluatorModel = (value: string | null | undefined): string => {
  const normalized = value?.trim();
  if (!normalized) {
    return 'Non valutato';
  }

  if (isKnownEvaluatorModel(normalized)) {
    return evaluatorModelLabels[normalized];
  }

  return normalized.replaceAll('_', ' ');
};

const calculatePercentage = (partial: number, total: number): number => {
  if (total <= 0) {
    return 0;
  }

  return Math.round((partial / total) * 100);
};

const mapFilters = (filters: JobOffersFiltersData): JobOffersFiltersViewModelDTO => {
  const activeFiltersCount = [
    filters.title.trim() ? filters.title : null,
    filters.source,
    filters.priority,
  ].filter((value) => value !== null).length;

  return {
    ...filters,
    activeFiltersCount,
    sourceOptions,
    priorityOptions,
  };
};

const mapProcessingStatus = (
  status: EvaluationProcessingStatusDto,
): EvaluationProcessingStatusViewModelDTO => ({
  totalJobs: status.totalJobs,
  evaluatedJobs: status.evaluatedJobs,
  pendingJobs: status.pendingJobs,
  evaluatedPercentage: calculatePercentage(status.evaluatedJobs, status.totalJobs),
  isCategorizing: status.isCategorizing,
  isProfileComplete: status.isProfileComplete,
  message: status.message,
  statusLabel: status.isCategorizing ? 'Elaborazione in corso' : 'Coda ferma',
});

const formatSalary = (offer: JobOfferDto): string => {
  const currency = typeof offer.currency === 'string' ? offer.currency : 'EUR';
  const salaryMin = typeof offer.salaryMin === 'number' ? offer.salaryMin : null;
  const salaryMax = typeof offer.salaryMax === 'number' ? offer.salaryMax : null;

  if (salaryMin === null && salaryMax === null) {
    return missingValue;
  }

  const formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  });

  if (salaryMin !== null && salaryMax !== null) {
    return `${formatter.format(salaryMin)} - ${formatter.format(salaryMax)}`;
  }

  if (salaryMin !== null) {
    return `Da ${formatter.format(salaryMin)}`;
  }

  if (salaryMax !== null) {
    return `Fino a ${formatter.format(salaryMax)}`;
  }

  return missingValue;
};

const toErrorMessage = (error: Error | null, fallback: string): string => {
  return error?.message ?? fallback;
};

const mapQueryToLoadableState = <Input, Output>(
  query: QueryResultLike<Input>,
  mapper: (data: Input) => Output,
  fallbackError: string,
): LoadableState<Output> => {
  if (query.isLoading) {
    return { status: 'loading' };
  }

  if (query.isError) {
    return { status: 'error', error: toErrorMessage(query.error, fallbackError) };
  }

  if (query.data === undefined) {
    return { status: 'loading' };
  }

  return {
    status: 'success',
    data: mapper(query.data),
    isFetching: query.isFetching,
  };
};

const mapEvaluationSummary = (
  evaluation: JobOfferDto['evaluation'],
): JobOfferEvaluationSummaryViewModelDTO | null => {
  if (!evaluation) {
    return null;
  }

  return {
    overallScore: formatScore(evaluation.overallScore),
    priority: formatPriority(evaluation.priority),
    priorityTone: getPriorityTone(evaluation.priority),
    evaluatorModel: formatEvaluatorModel(evaluation.evaluatorModel),
  };
};

const mapEvaluationDetail = (
  evaluation: JobOfferDto['evaluation'],
): JobOfferEvaluationDetailViewModelDTO | null => {
  if (!evaluation) {
    return null;
  }

  return {
    overallScore: formatScore(evaluation.overallScore),
    priority: formatPriority(evaluation.priority),
    priorityTone: getPriorityTone(evaluation.priority),
    evaluatorModel: formatEvaluatorModel(evaluation.evaluatorModel),
    status: formatEvaluationStatus(evaluation.status),
    competenceMatch: evaluation.competenceMatch,
    detailedReasoning: evaluation.detailedReasoning,
    pros: evaluation.pros ?? [],
    cons: evaluation.cons ?? [],
    createdAt: formatDateTime(evaluation.createdAt),
    updatedAt: formatDateTime(evaluation.updatedAt),
  };
};

const formatDescription = (offer: JobOfferDto): string => {
  const markdownDescription = formatOptional(offer.descriptionMarkdown);
  return markdownDescription === missingValue ? offer.rawDescription : markdownDescription;
};

const mapListItem = (
  offer: JobOfferDto,
  selectedJobOfferId: string | null,
): JobOfferListItemViewModelDTO => ({
  id: offer.id,
  title: offer.title,
  companyName: offer.company.name,
  source: sourceLabels[offer.source],
  evaluatorModel: formatEvaluatorModel(offer.evaluation?.evaluatorModel),
  location: formatOptional(offer.location),
  remoteType: remoteTypeLabels[offer.remoteType],
  experienceLevel: experienceLevelLabels[offer.experienceLevel],
  status: statusLabels[offer.status],
  salaryRange: formatSalary(offer),
  datePosted: formatDate(offer.datePosted),
  skillsPreview: offer.skills?.slice(0, 4) ?? [],
  evaluationSummary: mapEvaluationSummary(offer.evaluation),
  isSelected: offer.id === selectedJobOfferId,
});

const mapDetail = (offer: JobOfferDto): JobOfferDetailViewModelDTO => ({
  id: offer.id,
  title: offer.title,
  source: sourceLabels[offer.source],
  url: offer.url,
  externalId: formatOptional(offer.externalId),
  location: formatOptional(offer.location),
  remoteType: remoteTypeLabels[offer.remoteType],
  rawDescription: formatDescription(offer),
  datePosted: formatDate(offer.datePosted),
  salaryRange: formatSalary(offer),
  contractType: formatOptional(offer.contractType),
  roleCategory: formatOptional(offer.roleCategory),
  experienceLevel: experienceLevelLabels[offer.experienceLevel],
  status: statusLabels[offer.status],
  notes: formatOptional(offer.notes),
  createdAt: formatDateTime(offer.createdAt),
  updatedAt: formatDateTime(offer.updatedAt),
  skills: offer.skills ?? [],
  evaluation: mapEvaluationDetail(offer.evaluation),
  company: {
    id: offer.company.id,
    name: offer.company.name,
    websiteUrl: formatOptional(offer.company.websiteUrl),
    linkedinUrl: formatOptional(offer.company.linkedinUrl),
    industry: formatOptional(offer.company.industry),
    fundingStage: formatOptional(offer.company.fundingStage),
    companySizeRange: formatOptional(offer.company.companySizeRange),
    employeeCount: offer.company.employeeCount?.toLocaleString('it-IT') ?? missingValue,
  },
});

export class JobOffersViewModel {
  public static create(
    jobOffersQuery: QueryResultLike<PaginatedJobOffersResponse>,
    selectedJobOfferQuery: QueryResultLike<JobOfferDto | null>,
    processingStatusQuery: QueryResultLike<EvaluationProcessingStatusDto>,
    filters: JobOffersFiltersData,
    selectedJobOfferId: string | null,
  ): JobOffersViewModelDTO {
    return {
      jobOffersState: mapQueryToLoadableState(
        jobOffersQuery,
        (response) => response.data.map((offer) => mapListItem(offer, selectedJobOfferId)),
        'Errore durante il caricamento degli annunci.',
      ),
      selectedJobOfferState: mapQueryToLoadableState(
        selectedJobOfferQuery,
        (offer) => (offer === null ? null : mapDetail(offer)),
        'Errore durante il caricamento del dettaglio.',
      ),
      statsState: mapQueryToLoadableState(
        jobOffersQuery,
        (response) => ({
          total: response.meta.total,
          visible: response.data.length,
          page: response.meta.page,
          totalPages: response.meta.totalPages,
        }),
        'Errore durante il caricamento delle statistiche.',
      ),
      processingStatusState: mapQueryToLoadableState(
        processingStatusQuery,
        mapProcessingStatus,
        'Errore durante il caricamento dello stato di elaborazione.',
      ),
      filters: mapFilters(filters),
      paginationState: mapQueryToLoadableState(
        jobOffersQuery,
        (response) => ({
          page: response.meta.page,
          totalPages: response.meta.totalPages,
          total: response.meta.total,
          limit: response.meta.limit,
          canGoPrevious: response.meta.page > 1,
          canGoNext: response.meta.page < response.meta.totalPages,
        }),
        'Errore durante il caricamento della paginazione.',
      ),
    };
  }
}
