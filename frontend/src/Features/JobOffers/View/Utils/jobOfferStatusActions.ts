import type { JobOfferStatus } from '../../State/jobOffersAtoms';

export interface JobOfferStatusAction {
  readonly status: JobOfferStatus;
  readonly label: string;
  readonly tone: 'primary' | 'neutral' | 'warning' | 'danger' | 'success';
}

export const getJobOfferStatusActions = (
  currentStatus: JobOfferStatus,
): readonly JobOfferStatusAction[] => {
  switch (currentStatus) {
    case 'NEW':
      return [
        { status: 'SAVED', label: 'Da candidare', tone: 'success' },
        { status: 'APPLIED', label: 'Candidata', tone: 'primary' },
        { status: 'ARCHIVED', label: 'Scarta annuncio', tone: 'warning' },
      ];
    case 'SAVED':
      return [
        { status: 'APPLIED', label: 'Candidata', tone: 'primary' },
        { status: 'ARCHIVED', label: 'Scarta annuncio', tone: 'warning' },
      ];
    case 'APPLIED':
      return [
        { status: 'SCREENING', label: 'Screening', tone: 'primary' },
        { status: 'INTERVIEWING', label: 'Colloquio', tone: 'primary' },
        { status: 'REJECTED', label: 'Mi hanno rifiutato', tone: 'danger' },
        { status: 'ARCHIVED', label: 'Scarta annuncio', tone: 'warning' },
      ];
    case 'SCREENING':
      return [
        { status: 'INTERVIEWING', label: 'Colloquio', tone: 'primary' },
        { status: 'REJECTED', label: 'Mi hanno rifiutato', tone: 'danger' },
        { status: 'ARCHIVED', label: 'Scarta annuncio', tone: 'warning' },
      ];
    case 'INTERVIEWING':
      return [
        { status: 'OFFER', label: 'Offerta ricevuta', tone: 'success' },
        { status: 'REJECTED', label: 'Mi hanno rifiutato', tone: 'danger' },
        { status: 'ARCHIVED', label: 'Scarta annuncio', tone: 'warning' },
      ];
    case 'OFFER':
      return [
        { status: 'ACCEPTED', label: 'Accettata', tone: 'success' },
        { status: 'REJECTED', label: 'Mi hanno rifiutato', tone: 'danger' },
        { status: 'ARCHIVED', label: 'Scarta annuncio', tone: 'warning' },
      ];
    case 'ACCEPTED':
      return [
        { status: 'ARCHIVED', label: 'Chiudi processo', tone: 'neutral' },
      ];
    case 'REJECTED':
    case 'ARCHIVED':
      return [
        { status: 'NEW', label: 'Da valutare', tone: 'neutral' },
        { status: 'SAVED', label: 'Ripristina da candidare', tone: 'success' },
      ];
  }
};

export const getJobOfferStatusActionClassName = (tone: JobOfferStatusAction['tone']): string => {
  switch (tone) {
    case 'primary':
      return 'border-sky-300 text-sky-700 hover:bg-sky-50';
    case 'success':
      return 'border-emerald-300 text-emerald-700 hover:bg-emerald-50';
    case 'warning':
      return 'border-amber-300 text-amber-700 hover:bg-amber-50';
    case 'danger':
      return 'border-rose-300 text-rose-700 hover:bg-rose-50';
    case 'neutral':
      return 'border-slate-300 text-slate-700 hover:bg-slate-100';
  }
};
