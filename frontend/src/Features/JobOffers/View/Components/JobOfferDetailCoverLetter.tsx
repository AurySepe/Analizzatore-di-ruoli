import React, { useState, useCallback } from 'react';
import { DiffText } from '@/Commons/Components/DiffText';
import type {
  JobOfferDetailViewModelDTO,
} from '../../ViewModel/jobOffersViewModelTypes';
import { useCoverLetterEditorController } from '../../Controller/useCoverLetterEditorController';
import { getBaseCoverLetter } from '../../ViewModel/jobOfferMappers';
import { useAtomValue } from 'jotai';
import {
  coverLetterEditorIsEditingAtom,
  coverLetterEditorCustomLabelAtom,
  coverLetterEditorRecipientNameAtom,
  coverLetterEditorRecipientTitleAtom,
  coverLetterEditorRecipientCompanyAtom,
  coverLetterEditorRecipientAddressAtom,
  coverLetterEditorRecipientRoleAtom,
  coverLetterEditorDateAtom,
  coverLetterEditorSalutationAtom,
  coverLetterEditorExp1Atom,
  coverLetterEditorExp2Atom,
  coverLetterEditorMotivationAtom,
  coverLetterEditorCallToActionAtom,
  coverLetterEditorSignoffAtom,
  coverLetterEditorSaveErrorAtom,
} from '../../State/coverLetterEditorAtoms';

export interface JobOfferDetailCoverLetterProps {
  readonly offer: JobOfferDetailViewModelDTO;
}

