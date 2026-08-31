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
  HIMALAYAS: 'Himalayas',
  REMOTEOK: 'Remote OK',
  MANUAL: 'Inserito Manualmente',
};

export const sourceOptions: readonly { readonly value: JobOfferSource; readonly label: string }[] = [
  { value: 'ARBEITNOW', label: sourceLabels.ARBEITNOW },
  { value: 'REMOTIVE', label: sourceLabels.REMOTIVE },
  { value: 'JOBICY', label: sourceLabels.JOBICY },
  { value: 'WE_WORK_REMOTELY', label: sourceLabels.WE_WORK_REMOTELY },
  { value: 'HIMALAYAS', label: sourceLabels.HIMALAYAS },
  { value: 'REMOTEOK', label: sourceLabels.REMOTEOK },
  { value: 'MANUAL', label: sourceLabels.MANUAL },
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
  evaluatingCount: status.evaluatingCount ?? 0,
  evaluatedPercentage: calculatePercentage(status.evaluatedJobs, status.totalJobs),
  isCategorizing: status.isCategorizing,
  isProfileComplete: status.isProfileComplete,
  message: status.message,
  statusLabel: status.isCategorizing ? 'Valutazione AI attiva' : 'Coda completata',
  activeJobs: (status.activeJobs || []).map((j) => ({
    id: j.id,
    title: j.title,
    companyName: j.companyName,
    location: j.location || 'Non specificato',
    remoteType: (remoteTypeLabels as any)[j.remoteType] ?? j.remoteType,
    source: (sourceLabels as any)[j.source] ?? j.source,
    isEvaluating: j.evaluationProcessStatus === 'EVALUATING',
    statusLabel: j.evaluationProcessStatus === 'EVALUATING' ? 'In analisi da Gemini' : 'In attesa in coda',
    descriptionSnippet: j.descriptionSnippet || 'Nessuna descrizione disponibile.',
    salaryRange: j.salaryRange,
    createdAt: formatDateTime(j.createdAt),
  })),
  recentEvaluatedJobs: (status.recentEvaluatedJobs || []).map((r) => ({
    id: r.id,
    jobOfferId: r.jobOfferId,
    title: r.title,
    companyName: r.companyName,
    overallScore: r.overallScore,
    priority: formatPriority(r.priority),
    priorityTone: getPriorityTone(r.priority),
    evaluatorModel: formatEvaluatorModel(r.evaluatorModel),
    summary: r.summary,
    evaluatedAt: formatDateTime(r.evaluatedAt),
  })),
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
    summary: evaluation.summary ?? null,
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

  const rawBaseUrl = import.meta.env.VITE_API_BASE_URL ?? '/api';
  const normalizedBase = rawBaseUrl.replace(/\/$/, '');
  const apiBase = normalizedBase.endsWith('/api') ? normalizedBase : `${normalizedBase}/api`;
  const updatedAtTime = curriculum.updatedAt ? new Date(curriculum.updatedAt).getTime() : Date.now();

  return {
    id: curriculum.id,
    jobOfferId: curriculum.jobOfferId,
    storageKey: curriculum.storageKey ?? '',
    pdfUrl: `${apiBase}/job-offers/${jobOfferId}/curriculum/pdf?t=${updatedAtTime}`,
    pdfStatus: (curriculum.pdfStatus as 'PENDING' | 'GENERATING' | 'READY' | 'FAILED') || 'PENDING',
    explanation: curriculum.explanation,
    customLabel: curriculum.customLabel ?? null,
    work: (curriculum.work || []).map((w) => ({
      name: w.name,
      position: w.position,
      summary: w.summary,
      include: w.include,
    })),
    projects: (curriculum.projects || []).map((p) => ({
      name: p.name,
      description: p.description,
    })),
    selectedPublicationTitles: curriculum.selectedPublicationTitles || [],
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
  companyEligibleOffersCount: offer.company.eligibleOffersCount ?? 0,
  companyActiveOffersCount: offer.company.activeOffersCount ?? 0,
  companySavedOrAppliedCount: offer.company.savedOrAppliedCount ?? 0,
  companyNewOffersCount: offer.company.newOffersCount ?? 0,
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
    eligibleOffersCount: offer.company.eligibleOffersCount ?? 0,
    activeOffersCount: offer.company.activeOffersCount ?? 0,
    savedOrAppliedCount: offer.company.savedOrAppliedCount ?? 0,
    newOffersCount: offer.company.newOffersCount ?? 0,
    websiteUrl: formatOptional(offer.company.websiteUrl),
    linkedinUrl: formatOptional(offer.company.linkedinUrl),
    industry: formatOptional(offer.company.industry),
    fundingStage: formatOptional(offer.company.fundingStage),
    companySizeRange: formatOptional(offer.company.companySizeRange),
    employeeCount: offer.company.employeeCount?.toLocaleString('it-IT') ?? missingValue,
  },
});

