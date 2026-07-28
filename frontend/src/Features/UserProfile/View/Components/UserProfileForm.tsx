import type { UserProfileFormViewModelDTO } from '../../ViewModel/userProfileViewModel';

// ── View ──────────────────────────────────────────────────────────────────────
export const UserProfileForm: React.FC<{
  form: UserProfileFormViewModelDTO;
  onResumeTextChange: (value: string) => void;
  onSearchCriteriaTextChange: (value: string) => void;
  onSave: () => Promise<void>;
}> = ({ form, onResumeTextChange, onSearchCriteriaTextChange, onSave }) => (
  <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Informazioni personali</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Scrivi in testo libero. Puoi includere esperienza, competenze, ruoli desiderati,
          località, remoto/ibrido, salary range, settori preferiti e vincoli non negoziabili.
        </p>
      </div>
      <button
        type="button"
        className="rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => {
          void onSave();
        }}
        disabled={form.isSaveDisabled}
      >
        {form.isSaving ? 'Salvataggio…' : 'Salva profilo'}
      </button>
    </div>

    {form.saveError ? (
      <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
        {form.saveError}
      </div>
    ) : null}

    {form.showSavedMessage ? (
      <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-700">
        Profilo salvato correttamente.
      </div>
    ) : null}

    {!form.hasProfileContent ? (
      <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
        Il profilo è ancora vuoto. Aggiungi almeno CV o criteri di ricerca per rendere utili le
        valutazioni degli annunci.
      </div>
    ) : null}

    <div className="mt-6 grid gap-6">
      <TextAreaField
        id="resumeText"
        label="CV, esperienze e competenze"
        description="Incolla o riassumi il tuo percorso: ruoli ricoperti, responsabilità, stack, competenze, risultati, lingua e seniority."
        placeholder="Esempio: Product manager junior con esperienza in backlog refinement, user stories, stakeholder management, Jira, discovery e delivery..."
        value={form.resumeText}
        error={form.resumeTextError}
        characterCount={form.resumeCharacterCount}
        minRows={14}
        onChange={onResumeTextChange}
      />
      <TextAreaField
        id="searchCriteriaText"
        label="Criteri di ricerca e ruolo ideale"
        description="Descrivi cosa stai cercando: ruoli target, settori, città, remoto, contratto, stipendio, tecnologie, preferenze e deal-breaker."
        placeholder="Esempio: Cerco ruoli Associate/Junior Product Manager, preferibilmente full remote o hybrid in Europa, team prodotto strutturati, crescita e mentorship..."
        value={form.searchCriteriaText}
        error={form.searchCriteriaTextError}
        characterCount={form.searchCriteriaCharacterCount}
        minRows={12}
        onChange={onSearchCriteriaTextChange}
      />
    </div>
  </section>
);

const TextAreaField: React.FC<{
  id: string;
  label: string;
  description: string;
  placeholder: string;
  value: string;
  error: string | null;
  characterCount: number;
  minRows: number;
  onChange: (value: string) => void;
}> = ({ id, label, description, placeholder, value, error, characterCount, minRows, onChange }) => (
  <label htmlFor={id} className="block">
    <span className="text-base font-semibold text-slate-950">{label}</span>
    <span className="mt-1 block text-sm leading-6 text-slate-500">{description}</span>
    <textarea
      id={id}
      className="mt-3 w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
      style={{ minHeight: `${minRows * 1.5}rem` }}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
    <span className="mt-2 flex items-center justify-between gap-4 text-xs">
      <span className={error ? 'font-medium text-rose-600' : 'text-slate-500'}>
        {error ?? 'Campo opzionale, ma più dettagli aiutano la valutazione degli annunci.'}
      </span>
      <span className="shrink-0 text-slate-400">{characterCount.toLocaleString('it-IT')} caratteri</span>
    </span>
  </label>
);
