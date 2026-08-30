import React from 'react';
import type { LoadableState } from '@/Commons/loadable-state';
import type {
  ActiveProcessingJobViewModelDTO,
  EvaluationProcessingStatusViewModelDTO,
  RecentEvaluatedJobViewModelDTO,
} from '../../ViewModel/jobOffersViewModel';

// ── SKELETON ──────────────────────────────────────────────────────────────────
export const JobOffersProcessingStatusSkeleton: React.FC = () => (
  <div className="flex flex-col gap-6 animate-pulse">
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="h-7 w-64 rounded-xl bg-slate-200" />
      <div className="mt-4 h-3 w-full rounded-full bg-slate-100" />
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-20 rounded-2xl bg-slate-100" />
        ))}
      </div>
    </div>
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-7 flex flex-col gap-4">
        <div className="h-6 w-48 rounded bg-slate-200" />
        {[0, 1].map((i) => (
          <div key={i} className="h-44 rounded-3xl bg-slate-100" />
        ))}
      </div>
      <div className="lg:col-span-5 flex flex-col gap-4">
        <div className="h-6 w-48 rounded bg-slate-200" />
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-32 rounded-3xl bg-slate-100" />
        ))}
      </div>
    </div>
  </div>
);

// ── ERROR ─────────────────────────────────────────────────────────────────────
export const JobOffersProcessingStatusError: React.FC<{ error: string }> = ({ error }) => (
  <div className="rounded-3xl border border-rose-200 bg-rose-50/80 p-8 text-center text-rose-800 shadow-sm backdrop-blur-sm">
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-2xl">
      ⚠️
    </div>
    <h2 className="mt-4 text-lg font-bold">Stato Elaborazione Non Disponibile</h2>
    <p className="mt-2 text-sm text-rose-600 max-w-md mx-auto">{error}</p>
  </div>
);

// ── ACTIVE JOB CARD ───────────────────────────────────────────────────────────
const ActiveJobCard: React.FC<{ job: ActiveProcessingJobViewModelDTO }> = ({ job }) => {
  const isEvaluating = job.isEvaluating;

  return (
    <article
      className={`relative overflow-hidden rounded-3xl border p-5 transition-all duration-300 ${
        isEvaluating
          ? 'border-indigo-300/80 bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/50 shadow-md ring-2 ring-indigo-500/20'
          : 'border-slate-200/90 bg-white shadow-sm hover:border-slate-300'
      }`}
    >
      {isEvaluating && (
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 animate-pulse" />
      )}

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex-1 min-w-[200px]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {job.companyName}
            </span>
            <span className="text-slate-300">•</span>
            <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
              {job.source}
            </span>
          </div>
          <h3 className="mt-1 text-base font-bold text-slate-900 line-clamp-1">
            {job.title}
          </h3>
        </div>

        <div>
          {isEvaluating ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700 shadow-sm ring-1 ring-indigo-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
              </span>
              Gemini al lavoro...
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              In coda
            </span>
          )}
        </div>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-2">
        {job.descriptionSnippet}
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1">
            📍 {job.location}
          </span>
          <span className="inline-flex items-center gap-1 rounded bg-slate-50 px-2 py-0.5 font-medium text-slate-700">
            💼 {job.remoteType}
          </span>
          {job.salaryRange && (
            <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700">
              💰 {job.salaryRange}
            </span>
          )}
        </div>
        <span className="text-[11px] text-slate-400">
          Ricevuto: {job.createdAt}
        </span>
      </div>
    </article>
  );
};

// ── RECENT EVALUATED JOB CARD ─────────────────────────────────────────────────
const RecentEvaluatedJobCard: React.FC<{ evaluation: RecentEvaluatedJobViewModelDTO }> = ({
  evaluation,
}) => {
  const priorityColor =
    evaluation.priorityTone === 'high'
      ? 'bg-emerald-500 text-white'
      : evaluation.priorityTone === 'medium'
        ? 'bg-amber-500 text-white'
        : evaluation.priorityTone === 'disqualified'
          ? 'bg-rose-500 text-white'
          : 'bg-slate-700 text-white';

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-slate-300">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            {evaluation.companyName}
          </p>
          <h4 className="mt-0.5 text-sm font-bold text-slate-900 truncate">
            {evaluation.title}
          </h4>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <span className={`rounded-lg px-2 py-0.5 text-xs font-bold ${priorityColor}`}>
            {evaluation.priority}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-xs font-black text-white">
            {evaluation.overallScore}
          </span>
        </div>
      </div>

      {evaluation.summary && (
        <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2 bg-slate-50 rounded-xl p-2.5 border border-slate-100">
          "{evaluation.summary}"
        </p>
      )}

      <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400">
        <span className="inline-flex items-center gap-1 font-medium text-slate-500">
          ✨ {evaluation.evaluatorModel}
        </span>
        <span>{evaluation.evaluatedAt}</span>
      </div>
    </div>
  );
};

