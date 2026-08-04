import { Injectable, Logger } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { aiConfig } from '../../../../config/ai.config';
import { ResumeTailoringSchema, type ResumeTailoring } from '../pdf/schema';
import { writingInstructions } from '../../data/writing-instructions';
import { masterKnowledge } from '../../data/master-knowledge';
import { baseResumeData } from '../../data/base-data';

function convertZodToJsonSchema(schema: z.ZodTypeAny): Record<string, any> {
  return (zodToJsonSchema as Function)(schema, { $refStrategy: 'none' });
}

@Injectable()
export class CurriculumLlmService {
  private readonly logger = new Logger(CurriculumLlmService.name);
  private aiClient: GoogleGenAI | null = null;
  private readonly apiKey: string;
  private readonly modelName: string;
  private readonly timeoutMs: number;

  constructor() {
    // Utilizziamo la configurazione AI ed API Key specifica per il curriculum worker
    this.apiKey = aiConfig.curriculum.apiKey;
    this.modelName = aiConfig.curriculum.model;
    this.timeoutMs = aiConfig.curriculum.timeoutMs;

    if (this.apiKey) {
      this.aiClient = new GoogleGenAI({ apiKey: this.apiKey });
    } else {
      this.logger.warn('⚠️ CURRICULUM_GEMINI_API_KEY non trovata nella configurazione. LlmService disabilitato.');
    }
  }

  isAvailable(): boolean {
    return Boolean(this.apiKey && this.aiClient);
  }

