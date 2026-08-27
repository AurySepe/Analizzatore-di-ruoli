import { useCallback } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  curriculumEditorIsEditingAtom,
  curriculumEditorCustomLabelAtom,
  curriculumEditorExplanationAtom,
  curriculumEditorWorkEntriesAtom,
  curriculumEditorProjectsAtom,
  curriculumEditorSelectedPubsAtom,
  curriculumEditorSaveErrorAtom,
  curriculumEditorPdfKeyAtom,
  initCurriculumEditorAtom,
  type WorkFormEntry,
  type ProjectFormEntry,
  type InitCurriculumEditorParams,
} from '../State/curriculumEditorAtoms';
import {
  updateCurriculumTailoringMutationAtom,
} from '../State/jobOffersAtoms';

export interface CurriculumEditorController {
  readonly onOpenEditor: (params: InitCurriculumEditorParams) => void;
  readonly onCloseEditor: () => void;
  readonly onCustomLabelChange: (value: string) => void;
  readonly onExplanationChange: (value: string) => void;
  readonly onAddWork: () => void;
  readonly onRemoveWork: (idx: number) => void;
  readonly onUpdateWork: (idx: number, field: keyof WorkFormEntry, value: string | boolean) => void;
  readonly onAddBaseWork: (base: { name: string; position: string }) => void;
  readonly onAddProject: () => void;
  readonly onRemoveProject: (idx: number) => void;
  readonly onUpdateProject: (idx: number, field: keyof ProjectFormEntry, value: string) => void;
  readonly onAddBaseProject: (base: { name: string; description: string }) => void;
  readonly onTogglePub: (pub: string) => void;
  readonly onSave: (jobOfferId: string) => Promise<void>;
}

export const useCurriculumEditorController = (): CurriculumEditorController => {
  const initEditor = useSetAtom(initCurriculumEditorAtom);
  const setIsEditing = useSetAtom(curriculumEditorIsEditingAtom);
  const setCustomLabel = useSetAtom(curriculumEditorCustomLabelAtom);
  const setExplanation = useSetAtom(curriculumEditorExplanationAtom);
  const [workEntries, setWorkEntries] = useAtom(curriculumEditorWorkEntriesAtom);
  const [projects, setProjects] = useAtom(curriculumEditorProjectsAtom);
  const setSelectedPubs = useSetAtom(curriculumEditorSelectedPubsAtom);
  const setSaveError = useSetAtom(curriculumEditorSaveErrorAtom);
  const setPdfKey = useSetAtom(curriculumEditorPdfKeyAtom);

  const customLabel = useAtomValue(curriculumEditorCustomLabelAtom);
  const explanation = useAtomValue(curriculumEditorExplanationAtom);
  const selectedPubs = useAtomValue(curriculumEditorSelectedPubsAtom);
  const updateMutation = useAtomValue(updateCurriculumTailoringMutationAtom);

  const onOpenEditor = useCallback(
    (params: InitCurriculumEditorParams) => {
      initEditor(params);
    },
    [initEditor],
  );

  const onCloseEditor = useCallback(() => {
    setIsEditing(false);
  }, [setIsEditing]);

  const onCustomLabelChange = useCallback(
    (value: string) => {
      setCustomLabel(value);
    },
    [setCustomLabel],
  );

  const onExplanationChange = useCallback(
    (value: string) => {
      setExplanation(value);
    },
    [setExplanation],
  );

  const onAddWork = useCallback(() => {
    setWorkEntries((prev) => [...prev, { name: '', position: '', summary: '', include: true }]);
  }, [setWorkEntries]);

  const onRemoveWork = useCallback(
    (idx: number) => {
      setWorkEntries((prev) => prev.filter((_, i) => i !== idx));
    },
    [setWorkEntries],
  );

  const onUpdateWork = useCallback(
    (idx: number, field: keyof WorkFormEntry, value: string | boolean) => {
      setWorkEntries((prev) =>
        prev.map((w, i) => (i === idx ? { ...w, [field]: value } : w)),
      );
    },
    [setWorkEntries],
  );

  const onAddBaseWork = useCallback(
    (base: { name: string; position: string }) => {
      setWorkEntries((prev) => {
        if (prev.some((w) => w.name === base.name && w.position === base.position)) return prev;
        return [...prev, { name: base.name, position: base.position, summary: '', include: true }];
      });
    },
    [setWorkEntries],
  );

  const onAddProject = useCallback(() => {
    setProjects((prev) => [...prev, { name: '', description: '' }]);
  }, [setProjects]);

  const onRemoveProject = useCallback(
    (idx: number) => {
      setProjects((prev) => prev.filter((_, i) => i !== idx));
    },
    [setProjects],
  );

  const onUpdateProject = useCallback(
    (idx: number, field: keyof ProjectFormEntry, value: string) => {
      setProjects((prev) =>
        prev.map((p, i) => (i === idx ? { ...p, [field]: value } : p)),
      );
    },
    [setProjects],
  );

  const onAddBaseProject = useCallback(
    (base: { name: string; description: string }) => {
      setProjects((prev) => {
        if (prev.some((p) => p.name === base.name)) return prev;
        return [...prev, { name: base.name, description: base.description }];
      });
    },
    [setProjects],
  );

  const onTogglePub = useCallback(
    (pub: string) => {
      setSelectedPubs((prev) =>
        prev.includes(pub) ? prev.filter((p) => p !== pub) : [...prev, pub],
      );
    },
    [setSelectedPubs],
  );

  const onSave = useCallback(
    async (jobOfferId: string) => {
      setSaveError(null);
      try {
        await updateMutation.mutateAsync({
          id: jobOfferId,
          tailoring: {
            customLabel: customLabel || undefined,
            work: workEntries,
            projects: projects.length > 0 ? projects : undefined,
            selectedPublicationTitles: selectedPubs.length > 0 ? selectedPubs : undefined,
            explanation: explanation || undefined,
          },
        });
        setPdfKey((k) => k + 1);
      } catch (err: unknown) {
        setSaveError(err instanceof Error ? err.message : 'Errore sconosciuto durante il salvataggio.');
        throw err;
      }
    },
    [customLabel, explanation, projects, selectedPubs, setPdfKey, setSaveError, updateMutation, workEntries],
  );

  return {
    onOpenEditor,
    onCloseEditor,
    onCustomLabelChange,
    onExplanationChange,
    onAddWork,
    onRemoveWork,
    onUpdateWork,
    onAddBaseWork,
    onAddProject,
    onRemoveProject,
    onUpdateProject,
    onAddBaseProject,
    onTogglePub,
    onSave,
  };
};
