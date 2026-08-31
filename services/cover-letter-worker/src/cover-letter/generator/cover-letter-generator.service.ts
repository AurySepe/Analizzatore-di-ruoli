import { Injectable, Logger } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { baseCoverLetterData } from '../../data/base-cover-letter';

export const CoverLetterAiGenerationSchema = z.object({
  recipientName: z.string().optional().default('').describe('Nome specifico del recruiter se noto nella job description, altrimenti stringa vuota'),
  recipientTitle: z.string().describe('Titolo del team o del hiring manager, es: koppla Hiring Team, Engineering Hiring Team'),
  salutation: z.string().describe('Saluto iniziale formale in inglese, es: Dear koppla Hiring Team,'),
  experienceParagraph1: z.string().describe('Primo paragrafo incentrato sull esperienza concreta di MioCFO, upload asincrono e review screen con accuratezza 95%. Mantieni la struttura al 90% identica accordando solo le parole chiave tecnologiche con lo stack richiesto.'),
  experienceParagraph2: z.string().describe('Secondo paragrafo sul workflow AI-native con Antigravity IDE, delega agli agenti e code review dell architettura.'),
  companyMotivation: z.string().describe('Terzo paragrafo con motivazione specifica e genuina perche unirsi a questa specifica azienda, citando il loro prodotto e missione.'),
  explanation: z.string().describe('Sintesi dell adattamento E valutazione critica, oggettiva e non compiacente sulla reale pertinenza della storia di MioCFO e del workflow AI per questo specifico ruolo, spiegando dettagliatamente il PERCHÉ (punti di contatto forti e potenziali gap o discrepanze).'),
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

2. **INVARIANZA DELLA NARRAZIONE (NON RISCRIVERE DA ZERO)**:
   - I paragrafi 1 e 2 devono preservare al 90% la loro struttura testuale originale.
   - **Paragrafo 1 (MioCFO Story)**: La storia reale (upload fatture sincrono bloccante -> ascolto feedback utenti -> backend task queue asincrona con UI live progress -> review screen per errori AI -> 95% accuratezza su 1.000+ fatture) deve rimanere IDENTICA nella sequenza logica.
   - Fai solo **accordature chirurgiche di parole chiave** (es. allineare le tecnologie citate all'inizio: TypeScript, React, Next.js, Vue, NestJS, Node.js, Python, PostgreSQL, REST/GraphQL, distributed systems, o il focus specifico "Product Engineer" / "Frontend Engineer" / "Full-Stack Engineer" richiesto dall'annuncio).
   - **Paragrafo 2 (AI-Native Workflow in Antigravity IDE)**: Mantieni intatta la spiegazione del flusso di lavoro (delega ad agenti AI guidati da custom instructions, velocità 10x, review diretta nel codice per garantire architettura e business goals).

3. **PARAGRAFO 3 (MOTIVAZIONE AZIENDALE MIRATA, DIRETTA E UMANA)**:
   - Spiega con tono autentico, semplice e senza frasi fatte perché Aurelio vuole lavorare specificamente in ${companyName}.
   - Cita il loro prodotto reale, gli utenti a cui si rivolgono o le sfide tecniche concrete citate nell'annuncio.
   - Collega la sua passione di founder/product builder (costruire prodotti utili parlando con gli utenti e usando workflow AI) al contributo che darà in ${companyName}.

4. **STILE DI SCRITTURA NATURALE & ANTI-AI GUARDRAILS (RIGIDO)**:
   - **Tono Semplice, Umano e Diretto**: Usa frasi chiare, brevi e naturali come quelle dei paragrafi base. Evita qualsiasi tono pomposo, enfatico o accademico.
   - **Blacklist Vocabolario AI**: NON usare MAI parole come *synergy, landscape, delve, revolutionary, beacon, tapestry, cutting-edge, multifaceted, navigate, testament, spearhead, leverage, thrilled, eager, passionate, bespoke, align*.
   - **Punteggiatura Naturale**:
     - VIETATO usare il trattino lungo em-dash ("—") per fare pause drammatiche. Usa solo punti e virgole.
     - VIETATO usare markdown bolding (**parole in grassetto**) dentro i paragrafi della lettera.
     - VIETATO usare due punti (":") per fare micro-elenchi in mezzo ai paragrafi.
     - VIETATO virgolettare parole per fare i "furbi" o metaforici.
   - Voce in prima persona, onesta e focalizzata sul costruire ottimi prodotti software. Non inventare mai fatti o competenze non presenti nei dati base.

5. **SPIEGAZIONE STRATEGICA & VALUTAZIONE CRITICA ARGOMENTATA (CAMPO "explanation")**:
   - Nel campo "explanation" devi fornire:
     1. Una sintesi delle parole chiave e scelte di adattamento effettuate per questo ruolo.
     2. Una **valutazione critica, rigorosamente oggettiva e non accondiscendente** sull'effettiva pertinenza e adattabilità della storia reale di MioCFO e della metodologia AI per questo specifico annuncio.
     3. **Spiega dettagliatamente il PERCHÉ di questo giudizio**: argomenta con onestà quali aspetti si sposano perfettamente con i requisiti del ruolo e quali invece risultano meno attinenti o distanti rispetto a ciò che l'azienda cerca (es. se cercano uno specialista C++/embedded a basso livello vs web product engineering). Non dare per scontato che la storia sia adatta a prescindere: sii imparziale e costruttivo.
   - **Nota Bene**: Questa valutazione critica è puramente informativa per il candidato e **NON DEVE INFLUIRE sulla generazione dei paragrafi 1 e 2**, che vanno SEMPRE inclusi e generati nella lettera con le parole chiave accordate.
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
