import type { LoadableState } from '@/Commons/loadable-state';
import type { EvaluationProcessingStatusViewModelDTO } from '../../ViewModel/jobOffersViewModel';

// ── Skeleton ──────────────────────────────────────────────────────────────────
export const JobOffersProcessingStatusSkeleton: React.FC = () => (
  <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="h-6 w-56 animate-pulse rounded bg-slate-200" />
    <div className="mt-5 grid gap-4 sm:grid-cols-3">
      {[0, 1, 2].map((item) => (
        <div key={item} className="h-24 animate-pulse rounded-2xl bg-slate-100" />
      ))}
    </div>
  </section>
);

// ── Error ─────────────────────────────────────────────────────────────────────
export const JobOffersProcessingStatusError: React.FC<{ error: string }> = ({ error }) => (
  <section className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
    <h2 className="text-lg font-semibold">Stato elaborazione non disponibile</h2>
    <p className="mt-2 text-sm">{error}</p>
  </section>
);

// ── View ──────────────────────────────────────────────────────────────────────
export const JobOffersProcessingStatusView: React.FC<{
  data: EvaluationProcessingStatusViewModelDTO;
  isFetching?: boolean;
}> = ({ data, isFetching }) => (
  <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    {isFetching ? <div className="absolute inset-x-0 top-0 h-1 animate-pulse bg-sky-500" /> : null}
    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">Elaborazione annunci</h2>
          <span className={data.isCategorizing ? categorizingBadgeClassName : idleBadgeClassName}>
            {data.statusLabel}
          </span>
          <span className={data.isProfileComplete ? profileReadyBadgeClassName : profileMissingBadgeClassName}>
            {data.isProfileComplete ? 'Profilo completo' : 'Profilo incompleto'}
          </span>
        </div>
        <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">{data.message}</p>
      </div>
      <p className="rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white">
        {data.evaluatedPercentage}% elaborati
      </p>
    </div>

    <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
      <div
        className="h-full rounded-full bg-sky-600 transition-all"
        style={{ width: `${data.evaluatedPercentage}%` }}
      />
    </div>

    <div className="mt-5 grid gap-4 sm:grid-cols-3">
      <MetricCard label="Annunci totali" value={data.totalJobs} />
      <MetricCard label="Elaborati" value={data.evaluatedJobs} tone="success" />
      <MetricCard label="Da elaborare" value={data.pendingJobs} tone="warning" />
    </div>
  </section>
);

const categorizingBadgeClassName = 'rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-100';
const idleBadgeClassName = 'rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700';
const profileReadyBadgeClassName = 'rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100';
const profileMissingBadgeClassName = 'rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-100';

const MetricCard: React.FC<{
  label: string;
  value: number;
  tone?: 'success' | 'warning';
}> = ({ label, value, tone }) => {
  const valueClassName = tone === 'success'
    ? 'text-emerald-700'
    : tone === 'warning'
      ? 'text-amber-700'
      : 'text-slate-950';

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className={`mt-2 text-3xl font-bold tracking-tight ${valueClassName}`}>
        {value.toLocaleString('it-IT')}
      </p>
    </div>
  );
};

// ── Orchestrator ──────────────────────────────────────────────────────────────
export const JobOffersProcessingStatus: React.FC<{
  state: LoadableState<EvaluationProcessingStatusViewModelDTO>;
}> = ({ state }) => {
  switch (state.status) {
    case 'loading':
      return <JobOffersProcessingStatusSkeleton />;
    case 'error':
      return <JobOffersProcessingStatusError error={state.error} />;
    case 'success':
      return <JobOffersProcessingStatusView data={state.data} isFetching={state.isFetching} />;
  }
};
