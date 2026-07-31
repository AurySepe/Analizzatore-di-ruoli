import type { LoadableState } from '@/Commons/loadable-state';
import type { JobOffersStatsViewModelDTO } from '../../ViewModel/jobOffersViewModel';

// ── Skeleton ──────────────────────────────────────────────────────────────────
export const JobOffersStatsSkeleton: React.FC = () => (
  <div className="flex flex-wrap gap-2">
    {['Totale annunci', 'Visibili ora'].map((label) => (
      <div key={label} className="h-10 w-32 animate-pulse rounded-full bg-slate-200" />
    ))}
  </div>
);

// ── Error ─────────────────────────────────────────────────────────────────────
export const JobOffersStatsError: React.FC<{ error: string }> = ({ error }) => (
  <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-700">
    {error}
  </div>
);

// ── View ──────────────────────────────────────────────────────────────────────
export const JobOffersStatsView: React.FC<{
  data: JobOffersStatsViewModelDTO;
  isFetching?: boolean;
}> = ({ data, isFetching }) => (
  <div className="flex flex-wrap items-center gap-2">
    <StatCard label="Totale" value={data.total.toLocaleString('it-IT')} />
    <StatCard label="Visibili" value={data.visible.toLocaleString('it-IT')} subtle={isFetching ? 'Aggiornamento…' : undefined} />
  </div>
);

const StatCard: React.FC<{ label: string; value: string; subtle?: string }> = ({ label, value, subtle }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</span>
    <span className="text-sm font-bold text-slate-950">{value}</span>
    {subtle ? <span className="text-xs font-medium text-sky-600">{subtle}</span> : null}
  </div>
);

// ── Orchestrator ──────────────────────────────────────────────────────────────
export const JobOffersStats: React.FC<{ state: LoadableState<JobOffersStatsViewModelDTO> }> = ({ state }) => {
  switch (state.status) {
    case 'loading':
      return <JobOffersStatsSkeleton />;
    case 'error':
      return <JobOffersStatsError error={state.error} />;
    case 'success':
      return <JobOffersStatsView data={state.data} isFetching={state.isFetching} />;
  }
};
