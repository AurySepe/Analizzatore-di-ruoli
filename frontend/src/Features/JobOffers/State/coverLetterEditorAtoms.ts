import { atom } from 'jotai';

export const coverLetterEditorIsEditingAtom = atom<boolean>(false);
export const coverLetterEditorCustomLabelAtom = atom<string>('');
export const coverLetterEditorRecipientNameAtom = atom<string>('');
export const coverLetterEditorRecipientTitleAtom = atom<string>('');
export const coverLetterEditorRecipientCompanyAtom = atom<string>('');
export const coverLetterEditorRecipientAddressAtom = atom<string>('');
export const coverLetterEditorRecipientRoleAtom = atom<string>('');
export const coverLetterEditorDateAtom = atom<string>('');
export const coverLetterEditorSalutationAtom = atom<string>('');
export const coverLetterEditorExp1Atom = atom<string>('');
export const coverLetterEditorExp2Atom = atom<string>('');
export const coverLetterEditorMotivationAtom = atom<string>('');
export const coverLetterEditorCallToActionAtom = atom<string>('');
export const coverLetterEditorSignoffAtom = atom<string>('');
export const coverLetterEditorSaveErrorAtom = atom<string | null>(null);
export const coverLetterEditorPdfKeyAtom = atom<number>(0);

export interface InitCoverLetterEditorParams {
  readonly customLabel?: string | null;
  readonly recipientName?: string | null;
  readonly recipientTitle?: string | null;
  readonly recipientCompany: string;
  readonly recipientAddress?: string | null;
  readonly recipientRole: string;
  readonly date: string;
  readonly salutation: string;
  readonly experienceParagraph1: string;
  readonly experienceParagraph2: string;
  readonly companyMotivation: string;
  readonly callToAction: string;
  readonly signoff: string;
}

export const initCoverLetterEditorAtom = atom(
  null,
  (_get, set, params: InitCoverLetterEditorParams) => {
    set(coverLetterEditorCustomLabelAtom, params.customLabel ?? '');
    set(coverLetterEditorRecipientNameAtom, params.recipientName ?? '');
    set(coverLetterEditorRecipientTitleAtom, params.recipientTitle ?? '');
    set(coverLetterEditorRecipientCompanyAtom, params.recipientCompany ?? '');
    set(coverLetterEditorRecipientAddressAtom, params.recipientAddress ?? '');
    set(coverLetterEditorRecipientRoleAtom, params.recipientRole ?? '');
    set(coverLetterEditorDateAtom, params.date ?? '');
    set(coverLetterEditorSalutationAtom, params.salutation ?? '');
    set(coverLetterEditorExp1Atom, params.experienceParagraph1 ?? '');
    set(coverLetterEditorExp2Atom, params.experienceParagraph2 ?? '');
    set(coverLetterEditorMotivationAtom, params.companyMotivation ?? '');
    set(coverLetterEditorCallToActionAtom, params.callToAction ?? '');
    set(coverLetterEditorSignoffAtom, params.signoff ?? '');
    set(coverLetterEditorSaveErrorAtom, null);
    set(coverLetterEditorIsEditingAtom, true);
  },
);
