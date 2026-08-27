import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import {
  companyJobOffersQueryAtom,
  evaluationProcessingStatusQueryAtom,
  jobOffersFiltersAtom,
  jobOffersQueryAtom,
  jobOffersSectionAtom,
  selectedCompanyIdAtom,
  selectedJobOfferIdAtom,
  selectedJobOfferQueryAtom,
  type JobOffersSection,
} from '../State/jobOffersAtoms';
import {
  curriculumEditorCustomLabelAtom,
  curriculumEditorExplanationAtom,
  curriculumEditorIsEditingAtom,
  curriculumEditorPdfKeyAtom,
  curriculumEditorProjectsAtom,
  curriculumEditorSaveErrorAtom,
  curriculumEditorSelectedPubsAtom,
  curriculumEditorWorkEntriesAtom,
} from '../State/curriculumEditorAtoms';
import { useJobOffersController } from '../Controller/useJobOffersController';
import { useCurriculumEditorController } from '../Controller/useCurriculumEditorController';
import { JobOffersViewModel } from '../ViewModel/jobOffersViewModel';
import { JobOffersScreen } from '../View/Screens/JobOffersScreen';

export const JobOffersScreenLoader: React.FC<{ section: JobOffersSection }> = ({ section }) => {
  const jobOffersQuery = useAtomValue(jobOffersQueryAtom);
  const selectedJobOfferQuery = useAtomValue(selectedJobOfferQueryAtom);
  const processingStatusQuery = useAtomValue(evaluationProcessingStatusQueryAtom);
  const companyJobOffersQuery = useAtomValue(companyJobOffersQueryAtom);
  const filters = useAtomValue(jobOffersFiltersAtom);
  const selectedJobOfferId = useAtomValue(selectedJobOfferIdAtom);
  const selectedCompanyId = useAtomValue(selectedCompanyIdAtom);
  const currentSection = useAtomValue(jobOffersSectionAtom);

  const curriculumEditorIsEditing = useAtomValue(curriculumEditorIsEditingAtom);
  const curriculumEditorCustomLabel = useAtomValue(curriculumEditorCustomLabelAtom);
  const curriculumEditorExplanation = useAtomValue(curriculumEditorExplanationAtom);
  const curriculumEditorWorkEntries = useAtomValue(curriculumEditorWorkEntriesAtom);
  const curriculumEditorProjects = useAtomValue(curriculumEditorProjectsAtom);
  const curriculumEditorSelectedPubs = useAtomValue(curriculumEditorSelectedPubsAtom);
  const curriculumEditorSaveError = useAtomValue(curriculumEditorSaveErrorAtom);
  const curriculumEditorPdfKey = useAtomValue(curriculumEditorPdfKeyAtom);

  const controller = useJobOffersController(section);
  const curriculumEditorController = useCurriculumEditorController();

  const viewModel = JobOffersViewModel.create(
    jobOffersQuery,
    selectedJobOfferQuery,
    processingStatusQuery,
    companyJobOffersQuery,
    filters,
    selectedJobOfferId,
    selectedCompanyId,
    section,
    {
      isEditing: curriculumEditorIsEditing,
      customLabel: curriculumEditorCustomLabel,
      explanation: curriculumEditorExplanation,
      workEntries: curriculumEditorWorkEntries,
      projects: curriculumEditorProjects,
      selectedPubs: curriculumEditorSelectedPubs,
      saveError: curriculumEditorSaveError,
      pdfKey: curriculumEditorPdfKey,
    },
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

  return (
    <JobOffersScreen
      {...viewModel}
      {...controller}
      curriculumEditorController={curriculumEditorController}
    />
  );
};
