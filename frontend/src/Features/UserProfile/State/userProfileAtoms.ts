import { atom } from 'jotai';
import { atomWithMutation, atomWithQuery, queryClientAtom } from 'jotai-tanstack-query';

export interface UserProfileDto {
  readonly id: string;
  readonly resumeText?: string | null;
  readonly searchCriteriaText?: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface UpdateUserProfileDto {
  readonly resumeText?: string | null;
  readonly searchCriteriaText?: string | null;
}

export interface UserProfileFormData {
  readonly resumeText: string;
  readonly searchCriteriaText: string;
}

export const emptyUserProfileForm: UserProfileFormData = {
  resumeText: '',
  searchCriteriaText: '',
};

export const userProfileFormAtom = atom<UserProfileFormData>(emptyUserProfileForm);
export const userProfileHydratedProfileIdAtom = atom<string | null>(null);

export const userProfileQueryAtom = atomWithQuery<UserProfileDto>((get) => {
  const queryClient = get(queryClientAtom);

  return {
    queryKey: ['userProfile'],
    queryClient,
    queryFn: async () => {
      throw new Error('L’API del profilo utente non è presente nello schema OpenAPI aggiornato.');
    },
  };
});

export const updateUserProfileMutationAtom = atomWithMutation<UserProfileDto, UpdateUserProfileDto, Error>(
  (get) => {
    const queryClient = get(queryClientAtom);

    return {
      mutationKey: ['userProfile', 'update'],
      queryClient,
      mutationFn: async () => {
        throw new Error('Impossibile salvare il profilo: endpoint non presente nello schema OpenAPI aggiornato.');
      },
    };
  },
);
