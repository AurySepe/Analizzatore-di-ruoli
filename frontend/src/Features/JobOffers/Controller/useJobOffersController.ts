import { useCallback, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  emptyJobOffersFilters,
  jobOffersFiltersAtom,
  jobOffersPageAtom,
  selectedJobOfferIdAtom,
  updateJobOfferStatusMutationAtom,
  jobOffersSectionAtom,
  type JobOfferFreshness,
  type JobOfferPriority,
  type JobOfferSource,
  type JobOfferStatus,
  type JobOffersSection,
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
  readonly onArchiveJobOffer: (id: string) => Promise<void>;
  readonly onRestoreJobOffer: (id: string) => Promise<void>;
  readonly onResetFilters: () => void;
}

export const useJobOffersController = (section: JobOffersSection): JobOffersController => {
  const [currentPage, setCurrentPage] = useAtom(jobOffersPageAtom);
  const setFilters = useSetAtom(jobOffersFiltersAtom);
  const setSelectedJobOfferId = useSetAtom(selectedJobOfferIdAtom);
  const setSection = useSetAtom(jobOffersSectionAtom);
  const updateJobOfferStatus = useAtomValue(updateJobOfferStatusMutationAtom);
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
    setCurrentPage(1);
  }, [section, setCurrentPage, setSection, setSelectedJobOfferId]);

  const handleTitleFilterChange = useCallback(
    (value: string) => {
      setFilters((current) => ({ ...current, title: value }));
      resetToFirstPage();
    },
    [resetToFirstPage, setFilters],
  );

  const handleSourceFilterChange = useCallback(
    (value: JobOfferSource | null) => {
      setFilters((current) => ({ ...current, source: value }));
      resetToFirstPage();
    },
    [resetToFirstPage, setFilters],
  );

  const handlePriorityChange = useCallback(
    (value: JobOfferPriority | null) => {
      setFilters((current) => ({ ...current, priority: value }));
      resetToFirstPage();
    },
    [resetToFirstPage, setFilters],
  );

  const handleFreshnessFilterChange = useCallback(
    (value: JobOfferFreshness | null) => {
      setFilters((current) => ({ ...current, freshness: value }));
      resetToFirstPage();
    },
    [resetToFirstPage, setFilters],
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
    setFilters(emptyJobOffersFilters);
    resetToFirstPage();
  }, [resetToFirstPage, setFilters]);

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
    onArchiveJobOffer: handleArchiveJobOffer,
    onRestoreJobOffer: handleRestoreJobOffer,
    onResetFilters: handleResetFilters,
  };
};
