# 🛠️ Guida all'Implementazione di un Nuovo Extractor

Documentazione delle linee guida e dell'architettura standard per l'integrazione di una nuova fonte di annunci di lavoro nell'**Extractor Worker**.

---

## 📋 Checklist di Implementazione

Quando si aggiunge una nuova fonte (tramite API REST, Web Scraping con Cheerio/Puppeteer, SDK/Librerie o RSS feed), seguire i 5 passi generali:

### 1. Registrare la nuova fonte nell'Enum Prisma (`JobSource`)
Modificare il file `backend/prisma/schema/enums.prisma`:
```prisma
enum JobSource {
  ARBEITNOW
  REMOTIVE
  NOME_NUOVA_FONTE // es. JOBICY, LINKEDIN_SCRAPER, REED
}
```
Eseguire la migrazione ed aggiornare il Prisma Client:
```bash
npm run prisma:migrate:dev -- --name add_nome_nuova_fonte_source
```

---

### 2. Creare la Classe Extractor (`src/apps/extractor-worker/extractors/nome-extractor.ts`)
Creare una classe che estenda `BaseExtractor` e restituisca un array di `RawExtractedJob`:

```typescript
import { JobSource } from '@prisma/client';
import { convertToMarkdown } from '../../../commons/utils/html-to-markdown';
import { BaseExtractor, RawExtractedJob } from './base-extractor';

export class NuovaFonteExtractor extends BaseExtractor {
  public readonly sourceName = JobSource.NOME_NUOVA_FONTE;
  public readonly baseUrl = 'https://...'; // URL base dell'API, RSS o sito target

  private readonly onlyTechAndProduct: boolean;
  private readonly onlyEnglish: boolean;

  // Keyword per ruoli Tech & Product (Software Engineer, Product Manager/Engineer, DevOps, AI, etc.)
  private readonly techAndProductKeywords = [
    'software', 'developer', 'engineer', 'frontend', 'backend', 'fullstack',
    'architect', 'devops', 'cloud', 'data engineer', 'ai engineer',
    'product manager', 'product owner', 'product engineer'
  ];

  // Keyword da escludere (HR, Sales, Marketing non-tech, etc.)
  private readonly excludedRoleKeywords = [
    'hr ', 'human resources', 'recruiter', 'sales', 'accountant', 'marketing', 'office manager'
  ];

  constructor(options: { onlyTechAndProduct?: boolean; onlyEnglish?: boolean } = {}) {
    super();
    this.onlyTechAndProduct = options.onlyTechAndProduct ?? true;
    this.onlyEnglish = options.onlyEnglish ?? true;
  }

  async extract(lastSyncTimestamp?: Date): Promise<RawExtractedJob[]> {
    this.logger.log(`🔍 [${this.sourceName}] Inizio estrazione...`);
    
    // 💡 L'estrazione può avvenire in diversi modi:
    // - API HTTP senza SDK: usando fetchWithRetry(url) ed eventualmente Zod per il parsing.
    // - Web Scraping: usando Puppeteer/Playwright/Cheerio per estrarre il DOM.
    // - Librerie / SDK ufficiali: chiamando direttamente i metodi dell'SDK.

    const extractedJobs: RawExtractedJob[] = [];

    // Esempio generico di iterazione sugli annunci recuperati:
    // for (const item of fetchedJobsList) {
    //   const itemPostedDate = ...;
    //   if (lastSyncTimestamp && itemPostedDate <= lastSyncTimestamp) continue;
    //   ...
    //   extractedJobs.push({
    //     externalId: String(item.id),
    //     source: this.sourceName,
    //     url: item.url,
    //     title: item.title,
    //     companyName: item.company,
    //     location: item.location || 'Remote',
    //     isRemote: true,
    //     rawDescription: item.description,
    //     descriptionMarkdown: convertToMarkdown(item.description),
    //     datePosted: itemPostedDate,
    //   });
    // }

    return extractedJobs;
  }
}
```

---

### 3. Registrare l'Extractor in `ExtractorsService`
In `backend/src/apps/extractor-worker/extractors/extractors.service.ts`:
```typescript
this.registry.register(
  new NuovaFonteExtractor({
    onlyTechAndProduct: true,
    onlyEnglish: true,
  }),
);
```

---

### 4. Strategia di Estrazione e Resilienza
- **API HTTP dirette**: Usare preferibilmente `this.fetchWithRetry(url)` ereditato da `BaseExtractor` per gestire i ritardi, i retry e le risposte `HTTP 429 Rate Limit`. Per payload JSON complessi, è consigliato validare i campi con librerie come **Zod**.
- **Web Scraping**: In caso di scraping HTML (es. Cheerio, Puppeteer), isolare la logica di selettori e parser nella classe dell'extractor ed aggiungere tempi di attesa/delay per evitare blocchi IP.
- **SDK / Librerie terze**: Gestire eventuali eccezioni specifiche della libreria con `try/catch` per evitare che un errore singolo blocchi gli altri estrattori.
- **Paginazione**: 
  - Se la fonte è paginata, applicare un ritardo di cortesia tra le pagine (`await new Promise(res => setTimeout(res, 1000-2000))`).
  - Se restituisce liste per categoria, aggregare i dati ed eliminare duplicati via `Map<externalId, RawExtractedJob>`.

---

### 5. Script di Reset dedicato
Per pulire ed eseguire un re-fetch da capo solo per una fonte specifica senza intaccare le altre:
```bash
npx ts-node scripts/reset-extracted-data.ts NOME_NUOVA_FONTE
```

---

## 🎯 Direttive Generali per la Qualità dei Dati

1. **Solo Software & Product Engineering**: Gli annunci devono essere sempre filtrati per escludere ruoli non pertinenti (amministrazione, HR, sales, tirocini o supporto non-tech).
2. **Filtro Lingua**: Accertarsi che le descrizioni siano in lingua inglese o italiano prima dell'inserimento.
3. **Markdown Sanitized**: Usare la utility `convertToMarkdown()` sulla descrizione grezza per produrre un `descriptionMarkdown` ben formattato per i modelli AI.
4. **Watermark Incrementale**: Rispettare sempre `lastSyncTimestamp` per non riprocessare annunci già salvati nel Database.
5. **Conferma per Azzeramento Dati**: Avvisare SEMPRE l'utente e richiedere conferma prima di eseguire script di reset o migrazioni che comportino l'eliminazione di dati esistenti nel Database.

