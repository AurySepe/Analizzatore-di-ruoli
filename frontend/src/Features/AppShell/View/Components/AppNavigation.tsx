import { NavLink } from 'react-router-dom';

// ── View ──────────────────────────────────────────────────────────────────────
export const AppNavigation: React.FC = () => (
  <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <NavLink to="/job-offers" className="text-sm font-bold uppercase tracking-[0.22em] text-slate-950">
        Analizzatore di ruoli
      </NavLink>
      <div className="flex gap-2">
        <NavigationLink to="/job-offers">Annunci</NavigationLink>
        <NavigationLink to="/profile">Profilo</NavigationLink>
      </div>
    </div>
  </nav>
);

const NavigationLink: React.FC<{ to: string; children: string }> = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `rounded-xl px-4 py-2 text-sm font-semibold transition ${
        isActive ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
      }`
    }
  >
    {children}
  </NavLink>
);