// ── MAIN VIEW ─────────────────────────────────────────────────────────────────
export const JobOffersProcessingStatusView: React.FC<{
  data: EvaluationProcessingStatusViewModelDTO;
  isFetching?: boolean;
}> = ({ data, isFetching }) => {
  const isEvaluating = data.evaluatingCount > 0;
  const isQueueActive = data.pendingJobs > 0;

  return (
    <div className="flex flex-col gap-6">
      {/* HEADER & METRIC SUMMARY */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
        {isFetching && (
          <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 animate-pulse" />
        )}

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Dashboard Elaborazione AI
              </h2>
              {isQueueActive ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                  </span>
                  Valutazione in tempo reale
                </span>
              ) : (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  ✅ Coda completata
                </span>
              )}
            </div>
            <p className="text-sm text-slate-600 max-w-2xl">{data.message}</p>
          </div>

          <div className="flex items-center gap-4 bg-slate-900 text-white px-5 py-4 rounded-2xl shadow-sm shrink-0">
            <div className="text-right">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Avanzamento Globale
              </p>
              <p className="text-2xl font-black">{data.evaluatedPercentage}%</p>
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-800 text-xl">
              {data.evaluatedPercentage === 100 ? '🎉' : '⚡'}
            </div>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="mt-6">
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 transition-all duration-500 ease-out"
              style={{ width: `${data.evaluatedPercentage}%` }}
            />
          </div>
        </div>

        {/* METRICS GRID */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Totale Annunci
            </span>
            <p className="mt-1 text-2xl font-black text-slate-900">
              {data.totalJobs.toLocaleString('it-IT')}
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Valutati con Successo
            </span>
            <p className="mt-1 text-2xl font-black text-emerald-800">
              {data.evaluatedJobs.toLocaleString('it-IT')}
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
              In Analisi Attiva
            </span>
            <p className="mt-1 text-2xl font-black text-indigo-800 flex items-center gap-2">
              {data.evaluatingCount}
              {isEvaluating && (
                <span className="h-2 w-2 rounded-full bg-indigo-600 animate-ping" />
              )}
            </p>
          </div>

          <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              In Attesa in Coda
            </span>
            <p className="mt-1 text-2xl font-black text-amber-800">
              {data.pendingJobs.toLocaleString('it-IT')}
            </p>
          </div>
        </div>
      </section>

      {/* LIVE PROCESSING & RECENT EVALUATIONS SPLIT */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* LEFT COLUMN: ACTIVE / PENDING JOBS */}
        <section className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-950">
                Lavori in Coda ed Elaborazione
              </h3>
              {data.activeJobs.length > 0 && (
                <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-bold text-slate-700">
                  {data.activeJobs.length}
                </span>
              )}
            </div>
            {isQueueActive && (
              <span className="text-xs text-slate-500 animate-pulse">
                🔄 Aggiornamento live ogni 2s
              </span>
            )}
          </div>

          {data.activeJobs.length > 0 ? (
            <div className="flex flex-col gap-3.5">
              {data.activeJobs.map((job) => (
                <ActiveJobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
              <span className="text-3xl">✨</span>
              <h4 className="mt-2 text-base font-bold text-slate-800">
                Nessun lavoro in attesa
              </h4>
              <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
                Tutti gli annunci di lavoro estratti sono già stati analizzati e classificati dal nostro cluster Gemini AI.
              </p>
            </div>
          )}
        </section>

        {/* RIGHT COLUMN: RECENT COMPLETED EVALUATIONS */}
        <section className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-950">
              Ultime Valutazioni AI
            </h3>
            <span className="text-xs font-semibold text-indigo-600">
              Top Match Feed
            </span>
          </div>

          {data.recentEvaluatedJobs.length > 0 ? (
            <div className="flex flex-col gap-3">
              {data.recentEvaluatedJobs.map((ev) => (
                <RecentEvaluatedJobCard key={ev.id} evaluation={ev} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center text-slate-400 shadow-sm text-xs">
              Nessuna valutazione recente registrata.
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

// ── ORCHESTRATOR ──────────────────────────────────────────────────────────────
export const JobOffersProcessingStatus: React.FC<{
  state: LoadableState<EvaluationProcessingStatusViewModelDTO>;
}> = ({ state }) => {
  switch (state.status) {
    case 'loading':
      return <JobOffersProcessingStatusSkeleton />;
    case 'error':
      return <JobOffersProcessingStatusError error={state.error} />;
    case 'success':
      return (
        <JobOffersProcessingStatusView
          data={state.data}
          isFetching={state.isFetching}
        />
      );
  }
};
