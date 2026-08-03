import React from 'react';
import { useSetAtom } from 'jotai';
import { selectedCompanyIdAtom, type JobOfferStatus } from '../../../State/jobOffersAtoms';
import type { JobOfferDetailViewModelDTO } from '../../../ViewModel/jobOffersViewModel';
import { getJobOfferStatusActionClassName, getJobOfferStatusActions } from '../../Utils/jobOfferStatusActions';

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
    {children}
  </span>
);

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

export const JobOfferDetailHeader: React.FC<{
  data: JobOfferDetailViewModelDTO;
  onClearSelection: () => void;
  onUpdateJobOfferStatus: (id: string, status: JobOfferStatus) => Promise<void>;
  showHeaderActions?: boolean;
}> = ({ data, onClearSelection, onUpdateJobOfferStatus, showHeaderActions = true }) => {
  const setSelectedCompanyId = useSetAtom(selectedCompanyIdAtom);

  return (
    <div className="border-b border-slate-200 p-4">
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 lg:text-3xl">{data.title}</h2>
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCompanyId(data.company.id)}
              className="text-base font-bold text-slate-700 hover:text-indigo-600 hover:underline transition flex items-center gap-1.5"
            >
              <span>🏢 {data.company.name}</span>
            </button>

            {(() => {
              const savedCount = data.company.savedOrAppliedCount ?? 0;
              const newCount = data.company.newOffersCount ?? 0;
              const totalEligible = savedCount + newCount;
              if (totalEligible <= 1) return null;

              const label = savedCount > 0 && newCount > 0
                ? `${savedCount} validi • ${newCount} da decidere`
                : savedCount > 0
                ? `${savedCount} validi per candidarsi`
                : `${newCount} da decidere`;

              return (
                <button
                  type="button"
                  onClick={() => setSelectedCompanyId(data.company.id)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-0.5 text-xs font-extrabold text-indigo-900 shadow-2xs hover:bg-indigo-200 ring-1 ring-indigo-300/60 transition"
                  title={`${savedCount} annunci già segnati validi per candidarsi • ${newCount} nuovi annunci per cui decidere per ${data.company.name}`}
                >
                  <span>🏢 {label}</span>
                </button>
              );
            })()}
          </div>
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
  );
};
