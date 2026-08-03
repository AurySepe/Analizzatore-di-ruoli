import type { LoadableState } from '@/Commons/loadable-state';
import type {
  EvaluationProcessingStatusDto,
  JobOfferDto,
  JobOfferFreshness,
  JobOfferPriority,
  JobOfferSource,
  JobOfferStatus,
  JobOffersFiltersData,
  JobOffersSection,
} from '../State/jobOffersAtoms';
import type {
  EvaluationProcessingStatusViewModelDTO,
  JobCurriculumViewModelDTO,
  JobOfferDetailViewModelDTO,
  JobOfferEvaluationDetailViewModelDTO,
  JobOfferEvaluationSummaryViewModelDTO,
  JobOfferListItemViewModelDTO,
  JobOffersFiltersViewModelDTO,
  JobOffersHeaderViewModelDTO,
  QueryResultLike,
} from './jobOffersViewModelTypes';

export const missingValue = 'Non specificato';

export const sectionHeaders: Record<JobOffersSection, JobOffersHeaderViewModelDTO> = {
  new: {
    eyebrow: 'Da valutare',
    title: 'Nuovi annunci',
    description: 'Consulta gli annunci in stato NEW, valuta quelli interessanti e spostali tra da candidare, candidature o scartati.',
  },
  active: {
    eyebrow: 'In gestione',
    title: 'Lavori attivi',
    description: 'Segui gli annunci da candidare, le candidature inviate e i colloqui in corso.',
  },
  closed: {
    eyebrow: 'Conclusi',
    title: 'Lavori chiusi',
    description: 'Rivedi gli annunci per cui ti hanno rifiutato o che hai scartato e ripristina quelli da riaprire.',
  },
  disqualified: {
    eyebrow: 'Scarti AI',
    title: 'Annunci scartati automaticamente',
    description: 'Rivedi gli annunci che l’AI ha classificato come DISQUALIFIED e recupera quelli da valutare comunque.',
  },
};

export const remoteTypeLabels: Record<JobOfferDto['remoteType'], string> = {
  REMOTE: 'Da remoto',
  HYBRID: 'Ibrido',
  ON_SITE: 'In sede',
  UNSPECIFIED: missingValue,
};

export const experienceLevelLabels: Record<JobOfferDto['experienceLevel'], string> = {
  ENTRY_LEVEL: 'Entry level',
  JUNIOR: 'Junior',
  MID: 'Mid',
  SENIOR: 'Senior',
  LEAD: 'Lead',
  EXECUTIVE: 'Executive',
  UNSPECIFIED: missingValue,
};

export const statusLabels: Record<JobOfferStatus, string> = {
  NEW: 'Nuovo',
  SAVED: 'Da candidare',
  APPLIED: 'Candidatura inviata',
  SCREENING: 'Screening',
  INTERVIEWING: 'Colloqui',
  OFFER: 'Offerta ricevuta',
  ACCEPTED: 'Accettata',
  REJECTED: 'Mi hanno rifiutato',
  ARCHIVED: 'Scartato da me',
};

export const freshnessLabels: Record<JobOfferFreshness, string> = {
  HOT: 'Appena pubblicato',
  RECENT: 'Recente',
  AGING: 'In scadenza',
  OLD: 'Datato',
};

export const freshnessOptions: readonly { readonly value: JobOfferFreshness; readonly label: string }[] = [
  { value: 'HOT', label: freshnessLabels.HOT },
  { value: 'RECENT', label: freshnessLabels.RECENT },
  { value: 'AGING', label: freshnessLabels.AGING },
  { value: 'OLD', label: freshnessLabels.OLD },
];

export const sourceLabels: Record<JobOfferSource, string> = {
  ARBEITNOW: 'Arbeitnow',
  REMOTIVE: 'Remotive',
  JOBICY: 'Jobicy',
  WE_WORK_REMOTELY: 'We Work Remotely',
};

export const sourceOptions: readonly { readonly value: JobOfferSource; readonly label: string }[] = [
  { value: 'ARBEITNOW', label: sourceLabels.ARBEITNOW },
  { value: 'REMOTIVE', label: sourceLabels.REMOTIVE },
  { value: 'JOBICY', label: sourceLabels.JOBICY },
  { value: 'WE_WORK_REMOTELY', label: sourceLabels.WE_WORK_REMOTELY },
];

