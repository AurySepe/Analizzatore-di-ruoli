import { useState } from 'react';
import type { LoadableState } from '@/Commons/loadable-state';
import type {
  JobOfferDetailViewModelDTO,
  JobOfferListItemViewModelDTO,
  JobOffersFiltersViewModelDTO,
  JobOffersPaginationViewModelDTO,
  JobOffersStatsViewModelDTO,
} from '../../ViewModel/jobOffersViewModel';
import type { JobOfferFreshness, JobOfferPriority, JobOfferSource, JobOfferStatus } from '../../State/jobOffersAtoms';
import { JobOfferDetail } from '../Components/JobOfferDetail';
import { JobOffersDecisionDeck } from '../Components/JobOffersDecisionDeck';
import { JobOffersFilters } from '../Components/JobOffersFilters';
import { JobOffersList } from '../Components/JobOffersList';
import { JobOffersWorkflowBoard } from '../Components/JobOffersWorkflowBoard';
import { JobOffersPagination } from '../Components/JobOffersPagination';
import { JobOffersStats } from '../Components/JobOffersStats';
import { CompanyDetailModal } from '@/Features/Companies/View/CompanyDetailModal';

export interface JobOffersScreenProps {
  readonly section: 'new' | 'active' | 'closed' | 'disqualified';
  readonly isDetailModalOpen: boolean;
  readonly jobOffersState: LoadableState<readonly JobOfferListItemViewModelDTO[]>;
  readonly selectedJobOfferState: LoadableState<JobOfferDetailViewModelDTO | null>;
  readonly statsState: LoadableState<JobOffersStatsViewModelDTO>;
  readonly filters: JobOffersFiltersViewModelDTO;
  readonly paginationState: LoadableState<JobOffersPaginationViewModelDTO>;
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
  readonly onUpdateCurriculumTailoring: (id: string, tailoring: Record<string, any>) => Promise<void>;
  readonly onResetFilters: () => void;
}

export const JobOffersScreen: React.FC<JobOffersScreenProps> = ({
  section,
  isDetailModalOpen,
  jobOffersState,
  selectedJobOfferState,
  statsState,
  filters,
  paginationState,
  onSelectJobOffer,
  onClearSelection,
  onNextPage,
  onPreviousPage,
  onRefresh,
  onTitleFilterChange,
  onSourceFilterChange,
  onPriorityChange,
  onFreshnessFilterChange,
  onUpdateJobOfferStatus,
  onUpdateCurriculumTailoring,
  onResetFilters,
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleCloseFilters = () => setIsFiltersOpen(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex w-full max-w-[1600px] flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {section === 'new' || section === 'active' ? null : (
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <JobOffersStats state={statsState} />
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
                onClick={() => setIsFiltersOpen(true)}
              >
                Filtri{filters.activeFiltersCount > 0 ? ` (${filters.activeFiltersCount})` : ''}
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                onClick={onRefresh}
              >
                Aggiorna
              </button>
            </div>
          </div>
        )}

        {isFiltersOpen ? (
          <div className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-slate-950/50 px-4 py-8 backdrop-blur-sm">
            <div className="w-full max-w-6xl">
              <div className="mb-3 flex justify-end">
                <button
                  type="button"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
                  onClick={handleCloseFilters}
                >
                  Chiudi
                </button>
              </div>
              <JobOffersFilters
                filters={filters}
                onTitleFilterChange={onTitleFilterChange}
                onSourceFilterChange={onSourceFilterChange}
                onPriorityChange={onPriorityChange}
                onFreshnessFilterChange={onFreshnessFilterChange}
                onResetFilters={onResetFilters}
              />
            </div>
          </div>
        ) : null}

      {section === 'new' ? (
        <JobOffersDecisionDeck
          jobOffersState={jobOffersState}
          selectedJobOfferState={selectedJobOfferState}
          paginationState={paginationState}
          onSelectJobOffer={onSelectJobOffer}
          onClearSelection={onClearSelection}
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
          filtersActiveCount={filters.activeFiltersCount}
          onOpenFilters={() => setIsFiltersOpen(true)}
          onUpdateJobOfferStatus={onUpdateJobOfferStatus}
          onUpdateCurriculumTailoring={onUpdateCurriculumTailoring}
        />
      ) : section === 'active' || section === 'closed' ? (
        <div className="flex flex-col gap-4">
          <JobOffersWorkflowBoard
            state={jobOffersState}
            mode={section}
            onSelectJobOffer={onSelectJobOffer}
            onUpdateJobOfferStatus={onUpdateJobOfferStatus}
          />
          {section === 'closed' ? (
            <JobOffersPagination
              state={paginationState}
              onNextPage={onNextPage}
              onPreviousPage={onPreviousPage}
            />
          ) : null}
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)]">
          <div className="flex flex-col gap-4">
            <JobOffersList
              state={jobOffersState}
              onSelectJobOffer={onSelectJobOffer}
              onUpdateJobOfferStatus={onUpdateJobOfferStatus}
            />
            <JobOffersPagination
              state={paginationState}
              onNextPage={onNextPage}
              onPreviousPage={onPreviousPage}
            />
          </div>
          <JobOfferDetail
            state={selectedJobOfferState}
            onClearSelection={onClearSelection}
            onUpdateJobOfferStatus={onUpdateJobOfferStatus}
            onUpdateCurriculumTailoring={onUpdateCurriculumTailoring}
          />
        </div>
      )}

      {(section === 'active' || section === 'closed') && isDetailModalOpen ? (
        <div className="fixed inset-0 z-30 flex items-start justify-center overflow-y-auto bg-slate-950/50 px-4 py-8 backdrop-blur-sm">
          <div className="w-full max-w-[1400px]">
            <JobOfferDetail
              state={selectedJobOfferState}
              onClearSelection={onClearSelection}
              onUpdateJobOfferStatus={onUpdateJobOfferStatus}
              onUpdateCurriculumTailoring={onUpdateCurriculumTailoring}
            />
          </div>
        </div>
      ) : null}

      <CompanyDetailModal />
    </section>
  </main>
  );
};
