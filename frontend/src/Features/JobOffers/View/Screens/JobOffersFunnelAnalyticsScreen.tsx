import type { LoadableState } from '@/Commons/loadable-state';
import type { JobOffersFunnelAnalyticsDto } from '../../State/jobOffersAtoms';
import { JobOffersSankeyChart } from '../Components/JobOffersSankeyChart';

export const JobOffersFunnelAnalyticsScreen: React.FC<{
  readonly state: LoadableState<JobOffersFunnelAnalyticsDto>;
}> = ({ state }) => (
  <main className="min-h-screen bg-slate-50 text-slate-950">
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-950">Flusso Candidature</h1>
          <p className="text-sm text-slate-500">
            Tracciamento end-to-end: Fonti estrattori → Filtro AI → Selezione utente → Candidatura → Esito finale
          </p>
        </div>
      </div>
      <JobOffersFunnelAnalyticsContent state={state} />
    </section>
  </main>
);

const JobOffersFunnelAnalyticsContent: React.FC<{
  readonly state: LoadableState<JobOffersFunnelAnalyticsDto>;
}> = ({ state }) => {
  switch (state.status) {
    case 'loading':
      return <AnalyticsSkeleton />;
    case 'error':
      return (
        <section className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
          <h2 className="text-lg font-semibold">Dati non disponibili</h2>
          <p className="mt-2 text-sm">{state.error}</p>
        </section>
      );
    case 'success':
      return <AnalyticsView data={state.data} />;
  }
};

const AnalyticsView: React.FC<{ readonly data: JobOffersFunnelAnalyticsDto }> = ({ data }) => {
  if (!data.sankey) {
    return (
      <div className="flex h-96 items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white p-6 text-slate-500">
        <p className="text-sm font-medium">Nessun dato disponibile per il flusso candidature.</p>
      </div>
    );
  }

  return <JobOffersSankeyChart data={data.sankey} />;
};

const AnalyticsSkeleton: React.FC = () => (
  <div className="h-[600px] w-full animate-pulse rounded-3xl border border-slate-200 bg-slate-200/70" />
);

