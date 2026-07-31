import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { queryClientAtom } from 'jotai-tanstack-query';
import { AppNavigation } from './Features/AppShell/View/Components/AppNavigation';
import { JobOffersScreenLoader } from './Features/JobOffers/ScreenLoader/JobOffersScreenLoader';
import { JobOffersProcessingStatusScreenLoader } from './Features/JobOffers/ScreenLoader/JobOffersProcessingStatusScreenLoader';
import { JobOffersFunnelAnalyticsScreenLoader } from './Features/JobOffers/ScreenLoader/JobOffersFunnelAnalyticsScreenLoader';

function App() {
  const queryClient = useQueryClient();
  const setJotaiQueryClient = useSetAtom(queryClientAtom);

  useEffect(() => {
    setJotaiQueryClient(queryClient);
  }, [queryClient, setJotaiQueryClient]);

  return (
    <>
      <AppNavigation />
      <Routes>
        <Route path="/job-offers" element={<JobOffersScreenLoader section="new" />} />
        <Route path="/job-offers/active" element={<JobOffersScreenLoader section="active" />} />
        <Route path="/job-offers/closed" element={<JobOffersScreenLoader section="closed" />} />
        <Route path="/job-offers/disqualified" element={<JobOffersScreenLoader section="disqualified" />} />
        <Route path="/processing-status" element={<JobOffersProcessingStatusScreenLoader />} />
        <Route path="/analytics/funnel" element={<JobOffersFunnelAnalyticsScreenLoader />} />
        <Route path="*" element={<Navigate to="/job-offers" replace />} />
      </Routes>
    </>
  );
}

export default App;
