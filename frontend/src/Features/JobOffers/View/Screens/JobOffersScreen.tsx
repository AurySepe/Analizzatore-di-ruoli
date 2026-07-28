import type { LoadableState } from '@/Commons/loadable-state';
import type {
  JobOfferDetailViewModelDTO,
  JobOfferListItemViewModelDTO,
  EvaluationProcessingStatusViewModelDTO,
  JobOffersFiltersViewModelDTO,
  JobOffersPaginationViewModelDTO,
  JobOffersStatsViewModelDTO,
} from '../../ViewModel/jobOffersViewModel';
import type { JobOfferPriority, JobOfferSource } from '../../State/jobOffersAtoms';
import { JobOfferDetail } from '../Components/JobOfferDetail';
import { JobOffersFilters } from '../Components/JobOffersFilters';
import { JobOffersList } from '../Components/JobOffersList';
import { JobOffersPagination } from '../Components/JobOffersPagination';
import { JobOffersProcessingStatus } from '../Components/JobOffersProcessingStatus';
import { JobOffersStats } from '../Components/JobOffersStats';

export interface JobOffersScreenProps {
  readonly jobOffersState: LoadableState<readonly JobOfferListItemViewModelDTO[]>;
  readonly selectedJobOfferState: LoadableState<JobOfferDetailViewModelDTO | null>;
  readonly statsState: LoadableState<JobOffersStatsViewModelDTO>;
  readonly processingStatusState: LoadableState<EvaluationProcessingStatusViewModelDTO>;
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
  readonly onResetFilters: () => void;
}

export const JobOffersScreen: React.FC<JobOffersScreenProps> = ({
  jobOffersState,
  selectedJobOfferState,
  statsState,
  processingStatusState,
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
  onResetFilters,
}) => (
  <main className="min-h-screen bg-slate-50 text-slate-950">
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
      <header className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Analizzatore di ruoli</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Annunci di lavoro
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Consulta gli annunci importati, apri il dettaglio e leggi in un unico posto descrizione,
            competenze, azienda, retribuzione, stato e metadati completi.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
          onClick={onRefresh}
        >
          Aggiorna annunci
        </button>
      </header>

      <JobOffersStats state={statsState} />
      <JobOffersProcessingStatus state={processingStatusState} />
      <JobOffersFilters
        filters={filters}
        onTitleFilterChange={onTitleFilterChange}
        onSourceFilterChange={onSourceFilterChange}
        onPriorityChange={onPriorityChange}
        onResetFilters={onResetFilters}
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)]">
        <div className="flex flex-col gap-4">
          <JobOffersList state={jobOffersState} onSelectJobOffer={onSelectJobOffer} />
          <JobOffersPagination
            state={paginationState}
            onNextPage={onNextPage}
            onPreviousPage={onPreviousPage}
          />
        </div>
        <JobOfferDetail state={selectedJobOfferState} onClearSelection={onClearSelection} />
      </div>
    </section>
  </main>
);
