import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { queryClientAtom } from 'jotai-tanstack-query';
import { AppNavigation } from './Features/AppShell/View/Components/AppNavigation';
import { JobOffersScreenLoader } from './Features/JobOffers/ScreenLoader/JobOffersScreenLoader';
import { UserProfileScreenLoader } from './Features/UserProfile/ScreenLoader/UserProfileScreenLoader';

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
        <Route path="/job-offers" element={<JobOffersScreenLoader />} />
        <Route path="/profile" element={<UserProfileScreenLoader />} />
        <Route path="*" element={<Navigate to="/job-offers" replace />} />
      </Routes>
    </>
  );
}

export default App;
