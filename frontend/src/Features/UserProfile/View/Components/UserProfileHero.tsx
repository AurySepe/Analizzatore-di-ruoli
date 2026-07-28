// ── View ──────────────────────────────────────────────────────────────────────
export const UserProfileHero: React.FC<{ onRefresh: () => void }> = ({ onRefresh }) => (
  <header className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-end lg:justify-between">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Profilo candidato</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Criteri di ricerca
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
        Aggiungi il tuo CV testuale, i ruoli ideali, preferenze, vincoli e criteri personali.
        Queste informazioni saranno usate dal sistema per valutare meglio gli annunci di lavoro.
      </p>
    </div>
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
      onClick={onRefresh}
    >
      Ricarica profilo
    </button>
  </header>
);
