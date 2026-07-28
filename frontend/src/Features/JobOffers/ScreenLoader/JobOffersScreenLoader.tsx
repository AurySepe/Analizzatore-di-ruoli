import { useAtomValue } from 'jotai';
import {
  evaluationProcessingStatusQueryAtom,
  jobOffersFiltersAtom,
  jobOffersQueryAtom,
  selectedJobOfferIdAtom,
  selectedJobOfferQueryAtom,
} from '../State/jobOffersAtoms';
import { useJobOffersController } from '../Controller/useJobOffersController';
import { JobOffersViewModel } from '../ViewModel/jobOffersViewModel';
import { JobOffersScreen } from '../View/Screens/JobOffersScreen';

export const JobOffersScreenLoader: React.FC = () => {
  const jobOffersQuery = useAtomValue(jobOffersQueryAtom);
  const selectedJobOfferQuery = useAtomValue(selectedJobOfferQueryAtom);
  const processingStatusQuery = useAtomValue(evaluationProcessingStatusQueryAtom);
  const filters = useAtomValue(jobOffersFiltersAtom);
  const selectedJobOfferId = useAtomValue(selectedJobOfferIdAtom);
  const controller = useJobOffersController();
  const viewModel = JobOffersViewModel.create(
    jobOffersQuery,
    selectedJobOfferQuery,
    processingStatusQuery,
    filters,
    selectedJobOfferId,
  );

  return <JobOffersScreen {...viewModel} {...controller} />;
};
