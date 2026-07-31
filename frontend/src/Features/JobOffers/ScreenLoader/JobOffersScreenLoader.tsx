import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import {
  evaluationProcessingStatusQueryAtom,
  jobOffersFiltersAtom,
  jobOffersQueryAtom,
  jobOffersSectionAtom,
  selectedJobOfferIdAtom,
  selectedJobOfferQueryAtom,
  type JobOffersSection,
} from '../State/jobOffersAtoms';
import { useJobOffersController } from '../Controller/useJobOffersController';
import { JobOffersViewModel } from '../ViewModel/jobOffersViewModel';
import { JobOffersScreen } from '../View/Screens/JobOffersScreen';

export const JobOffersScreenLoader: React.FC<{ section: JobOffersSection }> = ({ section }) => {
  const jobOffersQuery = useAtomValue(jobOffersQueryAtom);
  const selectedJobOfferQuery = useAtomValue(selectedJobOfferQueryAtom);
  const processingStatusQuery = useAtomValue(evaluationProcessingStatusQueryAtom);
  const filters = useAtomValue(jobOffersFiltersAtom);
  const selectedJobOfferId = useAtomValue(selectedJobOfferIdAtom);
  const currentSection = useAtomValue(jobOffersSectionAtom);
  const controller = useJobOffersController(section);
  const viewModel = JobOffersViewModel.create(
    jobOffersQuery,
    selectedJobOfferQuery,
    processingStatusQuery,
    filters,
    selectedJobOfferId,
    section,
  );

  useEffect(() => {
    if (
      section === 'new' &&
      currentSection === section &&
      selectedJobOfferId === null &&
      jobOffersQuery.status === 'success' &&
      !jobOffersQuery.isFetching &&
      jobOffersQuery.data.data.length > 0
    ) {
      controller.onSelectJobOffer(jobOffersQuery.data.data[0].id);
    }
  }, [controller, currentSection, jobOffersQuery, section, selectedJobOfferId]);

  return <JobOffersScreen {...viewModel} {...controller} />;
};
