import React, { useState, useCallback } from 'react';
import { MarkdownContent } from '@/Commons/Components/MarkdownContent';
import { DiffText } from '@/Commons/Components/DiffText';
import type {
  CurriculumEditorViewModelDTO,
  JobCurriculumViewModelDTO,
  JobCurriculumWorkViewModelDTO,
  JobCurriculumProjectViewModelDTO,
  JobOfferDetailViewModelDTO,
} from '../../ViewModel/jobOffersViewModelTypes';
import type { CurriculumEditorController } from '../../Controller/useCurriculumEditorController';
import { getBaseWorkExperience } from '../../ViewModel/jobOfferMappers';

const CurriculumTailoringDiffView: React.FC<{
  curriculum: JobCurriculumViewModelDTO;
}> = ({ curriculum }) => {
  const [viewMode, setViewMode] = useState<'visual' | 'json'>('visual');

  const customLabel = curriculum.customLabel || 'Non specificato';
  const tailoredWork = curriculum.work;
  const tailoredProjects = curriculum.projects;
  const selectedPubs = curriculum.selectedPublicationTitles;

  return (
    <div className="rounded-3xl border border-indigo-200 bg-indigo-50/50 p-6 shadow-sm space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-indigo-100 pb-4">
        <div>
          <h4 className="text-base font-bold text-slate-900">Confronto Personalizzazione vs CV Base</h4>
          <p className="mt-0.5 text-xs text-slate-600">
            Visualizza i valori specifici adattati da Gemini per questo annuncio
          </p>
        </div>

        <div className="flex rounded-xl bg-white p-1 ring-1 ring-slate-200 shadow-xs">
          <button
            type="button"
            onClick={() => setViewMode('visual')}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              viewMode === 'visual'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Confronto Visivo
          </button>
          <button
            type="button"
            onClick={() => setViewMode('json')}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              viewMode === 'json'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            JSON Grezzo
          </button>
        </div>
      </div>

      {viewMode === 'visual' ? (
        <div className="space-y-6">
          <div className="rounded-2xl border border-indigo-100 bg-white p-4 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Titolo Professionale Adattato (AI)
            </span>
            <p className="text-sm font-black text-slate-900">{customLabel}</p>
          </div>

          {tailoredWork.length > 0 ? (
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Esperienze Lavorative Rimodulate
              </h5>
              {tailoredWork.map((w: JobCurriculumWorkViewModelDTO, idx: number) => {
                const baseExp = getBaseWorkExperience(w.name, w.position);
                const isExcluded = w.include === false;

                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border p-4 transition ${
                      isExcluded
                        ? 'border-slate-200 bg-slate-50/70 opacity-60'
                        : 'border-indigo-200 bg-white shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black text-slate-900">{w.name}</span>
                        {isExcluded && (
                          <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-800 ring-1 ring-rose-200">
                            Escluso dal CV
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-3.5 md:grid-cols-2">
                      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            CV Base Originale
                          </span>
                          <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                            {baseExp?.position || 'N/D'}
                          </span>
                        </div>
                        <div className="whitespace-pre-wrap text-xs leading-6 text-slate-700 font-mono bg-white p-3.5 rounded-xl border border-slate-200">
                          {baseExp?.summary || 'Nessun testo base trovato.'}
                        </div>
                      </div>

                      <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                            CV Personalizzato (AI)
                          </span>
                          <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-900">
                            {w.position || baseExp?.position}
                          </span>
                        </div>
                        <div className="whitespace-pre-wrap text-xs leading-6 text-slate-900 font-mono bg-white p-3.5 rounded-xl border border-indigo-200">
                          <DiffText baseText={baseExp?.summary ?? ''} newText={w.summary} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Progetti Tecnici Inclusi
              </h5>
              {tailoredProjects.length > 0 ? (
                <ul className="space-y-2">
                  {tailoredProjects.map((p: JobCurriculumProjectViewModelDTO, i: number) => (
                    <li key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-xs">
                      <span className="font-bold text-slate-900 block">{p.name}</span>
                      <span className="text-slate-600 leading-relaxed block mt-1">{p.description}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-500">Nessun progetto aggiuntivo selezionato.</p>
              )}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Pubblicazioni Rilevanti
              </h5>
              {selectedPubs.length > 0 ? (
                <ul className="space-y-2">
                  {selectedPubs.map((pub: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 p-2 text-xs text-slate-800"
                    >
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{pub}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-500">Nessuna pubblicazione specifica selezionata.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-300 bg-slate-950 p-4 font-mono text-xs text-emerald-400 overflow-x-auto">
          <pre>{JSON.stringify({
            customLabel: curriculum.customLabel,
            work: curriculum.work,
            projects: curriculum.projects,
            selectedPublicationTitles: curriculum.selectedPublicationTitles,
            explanation: curriculum.explanation,
          }, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

const CurriculumEditor: React.FC<{
  curriculum: NonNullable<JobOfferDetailViewModelDTO['curriculum']>;
  jobOfferId: string;
  editorState: CurriculumEditorViewModelDTO;
  editorController: CurriculumEditorController;
}> = ({ curriculum, jobOfferId, editorState, editorController }) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = useCallback(async () => {
    setIsSaving(true);
    try {
      await editorController.onSave(jobOfferId);
    } catch {
      // Errore gestito dal controller
    } finally {
      setIsSaving(false);
    }
  }, [editorController, jobOfferId]);

  return (
    <div className="rounded-3xl border border-indigo-200 bg-white p-6 shadow-sm space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-lg font-black text-slate-900">Modifica Personalizzazioni Curriculum</h3>
          <p className="text-xs text-slate-500">
            Personalizza il titolo professionale, le esperienze lavorative, i progetti e le pubblicazioni.
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={editorController.onCloseEditor}
            className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Annulla
          </button>
          <button
            type="button"
            onClick={() => {
              void handleSave();
            }}
            disabled={isSaving}
            className="rounded-xl bg-indigo-600 px-5 py-2 text-xs font-bold text-white shadow-xs hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {isSaving ? 'Salvataggio...' : '💾 Salva e Rigenera PDF'}
          </button>
        </div>
      </div>

      {editorState.saveError && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-xs font-semibold text-rose-800">
          {editorState.saveError}
        </div>
      )}

      {/* 1. Titolo Professionale */}
      <div className="space-y-2">
        <label htmlFor="custom-label" className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
          Titolo Professionale Adattato (customLabel)
        </label>
        <input
          id="custom-label"
          type="text"
          value={editorState.customLabel}
          onChange={(e) => editorController.onCustomLabelChange(e.target.value)}
          placeholder="es. Senior Frontend Engineer | React & TypeScript"
          className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
        />
      </div>

      {/* 2. Ragionamento / Note di adattamento */}
      <div className="space-y-2">
        <label htmlFor="cv-explanation" className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
          Spiegazione delle modifiche (AI explanation)
        </label>
        <textarea
          id="cv-explanation"
          rows={3}
          value={editorState.explanation}
          onChange={(e) => editorController.onExplanationChange(e.target.value)}
          placeholder="Spiegazione delle scelte effettuate..."
          className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
        />
      </div>

      {/* 3. Esperienze Lavorative */}
      <div className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
            Esperienze Lavorative ({editorState.workEntries.length})
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={editorController.onAddWork}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
            >
              + Aggiungi Personalizzata
            </button>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-slate-400">Base:</span>
              {editorState.allBaseWork.map((base, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => editorController.onAddBaseWork(base)}
                  className="rounded-lg bg-indigo-50 px-2 py-1 text-2xs font-semibold text-indigo-700 hover:bg-indigo-100 transition"
                >
                  + {base.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {editorState.workEntries.map((w, idx) => {
          const baseExp = getBaseWorkExperience(w.name, w.position);
          return (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    value={w.name}
                    onChange={(e) => editorController.onUpdateWork(idx, 'name', e.target.value)}
                    placeholder="Nome Azienda"
                    className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-bold text-slate-900 focus:border-indigo-500 outline-none"
                  />
                  <input
                    type="text"
                    value={w.position}
                    onChange={(e) => editorController.onUpdateWork(idx, 'position', e.target.value)}
                    placeholder="Posizione / Ruolo"
                    className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-700 focus:border-indigo-500 outline-none"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={w.include !== false}
                      onChange={(e) => editorController.onUpdateWork(idx, 'include', e.target.checked)}
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    Includi nel PDF
                  </label>
                  <button
                    type="button"
                    onClick={() => editorController.onRemoveWork(idx)}
                    className="text-rose-600 hover:text-rose-800 text-xs font-bold px-2 py-1"
                  >
                    Rimuovi
                  </button>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                  <span className="text-2xs font-bold uppercase tracking-wider text-slate-400 block">
                    Testo Base Originale
                  </span>
                  <div className="whitespace-pre-wrap text-xs text-slate-600 font-mono bg-white p-3 rounded-xl border border-slate-200 max-h-40 overflow-y-auto">
                    {baseExp?.summary || 'Nessun testo base trovato.'}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-2xs font-bold uppercase tracking-wider text-indigo-600 block">
                    Testo Personalizzato (AI / Modificabile)
                  </span>
                  <textarea
                    rows={6}
                    value={w.summary}
                    onChange={(e) => editorController.onUpdateWork(idx, 'summary', e.target.value)}
                    placeholder="Inserisci o modifica i bullet point..."
                    className="w-full rounded-xl border border-indigo-200 bg-white p-3 text-xs text-slate-900 font-mono focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Progetti Tecnici */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
            Progetti Tecnici ({editorState.projects.length})
          </h4>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={editorController.onAddProject}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
            >
              + Nuovo Progetto
            </button>
            {editorState.allBaseProjects.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => editorController.onAddBaseProject(p)}
                className="rounded-lg bg-indigo-50 px-2 py-1 text-2xs font-semibold text-indigo-700 hover:bg-indigo-100 transition"
              >
                + {p.name}
              </button>
            ))}
          </div>
        </div>

        {editorState.projects.map((p, idx) => (
          <div key={idx} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-3">
            <input
              type="text"
              value={p.name}
              onChange={(e) => editorController.onUpdateProject(idx, 'name', e.target.value)}
              placeholder="Nome progetto"
              className="w-48 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-900 focus:border-indigo-500 outline-none"
            />
            <input
              type="text"
              value={p.description}
              onChange={(e) => editorController.onUpdateProject(idx, 'description', e.target.value)}
              placeholder="Descrizione del progetto..."
              className="flex-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs text-slate-800 focus:border-indigo-500 outline-none"
            />
            <button
              type="button"
              onClick={() => editorController.onRemoveProject(idx)}
              className="text-rose-600 hover:text-rose-800 text-xs font-bold px-2 py-1.5"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* 5. Pubblicazioni Rilevanti */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
          Pubblicazioni Scientifiche Selezionate ({editorState.selectedPubs.length})
        </h4>
        <div className="grid gap-2 sm:grid-cols-2">
          {editorState.allPublications.map((pub, idx) => {
            const isChecked = editorState.selectedPubs.includes(pub);
            return (
              <label
                key={idx}
                className={`flex items-start gap-2.5 rounded-xl border p-3 text-xs cursor-pointer transition ${
                  isChecked
                    ? 'border-indigo-300 bg-indigo-50/60 text-slate-900 font-medium'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => editorController.onTogglePub(pub)}
                  className="mt-0.5 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <span>{pub}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 6. Document Preview Live */}
      {curriculum.pdfUrl && (
        <div className="space-y-2 border-t border-slate-100 pt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Anteprima PDF Attuale (Ultimo Salvataggio)
          </span>
          <iframe
            key={editorState.pdfKey}
            src={curriculum.pdfUrl}
            title="Anteprima PDF Attuale"
            className="h-[600px] w-full rounded-2xl border border-slate-200 bg-slate-100 shadow-inner"
          />
        </div>
      )}
    </div>
  );
};

export const JobOfferDetailTailoring: React.FC<{
  curriculum: JobOfferDetailViewModelDTO['curriculum'];
  jobOfferId: string;
  jobOfferTitle?: string;
  editorState: CurriculumEditorViewModelDTO;
  editorController: CurriculumEditorController;
}> = ({ curriculum, jobOfferId, jobOfferTitle, editorState, editorController }) => {
  const sanitizedTitle = (jobOfferTitle || 'Role')
    .trim()
    .replace(/[^a-zA-Z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  const downloadFileName = `AurelioSepe-${sanitizedTitle}-cv.pdf`;

  if (!curriculum) {
    return (
      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
          <span className="animate-spin text-2xl">⚡</span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-amber-950">Generazione Curriculum in Corso</h3>
        <p className="mt-2 max-w-md mx-auto text-sm leading-6 text-amber-800">
          Il worker AI dedicato sta elaborando il curriculum su misura per questo annuncio.
          L&apos;operazione combinerà le tue informazioni di base con l&apos;analisi della Job Description.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      {editorState.isEditing ? (
        <CurriculumEditor
          curriculum={curriculum}
          jobOfferId={jobOfferId}
          editorState={editorState}
          editorController={editorController}
        />
      ) : (
        <>
          {/* 1. Anteprima Documento PDF (in cima alla pagina) */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Anteprima Documento PDF
                </h4>
                <p className="mt-0.5 text-xs text-slate-500">Generato il {curriculum.createdAt}</p>
              </div>
              <a
                href={curriculum.pdfUrl}
                download={downloadFileName}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                <span>📄 Scarica / Apri PDF</span>
              </a>
            </div>
            <iframe
              src={curriculum.pdfUrl}
              title="Anteprima Curriculum PDF"
              className="h-[600px] w-full rounded-2xl border border-slate-200 bg-slate-100 shadow-inner"
            />
          </div>

          {/* 2. Pulsante di Modifica Personalizzazioni AI */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-indigo-200 bg-indigo-50/80 p-4 shadow-xs">
            <div>
              <h4 className="text-sm font-bold text-indigo-950">Personalizzazioni & Adattamento AI</h4>
              <p className="text-xs text-indigo-700">
                Puoi modificare le esperienze selezionate, le pubblicazioni o il titolo personalizzato.
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                editorController.onOpenEditor({
                  customLabel: curriculum.customLabel,
                  explanation: curriculum.explanation,
                  work: curriculum.work,
                  projects: curriculum.projects,
                  selectedPublicationTitles: curriculum.selectedPublicationTitles,
                })
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-indigo-700 shrink-0"
            >
              ✏️ Modifica Personalizzazioni AI
            </button>
          </div>

          {/* 3. Modifiche Apportate al CV Rispetto alla Base (AI) */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Modifiche Apportate al CV Rispetto alla Base (AI)
            </h4>
            <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <MarkdownContent content={curriculum.explanation} />
            </div>
          </div>

          {/* 4. Confronto Personalizzazione vs CV Base */}
          <CurriculumTailoringDiffView curriculum={curriculum} />
        </>
      )}
    </section>
  );
};
