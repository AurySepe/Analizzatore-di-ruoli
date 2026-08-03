import React, { useState, useCallback } from 'react';
import { MarkdownContent } from '@/Commons/Components/MarkdownContent';
import { DiffText } from '@/Commons/Components/DiffText';
import type { UpdateCurriculumTailoringData } from '../../../State/jobOffersAtoms';
import type { JobOfferDetailViewModelDTO } from '../../../ViewModel/jobOffersViewModel';

const ALL_PUBLICATIONS = [
  "Contextualized experiential language learning in the metaverse",
  "MetaCUX: Social interaction and collaboration in the metaverse",
  "The yin and yang of software quality: On the relationship between design patterns and code smells",
  "MetaCUX-a multi-user, multi-scenario environment for a cooperative workspace",
  "Designing a collaborative safety training experience in virtual reality",
  "A task-oriented multimodal conversational interface for a CSCW immersive virtual environment",
  "Muxi: a multimodal conversational interface for the metaverse",
  "Botanicar: A cooperative experience in augmented reality",
  "A Glimpse on HCAI Frameworks: A Scoping Review to Adapt them to Mixed Reality",
  "Neuro-physiological and Subjective measures of Presence Experience in Virtual Reality: Insights from a scoping review",
  "cARdefender: a Mixed Reality Game for Vehicle Passengers",
];

const ALL_BASE_WORK = [
  { name: "MioCFO", position: "Co-Creator & Lead Developer" },
  { name: "Commigo", position: "Founder & Lead Architect" },
  { name: "FitRats", position: "Co-Creator & Lead Developer" },
  { name: "University of Salerno", position: "Research Associate" },
  { name: "University of Salerno", position: "Research Scholar, Marte Media Lab" },
  { name: "Glasgow University", position: "Traineeship, HCI Lab" },
];

const ALL_BASE_PROJECTS = [
  { name: "cARdefender", description: "" },
  { name: "BotanicAR", description: "" },
];

type WorkEntry = { name: string; position: string; summary: string; include: boolean };
type ProjectEntry = { name: string; description: string };

const baseWorkCatalog: Record<string, { position: string; summary: string }[]> = {
  "miocfo": [
    {
      position: "Co-Creator & Lead Developer",
      summary: "Engineered a B2B financial advisory platform from scratch using TypeScript, React, Tailwind CSS, NestJS, Prisma, and PostgreSQL, configuring concurrent background task queues to parse 1,000+ invoices and bank statements securely.\nAchieved 95% automated categorization accuracy on cash flows using Gemini APIs while designing a rapid-review UX fallback to make manual correction of low-confidence entries frictionless.\nDelivered real-time financial insights to 20 active SME beta users by conducting weekly interviews to translate feedback directly into updates."
    }
  ],
  "commigo": [
    {
      position: "Founder & Lead Architect",
      summary: "Monetized the multiplayer VR platform, LearningVerse, by securing an 8,000 Euro software licensing contract for an EU-funded integration program and deploying it for a 40-hour course at the University of Salerno.\nEngineered real-time spatial synchronization for 20 concurrent VR users in a single room by building low-latency C# networking pipelines in Unity that synchronized 100 interactable 3D objects simultaneously.\nDelivered HapGree, a 25,000 Euro sustainability tracking SaaS, and MatEditPro, a 9,000 Euro web 3D editor, by leading technical development across Flutter, React, Three.js, and WebGL architectures.\nDoubled team feature delivery speed across 3 co-founders by establishing core software architecture guidelines, automated deployment workflows, and facilitating weekly Agile Scrum sprints."
    }
  ],
  "fitrats": [
    {
      position: "Co-Creator & Lead Developer",
      summary: "Designed and developed a zero-to-one B2B SaaS web platform for fitness professionals featuring real-time client tracking using Flutter and Riverpod state management connected to a Node.js and PostgreSQL backend.\nStreamlined workout creation and client tracking for 10 personal trainers by conducting hands-on user testing calls and iterating core product features continuously."
    }
  ],
  "university of salerno": [
    {
      position: "Research Associate",
      summary: "Engineered cooperative AR/VR platforms like BotanicAR and industrial safety training simulations in Unity, co-authoring five peer-reviewed papers published at international IEEE and ACM conferences.\nAccelerated research prototype delivery across 5 collaborative AR/VR projects by establishing modular C# component architectures and reusable data pipelines."
    },
    {
      position: "Research Scholar, Marte Media Lab",
      summary: "Published four peer-reviewed scientific papers at international HCI conferences by conducting user studies and testing usability metrics on social interaction in virtual environments.\nSelected for a research scholarship at Marte Media Lab during Master's studies based on top academic standing (GPA: 3.92/4.0)."
    }
  ],
  "glasgow university": [
    {
      position: "Traineeship, HCI Lab",
      summary: "Published a peer-reviewed scientific paper at the IEEE VR conference after securing a competitive Erasmus+ research traineeship grant under the supervision of Prof. Stephen Brewster.\nValidated in-car tracking by executing 20 real-world driving test sessions with participants after building cARdefender, an in-vehicle Mixed Reality game with a C++ object recognition and spatial mapping algorithm using the ZED 2 SDK."
    }
  ]
};

