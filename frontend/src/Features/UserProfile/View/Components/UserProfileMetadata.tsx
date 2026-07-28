import type { LoadableState } from '@/Commons/loadable-state';
import type { UserProfileMetadataViewModelDTO } from '../../ViewModel/userProfileViewModel';

// ── Skeleton ──────────────────────────────────────────────────────────────────
export const UserProfileMetadataSkeleton: React.FC = () => (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="h-6 w-48 animate-pulse rounded bg-slate-200" />
    <div className="mt-5 space-y-3">
      <div className="h-16 animate-pulse rounded-2xl bg-slate-100" />
      <div className="h-16 animate-pulse rounded-2xl bg-slate-100" />
    </div>
  </div>
);

// ── Error ─────────────────────────────────────────────────────────────────────
export const UserProfileMetadataError: React.FC<{ error: string }> = ({ error }) => (
  <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
    <h2 className="text-lg font-semibold">Profilo non disponibile</h2>
    <p className="mt-2 text-sm">{error}</p>
  </div>
);

// ── View ──────────────────────────────────────────────────────────────────────
export const UserProfileMetadataView: React.FC<{
  data: UserProfileMetadataViewModelDTO;
  isFetching?: boolean;
}> = ({ data, isFetching }) => (
  <aside className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    {isFetching ? <div className="absolute inset-x-0 top-0 h-1 animate-pulse bg-sky-500" /> : null}
    <h2 className="text-xl font-semibold tracking-tight text-slate-950">Stato profilo</h2>
    <p className="mt-2 text-sm leading-6 text-slate-500">
      Tieni aggiornati CV e criteri: ogni modifica può migliorare la qualità delle valutazioni.
    </p>
    <div className="mt-5 space-y-3">
      <InfoItem label="ID profilo" value={data.id} />
      <InfoItem label="Creato il" value={data.createdAt} />
      <InfoItem label="Aggiornato il" value={data.updatedAt} />
    </div>
  </aside>
);

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
    <p className="mt-2 break-words text-sm font-medium text-slate-900">{value}</p>
  </div>
);

// ── Orchestrator ──────────────────────────────────────────────────────────────
export const UserProfileMetadata: React.FC<{ state: LoadableState<UserProfileMetadataViewModelDTO> }> = ({
  state,
}) => {
  switch (state.status) {
    case 'loading':
      return <UserProfileMetadataSkeleton />;
    case 'error':
      return <UserProfileMetadataError error={state.error} />;
    case 'success':
      return <UserProfileMetadataView data={state.data} isFetching={state.isFetching} />;
  }
};
