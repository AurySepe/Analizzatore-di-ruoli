import type { LoadableState } from '@/Commons/loadable-state';
import type { JobOffersFunnelAnalyticsDto } from '../../State/jobOffersAtoms';

const statusLabels: Readonly<Record<string, string>> = {
  NEW: 'Nuovi',
  SAVED: 'Da candidare',
  APPLIED: 'Candidature inviate',
  SCREENING: 'Screening',
  INTERVIEWING: 'Colloqui',
  OFFER: 'Offerte',
  ACCEPTED: 'Accettate',
  REJECTED: 'Mi hanno rifiutato',
  ARCHIVED: 'Scartati da me',
};

const dropOffLabels: Readonly<Record<string, string>> = {
  PRE_APPLICATION: 'Prima della candidatura',
  AFTER_APPLICATION: 'Dopo candidatura',
  AFTER_SCREENING: 'Dopo screening',
  AFTER_INTERVIEW: 'Dopo colloqui',
  AFTER_OFFER: 'Dopo offerta',
};

const conversionCards: readonly {
  readonly key: keyof JobOffersFunnelAnalyticsDto['conversionRates'];
  readonly label: string;
  readonly description: string;
}[] = [
  { key: 'applicationToInterview', label: 'Candidatura → colloquio', description: 'Quante candidature arrivano a colloquio.' },
  { key: 'interviewToOffer', label: 'Colloquio → offerta', description: 'Quanti colloqui generano un’offerta.' },
  { key: 'offerToAcceptance', label: 'Offerta → accettata', description: 'Quante offerte vengono accettate.' },
  { key: 'overallSuccessRate', label: 'Successo complessivo', description: 'Accettate rispetto alle candidature.' },
];

export const JobOffersFunnelAnalyticsScreen: React.FC<{
  readonly state: LoadableState<JobOffersFunnelAnalyticsDto>;
}> = ({ state }) => (
  <main className="min-h-screen bg-slate-50 text-slate-950">
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
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
          <h2 className="text-lg font-semibold">Analytics non disponibili</h2>
          <p className="mt-2 text-sm">{state.error}</p>
        </section>
      );
    case 'success':
      return <AnalyticsView data={state.data} />;
  }
};

const AnalyticsView: React.FC<{ readonly data: JobOffersFunnelAnalyticsDto }> = ({ data }) => (
  <div className="space-y-6">
    <section className="grid gap-4 lg:grid-cols-4">
      {conversionCards.map((card) => (
        <MetricCard
          key={card.key}
          label={card.label}
          description={card.description}
          value={`${formatPercentage(data.conversionRates[card.key])}%`}
        />
      ))}
    </section>

    <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
      <Panel title="Conteggi per stato" description="Distribuzione attuale degli annunci nelle varie fasi.">
        <BarList entries={orderedEntries(data.statusCounts, statusLabels)} />
      </Panel>

      <Panel title="Drop-off" description="Dove le candidature vengono interrotte o rifiutate.">
        <BarList entries={orderedEntries(data.rejectionDropOffs, dropOffLabels)} tone="danger" />
      </Panel>
    </section>

    <Panel title="Transizioni registrate" description="Quante volte gli annunci sono entrati in ciascuna fase nel tempo.">
      <BarList entries={orderedEntries(data.stageTransitions, statusLabels)} tone="primary" />
    </Panel>
  </div>
);

const AnalyticsSkeleton: React.FC = () => (
  <div className="space-y-6">
    <section className="grid gap-4 lg:grid-cols-4">
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="h-36 animate-pulse rounded-3xl bg-slate-200" />
      ))}
    </section>
    <div className="h-96 animate-pulse rounded-3xl bg-slate-200" />
  </div>
);

const MetricCard: React.FC<{
  readonly label: string;
  readonly description: string;
  readonly value: string;
}> = ({ label, description, value }) => (
  <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-sm font-semibold text-slate-600">{label}</p>
    <p className="mt-3 text-4xl font-bold tracking-tight text-slate-950">{value}</p>
    <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
  </article>
);

const Panel: React.FC<{
  readonly title: string;
  readonly description: string;
  readonly children: React.ReactNode;
}> = ({ title, description, children }) => (
  <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="border-b border-slate-200 pb-4">
      <h2 className="text-xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
    <div className="mt-5">{children}</div>
  </section>
);

const BarList: React.FC<{
  readonly entries: readonly { readonly key: string; readonly label: string; readonly value: number }[];
  readonly tone?: 'primary' | 'danger';
}> = ({ entries, tone = 'primary' }) => {
  const maxValue = Math.max(...entries.map((entry) => entry.value), 1);
  const barClassName = tone === 'danger' ? 'bg-rose-500' : 'bg-sky-600';

  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <div key={entry.key}>
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-semibold text-slate-700">{entry.label}</span>
            <span className="font-bold text-slate-950">{entry.value.toLocaleString('it-IT')}</span>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full ${barClassName}`}
              style={{ width: `${Math.round((entry.value / maxValue) * 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const orderedEntries = (
  record: Readonly<Record<string, number>>,
  labels: Readonly<Record<string, string>>,
): readonly { readonly key: string; readonly label: string; readonly value: number }[] => {
  const known = Object.keys(labels).map((key) => ({
    key,
    label: labels[key],
    value: record[key] ?? 0,
  }));

  const unknown = Object.entries(record)
    .filter(([key]) => labels[key] === undefined)
    .map(([key, value]) => ({ key, label: key, value }));

  return [...known, ...unknown];
};

const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('it-IT', {
    maximumFractionDigits: 1,
  }).format(value);
};
