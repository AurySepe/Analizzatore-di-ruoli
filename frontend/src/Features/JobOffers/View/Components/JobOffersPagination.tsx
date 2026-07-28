import type { LoadableState } from '@/Commons/loadable-state';
import type { JobOffersPaginationViewModelDTO } from '../../ViewModel/jobOffersViewModel';

// ── Skeleton ──────────────────────────────────────────────────────────────────
export const JobOffersPaginationSkeleton: React.FC = () => (
  <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">
    <div className="h-5 w-44 animate-pulse rounded bg-slate-200" />
    <div className="flex gap-2">
      <div className="h-10 w-24 animate-pulse rounded-xl bg-slate-200" />
      <div className="h-10 w-24 animate-pulse rounded-xl bg-slate-200" />
    </div>
  </div>
);

// ── Error ─────────────────────────────────────────────────────────────────────
export const JobOffersPaginationError: React.FC<{ error: string }> = ({ error }) => (
  <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div>
);

// ── View ──────────────────────────────────────────────────────────────────────
export const JobOffersPaginationView: React.FC<{
  data: JobOffersPaginationViewModelDTO;
  onNextPage: () => void;
  onPreviousPage: () => void;
}> = ({ data, onNextPage, onPreviousPage }) => (
  <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
    <p className="text-sm text-slate-600">
      Pagina <span className="font-semibold text-slate-950">{data.page}</span> di{' '}
      <span className="font-semibold text-slate-950">{data.totalPages}</span> · {data.total} annunci ·{' '}
      {data.limit} per pagina
    </p>
    <div className="flex gap-2">
      <button
        type="button"
        className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        onClick={onPreviousPage}
        disabled={!data.canGoPrevious}
      >
        Precedente
      </button>
      <button
        type="button"
        className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
        onClick={onNextPage}
        disabled={!data.canGoNext}
      >
        Successiva
      </button>
    </div>
  </div>
);

// ── Orchestrator ──────────────────────────────────────────────────────────────
export const JobOffersPagination: React.FC<{
  state: LoadableState<JobOffersPaginationViewModelDTO>;
  onNextPage: () => void;
  onPreviousPage: () => void;
}> = ({ state, onNextPage, onPreviousPage }) => {
  switch (state.status) {
    case 'loading':
      return <JobOffersPaginationSkeleton />;
    case 'error':
      return <JobOffersPaginationError error={state.error} />;
    case 'success':
      return <JobOffersPaginationView data={state.data} onNextPage={onNextPage} onPreviousPage={onPreviousPage} />;
  }
};
