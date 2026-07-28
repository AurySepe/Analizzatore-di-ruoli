import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import {
  userProfileFormAtom,
  userProfileHydratedProfileIdAtom,
  userProfileQueryAtom,
  updateUserProfileMutationAtom,
} from '../State/userProfileAtoms';
import { useUserProfileController } from '../Controller/useUserProfileController';
import { UserProfileViewModel } from '../ViewModel/userProfileViewModel';
import { UserProfileScreen } from '../View/Screens/UserProfileScreen';

export const UserProfileScreenLoader: React.FC = () => {
  const profileQuery = useAtomValue(userProfileQueryAtom);
  const form = useAtomValue(userProfileFormAtom);
  const hydratedProfileId = useAtomValue(userProfileHydratedProfileIdAtom);
  const mutation = useAtomValue(updateUserProfileMutationAtom);
  const controller = useUserProfileController();
  const viewModel = UserProfileViewModel.create(profileQuery, form, mutation, hydratedProfileId);

  useEffect(() => {
    if (viewModel.hydration.shouldHydrateForm && viewModel.hydration.profileId !== null) {
      controller.onResetFromProfile(viewModel.hydration.form, viewModel.hydration.profileId);
    }
  }, [controller, viewModel.hydration]);

  return <UserProfileScreen {...viewModel} {...controller} />;
};
