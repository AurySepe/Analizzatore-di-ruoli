import React from 'react';
import { MarkdownContent } from '@/Commons/Components/MarkdownContent';
import type { JobOfferDetailViewModelDTO } from '../../ViewModel/jobOffersViewModel';

const getPriorityBadgeClassName = (tone: string): string => {
  switch (tone) {
    case 'high':
      return 'rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800';
    case 'medium':
      return 'rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800';
    case 'low':
      return 'rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800';
    case 'disqualified':
      return 'rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-800';
    default:
      return 'rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700';
  }
};

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</dt>
    <dd className="mt-1 text-sm font-semibold text-slate-900">{value}</dd>
  </div>
);

const EvaluationList: React.FC<{
  title: string;
  items: readonly string[];
  emptyText: string;
  tone: 'positive' | 'negative';
}> = ({ title, items, emptyText, tone }) => {
  const isPositive = tone === 'positive';
  return (
    <div
      className={`rounded-2xl border p-4 ${
        isPositive ? 'border-emerald-200 bg-emerald-50/50' : 'border-rose-200 bg-rose-50/50'
      }`}
    >
      <h4
        className={`text-xs font-bold uppercase tracking-wider ${
          isPositive ? 'text-emerald-900' : 'text-rose-900'
        }`}
      >
        {title}
      </h4>
      {items.length > 0 ? (
        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-800">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className={isPositive ? 'text-emerald-600' : 'text-rose-600'}>
                {isPositive ? '✓' : '✕'}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm text-slate-500">{emptyText}</p>
      )}
    </div>
  );
};

export const JobOfferDetailEvaluation: React.FC<{
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

      {evaluation.summary ? (
        <div className="mt-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-sky-900">Sintesi Annuncio (AI)</h4>
          <div className="mt-2 rounded-2xl border border-sky-200 bg-white p-4 shadow-sm">
            <MarkdownContent content={evaluation.summary} />
          </div>
        </div>
      ) : null}

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
        <div className="mt-3 rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
          <MarkdownContent content={evaluation.detailedReasoning} />
        </div>
      </div>
    </section>
  );
};