  /**
   * Genera l'oggetto ResumeTailoring personalizzato tramite Gemini 3.5 / 3.1 Flash
   */
  async generateTailoring(jobOffer: {
    title: string;
    company?: { name: string } | null;
    rawDescription?: string | null;
    descriptionMarkdown?: string | null;
    skills?: string | null;
  }): Promise<ResumeTailoring> {
    if (!this.isAvailable() || !this.aiClient) {
      throw new Error('Gemini AI Client non disponibile o API Key mancante.');
    }

    const companyName = jobOffer.company?.name || 'Azienda non specificata';
    const jobDescription = jobOffer.descriptionMarkdown || jobOffer.rawDescription || 'Descrizione non disponibile.';
    const requiredSkills = jobOffer.skills || 'Non specificate';

    this.logger.log(`🤖 Invio richiesta a Gemini (${this.modelName}) per l'annuncio "${jobOffer.title}" (${companyName})...`);

    const systemInstruction = `
Sei un esperto resume writer e career strategist specializzato nella creazione di curriculum ad alto impatto per ruoli software engineering e product.

DEVI SEGUIRE RIGOROSAMENTE LE SEGUENTI DIRETTIVE:

1. **LINEE GUIDA DI SCRITTURA (WritingInstructions)**:
${writingInstructions}

2. **FATTI ED ESPERIENZE VERIFICATE DEL CANDIDATO (Master Knowledge)**:
${masterKnowledge}

3. **STRUTTURA BASE DEL CURRICULUM (Base Data JSON)**:
${JSON.stringify(baseResumeData, null, 2)}

- **Logica Formula XYZ di Google**: Ogni bullet point nelle esperienze lavorative (summary) e nei progetti (description) deve applicare in modo naturale la logica XYZ (Impatto + Metrica + Soluzione Tecnica), integrando le informazioni in modo fluido senza frasi meccaniche o forzature.
- **Autenticità al 100%**: NON inventare, esagerare o distorcere mai dati o tecnologie non presenti in Master Knowledge / Base Data. Riformula ed enfatizza solo i fatti reali verificate del candidato.
- **Clausola di Contesto Prodotto OBBLIGATORIA (Non Negoziabile)**: Per OGNI esperienza o progetto che riguarda un prodotto reale (*MioCFO*, *LearningVerse*, *HapGree*, *MatEditPro*, *FitRats*, *BotanicAR*), è TASSATIVAMENTE OBBLIGATORIO includere la clausola o apposizione che spiega CHIARAMENTE cosa fa il prodotto e a cosa serve (es. "Co-created MioCFO, an SME B2B financial advisory platform for automated cash flow categorization, by...", "Monetized LearningVerse, a multiplayer VR language learning app for Meta Quest, by..."). È VIETATO OMETTERE questa spiegazione di contesto o sostituirla con termini generici ed anonimi.
- **Ownership di Co-Creator & Founder**: MANTIENI SEMPRE l'evidenza che il candidato è il **Co-Creator / Founder / Lead Developer** dei progetti da zero (zero-to-one) come MioCFO, Commigo/LearningVerse e FitRats. La riformulazione dei bullet point non deve mai far sembrare il candidato un semplice esecutore secondario, ma deve trasmettere chiaramente la creazione attiva e la leadership tecnica iniziale del prodotto (es. "Co-created and engineered MioCFO...", "Co-founded Commigo and built LearningVerse...").
- **Direttive Anti-AI (Tone & Typographical Camouflage)**: Rispetta tassativamente il divieto di parole cliché (landscape, delve, cutting-edge, etc.), evita l'em-dash ("—"), non usare mai il grassetto markdown (bold) nel testo dei bullet point, limita l'uso dei due punti e rispetta l'uso del minuscolo per concetti/metodologie (es. "agile development").
- **Formattazione Bullet**: Separa ciascun bullet point con il carattere di a capo (\n).
- **Progetti Tecnici**: Includi 'projects' SOLO se sono strettamente pertinenti all'annuncio ed aggiungono valore oltre alle esperienze lavorative. Altrimenti ometti o restituisci array vuoto per 'projects'.
- **Pubblicazioni**: Seleziona in 'selectedPublicationTitles' al MASSIMO 2 pubblicazioni (massimo 2 titoli esatti, oppure 1 o 0 se non strettamente pertinenti) tra quelle in Base Data / Master Knowledge maggiormente rilevanti per questo ruolo.
- **Identificazione Esperienze Lavorative**: Nell'array 'work', specifica SEMPRE sia 'name' che 'position' per identificare in modo univoco e privo di ambiguità l'esperienza corrispondente in Base Data (specialmente per enti come 'University of Salerno' che hanno più posizioni distinte). Se imposti 'include': true su un'esperienza, assicurati di includere sia 'name' che 'position' esatti per evitare che venga filtrata erratamente.
- **STRATEGIA E SPIEGAZIONE DELLE MODIFICHE (explanation)**: In 'explanation', struttura il testo in Markdown organizzato in due sezioni ben definite:
  1. **🎯 Strategia di Posizionamento**: Un paragrafo iniziale conciso ed incisivo che spiega la strategia di posizionamento pensata per far risaltare il CV (es. l'inquadramento del ruolo, l'orientamento ai risultati di business/prodotto e le leve chiave per catturare l'attenzione del recruiter per questo specifico annuncio).
  2. **📌 Dettaglio Modifiche Apportate**: Un elenco sintetico in bullet point delle variazioni concrete apportate rispetto al CV base:
     - Quali sezioni/esperienze/bullet point sono stati riadattati o riscritti;
     - Quali competenze, metriche o traguardi reali del candidato sono stati enfatizzati e PERCHÉ (motivazione strategica rispetto ai requisiti dell'offerta).
`;

    const userPrompt = `
ANNUNCIO DI LAVORO TARGET:
- Titolo Ruolo: ${jobOffer.title}
- Azienda: ${companyName}
- Competenze Richieste (Estratte): ${requiredSkills}
- Descrizione Offerta:
${jobDescription.slice(0, 4000)}

Genera l'oggetto JSON di personalizzazione (ResumeTailoring) per adattare il CV a questo specifico annuncio.
`;

    const jsonSchema = convertZodToJsonSchema(ResumeTailoringSchema);

    const startMs = Date.now();

    const apiCallPromise = this.aiClient.models.generateContent({
      model: this.modelName,
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.1,
        responseMimeType: 'application/json',
        responseSchema: jsonSchema,
      },
    });

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => {
        reject(new Error(`Timeout di ${this.timeoutMs / 1000}s superato per la generazione curriculum con Gemini (${this.modelName})`));
      }, this.timeoutMs);
    });

    try {
      const response = await Promise.race([apiCallPromise, timeoutPromise]);
      const elapsedSeconds = ((Date.now() - startMs) / 1000).toFixed(2);
      this.logger.log(`⚡ [Gemini AI] Personalizzazione generata con successo in ${elapsedSeconds}s!`);

      const textOutput = response.text || '';
      if (!textOutput || textOutput.trim().length === 0) {
        throw new Error('Gemini API ha restituito una risposta vuota.');
      }

      // Cleaning e parsing del JSON
      let cleanedText = textOutput.trim();
      cleanedText = cleanedText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
      const firstBrace = cleanedText.indexOf('{');
      const lastBrace = cleanedText.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        cleanedText = cleanedText.slice(firstBrace, lastBrace + 1);
      }

      const rawParsed = JSON.parse(cleanedText);

      // Validazione con Zod Schema
      const validatedTailoring = ResumeTailoringSchema.parse(rawParsed);
      return validatedTailoring;
    } catch (err: any) {
      this.logger.error(`❌ Errore durante la chiamata Gemini AI per l'annuncio "${jobOffer.title}":`, err?.message || err);
      throw err;
    }
  }
}
