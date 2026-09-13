import { Injectable, Logger } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { baseCoverLetterData } from '../../data/base-cover-letter';

export const CoverLetterAiGenerationSchema = z.object({
  recipientName: z.string().optional().default('').describe('Nome specifico del recruiter se noto nella job description, altrimenti stringa vuota'),
  recipientTitle: z.string().describe('Titolo del team o del hiring manager, es: koppla Hiring Team, Engineering Hiring Team'),
  salutation: z.string().describe('Saluto iniziale formale in inglese, es: Dear koppla Hiring Team,'),
  selectedStory: z.enum(['STORY_1_UPLOAD_REVIEW', 'STORY_2_ASYNC_PIPELINE_LLM', 'COMBINED_STORY']).describe('Identificativo della storia scelta per il paragrafo 1 in base all annuncio'),
  experienceParagraph1: z.string().describe('Primo paragrafo incentrato sull esperienza concreta di MioCFO. Seleziona la variante più appropriata tra Storia 1 (upload/review screen), Storia 2 (pipeline asincrona backend/LLM/LangGraph) o Combinata. Mantieni la struttura al 90% identica alla variante scelta accordando solo le parole chiave tecnologiche con lo stack richiesto.'),
  experienceParagraph2: z.string().describe('Secondo paragrafo sul workflow AI-native con Antigravity IDE, delega agli agenti e code review dell architettura.'),
  companyMotivation: z.string().describe('Terzo paragrafo con motivazione specifica e genuina perche unirsi a questa specifica azienda, collegando gli spunti autentici del candidato (focus tecnico, scala/affidabilità, confronto tecnico, feedback immediato) al prodotto e contesto aziendale reale.'),
  explanation: z.string().describe('Sintesi dell adattamento che spiega esplicitamente: 1) quale storia è stata scelta per il paragrafo 1 e perché; 2) quali spunti motivazionali sono stati valorizzati; 3) valutazione critica, oggettiva e non compiacente sulla reale pertinenza per questo specifico ruolo con punti di forza e gap.'),
});

export type CoverLetterAiGeneration = z.infer<typeof CoverLetterAiGenerationSchema>;

export interface CoverLetterTailoring extends CoverLetterAiGeneration {
  customLabel: string;
  recipientCompany: string;
  recipientAddress: string;
  recipientRole: string;
  date: string;
  callToAction: string;
  signoff: string;
}

function convertZodToJsonSchema(schema: z.ZodTypeAny): Record<string, any> {
  return (zodToJsonSchema as Function)(schema, { $refStrategy: 'none' });
}

@Injectable()
export class CoverLetterGeneratorService {
  private readonly logger = new Logger(CoverLetterGeneratorService.name);
  private aiClient: GoogleGenAI | null = null;
  private readonly apiKey: string;
  private readonly modelName: string;

  constructor() {
    this.apiKey = process.env.CURRICULUM_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';
    this.modelName = process.env.CURRICULUM_GEMINI_MODEL || process.env.COVER_LETTER_MODEL || 'gemini-3.5-flash-lite';
    if (this.apiKey) {
      this.aiClient = new GoogleGenAI({ apiKey: this.apiKey });
    } else {
      this.logger.warn('⚠️ Nessuna CURRICULUM_GEMINI_API_KEY o GEMINI_API_KEY trovata.');
    }
  }

  isAvailable(): boolean {
    return Boolean(this.apiKey && this.aiClient);
  }

  async generate(jobOffer: {
    title: string;
    location?: string | null;
    company?: { name: string } | null;
    rawDescription?: string | null;
    descriptionMarkdown?: string | null;
    skills?: string | null;
  }): Promise<CoverLetterTailoring> {
    const companyName = jobOffer.company?.name || 'Company';
    const jobTitle = jobOffer.title;
    const location = jobOffer.location || 'Remote / Hybrid';
    const jobDescription = jobOffer.descriptionMarkdown || jobOffer.rawDescription || 'Descrizione non disponibile.';

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date());

