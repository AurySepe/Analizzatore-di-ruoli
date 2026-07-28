import type { LoadableState } from '@/Commons/loadable-state';
import type {
  UserProfileFormViewModelDTO,
  UserProfileHydrationViewModelDTO,
  UserProfileMetadataViewModelDTO,
} from '../../ViewModel/userProfileViewModel';
import type { UserProfileFormData } from '../../State/userProfileAtoms';
import { UserProfileForm } from '../Components/UserProfileForm';
import { UserProfileHero } from '../Components/UserProfileHero';
import { UserProfileMetadata } from '../Components/UserProfileMetadata';

export interface UserProfileScreenProps {
  readonly profileState: LoadableState<UserProfileMetadataViewModelDTO>;
  readonly form: UserProfileFormViewModelDTO;
  readonly hydration: UserProfileHydrationViewModelDTO;
  readonly onResumeTextChange: (value: string) => void;
  readonly onSearchCriteriaTextChange: (value: string) => void;
  readonly onSave: () => Promise<void>;
  readonly onResetFromProfile: (form: UserProfileFormData, profileId: string) => void;
  readonly onRefresh: () => void;
}

export const UserProfileScreen: React.FC<UserProfileScreenProps> = ({
  profileState,
  form,
  onResumeTextChange,
  onSearchCriteriaTextChange,
  onSave,
  onRefresh,
}) => (
  <main className="min-h-screen bg-slate-50 text-slate-950">
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
      <UserProfileHero onRefresh={onRefresh} />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <UserProfileForm
          form={form}
          onResumeTextChange={onResumeTextChange}
          onSearchCriteriaTextChange={onSearchCriteriaTextChange}
          onSave={onSave}
        />
        <UserProfileMetadata state={profileState} />
      </div>
    </section>
  </main>
);
