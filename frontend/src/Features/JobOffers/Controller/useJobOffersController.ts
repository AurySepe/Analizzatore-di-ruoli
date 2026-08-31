import { useCallback, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  emptyJobOffersFilters,
  jobOffersFiltersAtom,
  jobOffersPageAtom,
  selectedJobOfferIdAtom,
  selectedCompanyIdAtom,
  updateJobOfferStatusMutationAtom,
  updateCurriculumTailoringMutationAtom,
  jobOffersSectionAtom,
  type JobOfferFreshness,
  type JobOfferPriority,
  type JobOfferSource,
  type JobOfferStatus,
  type JobOffersSection,
  type UpdateCurriculumTailoringData,
} from '../State/jobOffersAtoms';

export interface JobOffersController {
  readonly onSelectJobOffer: (id: string) => void;
  readonly onClearSelection: () => void;
  readonly onNextPage: () => void;
  readonly onPreviousPage: () => void;
  readonly onRefresh: () => void;
  readonly onTitleFilterChange: (value: string) => void;
  readonly onSourceFilterChange: (value: JobOfferSource | null) => void;
  readonly onPriorityChange: (value: JobOfferPriority | null) => void;
  readonly onFreshnessFilterChange: (value: JobOfferFreshness | null) => void;
  readonly onUpdateJobOfferStatus: (id: string, status: JobOfferStatus) => Promise<void>;
  readonly onUpdateCurriculumTailoring: (id: string, tailoring: UpdateCurriculumTailoringData['tailoring']) => Promise<void>;
  readonly onArchiveJobOffer: (id: string) => Promise<void>;
  readonly onRestoreJobOffer: (id: string) => Promise<void>;
  readonly onResetFilters: () => void;
  readonly onSelectCompany: (companyId: string) => void;
  readonly onCloseCompanyModal: () => void;
  readonly onSelectOfferFromCompany: (offerId: string) => void;
}

export const useJobOffersController = (section: JobOffersSection): JobOffersController => {
  const [currentPage, setCurrentPage] = useAtom(jobOffersPageAtom);
  const setFilters = useSetAtom(jobOffersFiltersAtom);
  const setSelectedJobOfferId = useSetAtom(selectedJobOfferIdAtom);
  const setSection = useSetAtom(jobOffersSectionAtom);
  const updateJobOfferStatus = useAtomValue(updateJobOfferStatusMutationAtom);
  const updateCurriculumTailoring = useAtomValue(updateCurriculumTailoringMutationAtom);
  const queryClient = useQueryClient();

  const handleSelectJobOffer = useCallback(
    (id: string) => {
      setSelectedJobOfferId(id);
    },
    [setSelectedJobOfferId],
  );

  const handleClearSelection = useCallback(() => {
    setSelectedJobOfferId(null);
  }, [setSelectedJobOfferId]);

  const handleNextPage = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage, setCurrentPage]);

  const handlePreviousPage = useCallback(() => {
    setCurrentPage(Math.max(1, currentPage - 1));
  }, [currentPage, setCurrentPage]);

  const resetToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, [setCurrentPage]);

  const handleRefresh = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['jobOffers'] });
    queryClient.invalidateQueries({ queryKey: ['evaluations', 'status'] });
  }, [queryClient]);

  useEffect(() => {
    setSection(section);
    setSelectedJobOfferId(null);
    setFilters(emptyJobOffersFilters);
    setCurrentPage(1);
  }, [section, setCurrentPage, setFilters, setSection, setSelectedJobOfferId]);

  const handleTitleFilterChange = useCallback(
    (value: string) => {
      setSelectedJobOfferId(null);
      setFilters((current) => ({ ...current, title: value }));
      resetToFirstPage();
    },
    [resetToFirstPage, setFilters, setSelectedJobOfferId],
  );

  const handleSourceFilterChange = useCallback(
    (value: JobOfferSource | null) => {
      setSelectedJobOfferId(null);
      setFilters((current) => ({ ...current, source: value }));
      resetToFirstPage();
    },
    [resetToFirstPage, setFilters, setSelectedJobOfferId],
  );

  const handlePriorityChange = useCallback(
    (value: JobOfferPriority | null) => {
      setSelectedJobOfferId(null);
      setFilters((current) => ({ ...current, priority: value }));
      resetToFirstPage();
    },
    [resetToFirstPage, setFilters, setSelectedJobOfferId],
  );

  const handleFreshnessFilterChange = useCallback(
    (value: JobOfferFreshness | null) => {
      setSelectedJobOfferId(null);
      setFilters((current) => ({ ...current, freshness: value }));
      resetToFirstPage();
    },
    [resetToFirstPage, setFilters, setSelectedJobOfferId],
  );

  const updateStatus = useCallback(
    async (id: string, status: JobOfferStatus) => {
      await updateJobOfferStatus.mutateAsync({ id, status });
      await queryClient.invalidateQueries({ queryKey: ['jobOffers'] });
      queryClient.invalidateQueries({ queryKey: ['evaluations', 'status'] });
      setSelectedJobOfferId(null);
    },
    [queryClient, setSelectedJobOfferId, updateJobOfferStatus],
  );

  const handleUpdateCurriculumTailoring = useCallback(
    async (id: string, tailoring: UpdateCurriculumTailoringData['tailoring']) => {
      await updateCurriculumTailoring.mutateAsync({ id, tailoring });
    },
    [updateCurriculumTailoring],
  );

  const handleArchiveJobOffer = useCallback(
    async (id: string) => {
      await updateStatus(id, 'ARCHIVED');
    },
    [updateStatus],
  );

  const handleRestoreJobOffer = useCallback(
    async (id: string) => {
      await updateStatus(id, 'NEW');
    },
    [updateStatus],
  );

  const handleResetFilters = useCallback(() => {
    setSelectedJobOfferId(null);
    setFilters(emptyJobOffersFilters);
    resetToFirstPage();
  }, [resetToFirstPage, setFilters, setSelectedJobOfferId]);

  const setSelectedCompanyId = useSetAtom(selectedCompanyIdAtom);

  const handleSelectCompany = useCallback(
    (companyId: string) => {
      setSelectedCompanyId(companyId);
    },
    [setSelectedCompanyId],
  );

  const handleCloseCompanyModal = useCallback(() => {
    setSelectedCompanyId(null);
  }, [setSelectedCompanyId]);

  const handleSelectOfferFromCompany = useCallback(
    (offerId: string) => {
      setSelectedJobOfferId(offerId);
      setSelectedCompanyId(null);
    },
    [setSelectedCompanyId, setSelectedJobOfferId],
  );

  return {
    onSelectJobOffer: handleSelectJobOffer,
    onClearSelection: handleClearSelection,
    onNextPage: handleNextPage,
    onPreviousPage: handlePreviousPage,
    onRefresh: handleRefresh,
    onTitleFilterChange: handleTitleFilterChange,
    onSourceFilterChange: handleSourceFilterChange,
    onPriorityChange: handlePriorityChange,
    onFreshnessFilterChange: handleFreshnessFilterChange,
    onUpdateJobOfferStatus: updateStatus,
    onUpdateCurriculumTailoring: handleUpdateCurriculumTailoring,
    onArchiveJobOffer: handleArchiveJobOffer,
    onRestoreJobOffer: handleRestoreJobOffer,
    onResetFilters: handleResetFilters,
    onSelectCompany: handleSelectCompany,
    onCloseCompanyModal: handleCloseCompanyModal,
    onSelectOfferFromCompany: handleSelectOfferFromCompany,
  };
};