import type { CompanyJobOffersBreakdownDto } from '../State/jobOffersAtoms';
import type {
  CompanyDetailModalViewModelDTO,
  CompanyJobOfferItemViewModelDTO,
} from './jobOffersViewModelTypes';

export const mapCompanyDetailModal = (
  breakdown: CompanyJobOffersBreakdownDto | null | undefined,
): CompanyDetailModalViewModelDTO | null => {
  if (!breakdown || !breakdown.company) return null;

  const offers: CompanyJobOfferItemViewModelDTO[] = (breakdown.offers ?? []).map((offer) => ({
    id: offer.id,
    title: offer.title,
    location: offer.location || 'Remote',
    remoteType: remoteTypeLabels[offer.remoteType] || offer.remoteType,
    source: sourceLabels[offer.source] || offer.source,
    status: offer.status,
    statusLabel: statusLabels[offer.status] || offer.status,
    overallScore: offer.evaluation?.overallScore,
    priority: offer.evaluation?.priority,
  }));

  return {
    companyId: breakdown.company.id,
    companyName: breakdown.company.name,
    industry: breakdown.company.industry ?? null,
    websiteUrl: breakdown.company.websiteUrl ?? null,
    linkedinUrl: breakdown.company.linkedinUrl ?? null,
    companySizeRange: breakdown.company.companySizeRange ?? null,
    fundingStage: breakdown.company.fundingStage ?? null,
    counts: {
      savedOrAppliedCount: breakdown.counts?.savedOrAppliedCount ?? 0,
      newOffersCount: breakdown.counts?.newOffersCount ?? 0,
      pendingEvaluationCount: breakdown.counts?.pendingEvaluationCount ?? 0,
      disqualifiedCount: breakdown.counts?.disqualifiedCount ?? 0,
    },
    offers,
  };
};

export const ALL_PUBLICATIONS = [
  'Contextualized experiential language learning in the metaverse',
  'MetaCUX: Social interaction and collaboration in the metaverse',
  'The yin and yang of software quality: On the relationship between design patterns and code smells',
  'MetaCUX-a multi-user, multi-scenario environment for a cooperative workspace',
  'Designing a collaborative safety training experience in virtual reality',
  'A task-oriented multimodal conversational interface for a CSCW immersive virtual environment',
  'Muxi: a multimodal conversational interface for the metaverse',
  'Botanicar: A cooperative experience in augmented reality',
  'A Glimpse on HCAI Frameworks: A Scoping Review to Adapt them to Mixed Reality',
  'Neuro-physiological and Subjective measures of Presence Experience in Virtual Reality: Insights from a scoping review',
  'cARdefender: a Mixed Reality Game for Vehicle Passengers',
] as const;

export const ALL_BASE_WORK = [
  { name: 'MioCFO', position: 'Co-Creator & Lead Developer' },
  { name: 'Commigo', position: 'Founder & Lead Architect' },
  { name: 'FitRats', position: 'Co-Creator & Lead Developer' },
  { name: 'University of Salerno', position: 'Research Associate' },
  { name: 'University of Salerno', position: 'Research Scholar, Marte Media Lab' },
  { name: 'Glasgow University', position: 'Traineeship, HCI Lab' },
] as const;

