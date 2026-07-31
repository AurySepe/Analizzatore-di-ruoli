import type { JobOfferFreshness, JobOfferPriority, JobOfferSource } from '../../State/jobOffersAtoms';
import type { JobOffersFiltersViewModelDTO } from '../../ViewModel/jobOffersViewModel';

// ── View ──────────────────────────────────────────────────────────────────────
export const JobOffersFilters: React.FC<{
  filters: JobOffersFiltersViewModelDTO;
  onTitleFilterChange: (value: string) => void;
  onSourceFilterChange: (value: JobOfferSource | null) => void;
  onPriorityChange: (value: JobOfferPriority | null) => void;
  onFreshnessFilterChange: (value: JobOfferFreshness | null) => void;
  onResetFilters: () => void;
}> = ({
  filters,
  onTitleFilterChange,
  onSourceFilterChange,
  onPriorityChange,
  onFreshnessFilterChange,
  onResetFilters,
}) => (
  <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-slate-950">Filtri annunci</h2>
        <p className="mt-1 text-sm text-slate-500">
          Filtra lato server per titolo, nome azienda, fonte e priorità AI.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {filters.activeFiltersCount} attivi
        </span>
        <button
          type="button"
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          onClick={onResetFilters}
        >
          Reset
        </button>
      </div>
    </div>

    <div className="mt-5 grid gap-4 lg:grid-cols-4">
      <label className="block">
        <span className="text-sm font-semibold text-slate-700">Titolo o azienda</span>
        <input
          className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          value={filters.title}
          placeholder="Es. Product Manager o nome azienda"
          onChange={(event) => onTitleFilterChange(event.target.value)}
        />
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-slate-700">Fonte</span>
        <select
          className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          value={filters.source ?? ''}
          onChange={(event) => onSourceFilterChange(parseSource(event.target.value))}
        >
          <option value="">Tutte</option>
          {filters.sourceOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-slate-700">Priorità AI</span>
        <select
          className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          value={filters.priority ?? ''}
          onChange={(event) => onPriorityChange(parsePriority(event.target.value))}
        >
          <option value="">Tutte</option>
          {filters.priorityOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-slate-700">Freschezza</span>
        <select
          className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          value={filters.freshness ?? ''}
          onChange={(event) => onFreshnessFilterChange(parseFreshness(event.target.value))}
        >
          <option value="">Tutte</option>
          {filters.freshnessOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  </section>
);

const parseSource = (value: string): JobOfferSource | null => {
  switch (value) {
    case 'ARBEITNOW':
    case 'REMOTIVE':
    case 'JOBICY':
    case 'WE_WORK_REMOTELY':
      return value;
    default:
      return null;
  }
};

const parseFreshness = (value: string): JobOfferFreshness | null => {
  switch (value) {
    case 'HOT':
    case 'RECENT':
    case 'AGING':
    case 'OLD':
      return value;
    default:
      return null;
  }
};

const parsePriority = (value: string): JobOfferPriority | null => {
  switch (value) {
    case 'HIGH':
    case 'MEDIUM':
    case 'LOW':
    case 'DISQUALIFIED':
      return value;
    default:
      return null;
  }
};
