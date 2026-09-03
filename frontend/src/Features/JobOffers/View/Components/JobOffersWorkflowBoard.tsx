import { useState } from 'react';
import type { LoadableState } from '@/Commons/loadable-state';
import type { JobOfferStatus } from '../../State/jobOffersAtoms';
import type { JobOfferListItemViewModelDTO } from '../../ViewModel/jobOffersViewModel';

interface WorkflowColumn {
  readonly status: JobOfferStatus;
  readonly title: string;
  readonly description: string;
}

const activeColumns: readonly WorkflowColumn[] = [
  { status: 'SAVED', title: 'Da candidare', description: 'Annunci a cui sei interessato e per cui preparare/inviare candidatura.' },
  { status: 'APPLIED', title: 'Candidati', description: 'Candidature inviate.' },
  { status: 'INTERVIEWING', title: 'Colloqui', description: 'Colloqui tecnici o di team in corso.' },
  { status: 'OFFER', title: 'Offerta', description: 'Offerte ricevute da valutare.' },
];

const closedColumns: readonly WorkflowColumn[] = [
  { status: 'REJECTED', title: 'Mi hanno rifiutato', description: 'Candidature o contatti non andati avanti per decisione dell’azienda.' },
  { status: 'ARCHIVED', title: 'Scartati da me', description: 'Annunci che hai deciso di non seguire.' },
];

export const JobOffersWorkflowBoard: React.FC<{
  readonly state: LoadableState<readonly JobOfferListItemViewModelDTO[]>;
  readonly mode: 'active' | 'closed';
  readonly onSelectJobOffer: (id: string) => void;
  readonly onUpdateJobOfferStatus: (id: string, status: JobOfferStatus) => Promise<void>;
  readonly onSelectCompany?: (companyId: string) => void;
}> = ({ state, mode, onSelectJobOffer, onUpdateJobOfferStatus, onSelectCompany }) => {
  switch (state.status) {
    case 'loading':
      return <JobOffersWorkflowBoardSkeleton mode={mode} />;
    case 'error':
      return <JobOffersWorkflowBoardError error={state.error} />;
    case 'success':
      return (
        <JobOffersWorkflowBoardView
          data={state.data}
          isFetching={state.isFetching}
          mode={mode}
          onSelectJobOffer={onSelectJobOffer}
          onUpdateJobOfferStatus={onUpdateJobOfferStatus}
          onSelectCompany={onSelectCompany}
        />
      );
  }
};

