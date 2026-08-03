import React from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { companyJobOffersQueryAtom, selectedCompanyIdAtom, selectedJobOfferIdAtom } from '@/Features/JobOffers/State/jobOffersAtoms';

export const CompanyDetailModal: React.FC = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useAtom(selectedCompanyIdAtom);
  const [{ data, isLoading, isError, error }] = useAtom(companyJobOffersQueryAtom);
  const setSelectedJobOfferId = useSetAtom(selectedJobOfferIdAtom);

  if (!selectedCompanyId) return null;

  const handleClose = () => {
    setSelectedCompanyId(null);
  };

  const handleSelectOffer = (offerId: string) => {
    setSelectedJobOfferId(offerId);
    setSelectedCompanyId(null);
  };

  const company = data?.company;
  const counts = data?.counts;
  const offers = data?.offers ?? [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-lg font-bold text-indigo-800">
                🏢
              </span>
              <div>
                <h3 className="text-xl font-black text-slate-900">{company?.name || 'Azienda'}</h3>
                {company?.industry && (
                  <span className="inline-block mt-0.5 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                    {company.industry}
                  </span>
                )}
              </div>
            </div>

            {/* Links & Info */}
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              {company?.websiteUrl && (
                <a
                  href={company.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-semibold text-indigo-600 hover:underline"
                >
                  🌐 Sito Web ↗
                </a>
              )}
              {company?.linkedinUrl && (
                <a
                  href={company.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-semibold text-blue-600 hover:underline"
                >
                  💼 LinkedIn ↗
                </a>
              )}
              {company?.companySizeRange && (
                <span>👥 Dimensione: <strong>{company.companySizeRange}</strong></span>
              )}
              {company?.fundingStage && (
                <span>💰 Funding: <strong>{company.fundingStage}</strong></span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition"
          >
            ✕
          </button>
        </div>

        {/* Loading / Error States */}
        {isLoading && (
          <div className="py-12 text-center space-y-3">
            <span className="inline-block animate-spin text-3xl">⚡</span>
            <p className="text-sm font-semibold text-slate-600">Caricamento annunci dell&apos;azienda...</p>
          </div>
        )}

        {isError && (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-xs font-semibold text-rose-800">
            {error?.message || 'Errore nel caricamento delle informazioni aziendali.'}
          </div>
        )}

        {/* Counts Breakdown */}
        {counts && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50/70 p-3.5 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 block">📌 Segnati Validi</span>
              <span className="text-2xl font-black text-indigo-950 mt-1 block">{counts.savedOrAppliedCount ?? 0}</span>
            </div>
            <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-3.5 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 block">🆕 Da Decidere</span>
              <span className="text-2xl font-black text-sky-950 mt-1 block">{counts.newOffersCount ?? 0}</span>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-3.5 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">⏳ In Attesa AI</span>
              <span className="text-2xl font-black text-amber-950 mt-1 block">{counts.pendingEvaluationCount}</span>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-3.5 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-800 block">⛔ Scarti AI</span>
              <span className="text-2xl font-black text-rose-950 mt-1 block">{counts.disqualifiedCount}</span>
            </div>
          </div>
        )}

        {/* Eligible Active Job Offers List */}
        {!isLoading && !isError && (
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Annunci Idonei dell&apos;Azienda ({offers.length})
            </h4>

            {offers.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center text-xs text-slate-500">
                Nessun annuncio idoneo o attivo trovato per questa azienda.
              </div>
            ) : (
              <div className="space-y-2.5">
                {offers.map((offer: any) => {
                  const score = offer.evaluation?.overallScore;
                  const priority = offer.evaluation?.priority;

                  return (
                    <div
                      key={offer.id}
                      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-xs hover:border-indigo-300 hover:shadow-md transition"
                    >
                      <div className="space-y-1">
                        <h5 className="text-sm font-bold text-slate-900">{offer.title}</h5>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                          <span>📍 {offer.location || 'Remote'}</span>
                          <span>•</span>
                          <span>🌐 {offer.remoteType}</span>
                          <span>•</span>
                          <span className="font-semibold text-slate-700">{offer.source}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
                        {offer.status === 'NEW' ? (
                          <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-extrabold text-sky-900 ring-1 ring-sky-300 flex items-center gap-1">
                            <span>🆕</span> Da decidere
                          </span>
                        ) : offer.status === 'REJECTED' || offer.status === 'ARCHIVED' ? (
                          <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-extrabold text-rose-900 ring-1 ring-rose-300 flex items-center gap-1">
                            <span>⛔</span> Scartato
                          </span>
                        ) : (
                          <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-extrabold text-indigo-900 ring-1 ring-indigo-300 flex items-center gap-1">
                            <span>📌</span> Valido
                          </span>
                        )}

                        {score !== undefined && (
                          <span className="rounded-xl bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-900 ring-1 ring-emerald-300">
                            Score: {score}/100
                          </span>
                        )}
                        {priority && (
                          <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                            priority === 'HIGH' ? 'bg-emerald-500 text-white' :
                            priority === 'MEDIUM' ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-800'
                          }`}>
                            {priority}
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => handleSelectOffer(offer.id)}
                          className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-indigo-700 transition"
                        >
                          Visualizza ➔
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
