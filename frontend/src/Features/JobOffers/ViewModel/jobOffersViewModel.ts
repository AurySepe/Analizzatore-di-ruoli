import type { LoadableState } from '@/Commons/loadable-state';
import type {
  EvaluationProcessingStatusDto,
  JobOfferDto,
  JobOffersFiltersData,
  JobOffersSection,
  PaginatedJobOffersResponse,
} from '../State/jobOffersAtoms';
import {
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
    filters: JobOffersFiltersData,
    selectedJobOfferId: string | null,
    section: JobOffersSection,
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
    };
  }
}
