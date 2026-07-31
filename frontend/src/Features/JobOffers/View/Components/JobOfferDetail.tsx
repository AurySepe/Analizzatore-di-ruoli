import type { LoadableState } from '@/Commons/loadable-state';
import type { JobOfferStatus } from '../../State/jobOffersAtoms';
import type { JobOfferDetailViewModelDTO } from '../../ViewModel/jobOffersViewModel';
import { getJobOfferStatusActionClassName, getJobOfferStatusActions } from '../Utils/jobOfferStatusActions';

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
  showHeaderActions?: boolean;
}> = ({ data, isFetching, onClearSelection, onUpdateJobOfferStatus, showHeaderActions = true }) => {
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

  return (
    <aside className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {isFetching ? <div className="absolute inset-x-0 top-0 h-1 animate-pulse bg-sky-500" /> : null}
      <div className="border-b border-slate-200 p-4">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 lg:text-3xl">{data.title}</h2>
            <p className="mt-1 text-base text-slate-600">{data.company.name}</p>
          </div>

          <div className="flex justify-start lg:justify-center">
            <a
              className="inline-flex rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              href={data.url}
              target="_blank"
              rel="noreferrer"
            >
              Apri annuncio originale
            </a>
          </div>

          {showHeaderActions ? (
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
              {getJobOfferStatusActions(data.statusValue).map((action) => (
                <button
                  key={action.status}
                  type="button"
                  className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${getJobOfferStatusActionClassName(action.tone)}`}
                  onClick={() => { void onUpdateJobOfferStatus(data.id, action.status); }}
                >
                  {action.label}
                </button>
              ))}
              <button
                type="button"
                className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                onClick={onClearSelection}
              >
                Chiudi
              </button>
            </div>
          ) : (
            <div />
          )}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-600 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-white shadow-sm">
            <span className="h-2 w-2 rounded-full bg-white" />
            Fonte: {data.source}
          </span>
          <Badge>{data.status}</Badge>
          <Badge>{data.remoteType}</Badge>
          <Badge>{data.experienceLevel}</Badge>
          <Badge>{data.contractType}</Badge>
          {data.evaluation ? (
            <span className={getPriorityBadgeClassName(data.evaluation.priorityTone)}>
              {data.evaluation.overallScore} · {data.evaluation.priority}
            </span>
          ) : (
            <Badge>Non valutato</Badge>
          )}
        </div>
      </div>

      <div className="max-h-[820px] space-y-5 overflow-y-auto p-4">
        <JobEvaluationSection evaluation={data.evaluation} />

        <section>
          <h3 className="text-lg font-semibold text-slate-950">Testo annuncio</h3>
          <div className="mt-4 whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
            {data.rawDescription}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-950">Informazioni ruolo</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <InfoItem label="Luogo" value={data.location} />
            <InfoItem label="Retribuzione" value={data.salaryRange} />
            <InfoItem label="Categoria ruolo" value={data.roleCategory} />
            <InfoItem label="Fonte" value={data.source} />
            <InfoItem label="Freschezza" value={data.freshness} />
            <InfoItem label="ID esterno" value={data.externalId} />
            <InfoItem label="Pubblicato il" value={data.datePosted} />
            <InfoItem label="Creato il" value={data.createdAt} />
            <InfoItem label="Aggiornato il" value={data.updatedAt} />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-950">Competenze</h3>
          {data.skills.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-slate-500">Nessuna competenza indicata.</p>
          )}
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-950">Azienda</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <InfoItem label="Nome" value={data.company.name} />
            <InfoItem label="Settore" value={data.company.industry} />
            <InfoItem label="Funding stage" value={data.company.fundingStage} />
            <InfoItem label="Dimensione" value={data.company.companySizeRange} />
            <InfoItem label="Dipendenti" value={data.company.employeeCount} />
            <InfoItem label="ID azienda" value={data.company.id} />
            <InfoLink label="Sito web" value={data.company.websiteUrl} />
            <InfoLink label="LinkedIn" value={data.company.linkedinUrl} />
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-950">Note</h3>
          <p className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
            {data.notes}
          </p>
        </section>
      </div>
    </aside>
  );
};

const JobEvaluationSection: React.FC<{
  evaluation: JobOfferDetailViewModelDTO['evaluation'];
}> = ({ evaluation }) => {
  if (!evaluation) {
    return (
      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="text-lg font-semibold text-amber-950">Valutazione AI non disponibile</h3>
        <p className="mt-2 text-sm leading-6 text-amber-800">
          Questo annuncio non ha ancora una valutazione salvata. Quando l’analisi sarà completata,
          qui compariranno punteggio, priorità, match competenze, pro e contro.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">Valutazione AI</h3>
          <p className="mt-1 text-sm text-slate-600">Aggiornata il {evaluation.updatedAt}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-950 ring-1 ring-sky-100">
            Score {evaluation.overallScore}
          </span>
          <span className={getPriorityBadgeClassName(evaluation.priorityTone)}>{evaluation.priority}</span>
        </div>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-4">
        <InfoItem label="Modello" value={evaluation.evaluatorModel} />
        <InfoItem label="Stato analisi" value={evaluation.status} />
        <InfoItem label="Match competenze" value={evaluation.competenceMatch} />
        <InfoItem label="Valutazione creata il" value={evaluation.createdAt} />
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <EvaluationList title="Punti a favore" items={evaluation.pros} emptyText="Nessun pro indicato." tone="positive" />
        <EvaluationList title="Punti critici" items={evaluation.cons} emptyText="Nessun contro indicato." tone="negative" />
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-600">Ragionamento dettagliato</h4>
        <div className="mt-3 whitespace-pre-wrap rounded-2xl border border-sky-100 bg-white p-4 text-sm leading-7 text-slate-700">
          {evaluation.detailedReasoning}
        </div>
      </div>
    </section>
  );
};

const EvaluationList: React.FC<{
  title: string;
  items: readonly string[];
  emptyText: string;
  tone: 'positive' | 'negative';
}> = ({ title, items, emptyText, tone }) => (
  <div className="rounded-2xl border border-sky-100 bg-white p-3">
    <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-600">{title}</h4>
    {items.length > 0 ? (
      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className={tone === 'positive' ? 'text-emerald-600' : 'text-rose-600'}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="mt-3 text-sm text-slate-500">{emptyText}</p>
    )}
  </div>
);

const getPriorityBadgeClassName = (
  tone: NonNullable<JobOfferDetailViewModelDTO['evaluation']>['priorityTone'],
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

const Badge: React.FC<{ children: string }> = ({ children }) => (
  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">
    {children}
  </span>
);

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
    <p className="mt-2 break-words text-sm font-medium text-slate-900">{value}</p>
  </div>
);

const InfoLink: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  const isUrl = value.startsWith('http://') || value.startsWith('https://');

  if (!isUrl) {
    return <InfoItem label={label} value={value} />;
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <a className="mt-2 block break-words text-sm font-semibold text-sky-700 hover:text-sky-800" href={value} target="_blank" rel="noreferrer">
        {value}
      </a>
    </div>
  );
};

// ── Orchestrator ──────────────────────────────────────────────────────────────
export const JobOfferDetail: React.FC<{
  state: LoadableState<JobOfferDetailViewModelDTO | null>;
  onClearSelection: () => void;
  onUpdateJobOfferStatus: (id: string, status: JobOfferStatus) => Promise<void>;
  showHeaderActions?: boolean;
}> = ({ state, onClearSelection, onUpdateJobOfferStatus, showHeaderActions = true }) => {
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
          showHeaderActions={showHeaderActions}
        />
      );
  }
};
