import type { LoadableState } from '@/Commons/loadable-state';
import type { UserProfileDto, UserProfileFormData } from '../State/userProfileAtoms';

interface QueryResultLike<T> {
  readonly data: T | undefined;
  readonly isLoading: boolean;
  readonly isFetching: boolean;
  readonly isError: boolean;
  readonly error: Error | null;
}

interface MutationResultLike {
  readonly isPending: boolean;
  readonly isError: boolean;
  readonly isSuccess: boolean;
  readonly error: Error | null;
}

export interface UserProfileMetadataViewModelDTO {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface UserProfileFormViewModelDTO {
  readonly resumeText: string;
  readonly searchCriteriaText: string;
  readonly resumeTextError: string | null;
  readonly searchCriteriaTextError: string | null;
  readonly resumeCharacterCount: number;
  readonly searchCriteriaCharacterCount: number;
  readonly isSaveDisabled: boolean;
  readonly isSaving: boolean;
  readonly saveError: string | null;
  readonly showSavedMessage: boolean;
  readonly hasProfileContent: boolean;
}

export interface UserProfileHydrationViewModelDTO {
  readonly shouldHydrateForm: boolean;
  readonly profileId: string | null;
  readonly form: UserProfileFormData;
}

export interface UserProfileViewModelDTO {
  readonly profileState: LoadableState<UserProfileMetadataViewModelDTO>;
  readonly form: UserProfileFormViewModelDTO;
  readonly hydration: UserProfileHydrationViewModelDTO;
}

const minimumMeaningfulLength = 20;

const formatDateTime = (value: string): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

const normalizeText = (value: string | null | undefined): string => value ?? '';

const toErrorMessage = (error: Error | null, fallback: string): string => error?.message ?? fallback;

const mapQueryToLoadableState = <Input, Output>(
  query: QueryResultLike<Input>,
  mapper: (data: Input) => Output,
  fallbackError: string,
): LoadableState<Output> => {
  if (query.isLoading) {
    return { status: 'loading' };
  }

  if (query.isError) {
    return { status: 'error', error: toErrorMessage(query.error, fallbackError) };
  }

  if (query.data === undefined) {
    return { status: 'loading' };
  }

  return {
    status: 'success',
    data: mapper(query.data),
    isFetching: query.isFetching,
  };
};

const validateOptionalLongText = (value: string, label: string): string | null => {
  const trimmed = value.trim();

  if (trimmed.length > 0 && trimmed.length < minimumMeaningfulLength) {
    return `${label} deve contenere almeno ${minimumMeaningfulLength} caratteri oppure restare vuoto.`;
  }

  return null;
};

const createHydration = (
  profile: UserProfileDto | undefined,
  hydratedProfileId: string | null,
): UserProfileHydrationViewModelDTO => {
  if (profile === undefined || profile.id === hydratedProfileId) {
    return {
      shouldHydrateForm: false,
      profileId: null,
      form: { resumeText: '', searchCriteriaText: '' },
    };
  }

  return {
    shouldHydrateForm: true,
    profileId: profile.id,
    form: {
      resumeText: normalizeText(profile.resumeText),
      searchCriteriaText: normalizeText(profile.searchCriteriaText),
    },
  };
};

export class UserProfileViewModel {
  public static create(
    profileQuery: QueryResultLike<UserProfileDto>,
    form: UserProfileFormData,
    mutation: MutationResultLike,
    hydratedProfileId: string | null,
  ): UserProfileViewModelDTO {
    const resumeTextError = validateOptionalLongText(form.resumeText, 'Il CV');
    const searchCriteriaTextError = validateOptionalLongText(form.searchCriteriaText, 'I criteri di ricerca');
    const hasProfileContent = form.resumeText.trim().length > 0 || form.searchCriteriaText.trim().length > 0;

    return {
      profileState: mapQueryToLoadableState(
        profileQuery,
        (profile) => ({
          id: profile.id,
          createdAt: formatDateTime(profile.createdAt),
          updatedAt: formatDateTime(profile.updatedAt),
        }),
        'Errore durante il caricamento del profilo.',
      ),
      form: {
        resumeText: form.resumeText,
        searchCriteriaText: form.searchCriteriaText,
        resumeTextError,
        searchCriteriaTextError,
        resumeCharacterCount: form.resumeText.length,
        searchCriteriaCharacterCount: form.searchCriteriaText.length,
        isSaveDisabled: mutation.isPending || resumeTextError !== null || searchCriteriaTextError !== null,
        isSaving: mutation.isPending,
        saveError: mutation.isError ? toErrorMessage(mutation.error, 'Errore durante il salvataggio.') : null,
        showSavedMessage: mutation.isSuccess && !mutation.isPending && !mutation.isError,
        hasProfileContent,
      },
      hydration: createHydration(profileQuery.data, hydratedProfileId),
    };
  }
}