function getBaseWorkExperience(name: string, position?: string) {
  const normName = (name || '').trim().toLowerCase();
  const normPos = (position || '').trim().toLowerCase();
  const list = baseWorkCatalog[normName];
  if (!list || list.length === 0) return null;

  if (normPos) {
    const match = list.find(item => item.position.toLowerCase() === normPos || item.position.toLowerCase().includes(normPos) || normPos.includes(item.position.toLowerCase()));
    if (match) return match;
  }

  return list[0];
}

const CurriculumTailoringDiffView: React.FC<{
  tailoringData: Record<string, any> | null;
}> = ({ tailoringData }) => {
  const [viewMode, setViewMode] = useState<'visual' | 'json'>('visual');

  if (!tailoringData) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-500">
        Nessun dato JSON di personalizzazione salvato per questo curriculum.
      </div>
    );
  }

  const customLabel = tailoringData.customLabel || 'Non specificato';
  const tailoredWork = Array.isArray(tailoringData.work) ? tailoringData.work : [];
  const tailoredProjects = Array.isArray(tailoringData.projects) ? tailoringData.projects : [];
  const selectedPubs = Array.isArray(tailoringData.selectedPublicationTitles) ? tailoringData.selectedPublicationTitles : [];

  return (
    <div className="rounded-3xl border border-indigo-200 bg-indigo-50/50 p-6 shadow-sm space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-indigo-100 pb-4">
        <div>
          <h4 className="text-base font-bold text-slate-900">Confronto Personalizzazione vs CV Base</h4>
          <p className="mt-0.5 text-xs text-slate-600">Visualizza i valori specifici adattati da Gemini per questo annuncio</p>
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
          {/* Legend Banner */}
          <div className="flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-emerald-50/90 px-4 py-3 text-xs text-emerald-950 shadow-xs">
            <span className="flex h-3 w-3 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              <strong>Evidenziazione automatica modifiche AI</strong>: Le parole, frasi ed espressioni rielaborate da Gemini rispetto al CV base originale sono evidenziate con sfondo verde.
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Titolo Ruolo Base</span>
              <p className="mt-1 text-sm font-semibold text-slate-700">Software Engineer / Lead Developer</p>
            </div>
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Titolo Ruolo Personalizzato (AI)</span>
              <p className="mt-1 text-sm font-bold text-indigo-950">
                {customLabel !== 'Software Engineer / Lead Developer' ? (
                  <mark className="rounded-md bg-emerald-100 px-1.5 py-0.5 font-bold text-emerald-950 underline decoration-emerald-500 shadow-2xs">
                    {customLabel}
                  </mark>
                ) : (
                  customLabel
                )}
              </p>
            </div>
          </div>

          {tailoredWork.length > 0 ? (
            <div className="space-y-5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-600">Confronto Esperienze Lavorative</h5>
              {tailoredWork.map((w: any, idx: number) => {
                const baseExp = getBaseWorkExperience(w.name, w.position);
                const isExcluded = w.include === false;

                return (
                  <div key={idx} className={`rounded-2xl border p-5 shadow-xs space-y-4 ${isExcluded ? 'border-rose-200 bg-rose-50/30' : 'border-slate-200 bg-white'}`}>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-extrabold text-slate-900">{w.name || 'Esperienza'}</span>
                      </div>
                      {isExcluded ? (
                        <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-800">
                          Esclusa dal CV
                        </span>
                      ) : (
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                          Inclusa nel CV
                        </span>
                      )}
                    </div>

                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">CV Base (Originale)</span>
                          <span className="text-xs font-semibold text-slate-600">{baseExp?.position || w.position || 'N/D'}</span>
                        </div>
                        <div className="whitespace-pre-wrap text-xs leading-6 text-slate-700 font-mono bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                          {baseExp?.summary || 'Sommario di base non disponibile.'}
                        </div>
                      </div>

                      <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">CV Personalizzato (AI)</span>
                          <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${w.position && baseExp?.position && w.position !== baseExp.position ? 'bg-emerald-100 text-emerald-950 ring-1 ring-emerald-300' : 'bg-indigo-100 text-indigo-900'}`}>
                            {w.position || baseExp?.position}
                          </span>
                        </div>
                        <div className="whitespace-pre-wrap text-xs leading-6 text-slate-900 font-mono bg-white p-3.5 rounded-xl border border-indigo-200 shadow-2xs">
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
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-600">Progetti Tecnici Inclusi</h5>
              {tailoredProjects.length > 0 ? (
                <ul className="space-y-2">
                  {tailoredProjects.map((p: any, i: number) => (
                    <li key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-xs">
                      <span className="font-bold text-slate-900 block">{p.name}</span>
                      <span className="text-slate-600 leading-relaxed block mt-1">{p.description}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-500">Nessun progetto aggiuntivo selezionato per questo ruolo.</p>
              )}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-600">Pubblicazioni Rilevanti Selezionate</h5>
              {selectedPubs.length > 0 ? (
                <ul className="space-y-2">
                  {selectedPubs.map((pub: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 p-2 text-xs text-slate-800">
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
          <pre>{JSON.stringify(tailoringData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

const CurriculumEditor: React.FC<{
  curriculum: NonNullable<JobOfferDetailViewModelDTO['curriculum']>;
  jobOfferId: string;
  onUpdateCurriculumTailoring: (id: string, tailoring: UpdateCurriculumTailoringData['tailoring']) => Promise<void>;
  onClose: () => void;
}> = ({ curriculum, jobOfferId, onUpdateCurriculumTailoring, onClose }) => {
  const rawTailoring = curriculum.tailoringData as Record<string, any> | null;

  const [customLabel, setCustomLabel] = useState<string>(rawTailoring?.customLabel ?? '');
  const [explanation, setExplanation] = useState<string>(curriculum.explanation ?? '');
  const [workEntries, setWorkEntries] = useState<WorkEntry[]>(() => {
    if (rawTailoring?.work) {
      return (rawTailoring.work as any[]).map((w) => ({
        name: w.name ?? '',
        position: w.position ?? '',
        summary: w.summary ?? '',
        include: w.include !== false,
      }));
    }
    return [];
  });
  const [projects, setProjects] = useState<ProjectEntry[]>(() =>
    Array.isArray(rawTailoring?.projects)
      ? (rawTailoring!.projects as any[]).map((p) => ({ name: p.name ?? '', description: p.description ?? '' }))
      : [],
  );
  const [selectedPubs, setSelectedPubs] = useState<string[]>(
    Array.isArray(rawTailoring?.selectedPublicationTitles) ? rawTailoring!.selectedPublicationTitles : [],
  );

  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [pdfKey, setPdfKey] = useState(0);

  const handleSave = useCallback(async () => {
    setIsSaving(true);
    setSaveError(null);
    try {
      await onUpdateCurriculumTailoring(jobOfferId, {
        customLabel: customLabel || undefined,
        work: workEntries,
        projects: projects.length > 0 ? projects : undefined,
        selectedPublicationTitles: selectedPubs.length > 0 ? selectedPubs : undefined,
        explanation: explanation || undefined,
      });
      setPdfKey((k) => k + 1);
    } catch (err: any) {
      setSaveError(err?.message ?? 'Errore sconosciuto durante il salvataggio.');
    } finally {
      setIsSaving(false);
    }
  }, [onUpdateCurriculumTailoring, jobOfferId, customLabel, workEntries, projects, selectedPubs, explanation]);

  const addWork = () => {
    setWorkEntries((prev) => [...prev, { name: '', position: '', summary: '', include: true }]);
  };

  const removeWork = (idx: number) => {
    setWorkEntries((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateWork = (idx: number, field: keyof WorkEntry, value: string | boolean) => {
    setWorkEntries((prev) => prev.map((w, i) => (i === idx ? { ...w, [field]: value } : w)));
  };

  const addBaseWork = (base: { name: string; position: string }) => {
    if (workEntries.some((w) => w.name === base.name && w.position === base.position)) return;
    setWorkEntries((prev) => [...prev, { name: base.name, position: base.position, summary: '', include: true }]);
  };

  const addProject = () => {
    setProjects((prev) => [...prev, { name: '', description: '' }]);
  };

  const removeProject = (idx: number) => {
    setProjects((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateProject = (idx: number, field: keyof ProjectEntry, value: string) => {
    setProjects((prev) => prev.map((p, i) => (i === idx ? { ...p, [field]: value } : p)));
  };

  const addBaseProject = (base: { name: string; description: string }) => {
    if (projects.some((p) => p.name === base.name)) return;
    setProjects((prev) => [...prev, { name: base.name, description: base.description }]);
  };

  const togglePub = (pub: string) => {
    setSelectedPubs((prev) =>
      prev.includes(pub) ? prev.filter((p) => p !== pub) : [...prev, pub],
    );
  };

  const pdfPreviewUrl = `${(import.meta as any).env?.VITE_API_BASE_URL ?? 'http://localhost:3000'}/job-offers/${jobOfferId}/curriculum/pdf?v=${pdfKey}`;

  return (
    <div className="space-y-6 rounded-3xl border-2 border-indigo-300 bg-indigo-50/40 p-6 shadow-md relative">
      {/* Sticky Header with Save Button always visible at top */}
      <div className="sticky top-0 z-30 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-indigo-200 bg-white/95 backdrop-blur-md p-4 shadow-sm">
        <div>
          <h3 className="text-base font-extrabold text-indigo-950">✏️ Editor Personalizzazioni Curriculum</h3>
          <p className="mt-0.5 text-xs text-indigo-700">Modifica i dati generati dall'AI. Il salvataggio rigenera subito il PDF.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={isSaving}
            onClick={() => { void handleSave(); }}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <>
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Rigenerazione in corso...
              </>
            ) : (
              '💾 Salva e Rigenera PDF'
            )}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
          >
            ✕ Annulla
          </button>
        </div>
      </div>

      {saveError && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-semibold text-rose-700">
          {saveError}
        </div>
      )}

      {/* Custom Label */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Titolo Professionale Personalizzato</label>
        <input
          type="text"
          value={customLabel}
          onChange={(e) => setCustomLabel(e.target.value)}
          placeholder="es. Founding Product Engineer"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-xs focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      {/* Work Experiences */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Esperienze Lavorative</label>
          <div className="flex gap-2">
            <div className="relative group">
              <button
                type="button"
                className="rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                + Da base…
              </button>
              <div className="absolute right-0 top-full z-20 hidden group-hover:block mt-1 w-64 rounded-2xl border border-slate-200 bg-white shadow-xl p-2 space-y-1">
                {ALL_BASE_WORK.map((bw) => (
                  <button
                    key={`${bw.name}-${bw.position}`}
                    type="button"
                    onClick={() => addBaseWork(bw)}
                    className="w-full rounded-xl px-3 py-2 text-left text-xs hover:bg-indigo-50 transition"
                  >
                    <span className="font-bold text-slate-900">{bw.name}</span>
                    <span className="text-slate-500"> — {bw.position}</span>
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={addWork}
              className="rounded-xl border border-indigo-300 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-800 hover:bg-indigo-100 transition"
            >
              + Nuova
            </button>
          </div>
        </div>

        {workEntries.length === 0 && (
          <p className="text-xs text-slate-500 italic">Nessuna esperienza aggiunta. Usa i pulsanti sopra per aggiungerne.</p>
        )}

        {workEntries.map((w, idx) => (
          <div key={idx} className={`rounded-2xl border p-4 space-y-3 ${w.include ? 'border-slate-200 bg-white' : 'border-rose-200 bg-rose-50/40'}`}>
            <div className="flex items-center justify-between">
              <div className="grid gap-2 sm:grid-cols-2 flex-1 mr-4">
                <input
                  type="text"
                  value={w.name}
                  onChange={(e) => updateWork(idx, 'name', e.target.value)}
                  placeholder="Nome Azienda"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-200"
                />
                <input
                  type="text"
                  value={w.position}
                  onChange={(e) => updateWork(idx, 'position', e.target.value)}
                  placeholder="Posizione / Titolo"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-200"
                />
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={w.include}
                    onChange={(e) => updateWork(idx, 'include', e.target.checked)}
                    className="h-4 w-4 rounded accent-emerald-600"
                  />
                  <span className="text-xs font-semibold text-slate-700">Includi</span>
                </label>
                <button
                  type="button"
                  onClick={() => removeWork(idx)}
                  className="rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-xs font-bold text-rose-700 hover:bg-rose-100 transition"
                >
                  🗑️
                </button>
              </div>
            </div>
            <textarea
              value={w.summary}
              onChange={(e) => updateWork(idx, 'summary', e.target.value)}
              rows={4}
              placeholder="Bullet points XYZ: Accomplished [X] as measured by [Y], by doing [Z]."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs leading-6 text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-200 resize-y"
            />
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Progetti Tecnici</label>
          <div className="flex gap-2">
            <div className="relative group">
              <button
                type="button"
                className="rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                + Da base…
              </button>
              <div className="absolute right-0 top-full z-20 hidden group-hover:block mt-1 w-56 rounded-2xl border border-slate-200 bg-white shadow-xl p-2 space-y-1">
                {ALL_BASE_PROJECTS.map((bp) => (
                  <button
                    key={bp.name}
                    type="button"
                    onClick={() => addBaseProject(bp)}
                    className="w-full rounded-xl px-3 py-2 text-left text-xs font-bold text-slate-900 hover:bg-indigo-50 transition"
                  >
                    {bp.name}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={addProject}
              className="rounded-xl border border-indigo-300 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-800 hover:bg-indigo-100 transition"
            >
              + Nuovo
            </button>
          </div>
        </div>

        {projects.map((p, idx) => (
          <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={p.name}
                onChange={(e) => updateProject(idx, 'name', e.target.value)}
                placeholder="Nome progetto"
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-200"
              />
              <button
                type="button"
                onClick={() => removeProject(idx)}
                className="rounded-lg border border-rose-200 bg-rose-50 px-2 py-1 text-xs font-bold text-rose-700 hover:bg-rose-100 transition"
              >
                🗑️
              </button>
            </div>
            <textarea
              value={p.description}
              onChange={(e) => updateProject(idx, 'description', e.target.value)}
              rows={3}
              placeholder="Descrizione / bullet points XYZ"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs leading-6 text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-200 resize-y"
            />
          </div>
        ))}
      </div>

      {/* Publications */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">Pubblicazioni Selezionate</label>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
          {ALL_PUBLICATIONS.map((pub) => (
            <label key={pub} className="flex items-start gap-3 cursor-pointer rounded-xl px-2 py-1.5 hover:bg-indigo-50 transition">
              <input
                type="checkbox"
                checked={selectedPubs.includes(pub)}
                onChange={() => togglePub(pub)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded accent-indigo-600"
              />
              <span className="text-xs leading-5 text-slate-800">{pub}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Explanation */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Spiegazione delle Modifiche</label>
        <textarea
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
          rows={4}
          placeholder="Spiega concisamente le modifiche apportate rispetto al CV base e il perché..."
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-y"
        />
      </div>

      {/* Live PDF Preview (refreshes after save) */}
      {pdfKey > 0 && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Anteprima PDF Aggiornata</h4>
          <iframe
            key={pdfKey}
            src={pdfPreviewUrl}
            title="Anteprima PDF aggiornata"
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
  onUpdateCurriculumTailoring: (id: string, tailoring: UpdateCurriculumTailoringData['tailoring']) => Promise<void>;
}> = ({ curriculum, jobOfferId, onUpdateCurriculumTailoring }) => {
  const [isEditing, setIsEditing] = useState(false);

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
      {isEditing ? (
        <CurriculumEditor
          curriculum={curriculum}
          jobOfferId={jobOfferId}
          onUpdateCurriculumTailoring={onUpdateCurriculumTailoring}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <>
          {/* 1. Anteprima Documento PDF (in cima alla pagina) */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Anteprima Documento PDF</h4>
                <p className="mt-0.5 text-xs text-slate-500">Generato il {curriculum.createdAt}</p>
              </div>
              <a
                href={curriculum.pdfUrl}
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

          {/* 2. Pulsante di Modifica Personalizzazioni AI (posizionato sopra le differenze) */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-indigo-200 bg-indigo-50/80 p-4 shadow-xs">
            <div>
              <h4 className="text-sm font-bold text-indigo-950">Personalizzazioni & Adattamento AI</h4>
              <p className="text-xs text-indigo-700">Puoi modificare le esperienze selezionate, le pubblicazioni o il titolo personalizzato.</p>
            </div>
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-indigo-700 shrink-0"
            >
              ✏️ Modifica Personalizzazioni AI
            </button>
          </div>

          {/* 3. Modifiche Apportate al CV Rispetto alla Base (AI) */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Modifiche Apportate al CV Rispetto alla Base (AI)</h4>
            <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <MarkdownContent content={curriculum.explanation} />
            </div>
          </div>

          {/* 4. Confronto Personalizzazione vs CV Base */}
          <CurriculumTailoringDiffView tailoringData={curriculum.tailoringData} />
        </>
      )}
    </section>
  );
};