    if (!this.isAvailable() || !this.aiClient) {
      throw new Error('AI Client non disponibile. Verificare CURRICULUM_GEMINI_API_KEY o GEMINI_API_KEY.');
    }

    this.logger.log(`🤖 Generazione Cover Letter AI (${this.modelName}) per "${jobTitle}" presso "${companyName}"...`);

    const systemInstruction = `
Sei un esperto career advisor e copywriter tecnico di alto livello. Il tuo compito è personalizzare la Cover Letter di Aurelio Sepe per una specifica offerta di lavoro.

STRUTTURA E CONTENUTI FONDAMENTALI DEL CANDIDATO (Aurelio Sepe):
${JSON.stringify(baseCoverLetterData, null, 2)}

DIRETTIVE CHIAVE DI GENERAZIONE:
1. **TYPE SAFETY & FORMATO**:
   - Rispetta rigidamente lo schema JSON richiesto generandone tutti i campi.

2. **SELEZIONE DINAMICA DEL PARAGRAFO 1 (MioCFO Story)**:
   Nei dati di base sono disponibili tre varianti per la storia di MioCFO:
   - **Storia 1 (experienceParagraph1)**: Focus su UX/prodotto, iterazione basata sui feedback utente, passaggio da upload sincrono ad asincrono, UI live progress e review screen (accuratezza 95% su 1.000+ fatture). Ideale per ruoli Product Engineer, Full-Stack con forte orientamento all'interazione utente e frontend, o dove l'attenzione alla UX sia centrale.
   - **Storia 2 (experienceParagraph1AlternativeStory)**: Focus su affidabilità backend, pipeline asincrona a microservizi con task queue BullMQ, architettura agentica con LangGraph (stati distinti, classificazione page-by-page, worker paralleli) e riconciliazione deterministica contabile. Ideale per ruoli Backend Engineer, AI/LLM Engineer, Distributed Systems o ruoli fortemente incentrati su robustezza e architettura dati.
   - **Versione Combinata (experienceParagraph1CombinedStory)**: Unisce l'intera visione end-to-end (dalla redesign UX con UI live progress e review screen fino alla reingegnerizzazione asincrona con BullMQ, LangGraph e dataset di regressione). Ideale per ruoli Senior Full-Stack, Lead Engineer, Founding Engineer o posizioni in cui l'ampiezza a 360° (prodotto + architettura complessa) rappresenti il valore aggiunto decisivo.

   **Criterio operativo**:
   - Analizza la job description e seleziona la variante più idonea impostando il campo "selectedStory": 'STORY_1_UPLOAD_REVIEW' | 'STORY_2_ASYNC_PIPELINE_LLM' | 'COMBINED_STORY'.
   - **Invarianza della narrazione al 90%**: La variante scelta deve preservare al 90% la sua struttura originale. Non riscriverla da zero né alterarne la sequenza causale; applica unicamente un'**accordatura chirurgica di parole chiave** (es. allineare tecnologie o denominazione del ruolo come specificato nell'annuncio).

3. **PARAGRAFO 2 (AI-Native Workflow in Antigravity IDE)**:
   - Mantieni intatta la spiegazione del flusso di lavoro originale (delega ad agenti AI guidati da custom instructions in Antigravity IDE, velocità 10x, review diretta nel codice per garantire architettura e business goals). Fai solo minime accordature di contesto se pertinenti.

4. **PARAGRAFO 3 (MOTIVAZIONE AZIENDALE MIRATA, AUTENTICA E UMANA)**:
   - Non usare template preconfezionati o vuote lusinghe.
   - Utilizza e valorizza gli spunti autentici forniti in "guidelinesForMotivation", selezionando quelli che risuonano maggiormente con la realtà di ${companyName}:
     * Focus tecnico (desiderio di concentrarsi sulla scrittura di codice robusto e architettura invece della burocrazia/vendite tipiche delle startup early-stage).
     * Scala e affidabilità (voglia di confrontarsi con volumi reali, stabilità e sistemi maturi).
     * Crescita e confronto (lavorare a fianco di ingegneri senior con code review rigorose).
     * Ownership dell'intero ciclo di vita (curare il software dal rilascio alla manutenzione reale sul campo).
     * Cultura moderna/flessibile e/o vicinanza al cliente e feedback immediato.
   - Collega questi spunti al prodotto reale di ${companyName}, alla loro missione o alle sfide tecniche concrete menzionate nell'annuncio.

5. **STILE DI SCRITTURA NATURALE & ANTI-AI GUARDRAILS (RIGIDO)**:
   - **Tono Semplice, Umano e Diretto**: Usa frasi chiare, brevi e naturali come quelle dei paragrafi base. Evita qualsiasi tono pomposo, enfatico o accademico.
   - **Blacklist Vocabolario AI**: NON usare MAI parole come *synergy, landscape, delve, revolutionary, beacon, tapestry, cutting-edge, multifaceted, navigate, testament, spearhead, leverage, thrilled, eager, passionate, bespoke, align*.
   - **Punteggiatura Naturale**:
     - VIETATO usare il trattino lungo em-dash ("—") per fare pause drammatiche. Usa solo punti e virgole.
     - VIETATO usare markdown bolding (**parole in grassetto**) dentro i paragrafi della lettera.
     - VIETATO usare due punti (":") per fare micro-elenchi in mezzo ai paragrafi.
     - VIETATO virgolettare parole per fare i "furbi" o metaforici.
   - Voce in prima persona, onesta e focalizzata sul costruire ottimo software. Non inventare fatti o competenze assenti nei dati base.

6. **SPIEGAZIONE STRATEGICA & VALUTAZIONE CRITICA ARGOMENTATA (CAMPO "explanation")**:
   - Nel campo "explanation" devi fornire:
     1. Esplicitare quale variante di storia è stata selezionata per il Paragrafo 1 (Storia 1, Storia 2 o Combinata) e argomentare con precisione la scelta in rapporto ai requisiti del ruolo.
     2. Indicare quali spunti motivazionali autentici sono stati valorizzati nel Paragrafo 3 e perché risultano congruenti con l'azienda.
     3. Una **valutazione critica, rigorosamente oggettiva e non accondiscendente** sull'effettiva pertinenza e adattabilità complessiva del profilo per questo specifico annuncio, evidenziando sia i punti di forza reali sia eventuali gap o distanze tecnologiche/organizzative.
   - **Nota Bene**: Questa valutazione critica è ad uso informativo interno e **NON DEVE INFLUIRE sulla qualità e completezza dei paragrafi generati**, che devono sempre essere professionali e pronti all'uso.
`;

