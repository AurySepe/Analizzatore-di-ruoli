import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useAtom, useSetAtom } from 'jotai';
import {
  emptyJobOffersFilters,
  jobOffersFiltersAtom,
  jobOffersPageAtom,
  selectedJobOfferIdAtom,
  type JobOfferPriority,
  type JobOfferSource,
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
  readonly onResetFilters: () => void;
}

export const useJobOffersController = (): JobOffersController => {
  const [currentPage, setCurrentPage] = useAtom(jobOffersPageAtom);
  const setFilters = useSetAtom(jobOffersFiltersAtom);
  const setSelectedJobOfferId = useSetAtom(selectedJobOfferIdAtom);
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
    onResetFilters: handleResetFilters,
  };
};