export const ALL_BASE_PROJECTS = [
  { name: 'cARdefender', description: '' },
  { name: 'BotanicAR', description: '' },
] as const;

export const baseWorkCatalog: Record<string, { position: string; summary: string }[]> = {
  miocfo: [
    {
      position: 'Co-Creator & Lead Developer',
      summary:
        'Engineered a B2B financial advisory platform from scratch using TypeScript, React, Tailwind CSS, NestJS, Prisma, and PostgreSQL, configuring concurrent background task queues to parse 1,000+ invoices and bank statements securely.\nAchieved 95% automated categorization accuracy on cash flows using Gemini APIs while designing a rapid-review UX fallback to make manual correction of low-confidence entries frictionless.\nDelivered real-time financial insights to 20 active SME beta users by conducting weekly interviews to translate feedback directly into updates.',
    },
  ],
  commigo: [
    {
      position: 'Founder & Lead Architect',
      summary:
        'Monetized the multiplayer VR platform, LearningVerse, by securing an 8,000 Euro software licensing contract for an EU-funded integration program and deploying it for a 40-hour course at the University of Salerno.\nEngineered real-time spatial synchronization for 20 concurrent VR users in a single room by building low-latency C# networking pipelines in Unity that synchronized 100 interactable 3D objects simultaneously.\nDelivered HapGree, a 25,000 Euro sustainability tracking SaaS, and MatEditPro, a 9,000 Euro web 3D editor, by leading technical development across Flutter, React, Three.js, and WebGL architectures.\nDoubled team feature delivery speed across 3 co-founders by establishing core software architecture guidelines, automated deployment workflows, and facilitating weekly Agile Scrum sprints.',
    },
  ],
  fitrats: [
    {
      position: 'Co-Creator & Lead Developer',
      summary:
        'Designed and developed a zero-to-one B2B SaaS web platform for fitness professionals featuring real-time client tracking using Flutter and Riverpod state management connected to a Node.js and PostgreSQL backend.\nStreamlined workout creation and client tracking for 10 personal trainers by conducting hands-on user testing calls and iterating core product features continuously.',
    },
  ],
  'university of salerno': [
    {
      position: 'Research Associate',
      summary:
        'Engineered cooperative AR/VR platforms like BotanicAR and industrial safety training simulations in Unity, co-authoring five peer-reviewed papers published at international IEEE and ACM conferences.\nAccelerated research prototype delivery across 5 collaborative AR/VR projects by establishing modular C# component architectures and reusable data pipelines.',
    },
    {
      position: 'Research Scholar, Marte Media Lab',
      summary:
        "Published four peer-reviewed scientific papers at international HCI conferences by conducting user studies and testing usability metrics on social interaction in virtual environments.\nSelected for a research scholarship at Marte Media Lab during Master's studies based on top academic standing (GPA: 3.92/4.0).",
    },
  ],
  'glasgow university': [
    {
      position: 'Traineeship, HCI Lab',
      summary:
        'Published a peer-reviewed scientific paper at the IEEE VR conference after securing a competitive Erasmus+ research traineeship grant under the supervision of Prof. Stephen Brewster.\nValidated in-car tracking by executing 20 real-world driving test sessions with participants after building cARdefender, an in-vehicle Mixed Reality game with a C++ object recognition and spatial mapping algorithm using the ZED 2 SDK.',
    },
  ],
};

export function getBaseWorkExperience(name: string, position?: string) {
  const normName = (name || '').trim().toLowerCase();
  const normPos = (position || '').trim().toLowerCase();
  const list = baseWorkCatalog[normName];
  if (!list || list.length === 0) return null;

  if (normPos) {
    const match = list.find(
      (item) =>
        item.position.toLowerCase() === normPos ||
        item.position.toLowerCase().includes(normPos) ||
        normPos.includes(item.position.toLowerCase()),
    );
    if (match) return match;
  }

  return list[0];
}
