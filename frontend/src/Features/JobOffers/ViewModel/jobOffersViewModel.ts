import type { LoadableState } from '@/Commons/loadable-state';
import type {
  CompanyJobOffersBreakdownDto,
  EvaluationProcessingStatusDto,
  JobOfferDto,
  JobOffersFiltersData,
  JobOffersSection,
  PaginatedJobOffersResponse,
} from '../State/jobOffersAtoms';
import type { WorkFormEntry, ProjectFormEntry } from '../State/curriculumEditorAtoms';
import {
  ALL_BASE_PROJECTS,
  ALL_BASE_WORK,
  ALL_PUBLICATIONS,
  mapCompanyDetailModal,
  mapDetail,
  mapFilters,
  mapListItem,
  mapProcessingStatus,
  mapQueryToLoadableState,
  sectionHeaders,
} from './jobOfferMappers';
import type {
  EvaluationProcessingStatusViewModelDTO,
  JobOffersViewModelDTO,
  QueryResultLike,
} from './jobOffersViewModelTypes';

export type * from './jobOffersViewModelTypes';

export interface CurriculumEditorFormState {
  readonly isEditing: boolean;
  readonly customLabel: string;
  readonly explanation: string;
  readonly workEntries: readonly WorkFormEntry[];
  readonly projects: readonly ProjectFormEntry[];
  readonly selectedPubs: readonly string[];
  readonly saveError: string | null;
  readonly pdfKey: number;
}

export class JobOffersViewModel {
  public static createProcessingStatus(
    processingStatusQuery: QueryResultLike<EvaluationProcessingStatusDto>,
  ): LoadableState<EvaluationProcessingStatusViewModelDTO> {
    return mapQueryToLoadableState(
      processingStatusQuery,
      mapProcessingStatus,
      'Errore durante il caricamento dello stato di elaborazione.',
    );
  }

  public static create(
    jobOffersQuery: QueryResultLike<PaginatedJobOffersResponse>,
    selectedJobOfferQuery: QueryResultLike<JobOfferDto | null>,
    processingStatusQuery: QueryResultLike<EvaluationProcessingStatusDto>,
    companyJobOffersQuery: QueryResultLike<CompanyJobOffersBreakdownDto | null>,
    filters: JobOffersFiltersData,
    selectedJobOfferId: string | null,
    selectedCompanyId: string | null,
    section: JobOffersSection,
    curriculumEditorForm: CurriculumEditorFormState,
  ): JobOffersViewModelDTO {
    return {
      header: sectionHeaders[section],
      section,
      isDetailModalOpen: selectedJobOfferId !== null,
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
      companyModalState:
        selectedCompanyId === null
          ? { status: 'success', data: null, isFetching: false }
          : mapQueryToLoadableState(
              companyJobOffersQuery,
              (breakdown) => mapCompanyDetailModal(breakdown),
              'Errore durante il caricamento delle informazioni aziendali.',
            ),
      curriculumEditor: {
        isEditing: curriculumEditorForm.isEditing,
        customLabel: curriculumEditorForm.customLabel,
        explanation: curriculumEditorForm.explanation,
        workEntries: curriculumEditorForm.workEntries,
        projects: curriculumEditorForm.projects,
        selectedPubs: curriculumEditorForm.selectedPubs,
        saveError: curriculumEditorForm.saveError,
        pdfKey: curriculumEditorForm.pdfKey,
        allPublications: ALL_PUBLICATIONS,
        allBaseWork: ALL_BASE_WORK,
        allBaseProjects: ALL_BASE_PROJECTS,
      },
    };
  }
}
