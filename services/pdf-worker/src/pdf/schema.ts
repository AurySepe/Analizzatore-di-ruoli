import { z } from 'zod';

export const ResumeProfileSchema = z.object({
  network: z.string().min(1),
  username: z.string().min(1).optional(),
  url: z.string().url("URL profilo non valido"),
});

export const ResumeBasicsSchema = z.object({
  name: z.string().min(1, "Il nome è obbligatorio"),
  label: z.string().min(1, "Il titolo professionale (label) è obbligatorio"),
  email: z.string().email("Email non valida"),
  url: z.string().url().optional(),
  nationality: z.string().optional(),
  profiles: z.array(ResumeProfileSchema).min(1, "Almeno un profilo (es. LinkedIn) è richiesto"),
});

export const ResumeWorkItemSchema = z.object({
  name: z.string().min(1, "Il nome dell'azienda è obbligatorio"),
  position: z.string().min(1, "La posizione ricoperta è obbligatoria"),
  url: z.string().url().optional(),
  startDate: z.string().min(1, "La data di inizio è obbligatoria"),
  endDate: z.string().min(1, "La data di fine (o Present) è obbligatoria"),
  summary: z.string().min(1, "Il sommario con i punti elenco è obbligatorio"),
});

export const ResumeEducationItemSchema = z.object({
  institution: z.string().min(1, "L'istituzione è obbligatoria"),
  url: z.string().url().optional(),
  area: z.string().min(1, "L'area di studio è obbligatoria"),
  studyType: z.string().min(1, "Il tipo di titolo è obbligatorio"),
  startDate: z.string().min(1, "La data di inizio è obbligatoria"),
  endDate: z.string().min(1, "La data di fine è obbligatoria"),
  score: z.string().optional(),
  courses: z.array(z.string()).optional(),
});

export const ResumeProjectItemSchema = z.object({
  name: z.string().min(1, "Il nome del progetto è obbligatorio"),
  description: z.string().min(1, "La descrizione del progetto è obbligatoria"),
  url: z.string().url().optional(),
});

export const ResumePublicationItemSchema = z.object({
  name: z.string().min(1, "Il titolo della pubblicazione è obbligatorio"),
  publisher: z.string().min(1, "L'editore/conference è obbligatorio"),
  releaseDate: z.string().min(1, "La data di pubblicazione è obbligatoria"),
  url: z.string().url().optional(),
});

export const ResumeLanguageItemSchema = z.object({
  language: z.string().min(1, "La lingua è obbligatoria"),
  fluency: z.string().min(1, "Il livello di padronanza è obbligatorio"),
});

export const ResumeInterestItemSchema = z.object({
  name: z.string().optional(),
  keywords: z.array(z.string()).min(1, "Almeno una parola chiave per l'interesse è richiesta"),
});

export const FullResumeSchema = z.object({
  basics: ResumeBasicsSchema,
  work: z.array(ResumeWorkItemSchema).min(1, "Almeno un'esperienza lavorativa è richiesta"),
  education: z.array(ResumeEducationItemSchema).min(1, "Almeno un titolo di studio è richiesto"),
  projects: z.array(ResumeProjectItemSchema).optional(),
  publicationsNote: z.string().optional(),
  publications: z.array(ResumePublicationItemSchema).optional(),
  languages: z.array(ResumeLanguageItemSchema).min(1, "Almeno una lingua è richiesta"),
  interests: z.array(ResumeInterestItemSchema).optional(),
});

export type FullResumeData = z.infer<typeof FullResumeSchema>;

export const WorkTailoringSchema = z.object({
  name: z.string().describe("Nome dell'azienda (es. 'MioCFO', 'Commigo') corrispondente in base.json"),
  position: z.string().optional().describe("Titolo della posizione affinato per il ruolo dell'annuncio"),
  summary: z.string().min(1).describe("Bullet point riformulati in formato Google XYZ per questa esperienza"),
  include: z.boolean().default(true).optional().describe("Se false, esclude questa esperienza dal CV generato"),
});

export const ProjectTailoringSchema = z.object({
  name: z.string().describe("Nome del progetto (es. 'cARdefender', 'BotanicAR')"),
  description: z.string().min(1).describe("Descrizione/bullet point riformulati per questo progetto"),
});

export const ResumeTailoringSchema = z.object({
  customLabel: z.string().optional(),
  work: z.array(WorkTailoringSchema).optional(),
  projects: z.array(ProjectTailoringSchema).optional(),
  selectedPublicationTitles: z.array(z.string()).max(2).optional(),
  explanation: z.string().min(1, "La spiegazione delle scelte di personalizzazione è obbligatoria"),
});

export type ResumeTailoring = z.infer<typeof ResumeTailoringSchema>;

export function mergeResumeWithTailoring(
  baseResume: FullResumeData,
  tailoring: ResumeTailoring,
): FullResumeData {
  const label = tailoring.customLabel?.trim() || baseResume.basics.label;

  let mergedWork = baseResume.work;
  if (tailoring.work && tailoring.work.length > 0) {
    const findOverride = (baseName: string, basePosition: string) => {
      const normBaseName = baseName.trim().toLowerCase();
      const normBasePos = basePosition.trim().toLowerCase();

      for (const w of tailoring.work!) {
        const normWName = w.name.trim().toLowerCase();
        const normWPos = (w.position || '').trim().toLowerCase();
        if (normWName === normBaseName && normWPos === normBasePos) {
          return w;
        }
      }

      for (const w of tailoring.work!) {
        const normWName = w.name.trim().toLowerCase();
        const normWPos = (w.position || '').trim().toLowerCase();
        if (normWName === normBaseName && normWPos && (normWPos.includes(normBasePos) || normBasePos.includes(normWPos))) {
          return w;
        }
      }

      const sameCompanyBaseCount = baseResume.work.filter(w => w.name.trim().toLowerCase() === normBaseName).length;
      if (sameCompanyBaseCount === 1) {
        for (const w of tailoring.work!) {
          if (w.name.trim().toLowerCase() === normBaseName) {
            return w;
          }
        }
      }

      return undefined;
    };

    mergedWork = baseResume.work
      .filter(baseW => {
        const override = findOverride(baseW.name, baseW.position);
        return override ? override.include !== false : true;
      })
      .map(baseW => {
        const override = findOverride(baseW.name, baseW.position);
        if (!override) return baseW;
        return {
          ...baseW,
          position: override.position?.trim() || baseW.position,
          summary: override.summary,
        };
      });
  }

  let mergedProjects: FullResumeData['projects'] = undefined;
  if (tailoring.projects && tailoring.projects.length > 0) {
    const projMap = new Map(tailoring.projects.map(p => [p.name.trim().toLowerCase(), p]));
    mergedProjects = baseResume.projects
      ?.filter(baseP => projMap.has(baseP.name.trim().toLowerCase()))
      .map(baseP => {
        const override = projMap.get(baseP.name.trim().toLowerCase())!;
        return {
          ...baseP,
          description: override.description,
        };
      });
  }

  let mergedPublications = baseResume.publications;
  if (tailoring.selectedPublicationTitles && tailoring.selectedPublicationTitles.length > 0) {
    const selectedSet = new Set(tailoring.selectedPublicationTitles.map(t => t.trim().toLowerCase()));
    mergedPublications = baseResume.publications?.filter(pub =>
      selectedSet.has(pub.name.trim().toLowerCase()),
    );
  }

  return {
    ...baseResume,
    basics: {
      ...baseResume.basics,
      label,
    },
    work: mergedWork,
    projects: mergedProjects,
    publications: mergedPublications,
  };
}
