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

export interface JobCurriculumViewModelDTO {
  readonly id: string;
  readonly jobOfferId: string;
  readonly filePath: string;
  readonly pdfUrl: string;
  readonly explanation: string;
  readonly tailoringData: Record<string, any> | null;
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
  readonly freshness: JobOfferFreshness | null;
  readonly activeFiltersCount: number;
  readonly sourceOptions: readonly { readonly value: JobOfferSource; readonly label: string }[];
  readonly priorityOptions: readonly { readonly value: JobOfferPriority; readonly label: string }[];
  readonly freshnessOptions: readonly { readonly value: JobOfferFreshness; readonly label: string }[];
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
}