    const userPrompt = `
Genera i contenuti adattati della Cover Letter per la seguente offerta di lavoro:

AZIENDA: ${companyName}
TITOLO RUOLO: ${jobTitle}
LOCATION: ${location}
DATA ODIERNA: ${formattedDate}

DESCRIZIONE COMPLETA ANNUNCIO:
${jobDescription}
`;

    try {
      const response = await this.aiClient.models.generateContent({
        model: this.modelName,
        contents: [
          { role: 'user', parts: [{ text: userPrompt }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.2,
          responseMimeType: 'application/json',
          responseSchema: convertZodToJsonSchema(CoverLetterAiGenerationSchema),
        },
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error('Risposta vuota ricevuta da Gemini Cloud.');
      }

      const parsedJson = JSON.parse(responseText);
      const validated = CoverLetterAiGenerationSchema.parse(parsedJson);

      this.logger.log(`✅ Cover Letter generata con successo per "${jobTitle}" (${companyName})!`);

      // Combinazione deterministica con data odierna reale e anagrafica garantita
      return {
        ...validated,
        customLabel: baseCoverLetterData.basics.label,
        recipientCompany: companyName,
        recipientRole: jobTitle,
        recipientAddress: location,
        date: formattedDate,
        callToAction: baseCoverLetterData.callToAction,
        signoff: baseCoverLetterData.signoff,
      };
    } catch (err: any) {
      this.logger.error(`❌ [CoverLetterGenerator] Errore chiamata LLM per "${jobTitle}" (${companyName}): ${err.message}`);
      throw err;
    }
  }
}
