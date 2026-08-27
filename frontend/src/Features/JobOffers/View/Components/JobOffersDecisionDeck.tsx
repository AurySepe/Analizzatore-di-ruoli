import { useEffect, useState } from 'react';
import type { LoadableState } from '@/Commons/loadable-state';
import type { JobOfferStatus } from '../../State/jobOffersAtoms';
import type {
  CurriculumEditorViewModelDTO,
  JobOfferDetailViewModelDTO,
  JobOfferListItemViewModelDTO,
  JobOffersPaginationViewModelDTO,
} from '../../ViewModel/jobOffersViewModelTypes';
import type { CurriculumEditorController } from '../../Controller/useCurriculumEditorController';
import { JobOfferDetail } from './JobOfferDetail';

export const JobOffersDecisionDeck: React.FC<{
  readonly jobOffersState: LoadableState<readonly JobOfferListItemViewModelDTO[]>;
  readonly selectedJobOfferState: LoadableState<JobOfferDetailViewModelDTO | null>;
  readonly paginationState: LoadableState<JobOffersPaginationViewModelDTO>;
  readonly onSelectJobOffer: (id: string) => void;
  readonly onClearSelection: () => void;
  readonly onNextPage: () => void;
  readonly onPreviousPage: () => void;
  readonly filtersActiveCount: number;
  readonly onOpenFilters: () => void;
  readonly onUpdateJobOfferStatus: (id: string, status: JobOfferStatus) => Promise<void>;
  readonly onSelectCompany?: (companyId: string) => void;
  readonly editorState?: CurriculumEditorViewModelDTO;
  readonly editorController?: CurriculumEditorController;
}> = ({
  jobOffersState,
  selectedJobOfferState,
  paginationState,
  onSelectJobOffer,
  onClearSelection,
  onNextPage,
  onPreviousPage,
  filtersActiveCount,
  onOpenFilters,
  onUpdateJobOfferStatus,
  onSelectCompany,
  editorState,
  editorController,
}) => {
  const [pendingEdgeSelection, setPendingEdgeSelection] = useState<'first' | 'last' | null>(null);

  useEffect(() => {
    if (pendingEdgeSelection === null || jobOffersState.status !== 'success' || jobOffersState.data.length === 0) {
      return;
    }

    const nextOffer = pendingEdgeSelection === 'last'
      ? jobOffersState.data[jobOffersState.data.length - 1]
      : jobOffersState.data[0];

    onSelectJobOffer(nextOffer.id);
    setPendingEdgeSelection(null);
  }, [jobOffersState, onSelectJobOffer, pendingEdgeSelection]);

  if (jobOffersState.status === 'loading') {
    return <DecisionDeckSkeleton />;
  }

  if (jobOffersState.status === 'error') {
    return (
      <section className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
        <h2 className="text-lg font-semibold">Annunci non disponibili</h2>
        <p className="mt-2 text-sm">{jobOffersState.error}</p>
      </section>
    );
  }

  if (jobOffersState.data.length === 0) {
    return (
      <section className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
          <div className="border-b border-slate-200 bg-white p-2.5 sm:p-3">
            <div className="grid gap-2 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
              <div />
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  0/0
                </span>
                <button
                  type="button"
                  className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                  onClick={onOpenFilters}
                  aria-label={filtersActiveCount > 0 ? `Apri filtri, ${filtersActiveCount} attivi` : 'Apri filtri'}
                  title={filtersActiveCount > 0 ? `${filtersActiveCount} filtri attivi` : 'Filtri'}
                >
                  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 5h18" />
                    <path d="M6 12h12" />
                    <path d="M10 19h4" />
                  </svg>
                  {filtersActiveCount > 0 ? (
                    <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-slate-800 px-1 text-[10px] font-bold leading-none text-white">
                      {filtersActiveCount}
                    </span>
                  ) : null}
                </button>
              </div>
              <div />
            </div>
          </div>

          <div className="p-10 text-center">
            <p className="text-xl font-semibold text-slate-950">Nessun annuncio da valutare</p>
            <p className="mt-2 text-sm text-slate-500">Modifica i filtri per vedere altri annunci.</p>
          </div>
        </div>
      </section>
    );
  }

  const activeOffer = getActiveOffer(jobOffersState.data, selectedJobOfferState);
  const activeOfferIndex = getActiveOfferIndex(jobOffersState.data, activeOffer?.id ?? null);
  const currentPage = paginationState.status === 'success' ? paginationState.data.page : 1;
  const pageLimit = paginationState.status === 'success' ? paginationState.data.limit : jobOffersState.data.length;
  const totalOffers = paginationState.status === 'success' ? paginationState.data.total : jobOffersState.data.length;
  const absolutePosition = activeOfferIndex === null ? 0 : ((currentPage - 1) * pageLimit) + activeOfferIndex + 1;
  const positionLabel = absolutePosition === 0 ? '0' : `${absolutePosition}`;
  const canGoPreviousOffer = activeOfferIndex !== null && activeOfferIndex > 0;
  const canGoNextOffer = activeOfferIndex !== null && activeOfferIndex < jobOffersState.data.length - 1;
  const canGoPreviousPage = paginationState.status === 'success' && paginationState.data.canGoPrevious;
  const canGoNextPage = paginationState.status === 'success' && paginationState.data.canGoNext;
  const canGoPrevious = canGoPreviousOffer || canGoPreviousPage;
  const canGoNext = canGoNextOffer || canGoNextPage;

  const handlePreviousOffer = () => {
    if (activeOfferIndex !== null && canGoPreviousOffer) {
      onSelectJobOffer(jobOffersState.data[activeOfferIndex - 1].id);
      return;
    }

    if (canGoPreviousPage) {
      setPendingEdgeSelection('last');
      onPreviousPage();
    }
  };

  const handleNextOffer = () => {
    if (activeOfferIndex !== null && canGoNextOffer) {
      onSelectJobOffer(jobOffersState.data[activeOfferIndex + 1].id);
      return;
    }

    if (canGoNextPage) {
      setPendingEdgeSelection('first');
      onNextPage();
    }
  };

  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="relative">
        <button
          type="button"
          className="absolute -left-14 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-4 text-2xl font-bold text-slate-700 shadow-lg transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 2xl:-left-20 xl:flex"
          onClick={handlePreviousOffer}
          disabled={!canGoPrevious}
          aria-label="Annuncio precedente"
        >
          ‹
        </button>
        <button
          type="button"
          className="absolute -right-14 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-4 text-2xl font-bold text-slate-700 shadow-lg transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 2xl:-right-20 xl:flex"
          onClick={handleNextOffer}
          disabled={!canGoNext}
          aria-label="Annuncio successivo"
        >
          ›
        </button>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
          <div className="border-b border-slate-200 bg-white p-2.5 sm:p-3">
            <div className="grid gap-2 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
              <div className="flex items-center justify-start">
                {activeOffer ? (
                  <button
                    type="button"
                    className="w-full rounded-2xl border border-rose-300 bg-rose-50 px-8 py-3 text-base font-black text-rose-700 shadow-sm transition hover:bg-rose-100 sm:w-auto"
                    onClick={() => { void onUpdateJobOfferStatus(activeOffer.id, 'ARCHIVED'); }}
                  >
                    Scarta
                  </button>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {positionLabel}/{totalOffers}
                </span>
                <button
                  type="button"
                  className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 xl:hidden"
                  onClick={handlePreviousOffer}
                  disabled={!canGoPrevious}
                >
                  Precedente
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 xl:hidden"
                  onClick={handleNextOffer}
                  disabled={!canGoNext}
                >
                  Successivo
                </button>
                <button
                  type="button"
                  className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                  onClick={onOpenFilters}
                  aria-label={filtersActiveCount > 0 ? `Apri filtri, ${filtersActiveCount} attivi` : 'Apri filtri'}
                  title={filtersActiveCount > 0 ? `${filtersActiveCount} filtri attivi` : 'Filtri'}
                >
                  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 5h18" />
                    <path d="M6 12h12" />
                    <path d="M10 19h4" />
                  </svg>
                  {filtersActiveCount > 0 ? (
                    <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-slate-800 px-1 text-[10px] font-bold leading-none text-white">
                      {filtersActiveCount}
                    </span>
                  ) : null}
                </button>
              </div>

              <div className="flex items-center justify-end">
                {activeOffer ? (
                  <button
                    type="button"
                    className="w-full rounded-2xl border border-emerald-300 bg-emerald-600 px-8 py-3 text-base font-black text-white shadow-sm transition hover:bg-emerald-700 sm:w-auto"
                    onClick={() => { void onUpdateJobOfferStatus(activeOffer.id, 'SAVED'); }}
                  >
                    Candidati
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          <div className="max-h-[calc(100vh-145px)] overflow-y-auto p-2 sm:p-3 lg:p-4">
            <JobOfferDetail
              state={getVisibleSelectedJobOfferState(selectedJobOfferState, jobOffersState.data)}
              onClearSelection={onClearSelection}
              onUpdateJobOfferStatus={onUpdateJobOfferStatus}
              onSelectCompany={onSelectCompany}
              editorState={editorState}
              editorController={editorController}
              showHeaderActions={false}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

const DecisionDeckSkeleton: React.FC = () => (
  <section className="mx-auto w-full max-w-7xl">
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
      <div className="border-b border-slate-200 p-4">
        <div className="h-12 w-full animate-pulse rounded-2xl bg-slate-200" />
      </div>
      <div className="p-4">
        <div className="h-[720px] animate-pulse rounded-3xl bg-slate-100" />
      </div>
    </div>
  </section>
);



const getVisibleSelectedJobOfferState = (
  state: LoadableState<JobOfferDetailViewModelDTO | null>,
  data: readonly JobOfferListItemViewModelDTO[],
): LoadableState<JobOfferDetailViewModelDTO | null> => {
  if (state.status !== 'success' || state.data === null) {
    return state;
  }

  const isSelectedOfferInCurrentQueue = data.some((offer) => offer.id === state.data?.id);
  return isSelectedOfferInCurrentQueue ? state : { status: 'loading' };
};

const getActiveOfferIndex = (
  data: readonly JobOfferListItemViewModelDTO[],
  activeOfferId: string | null,
): number | null => {
  if (activeOfferId === null) {
    return data.length > 0 ? 0 : null;
  }

  const index = data.findIndex((offer) => offer.id === activeOfferId);
  return index >= 0 ? index : data.length > 0 ? 0 : null;
};

const getActiveOffer = (
  data: readonly JobOfferListItemViewModelDTO[],
  selectedJobOfferState: LoadableState<JobOfferDetailViewModelDTO | null>,
): JobOfferListItemViewModelDTO | null => {
  if (selectedJobOfferState.status === 'success' && selectedJobOfferState.data !== null) {
    return data.find((offer) => offer.id === selectedJobOfferState.data?.id) ?? data[0] ?? null;
  }

  return data[0] ?? null;
};
