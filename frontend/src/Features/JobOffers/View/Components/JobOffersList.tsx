import type { JobOfferStatus } from '../../State/jobOffersAtoms';
import type { LoadableState } from '@/Commons/loadable-state';
import type { JobOfferListItemViewModelDTO } from '../../ViewModel/jobOffersViewModel';
import { getJobOfferStatusActionClassName, getJobOfferStatusActions } from '../Utils/jobOfferStatusActions';

// ── Skeleton ──────────────────────────────────────────────────────────────────
export const JobOffersListSkeleton: React.FC = () => (
  <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="mb-4 h-6 w-40 animate-pulse rounded-lg bg-slate-200" />
    <div className="space-y-3">
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="rounded-2xl border border-slate-100 p-4">
          <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />
          <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-slate-200" />
          <div className="mt-4 flex gap-2">
            <div className="h-7 w-20 animate-pulse rounded-full bg-slate-200" />
            <div className="h-7 w-24 animate-pulse rounded-full bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ── Error ─────────────────────────────────────────────────────────────────────
export const JobOffersListError: React.FC<{ error: string }> = ({ error }) => (
  <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
    <h2 className="text-lg font-semibold">Annunci non disponibili</h2>
    <p className="mt-2 text-sm">{error}</p>
  </div>
);

// ── View ──────────────────────────────────────────────────────────────────────
export const JobOffersListView: React.FC<{
  data: readonly JobOfferListItemViewModelDTO[];
  isFetching?: boolean;
  onSelectJobOffer: (id: string) => void;
  onUpdateJobOfferStatus: (id: string, status: JobOfferStatus) => Promise<void>;
  onSelectCompany?: (companyId: string) => void;
}> = ({ data, isFetching, onSelectJobOffer, onUpdateJobOfferStatus, onSelectCompany }) => {

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {isFetching ? <div className="absolute inset-x-0 top-0 h-1 animate-pulse bg-sky-500" /> : null}
      <div className="border-b border-slate-200 p-5">
        <h2 className="text-xl font-semibold tracking-tight text-slate-950">Lista annunci</h2>
        <p className="mt-1 text-sm text-slate-500">Seleziona un annuncio per aprire tutti i dettagli.</p>
      </div>

      {data.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-lg font-semibold text-slate-900">Nessun annuncio trovato</p>
          <p className="mt-2 text-sm text-slate-500">Quando il backend avrà annunci disponibili appariranno qui.</p>
        </div>
      ) : (
        <div className="max-h-[720px] space-y-3 overflow-y-auto p-4">
          {data.map((offer) => (
            <article
              key={offer.id}
              className={`rounded-2xl border p-4 transition hover:border-sky-300 hover:bg-sky-50 ${
                offer.isSelected ? 'border-sky-500 bg-sky-50 shadow-sm' : 'border-slate-200 bg-white'
              }`}
            >
              <button type="button" className="w-full text-left" onClick={() => onSelectJobOffer(offer.id)}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="line-clamp-2 text-base font-semibold text-slate-950">{offer.title}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (offer.companyId && onSelectCompany) onSelectCompany(offer.companyId);
                      }}
                      className="text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:underline transition"
                    >
                      {offer.companyName}
                    </button>
                    {(() => {
                      const saved = offer.companySavedOrAppliedCount ?? 0;
                      const toDecide = offer.companyNewOffersCount ?? 0;
                      const total = saved + toDecide;
                      if (total <= 1) return null;

                      const label = saved > 0 && toDecide > 0
                        ? `${saved} validi • ${toDecide} da decidere`
                        : saved > 0
                        ? `${saved} validi`
                        : `${toDecide} da decidere`;

                      return (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (offer.companyId && onSelectCompany) onSelectCompany(offer.companyId);
                          }}
                          className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-extrabold text-indigo-900 hover:bg-indigo-200 transition"
                          title={`${saved} annunci già segnati validi • ${toDecide} nuovi annunci da decidere per ${offer.companyName}`}
                        >
                          🏢 {label}
                        </button>
                      );
                    })()}
                  </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
                    Fonte: {offer.source}
                  </span>
                  <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-100">
                    Modello: {offer.evaluatorModel}
                  </span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-100">
                    Freschezza: {offer.freshness}
                  </span>
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {offer.status}
                </span>
                {offer.evaluationSummary ? (
                  <span className={getPriorityBadgeClassName(offer.evaluationSummary.priorityTone)}>
                    {offer.evaluationSummary.overallScore} · {offer.evaluationSummary.priority}
                  </span>
                ) : (
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">
                    Non valutato
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
              <span>{offer.location}</span>
              <span>{offer.remoteType}</span>
              <span>{offer.experienceLevel}</span>
              <span>{offer.salaryRange}</span>
              <span>Pubblicato: {offer.datePosted}</span>
            </div>

            {offer.skillsPreview.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {offer.skillsPreview.map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            ) : null}
            </button>
            <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-3">
              {getJobOfferStatusActions(offer.statusValue).map((action) => (
                <button
                  key={action.status}
                  type="button"
                  className={`rounded-xl border px-3 py-2 text-xs font-semibold transition ${getJobOfferStatusActionClassName(action.tone)}`}
                  onClick={() => { void onUpdateJobOfferStatus(offer.id, action.status); }}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    )}
    </section>
  );
};

const getPriorityBadgeClassName = (
  tone: NonNullable<JobOfferListItemViewModelDTO['evaluationSummary']>['priorityTone'],
): string => {
  switch (tone) {
    case 'high':
      return 'rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100';
    case 'medium':
      return 'rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-100';
    case 'low':
      return 'rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-100';
    case 'disqualified':
      return 'rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-100';
    case 'neutral':
      return 'rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700';
  }
};

// ── Orchestrator ──────────────────────────────────────────────────────────────
export const JobOffersList: React.FC<{
  state: LoadableState<readonly JobOfferListItemViewModelDTO[]>;
  onSelectJobOffer: (id: string) => void;
  onUpdateJobOfferStatus: (id: string, status: JobOfferStatus) => Promise<void>;
  onSelectCompany?: (companyId: string) => void;
}> = ({ state, onSelectJobOffer, onUpdateJobOfferStatus, onSelectCompany }) => {
  switch (state.status) {
    case 'loading':
      return <JobOffersListSkeleton />;
    case 'error':
      return <JobOffersListError error={state.error} />;
    case 'success':
      return (
        <JobOffersListView
          data={state.data}
          isFetching={state.isFetching}
          onSelectJobOffer={onSelectJobOffer}
          onUpdateJobOfferStatus={onUpdateJobOfferStatus}
          onSelectCompany={onSelectCompany}
        />
      );
  }
};