export const JobOfferDetailCoverLetter: React.FC<JobOfferDetailCoverLetterProps> = ({ offer }) => {
  const [viewMode, setViewMode] = useState<'visual' | 'json'>('visual');
  const [showPdfPreview, setShowPdfPreview] = useState<boolean>(true);
  const controller = useCoverLetterEditorController();
  const isEditing = useAtomValue(coverLetterEditorIsEditingAtom);
  const saveError = useAtomValue(coverLetterEditorSaveErrorAtom);

  const customLabel = useAtomValue(coverLetterEditorCustomLabelAtom);
  const recipientName = useAtomValue(coverLetterEditorRecipientNameAtom);
  const recipientTitle = useAtomValue(coverLetterEditorRecipientTitleAtom);
  const recipientCompany = useAtomValue(coverLetterEditorRecipientCompanyAtom);
  const recipientAddress = useAtomValue(coverLetterEditorRecipientAddressAtom);
  const recipientRole = useAtomValue(coverLetterEditorRecipientRoleAtom);
  const date = useAtomValue(coverLetterEditorDateAtom);
  const salutation = useAtomValue(coverLetterEditorSalutationAtom);
  const exp1 = useAtomValue(coverLetterEditorExp1Atom);
  const exp2 = useAtomValue(coverLetterEditorExp2Atom);
  const motivation = useAtomValue(coverLetterEditorMotivationAtom);
  const callToAction = useAtomValue(coverLetterEditorCallToActionAtom);
  const signoff = useAtomValue(coverLetterEditorSignoffAtom);

  const coverLetter = offer.coverLetter;
  const baseLetter = getBaseCoverLetter();

  const handleOpenEditModal = useCallback(() => {
    if (!coverLetter) return;
    controller.onOpenEditor({
      customLabel: coverLetter.customLabel,
      recipientName: coverLetter.recipientName,
      recipientTitle: coverLetter.recipientTitle,
      recipientCompany: coverLetter.recipientCompany,
      recipientAddress: coverLetter.recipientAddress,
      recipientRole: coverLetter.recipientRole,
      date: coverLetter.date,
      salutation: coverLetter.salutation,
      experienceParagraph1: coverLetter.experienceParagraph1,
      experienceParagraph2: coverLetter.experienceParagraph2,
      companyMotivation: coverLetter.companyMotivation,
      callToAction: coverLetter.callToAction,
      signoff: coverLetter.signoff,
    });
  }, [controller, coverLetter]);

  if (!coverLetter) {
    const isSavedOrApplied =
      offer.statusValue === 'SAVED' ||
      offer.statusValue === 'APPLIED' ||
      offer.statusValue === 'INTERVIEWING' ||
      offer.statusValue === 'OFFER';

    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center space-y-4 shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-2xl text-amber-600 ring-1 ring-amber-200">
          ✉️
        </div>
        <div className="space-y-1">
          <h4 className="text-base font-bold text-slate-900">Cover Letter non ancora generata</h4>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {isSavedOrApplied
              ? 'La cover letter è in coda di elaborazione o in attesa del worker dedicato.'
              : 'Salva questo annuncio (o spostalo in candidatura attiva) per avviare la generazione automatica della Cover Letter con Gemini Cloud.'}
          </p>
        </div>
      </div>
    );
  }

  const isPdfGenerating = coverLetter.pdfStatus === 'PENDING' || coverLetter.pdfStatus === 'GENERATING';
  const isPdfReady = coverLetter.pdfStatus === 'READY';
  const isPdfFailed = coverLetter.pdfStatus === 'FAILED';

  return (
    <div className="space-y-6">
      {/* Header status bar */}
      <div className="flex flex-col gap-4 rounded-3xl border border-emerald-200 bg-linear-to-r from-emerald-50/70 via-teal-50/40 to-slate-50 p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg">✉️</span>
            <h3 className="text-base font-black text-slate-900">Cover Letter Personalizzata</h3>
            {isPdfReady && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-bold text-emerald-800 ring-1 ring-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                PDF Pronto
              </span>
            )}
            {isPdfGenerating && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-0.5 text-xs font-bold text-amber-800 ring-1 ring-amber-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-spin" />
                Compilazione PDF in corso...
              </span>
            )}
            {isPdfFailed && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-0.5 text-xs font-bold text-rose-800 ring-1 ring-rose-300">
                Errore PDF
              </span>
            )}
          </div>
          <p className="text-xs text-slate-600">
            Adattata specificamente per <strong>{coverLetter.recipientCompany}</strong> ({coverLetter.recipientRole})
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={handleOpenEditModal}
            className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-slate-700 ring-1 ring-slate-300 shadow-xs hover:bg-slate-50 transition"
          >
            ✏️ Modifica Testo
          </button>

          {isPdfReady && (
            <>
              <button
                type="button"
                onClick={() => setShowPdfPreview((prev) => !prev)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition"
              >
                {showPdfPreview ? 'Nascondi Anteprima' : '👁️ Anteprima PDF'}
              </button>
              <a
                href={coverLetter.pdfUrl}
                target="_blank"
                rel="noreferrer"
                download
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-slate-800 transition"
              >
                📥 Scarica PDF
              </a>
            </>
          )}
        </div>
      </div>

      {/* PDF Inline Preview Frame */}
      {showPdfPreview && isPdfReady && (
        <div className="rounded-3xl border border-slate-300 bg-slate-900 p-4 shadow-lg space-y-2">
          <div className="flex items-center justify-between px-2 text-white">
            <span className="text-xs font-semibold">Anteprima PDF MinIO S3</span>
            <button
              type="button"
              onClick={() => setShowPdfPreview(false)}
              className="text-slate-400 hover:text-white text-xs font-bold"
            >
              ✕ Chiudi Anteprima
            </button>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white h-[650px] w-full">
            <iframe
              src={coverLetter.pdfUrl}
              title="Cover Letter PDF"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}

      {/* Strategic Explanation */}
      {coverLetter.explanation && (
        <div className="rounded-3xl border border-teal-200 bg-teal-50/40 p-5 shadow-xs space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
            💡 Strategia e Logica di Adattamento AI
          </span>
          <p className="text-xs leading-relaxed text-teal-950 font-medium">{coverLetter.explanation}</p>
        </div>
      )}

      {/* Structure Comparison */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4">
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Testo Adattato rispetto alla Base
            </h4>
            <p className="mt-0.5 text-xs text-slate-500">
              I termini specifici e le integrazioni personalizzate per questa candidatura sono evidenziati in{' '}
              <strong className="text-emerald-700 font-bold">verde</strong>
            </p>
          </div>

          <div className="flex rounded-xl bg-slate-100 p-1 ring-1 ring-slate-200">
            <button
              type="button"
              onClick={() => setViewMode('visual')}
              className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
                viewMode === 'visual'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Vista Scheda
            </button>
            <button
              type="button"
              onClick={() => setViewMode('json')}
              className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
                viewMode === 'json'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dati Dettagliati
            </button>
          </div>
        </div>

        {viewMode === 'visual' ? (
          <div className="space-y-6">
            {/* Header / Recipient Meta Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Intestazione & Destinatario
                </span>
                <div className="text-xs space-y-1 text-slate-700">
                  <div>
                    <strong>Titolo Profilo:</strong> {coverLetter.customLabel || baseLetter.basics.label}
                  </div>
                  <div>
                    <strong>Azienda:</strong> {coverLetter.recipientCompany}
                  </div>
                  <div>
                    <strong>Ruolo Candidatura:</strong> {coverLetter.recipientRole}
                  </div>
                  <div>
                    <strong>Team / Contatto:</strong>{' '}
                    {coverLetter.recipientName || coverLetter.recipientTitle || 'Hiring Team'}
                  </div>
                  <div>
                    <strong>Location:</strong> {coverLetter.recipientAddress || 'Non specificata'}
                  </div>
                  <div>
                    <strong>Data:</strong> {coverLetter.date}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Saluto & Chiusura
                </span>
                <div className="text-xs space-y-1.5 text-slate-700">
                  <div>
                    <strong>Saluto Iniziale:</strong> {coverLetter.salutation}
                  </div>
                  <div>
                    <strong>Call To Action:</strong> {coverLetter.callToAction}
                  </div>
                  <div>
                    <strong>Signoff:</strong> {coverLetter.signoff} {baseLetter.basics.name}
                  </div>
                </div>
              </div>
            </div>

            {/* Paragraph 1: MioCFO Story */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Paragrafo 1: Esempio Concreto MioCFO (Impatto, Coda Asincrona, 95% Accuratezza)
                </h5>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Testo Base Originale
                    </span>
                  </div>
                  <div className="whitespace-pre-wrap text-xs leading-6 text-slate-700 font-mono bg-white p-3.5 rounded-xl border border-slate-200">
                    {baseLetter.experienceParagraph1}
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Testo Personalizzato (AI)
                    </span>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-900">
                      Personalizzato
                    </span>
                  </div>
                  <div className="whitespace-pre-wrap text-xs leading-6 text-slate-900 font-mono bg-white p-3.5 rounded-xl border border-emerald-200">
                    <DiffText
                      baseText={baseLetter.experienceParagraph1}
                      newText={coverLetter.experienceParagraph1}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Paragraph 2: AI-Native Workflow in Antigravity */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Paragrafo 2: Workflow AI-Native in Antigravity IDE (Agenti & Supervisione Architetturale)
              </h5>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Testo Base Originale
                    </span>
                  </div>
                  <div className="whitespace-pre-wrap text-xs leading-6 text-slate-700 font-mono bg-white p-3.5 rounded-xl border border-slate-200">
                    {baseLetter.experienceParagraph2}
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Testo Personalizzato (AI)
                    </span>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-900">
                      Personalizzato
                    </span>
                  </div>
                  <div className="whitespace-pre-wrap text-xs leading-6 text-slate-900 font-mono bg-white p-3.5 rounded-xl border border-emerald-200">
                    <DiffText
                      baseText={baseLetter.experienceParagraph2}
                      newText={coverLetter.experienceParagraph2}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Paragraph 3: Company Motivation */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Paragrafo 3: Motivazione Aziendale & Impatto per {coverLetter.recipientCompany}
              </h5>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Template Base
                    </span>
                  </div>
                  <div className="whitespace-pre-wrap text-xs leading-6 text-slate-700 font-mono bg-white p-3.5 rounded-xl border border-slate-200">
                    {baseLetter.companyMotivationTemplate}
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Motivazione Adattata (AI)
                    </span>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-900">
                      Personalizzato
                    </span>
                  </div>
                  <div className="whitespace-pre-wrap text-xs leading-6 text-slate-900 font-mono bg-white p-3.5 rounded-xl border border-emerald-200">
                    <DiffText
                      baseText={baseLetter.companyMotivationTemplate}
                      newText={coverLetter.companyMotivation}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <pre className="max-h-96 overflow-auto rounded-2xl bg-slate-900 p-4 font-mono text-xs text-slate-100">
            {JSON.stringify(coverLetter, null, 2)}
          </pre>
        )}
      </div>

      {/* Live Editor Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="w-full max-w-3xl rounded-3xl bg-white p-6 shadow-2xl space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-black text-slate-900">Modifica Dati Cover Letter</h3>
                <p className="text-xs text-slate-500">
                  Modifica i testi prima di ricompilare il PDF su MinIO S3
                </p>
              </div>
              <button
                type="button"
                onClick={controller.onCloseEditor}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {saveError && (
              <div className="rounded-xl bg-rose-50 p-3 text-xs font-semibold text-rose-700 border border-rose-200">
                {saveError}
              </div>
            )}

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Titolo Profilo Intestazione
                  </label>
                  <input
                    type="text"
                    value={customLabel}
                    onChange={(e) => controller.onCustomLabelChange(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Nome Azienda
                  </label>
                  <input
                    type="text"
                    value={recipientCompany}
                    onChange={(e) => controller.onRecipientCompanyChange(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Nome Persona Destinataria (Opzionale)
                  </label>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => controller.onRecipientNameChange(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    placeholder="es. Jane Doe"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Location / Modalità di Lavoro
                  </label>
                  <input
                    type="text"
                    value={recipientAddress}
                    onChange={(e) => controller.onRecipientAddressChange(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    placeholder="es. Berlin, Germany (Hybrid)"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Ruolo Candidatura
                  </label>
                  <input
                    type="text"
                    value={recipientRole}
                    onChange={(e) => controller.onRecipientRoleChange(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Destinatario / Team
                  </label>
                  <input
                    type="text"
                    value={recipientTitle}
                    onChange={(e) => controller.onRecipientTitleChange(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Data Lettera
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => controller.onDateChange(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Saluto Iniziale
                </label>
                <input
                  type="text"
                  value={salutation}
                  onChange={(e) => controller.onSalutationChange(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Paragrafo 1: Esempio MioCFO
                </label>
                <textarea
                  rows={4}
                  value={exp1}
                  onChange={(e) => controller.onExp1Change(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-3 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Paragrafo 2: Workflow AI Antigravity IDE
                </label>
                <textarea
                  rows={3}
                  value={exp2}
                  onChange={(e) => controller.onExp2Change(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-3 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Paragrafo 3: Motivazione Aziendale
                </label>
                <textarea
                  rows={4}
                  value={motivation}
                  onChange={(e) => controller.onMotivationChange(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-3 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Call To Action
                  </label>
                  <input
                    type="text"
                    value={callToAction}
                    onChange={(e) => controller.onCallToActionChange(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Firma di Chiusura
                  </label>
                  <input
                    type="text"
                    value={signoff}
                    onChange={(e) => controller.onSignoffChange(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={controller.onCloseEditor}
                className="rounded-xl px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 transition"
              >
                Annulla
              </button>
              <button
                type="button"
                onClick={() => controller.onSave(offer.id)}
                className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 transition"
              >
                💾 Salva & Ricompila PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
