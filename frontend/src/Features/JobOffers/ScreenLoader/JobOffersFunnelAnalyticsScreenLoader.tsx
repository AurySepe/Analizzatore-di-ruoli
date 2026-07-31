import { useAtomValue } from 'jotai';
import { jobOffersFunnelAnalyticsQueryAtom } from '../State/jobOffersAtoms';
import { JobOffersFunnelAnalyticsScreen } from '../View/Screens/JobOffersFunnelAnalyticsScreen';

export const JobOffersFunnelAnalyticsScreenLoader: React.FC = () => {
  const query = useAtomValue(jobOffersFunnelAnalyticsQueryAtom);

  if (query.isLoading) {
    return <JobOffersFunnelAnalyticsScreen state={{ status: 'loading' }} />;
  }

  if (query.isError) {
    return <JobOffersFunnelAnalyticsScreen state={{ status: 'error', error: query.error?.message ?? 'Errore analytics.' }} />;
  }

  if (query.data === undefined) {
    return <JobOffersFunnelAnalyticsScreen state={{ status: 'loading' }} />;
  }

  return <JobOffersFunnelAnalyticsScreen state={{ status: 'success', data: query.data, isFetching: query.isFetching }} />;
};
