import { useCallback } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  coverLetterEditorIsEditingAtom,
  coverLetterEditorCustomLabelAtom,
  coverLetterEditorRecipientNameAtom,
  coverLetterEditorRecipientTitleAtom,
  coverLetterEditorRecipientCompanyAtom,
  coverLetterEditorRecipientAddressAtom,
  coverLetterEditorRecipientRoleAtom,
  coverLetterEditorDateAtom,
  coverLetterEditorSalutationAtom,
  coverLetterEditorExp1Atom,
  coverLetterEditorExp2Atom,
  coverLetterEditorMotivationAtom,
  coverLetterEditorCallToActionAtom,
  coverLetterEditorSignoffAtom,
  coverLetterEditorSaveErrorAtom,
  coverLetterEditorPdfKeyAtom,
  initCoverLetterEditorAtom,
  type InitCoverLetterEditorParams,
} from '../State/coverLetterEditorAtoms';
import { updateCoverLetterMutationAtom } from '../State/jobOffersAtoms';

export interface CoverLetterEditorController {
  readonly onOpenEditor: (params: InitCoverLetterEditorParams) => void;
  readonly onCloseEditor: () => void;
  readonly onCustomLabelChange: (val: string) => void;
  readonly onRecipientNameChange: (val: string) => void;
  readonly onRecipientTitleChange: (val: string) => void;
  readonly onRecipientCompanyChange: (val: string) => void;
  readonly onRecipientAddressChange: (val: string) => void;
  readonly onRecipientRoleChange: (val: string) => void;
  readonly onDateChange: (val: string) => void;
  readonly onSalutationChange: (val: string) => void;
  readonly onExp1Change: (val: string) => void;
  readonly onExp2Change: (val: string) => void;
  readonly onMotivationChange: (val: string) => void;
  readonly onCallToActionChange: (val: string) => void;
  readonly onSignoffChange: (val: string) => void;
  readonly onSave: (jobOfferId: string) => Promise<void>;
}

export const useCoverLetterEditorController = (): CoverLetterEditorController => {
  const initEditor = useSetAtom(initCoverLetterEditorAtom);
  const setIsEditing = useSetAtom(coverLetterEditorIsEditingAtom);
  const setCustomLabel = useSetAtom(coverLetterEditorCustomLabelAtom);
  const setRecipientName = useSetAtom(coverLetterEditorRecipientNameAtom);
  const setRecipientTitle = useSetAtom(coverLetterEditorRecipientTitleAtom);
  const setRecipientCompany = useSetAtom(coverLetterEditorRecipientCompanyAtom);
  const setRecipientAddress = useSetAtom(coverLetterEditorRecipientAddressAtom);
  const setRecipientRole = useSetAtom(coverLetterEditorRecipientRoleAtom);
  const setDate = useSetAtom(coverLetterEditorDateAtom);
  const setSalutation = useSetAtom(coverLetterEditorSalutationAtom);
  const setExp1 = useSetAtom(coverLetterEditorExp1Atom);
  const setExp2 = useSetAtom(coverLetterEditorExp2Atom);
  const setMotivation = useSetAtom(coverLetterEditorMotivationAtom);
  const setCallToAction = useSetAtom(coverLetterEditorCallToActionAtom);
  const setSignoff = useSetAtom(coverLetterEditorSignoffAtom);
  const setSaveError = useSetAtom(coverLetterEditorSaveErrorAtom);
  const setPdfKey = useSetAtom(coverLetterEditorPdfKeyAtom);

  const customLabel = useAtomValue(coverLetterEditorCustomLabelAtom);
  const recipientName = useAtomValue(coverLetterEditorRecipientNameAtom);
  const recipientTitle = useAtomValue(coverLetterEditorRecipientTitleAtom);
  const recipientCompany = useAtomValue(coverLetterEditorRecipientCompanyAtom);
  const recipientAddress = useAtomValue(coverLetterEditorRecipientAddressAtom);
  const recipientRole = useAtomValue(coverLetterEditorRecipientRoleAtom);
  const date = useAtomValue(coverLetterEditorDateAtom);
  const salutation = useAtomValue(coverLetterEditorSalutationAtom);
  const experienceParagraph1 = useAtomValue(coverLetterEditorExp1Atom);
  const experienceParagraph2 = useAtomValue(coverLetterEditorExp2Atom);
  const companyMotivation = useAtomValue(coverLetterEditorMotivationAtom);
  const callToAction = useAtomValue(coverLetterEditorCallToActionAtom);
  const signoff = useAtomValue(coverLetterEditorSignoffAtom);

  const updateMutation = useAtomValue(updateCoverLetterMutationAtom);

  const onOpenEditor = useCallback(
    (params: InitCoverLetterEditorParams) => {
      initEditor(params);
    },
    [initEditor],
  );

  const onCloseEditor = useCallback(() => {
    setIsEditing(false);
  }, [setIsEditing]);

  const onSave = useCallback(
    async (jobOfferId: string) => {
      setSaveError(null);
      try {
        await updateMutation.mutateAsync({
          id: jobOfferId,
          coverLetter: {
            customLabel: customLabel.trim() || undefined,
            recipientName: recipientName.trim() || undefined,
            recipientTitle: recipientTitle.trim() || undefined,
            recipientCompany: recipientCompany.trim(),
            recipientAddress: recipientAddress.trim() || undefined,
            recipientRole: recipientRole.trim(),
            date: date.trim(),
            salutation: salutation.trim(),
            experienceParagraph1: experienceParagraph1.trim(),
            experienceParagraph2: experienceParagraph2.trim(),
            companyMotivation: companyMotivation.trim(),
            callToAction: callToAction.trim(),
            signoff: signoff.trim(),
          },
        });
        setPdfKey((k) => k + 1);
        setIsEditing(false);
      } catch (err: any) {
        setSaveError(err?.message ?? 'Errore durante il salvataggio della cover letter.');
      }
    },
    [
      customLabel,
      recipientName,
      recipientTitle,
      recipientCompany,
      recipientAddress,
      recipientRole,
      date,
      salutation,
      experienceParagraph1,
      experienceParagraph2,
      companyMotivation,
      callToAction,
      signoff,
      updateMutation,
      setPdfKey,
      setIsEditing,
      setSaveError,
    ],
  );

  return {
    onOpenEditor,
    onCloseEditor,
    onCustomLabelChange: setCustomLabel,
    onRecipientNameChange: setRecipientName,
    onRecipientTitleChange: setRecipientTitle,
    onRecipientCompanyChange: setRecipientCompany,
    onRecipientAddressChange: setRecipientAddress,
    onRecipientRoleChange: setRecipientRole,
    onDateChange: setDate,
    onSalutationChange: setSalutation,
    onExp1Change: setExp1,
    onExp2Change: setExp2,
    onMotivationChange: setMotivation,
    onCallToActionChange: setCallToAction,
    onSignoffChange: setSignoff,
    onSave,
  };
};
