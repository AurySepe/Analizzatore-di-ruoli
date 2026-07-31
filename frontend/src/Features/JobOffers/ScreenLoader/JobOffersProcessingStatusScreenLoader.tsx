import { useAtomValue } from 'jotai';
import { evaluationProcessingStatusQueryAtom } from '../State/jobOffersAtoms';
import { JobOffersViewModel } from '../ViewModel/jobOffersViewModel';
import { JobOffersProcessingStatusScreen } from '../View/Screens/JobOffersProcessingStatusScreen';

export const JobOffersProcessingStatusScreenLoader: React.FC = () => {
  const processingStatusQuery = useAtomValue(evaluationProcessingStatusQueryAtom);
  const state = JobOffersViewModel.createProcessingStatus(processingStatusQuery);

  return <JobOffersProcessingStatusScreen state={state} />;
};
