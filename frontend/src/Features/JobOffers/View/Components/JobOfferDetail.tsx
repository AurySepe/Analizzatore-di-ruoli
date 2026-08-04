import React, { useState } from 'react';
import type { LoadableState } from '@/Commons/loadable-state';
import type { JobOfferStatus, UpdateCurriculumTailoringData } from '../../State/jobOffersAtoms';
import type { JobOfferDetailViewModelDTO } from '../../ViewModel/jobOffersViewModel';
import { JobOfferDetailEvaluation } from './Subcomponents/JobOfferDetailEvaluation';
import { JobOfferDetailHeader } from './Subcomponents/JobOfferDetailHeader';
import { JobOfferDetailOverview } from './Subcomponents/JobOfferDetailOverview';
import { JobOfferDetailTailoring } from './Subcomponents/JobOfferDetailTailoring';

// ── Skeleton ──────────────────────────────────────────────────────────────────
export const JobOfferDetailSkeleton: React.FC = () => (
  <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="h-8 w-3/4 animate-pulse rounded-lg bg-slate-200" />
    <div className="mt-4 h-5 w-1/2 animate-pulse rounded bg-slate-200" />
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <div key={item} className="h-20 animate-pulse rounded-2xl bg-slate-100" />
      ))}
    </div>
    <div className="mt-8 h-64 animate-pulse rounded-2xl bg-slate-100" />
  </aside>
);

// ── Error ─────────────────────────────────────────────────────────────────────
export const JobOfferDetailError: React.FC<{ error: string; onClearSelection: () => void }> = ({
  error,
  onClearSelection,
}) => (
  <aside className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
    <h2 className="text-lg font-semibold">Dettaglio non disponibile</h2>
    <p className="mt-2 text-sm">{error}</p>
    <button
      type="button"
      className="mt-5 rounded-xl bg-rose-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-800"
      onClick={onClearSelection}
    >
      Chiudi dettaglio
    </button>
  </aside>
);

// ── View ──────────────────────────────────────────────────────────────────────
export const JobOfferDetailView: React.FC<{
  data: JobOfferDetailViewModelDTO | null;
  isFetching?: boolean;
  onClearSelection: () => void;
  onUpdateJobOfferStatus: (id: string, status: JobOfferStatus) => Promise<void>;
  onUpdateCurriculumTailoring: (id: string, tailoring: UpdateCurriculumTailoringData['tailoring']) => Promise<void>;
  showHeaderActions?: boolean;
}> = ({ data, isFetching, onClearSelection, onUpdateJobOfferStatus, onUpdateCurriculumTailoring, showHeaderActions = true }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'curriculum'>('details');

  if (data === null) {
    return (
      <aside className="flex min-h-[520px] items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
        <div>
          <p className="text-lg font-semibold text-slate-950">Seleziona un annuncio</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Il pannello mostrerà tutte le informazioni del ruolo: descrizione, azienda, competenze,
            retribuzione, stato e metadati.
          </p>
        </div>
      </aside>
    );
  }

  const showCurriculumTab = data.statusValue !== 'NEW';
  const currentTab = showCurriculumTab ? activeTab : 'details';

  return (
    <aside className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {isFetching ? <div className="absolute inset-x-0 top-0 h-1 animate-pulse bg-sky-500" /> : null}

      <JobOfferDetailHeader
        data={data}
        onClearSelection={onClearSelection}
        onUpdateJobOfferStatus={onUpdateJobOfferStatus}
        showHeaderActions={showHeaderActions}
      />

      {/* ── Navigation Tabs (Only shown for non-new offers) ───────────────────── */}
      {showCurriculumTab && (
        <div className="flex border-b border-slate-200 bg-slate-50/50 px-4">
          <button
            type="button"
            onClick={() => setActiveTab('details')}
            className={`border-b-2 py-3 px-4 text-sm font-semibold transition ${
              currentTab === 'details'
                ? 'border-indigo-600 text-indigo-600 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Dettagli & Valutazione AI
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('curriculum')}
            className={`flex items-center gap-2 border-b-2 py-3 px-4 text-sm font-semibold transition ${
              currentTab === 'curriculum'
                ? 'border-indigo-600 text-indigo-600 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <span>Curriculum Personalizzato</span>
            {data.curriculum ? (
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
                Pronto
              </span>
            ) : (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800 animate-pulse">
                In corso...
              </span>
            )}
          </button>
        </div>
      )}

      <div className="max-h-[820px] space-y-5 overflow-y-auto p-4">
        {currentTab === 'details' ? (
          <>
            <JobOfferDetailEvaluation evaluation={data.evaluation} />
            <JobOfferDetailOverview data={data} />
          </>
        ) : (
          <JobOfferDetailTailoring
            curriculum={data.curriculum}
            jobOfferId={data.id}
            jobOfferTitle={data.title}
            onUpdateCurriculumTailoring={onUpdateCurriculumTailoring}
          />
        )}
      </div>
    </aside>
  );
};

// ── Orchestrator ──────────────────────────────────────────────────────────────
export const JobOfferDetail: React.FC<{
  state: LoadableState<JobOfferDetailViewModelDTO | null>;
  onClearSelection: () => void;
  onUpdateJobOfferStatus: (id: string, status: JobOfferStatus) => Promise<void>;
  onUpdateCurriculumTailoring: (id: string, tailoring: UpdateCurriculumTailoringData['tailoring']) => Promise<void>;
  showHeaderActions?: boolean;
}> = ({ state, onClearSelection, onUpdateJobOfferStatus, onUpdateCurriculumTailoring, showHeaderActions = true }) => {
  switch (state.status) {
    case 'loading':
      return <JobOfferDetailSkeleton />;
    case 'error':
      return <JobOfferDetailError error={state.error} onClearSelection={onClearSelection} />;
    case 'success':
      return (
        <JobOfferDetailView
          data={state.data}
          isFetching={state.isFetching}
          onClearSelection={onClearSelection}
          onUpdateJobOfferStatus={onUpdateJobOfferStatus}
          onUpdateCurriculumTailoring={onUpdateCurriculumTailoring}
          showHeaderActions={showHeaderActions}
        />
      );
  }
};
