import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  updateUserProfileMutationAtom,
  userProfileFormAtom,
  userProfileHydratedProfileIdAtom,
  type UserProfileFormData,
} from '../State/userProfileAtoms';

export interface UserProfileController {
  readonly onResumeTextChange: (value: string) => void;
  readonly onSearchCriteriaTextChange: (value: string) => void;
  readonly onSave: () => Promise<void>;
  readonly onResetFromProfile: (form: UserProfileFormData, profileId: string) => void;
  readonly onRefresh: () => void;
}

export const useUserProfileController = (): UserProfileController => {
  const [form, setForm] = useAtom(userProfileFormAtom);
  const updateProfile = useAtomValue(updateUserProfileMutationAtom);
  const setHydratedProfileId = useSetAtom(userProfileHydratedProfileIdAtom);
  const queryClient = useQueryClient();

  const handleResumeTextChange = useCallback(
    (value: string) => {
      setForm((current) => ({ ...current, resumeText: value }));
    },
    [setForm],
  );

  const handleSearchCriteriaTextChange = useCallback(
    (value: string) => {
      setForm((current) => ({ ...current, searchCriteriaText: value }));
    },
    [setForm],
  );

  const handleSave = useCallback(async () => {
    const savedProfile = await updateProfile.mutateAsync({
      resumeText: form.resumeText.trim() || null,
      searchCriteriaText: form.searchCriteriaText.trim() || null,
    });

    setHydratedProfileId(savedProfile.id);
    queryClient.setQueryData(['userProfile'], savedProfile);
    queryClient.invalidateQueries({ queryKey: ['userProfile'] });
  }, [form, queryClient, setHydratedProfileId, updateProfile]);

  const handleResetFromProfile = useCallback(
    (nextForm: UserProfileFormData, profileId: string) => {
      setForm(nextForm);
      setHydratedProfileId(profileId);
    },
    [setForm, setHydratedProfileId],
  );

  const handleRefresh = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ['userProfile'] });
  }, [queryClient]);

  return {
    onResumeTextChange: handleResumeTextChange,
    onSearchCriteriaTextChange: handleSearchCriteriaTextChange,
    onSave: handleSave,
    onResetFromProfile: handleResetFromProfile,
    onRefresh: handleRefresh,
  };
};