export const priorityLabels: Record<JobOfferPriority, string> = {
  HIGH: 'Alta priorità',
  MEDIUM: 'Media priorità',
  LOW: 'Bassa priorità',
  DISQUALIFIED: 'Da scartare',
};

export const priorityOptions: readonly { readonly value: JobOfferPriority; readonly label: string }[] = [
  { value: 'HIGH', label: priorityLabels.HIGH },
  { value: 'MEDIUM', label: priorityLabels.MEDIUM },
  { value: 'LOW', label: priorityLabels.LOW },
  { value: 'DISQUALIFIED', label: priorityLabels.DISQUALIFIED },
];

export const formatOptional = (value: unknown): string => {
  if (typeof value !== 'string') {
    return missingValue;
  }
  const normalized = value?.trim();
  return normalized ? normalized : missingValue;
};

export const formatDate = (value: unknown): string => {
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

export const formatDateTime = (value: string): string => {
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

export const isJobOfferPriority = (value: string): value is JobOfferPriority => {
  return value === 'HIGH' || value === 'MEDIUM' || value === 'LOW' || value === 'DISQUALIFIED';
};

export const formatPriority = (value: string): string => {
  if (isJobOfferPriority(value)) {
    return priorityLabels[value];
  }

  return value;
};

export const formatEvaluationStatus = (value: string): string => {
  switch (value) {
    case 'SUCCESS':
      return 'Analisi completata';
    case 'UNANALYZABLE':
      return 'Non analizzabile';
    default:
      return value;
  }
};

export const getPriorityTone = (
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

export const formatScore = (value: number): string => `${Math.round(value)}%`;

type KnownEvaluatorModel =
  | 'GEMINI_3_1_FLASH_LITE'
  | 'GEMINI_3_5_FLASH_LITE'
  | 'GEMMA_4_12B'
  | 'GEMMA_4_31B'
  | 'UNKNOWN';

const evaluatorModelLabels: Record<KnownEvaluatorModel, string> = {
  GEMINI_3_1_FLASH_LITE: 'Gemini 3.1 Flash Lite',
  GEMINI_3_5_FLASH_LITE: 'Gemini 3.5 Flash Lite',
  GEMMA_4_12B: 'Gemma 4 12B',
  GEMMA_4_31B: 'Gemma 4 31B',
  UNKNOWN: 'Modello sconosciuto',
};

const isKnownEvaluatorModel = (value: string): value is KnownEvaluatorModel => {
  return (
    value === 'GEMINI_3_1_FLASH_LITE' ||
    value === 'GEMINI_3_5_FLASH_LITE' ||
    value === 'GEMMA_4_12B' ||
    value === 'GEMMA_4_31B' ||
    value === 'UNKNOWN'
  );
};

export const formatEvaluatorModel = (value: string | null | undefined): string => {
  const normalized = value?.trim();
  if (!normalized) {
    return 'Non valutato';
  }

  if (isKnownEvaluatorModel(normalized)) {
    return evaluatorModelLabels[normalized];
  }

  return normalized.replaceAll('_', ' ');
};

export const calculatePercentage = (partial: number, total: number): number => {
  if (total <= 0) {
    return 0;
  }

  return Math.round((partial / total) * 100);
};

export const mapFilters = (filters: JobOffersFiltersData): JobOffersFiltersViewModelDTO => {
  const activeFiltersCount = [
    filters.title.trim() ? filters.title : null,
    filters.source,
    filters.priority,
    filters.freshness,
  ].filter((value) => value !== null).length;

  return {
    ...filters,
    activeFiltersCount,
    sourceOptions,
    priorityOptions,
    freshnessOptions,
  };
};

export const mapProcessingStatus = (
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

export const formatSalary = (offer: JobOfferDto): string => {
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

export const toErrorMessage = (error: Error | null, fallback: string): string => {
  return error?.message ?? fallback;
};

export const mapQueryToLoadableState = <Input, Output>(
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

export const mapEvaluationSummary = (
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

export const mapEvaluationDetail = (
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
    summary: evaluation.summary?.trim() || null,
    competenceMatch: evaluation.competenceMatch,
    detailedReasoning: evaluation.detailedReasoning,
    pros: evaluation.pros ?? [],
    cons: evaluation.cons ?? [],
    createdAt: formatDateTime(evaluation.createdAt),
    updatedAt: formatDateTime(evaluation.updatedAt),
  };
};

export const mapCurriculumDetail = (
  curriculum: JobOfferDto['curriculum'],
  jobOfferId: string,
): JobCurriculumViewModelDTO | null => {
  if (!curriculum) {
    return null;
  }

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000';

  return {
    id: curriculum.id,
    jobOfferId: curriculum.jobOfferId,
    filePath: curriculum.filePath,
    pdfUrl: `${apiBaseUrl}/job-offers/${jobOfferId}/curriculum/pdf`,
    explanation: curriculum.explanation,
    tailoringData: (curriculum.tailoringData as Record<string, any>) ?? null,
    createdAt: formatDateTime(curriculum.createdAt),
    updatedAt: formatDateTime(curriculum.updatedAt),
  };
};

export const formatDescription = (offer: JobOfferDto): string => {
  const markdownDescription = formatOptional(offer.descriptionMarkdown);
  return markdownDescription === missingValue ? offer.rawDescription : markdownDescription;
};

export const mapListItem = (
  offer: JobOfferDto,
  selectedJobOfferId: string | null,
): JobOfferListItemViewModelDTO => ({
  id: offer.id,
  title: offer.title,
  companyName: offer.company.name,
  companyId: offer.company.id,
  companyEligibleOffersCount: (offer.company as any).eligibleOffersCount ?? 0,
  companyActiveOffersCount: (offer.company as any).activeOffersCount ?? 0,
  companySavedOrAppliedCount: (offer.company as any).savedOrAppliedCount ?? 0,
  companyNewOffersCount: (offer.company as any).newOffersCount ?? 0,
  source: sourceLabels[offer.source],
  freshness: freshnessLabels[offer.freshness],
  evaluatorModel: formatEvaluatorModel(offer.evaluation?.evaluatorModel),
  location: formatOptional(offer.location),
  remoteType: remoteTypeLabels[offer.remoteType],
  experienceLevel: experienceLevelLabels[offer.experienceLevel],
  status: statusLabels[offer.status],
  statusValue: offer.status,
  isArchived: offer.status === 'ARCHIVED',
  salaryRange: formatSalary(offer),
  datePosted: formatDate(offer.datePosted),
  skillsPreview: offer.skills?.slice(0, 4) ?? [],
  evaluationSummary: mapEvaluationSummary(offer.evaluation),
  isSelected: offer.id === selectedJobOfferId,
});

export const mapDetail = (offer: JobOfferDto): JobOfferDetailViewModelDTO => ({
  id: offer.id,
  title: offer.title,
  source: sourceLabels[offer.source],
  freshness: freshnessLabels[offer.freshness],
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
  statusValue: offer.status,
  isArchived: offer.status === 'ARCHIVED',
  notes: formatOptional(offer.notes),
  createdAt: formatDateTime(offer.createdAt),
  updatedAt: formatDateTime(offer.updatedAt),
  skills: offer.skills ?? [],
  evaluation: mapEvaluationDetail(offer.evaluation),
  curriculum: mapCurriculumDetail(offer.curriculum, offer.id),
  company: {
    id: offer.company.id,
    name: offer.company.name,
    eligibleOffersCount: (offer.company as any).eligibleOffersCount ?? 0,
    activeOffersCount: (offer.company as any).activeOffersCount ?? 0,
    savedOrAppliedCount: (offer.company as any).savedOrAppliedCount ?? 0,
    newOffersCount: (offer.company as any).newOffersCount ?? 0,
    websiteUrl: formatOptional(offer.company.websiteUrl),
    linkedinUrl: formatOptional(offer.company.linkedinUrl),
    industry: formatOptional(offer.company.industry),
    fundingStage: formatOptional(offer.company.fundingStage),
    companySizeRange: formatOptional(offer.company.companySizeRange),
    employeeCount: offer.company.employeeCount?.toLocaleString('it-IT') ?? missingValue,
  },
});
