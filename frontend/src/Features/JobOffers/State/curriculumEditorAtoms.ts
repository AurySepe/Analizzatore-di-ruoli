import { atom } from 'jotai';

export type WorkFormEntry = {
  name: string;
  position: string;
  summary: string;
  include: boolean;
};

export type ProjectFormEntry = {
  name: string;
  description: string;
};

export const curriculumEditorIsEditingAtom = atom<boolean>(false);
export const curriculumEditorCustomLabelAtom = atom<string>('');
export const curriculumEditorExplanationAtom = atom<string>('');
export const curriculumEditorWorkEntriesAtom = atom<WorkFormEntry[]>([]);
export const curriculumEditorProjectsAtom = atom<ProjectFormEntry[]>([]);
export const curriculumEditorSelectedPubsAtom = atom<string[]>([]);
export const curriculumEditorSaveErrorAtom = atom<string | null>(null);
export const curriculumEditorPdfKeyAtom = atom<number>(0);

export interface InitCurriculumEditorParams {
  readonly customLabel?: string | null;
  readonly explanation?: string;
  readonly work?: readonly { name: string; position?: string; summary: string; include?: boolean }[];
  readonly projects?: readonly { name: string; description: string }[];
  readonly selectedPublicationTitles?: readonly string[];
}

export const initCurriculumEditorAtom = atom(
  null,
  (_get, set, params: InitCurriculumEditorParams) => {
    set(curriculumEditorCustomLabelAtom, params.customLabel ?? '');
    set(curriculumEditorExplanationAtom, params.explanation ?? '');
    set(
      curriculumEditorWorkEntriesAtom,
      params.work
        ? params.work.map((w) => ({
            name: w.name ?? '',
            position: w.position ?? '',
            summary: w.summary ?? '',
            include: w.include !== false,
          }))
        : [],
    );
    set(
      curriculumEditorProjectsAtom,
      params.projects
        ? params.projects.map((p) => ({
            name: p.name ?? '',
            description: p.description ?? '',
          }))
        : [],
    );
    set(curriculumEditorSelectedPubsAtom, params.selectedPublicationTitles ? [...params.selectedPublicationTitles] : []);
    set(curriculumEditorSaveErrorAtom, null);
    set(curriculumEditorIsEditingAtom, true);
  },
);
