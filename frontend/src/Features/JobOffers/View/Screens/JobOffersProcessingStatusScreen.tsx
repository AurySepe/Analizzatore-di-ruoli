import type { LoadableState } from '@/Commons/loadable-state';
import type { EvaluationProcessingStatusViewModelDTO } from '../../ViewModel/jobOffersViewModel';
import { JobOffersProcessingStatus } from '../Components/JobOffersProcessingStatus';

export const JobOffersProcessingStatusScreen: React.FC<{
  readonly state: LoadableState<EvaluationProcessingStatusViewModelDTO>;
}> = ({ state }) => (
  <main className="min-h-screen bg-slate-50 text-slate-950">
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <JobOffersProcessingStatus state={state} />
    </section>
  </main>
);