const JobOffersWorkflowBoardSkeleton: React.FC<{ readonly mode: 'active' | 'closed' }> = ({ mode }) => {
  const columns = getColumns(mode);

  return (
    <section className={mode === 'active' ? 'overflow-x-auto pb-2' : 'grid gap-4 lg:grid-cols-3'}>
      <div className={mode === 'active' ? 'flex w-max gap-4' : 'contents'}>
        {columns.map((column) => (
        <div key={column.status} className={mode === 'active' ? 'w-[24rem] rounded-3xl border border-slate-200 bg-white p-4 shadow-sm' : 'rounded-3xl border border-slate-200 bg-white p-4 shadow-sm'}>
          <div className="h-6 w-32 animate-pulse rounded bg-slate-200" />
          <div className="mt-4 space-y-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-28 animate-pulse rounded-2xl bg-slate-100" />
            ))}
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

const JobOffersWorkflowBoardError: React.FC<{ readonly error: string }> = ({ error }) => (
  <section className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
    <h2 className="text-lg font-semibold">Annunci non disponibili</h2>
    <p className="mt-2 text-sm">{error}</p>
  </section>
);

const JobOffersWorkflowBoardView: React.FC<{
  readonly data: readonly JobOfferListItemViewModelDTO[];
  readonly isFetching?: boolean;
  readonly mode: 'active' | 'closed';
  readonly onSelectJobOffer: (id: string) => void;
  readonly onUpdateJobOfferStatus: (id: string, status: JobOfferStatus) => Promise<void>;
  readonly onSelectCompany?: (companyId: string) => void;
}> = ({ data, isFetching, mode, onSelectJobOffer, onUpdateJobOfferStatus, onSelectCompany }) => {
  const columns = getColumns(mode);
  const [draggedOfferId, setDraggedOfferId] = useState<string | null>(null);
  const [dragOverStatus, setDragOverStatus] = useState<JobOfferStatus | null>(null);

  const handleDragStart = (event: React.DragEvent<HTMLElement>, offerId: string) => {
    if (mode !== 'active') {
      return;
    }

    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', offerId);
    setDraggedOfferId(offerId);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>, status: JobOfferStatus) => {
    if (mode !== 'active') {
      return;
    }

    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    setDragOverStatus(status);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, status: JobOfferStatus) => {
    if (mode !== 'active') {
      return;
    }

    event.preventDefault();
    const offerId = event.dataTransfer.getData('text/plain') || draggedOfferId;
    setDraggedOfferId(null);
    setDragOverStatus(null);

    if (!offerId) {
      return;
    }

    const offer = data.find((item) => item.id === offerId);
    if (!offer || offer.statusValue === status) {
      return;
    }

    void onUpdateJobOfferStatus(offerId, status);
  };

  const handleDragEnd = () => {
    setDraggedOfferId(null);
    setDragOverStatus(null);
  };

  return (
    <section className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      {isFetching ? <div className="absolute inset-x-0 top-0 h-1 animate-pulse bg-sky-500" /> : null}
      <div className="flex flex-col gap-2 border-b border-slate-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">
            {mode === 'active' ? 'Pipeline lavori attivi' : 'Archivio lavori chiusi'}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {mode === 'active'
              ? 'Trascina gli annunci tra le sezioni per aggiornare lo stato.'
              : 'Consulta gli annunci chiusi divisi per stato. Apri il dettaglio solo quando serve.'}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {data.length} annunci
        </span>
      </div>

      <div className={mode === 'active' ? 'mt-4 overflow-x-auto pb-3' : 'mt-4 grid gap-4 lg:grid-cols-2'}>
        <div className={mode === 'active' ? 'flex w-max gap-4' : 'contents'}>
        {columns.map((column) => {
          const offers = data.filter((offer) => offer.statusValue === column.status);

          return (
            <div
              key={column.status}
              className={`${mode === 'active' ? 'w-[24rem] shrink-0' : ''} rounded-2xl border p-3 transition ${dragOverStatus === column.status ? 'border-sky-300 bg-sky-50 ring-2 ring-sky-100' : 'border-slate-200 bg-slate-50'}`}
              onDragOver={(event) => handleDragOver(event, column.status)}
              onDragLeave={() => setDragOverStatus((current) => (current === column.status ? null : current))}
              onDrop={(event) => handleDrop(event, column.status)}
            >
              <div className="flex items-start justify-between gap-3 px-1 pb-3">
                <div>
                  <h3 className="text-base font-semibold text-slate-950">{column.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{column.description}</p>
                </div>
                <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-slate-700 ring-1 ring-slate-200">
                  {offers.length}
                </span>
              </div>

              {offers.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-center text-sm text-slate-500">
                  {mode === 'active' ? 'Trascina qui un annuncio.' : 'Nessun annuncio in questa sezione.'}
                </div>
              ) : (
                <div className="space-y-3">
                  {offers.map((offer) => (
                    <article
                      key={offer.id}
                      className={`cursor-grab rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition active:cursor-grabbing ${draggedOfferId === offer.id ? 'opacity-50 ring-2 ring-sky-200' : 'hover:-translate-y-0.5 hover:shadow-md'}`}
                      draggable={mode === 'active'}
                      onDragStart={(event) => handleDragStart(event, offer.id)}
                      onDragEnd={handleDragEnd}
                    >
                      <button type="button" className="w-full text-left" onClick={() => onSelectJobOffer(offer.id)}>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="line-clamp-2 text-sm font-semibold leading-6 text-slate-950">{offer.title}</h4>
                            <div className="mt-1 flex flex-wrap items-center gap-1.5">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (offer.companyId && onSelectCompany) onSelectCompany(offer.companyId);
                                }}
                                className="text-xs font-semibold text-slate-600 hover:text-indigo-600 hover:underline transition"
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
                                    className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-extrabold text-indigo-900 hover:bg-indigo-200 transition"
                                    title={`${saved} annunci già segnati validi • ${toDecide} nuovi annunci da decidere per ${offer.companyName}`}
                                  >
                                    🏢 {label}
                                  </button>
                                );
                              })()}
                            </div>
                          </div>
                          {offer.evaluationSummary ? (
                            <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                              {offer.evaluationSummary.overallScore}
                            </span>
                          ) : null}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5 text-xs text-slate-600">
                          <span className="rounded-full bg-slate-100 px-2 py-1">{offer.source}</span>
                          <span className="rounded-full bg-slate-100 px-2 py-1">{offer.freshness}</span>
                          <span className="rounded-full bg-slate-100 px-2 py-1">{offer.datePosted}</span>
                        </div>
                      </button>

                    </article>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

const getColumns = (mode: 'active' | 'closed'): readonly WorkflowColumn[] => {
  return mode === 'active' ? activeColumns : closedColumns;
};
