import type { LoadableState } from '@/Commons/loadable-state';
import type { JobOffersStatsViewModelDTO } from '../../ViewModel/jobOffersViewModel';

// ── Skeleton ──────────────────────────────────────────────────────────────────
export const JobOffersStatsSkeleton: React.FC = () => (
  <div className="grid gap-4 sm:grid-cols-3">
    {['Totale annunci', 'Visibili ora', 'Pagina'].map((label) => (
      <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">{label}</p>
        <div className="mt-3 h-8 w-20 animate-pulse rounded-lg bg-slate-200" />
      </div>
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
  <div className="grid gap-4 sm:grid-cols-3">
    <StatCard label="Totale annunci" value={data.total.toLocaleString('it-IT')} />
    <StatCard label="Visibili ora" value={data.visible.toLocaleString('it-IT')} />
    <StatCard label="Pagina" value={`${data.page} / ${data.totalPages}`} subtle={isFetching ? 'Aggiornamento…' : undefined} />
  </div>
);

const StatCard: React.FC<{ label: string; value: string; subtle?: string }> = ({ label, value, subtle }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-sm text-slate-500">{label}</p>
    <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
    {subtle ? <p className="mt-2 text-xs font-medium text-sky-600">{subtle}</p> : null}
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
