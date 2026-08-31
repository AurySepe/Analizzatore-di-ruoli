import type { LoadableState } from '@/Commons/loadable-state';
import type {
  JobOfferFreshness,
  JobOfferPriority,
  JobOfferSource,
  JobOfferStatus,
  JobOffersSection,
} from '../State/jobOffersAtoms';

export interface QueryResultLike<T> {
  readonly data: T | undefined;
  readonly isLoading: boolean;
  readonly isFetching: boolean;
  readonly isError: boolean;
  readonly error: Error | null;
}

export interface JobOffersHeaderViewModelDTO {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}

export interface JobOfferListItemViewModelDTO {
  readonly id: string;
  readonly title: string;
  readonly companyName: string;
  readonly companyId?: string;
  readonly companyEligibleOffersCount?: number;
  readonly companyActiveOffersCount?: number;
  readonly companySavedOrAppliedCount?: number;
  readonly companyNewOffersCount?: number;
  readonly source: string;
  readonly freshness: string;
  readonly evaluatorModel: string;
  readonly location: string;
  readonly remoteType: string;
  readonly experienceLevel: string;
  readonly status: string;
  readonly statusValue: JobOfferStatus;
  readonly isArchived: boolean;
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
  readonly summary: string | null;
  readonly competenceMatch: string;
  readonly detailedReasoning: string;
  readonly pros: readonly string[];
  readonly cons: readonly string[];
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface JobCurriculumWorkViewModelDTO {
  readonly name: string;
  readonly position?: string;
  readonly summary: string;
  readonly include?: boolean;
}

export interface JobCurriculumProjectViewModelDTO {
  readonly name: string;
  readonly description: string;
}

export type JobCurriculumPdfStatus = 'PENDING' | 'GENERATING' | 'READY' | 'FAILED';

export interface JobCurriculumViewModelDTO {
  readonly id: string;
  readonly jobOfferId: string;
  readonly storageKey: string;
  readonly pdfUrl: string;
  readonly pdfStatus: JobCurriculumPdfStatus;
  readonly explanation: string;
  readonly customLabel?: string | null;
  readonly work: readonly JobCurriculumWorkViewModelDTO[];
  readonly projects: readonly JobCurriculumProjectViewModelDTO[];
  readonly selectedPublicationTitles: readonly string[];
  readonly createdAt: string;
  readonly updatedAt: string;
}

export type JobCoverLetterPdfStatus = 'PENDING' | 'GENERATING' | 'READY' | 'FAILED';

export interface JobCoverLetterViewModelDTO {
  readonly id: string;
  readonly jobOfferId: string;
  readonly customLabel?: string | null;
  readonly recipientName?: string | null;
  readonly recipientTitle?: string | null;
  readonly recipientCompany: string;
  readonly recipientAddress?: string | null;
  readonly recipientRole: string;
  readonly date: string;
  readonly salutation: string;
  readonly experienceParagraph1: string;
  readonly experienceParagraph2: string;
  readonly companyMotivation: string;
  readonly callToAction: string;
  readonly signoff: string;
  readonly explanation?: string | null;
  readonly storageKey?: string | null;
  readonly pdfUrl: string;
  readonly pdfStatus: JobCoverLetterPdfStatus;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface JobOfferDetailViewModelDTO {
  readonly id: string;
  readonly title: string;
  readonly source: string;
  readonly freshness: string;
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
  readonly statusValue: JobOfferStatus;
  readonly isArchived: boolean;
  readonly notes: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly skills: readonly string[];
  readonly evaluation: JobOfferEvaluationDetailViewModelDTO | null;
  readonly curriculum: JobCurriculumViewModelDTO | null;
  readonly coverLetter: JobCoverLetterViewModelDTO | null;
  readonly company: {
    readonly id: string;
    readonly name: string;
    readonly eligibleOffersCount?: number;
    readonly activeOffersCount?: number;
    readonly savedOrAppliedCount?: number;
    readonly newOffersCount?: number;
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

export interface ActiveProcessingJobViewModelDTO {
  readonly id: string;
  readonly title: string;
  readonly companyName: string;
  readonly location: string;
  readonly remoteType: string;
  readonly source: string;
  readonly isEvaluating: boolean;
  readonly statusLabel: string;
  readonly descriptionSnippet: string;
  readonly salaryRange: string | null;
  readonly createdAt: string;
}

export interface RecentEvaluatedJobViewModelDTO {
  readonly id: string;
  readonly jobOfferId: string;
  readonly title: string;
  readonly companyName: string;
  readonly overallScore: number;
  readonly priority: string;
  readonly priorityTone: 'high' | 'medium' | 'low' | 'disqualified' | 'neutral';
  readonly evaluatorModel: string;
  readonly summary: string | null;
  readonly evaluatedAt: string;
}

export interface EvaluationProcessingStatusViewModelDTO {
  readonly totalJobs: number;
  readonly evaluatedJobs: number;
  readonly pendingJobs: number;
  readonly evaluatingCount: number;
  readonly evaluatedPercentage: number;
  readonly isCategorizing: boolean;
  readonly isProfileComplete: boolean;
  readonly message: string;
  readonly statusLabel: string;
  readonly activeJobs: readonly ActiveProcessingJobViewModelDTO[];
  readonly recentEvaluatedJobs: readonly RecentEvaluatedJobViewModelDTO[];
}

export interface JobOffersFiltersViewModelDTO {
  readonly title: string;
  readonly source: JobOfferSource | null;
  readonly priority: JobOfferPriority | null;
  readonly freshness: JobOfferFreshness | null;
  readonly activeFiltersCount: number;
  readonly sourceOptions: readonly { readonly value: JobOfferSource; readonly label: string }[];
  readonly priorityOptions: readonly { readonly value: JobOfferPriority; readonly label: string }[];
  readonly freshnessOptions: readonly { readonly value: JobOfferFreshness; readonly label: string }[];
}

import type { WorkFormEntry, ProjectFormEntry } from '../State/curriculumEditorAtoms';

export interface CompanyJobOfferItemViewModelDTO {
  readonly id: string;
  readonly title: string;
  readonly location: string;
  readonly remoteType: string;
  readonly source: string;
  readonly status: JobOfferStatus;
  readonly statusLabel: string;
  readonly overallScore?: number;
  readonly priority?: string;
}

export interface CompanyDetailModalViewModelDTO {
  readonly companyId: string;
  readonly companyName: string;
  readonly industry: string | null;
  readonly websiteUrl: string | null;
  readonly linkedinUrl: string | null;
  readonly companySizeRange: string | null;
  readonly fundingStage: string | null;
  readonly counts: {
    readonly savedOrAppliedCount: number;
    readonly newOffersCount: number;
    readonly pendingEvaluationCount: number;
    readonly disqualifiedCount: number;
  };
  readonly offers: readonly CompanyJobOfferItemViewModelDTO[];
}

export interface CurriculumEditorViewModelDTO {
  readonly isEditing: boolean;
  readonly customLabel: string;
  readonly explanation: string;
  readonly workEntries: readonly WorkFormEntry[];
  readonly projects: readonly ProjectFormEntry[];
  readonly selectedPubs: readonly string[];
  readonly saveError: string | null;
  readonly pdfKey: number;
  readonly allPublications: readonly string[];
  readonly allBaseWork: readonly { readonly name: string; readonly position: string }[];
  readonly allBaseProjects: readonly { readonly name: string; readonly description: string }[];
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
  readonly header: JobOffersHeaderViewModelDTO;
  readonly section: JobOffersSection;
  readonly isDetailModalOpen: boolean;
  readonly jobOffersState: LoadableState<readonly JobOfferListItemViewModelDTO[]>;
  readonly selectedJobOfferState: LoadableState<JobOfferDetailViewModelDTO | null>;
  readonly statsState: LoadableState<JobOffersStatsViewModelDTO>;
  readonly processingStatusState: LoadableState<EvaluationProcessingStatusViewModelDTO>;
  readonly filters: JobOffersFiltersViewModelDTO;
  readonly paginationState: LoadableState<JobOffersPaginationViewModelDTO>;
  readonly companyModalState: LoadableState<CompanyDetailModalViewModelDTO | null>;
  readonly curriculumEditor: CurriculumEditorViewModelDTO;
}
