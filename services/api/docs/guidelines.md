# 🌐 Linee Guida API Gateway (NestJS & OpenAPI)

## 1. DTO e Contratti OpenAPI
- Tutti i modelli di input/output devono essere decorati con `@ApiProperty()` per garantire che `npm run sync:api` generi tipi TypeScript accurati per il frontend.
- I mapping tra i payload di database (Prisma) e i DTO esposti via HTTP devono avvenire esplicitamente nei mapper (es. `job-offer.mapper.ts`), includendo sempre tutti i campi di stato (come `pdfStatus`).

## 2. Sincronizzazione Tipi OpenAPI $\rightarrow$ Frontend (`sync:api`)
- **Divieto di Tipi Duplicati Manuali**: Non scrivere né duplicare manualmente le interfacce TypeScript delle API dentro il frontend.
- **Workflow Obbligatorio**: Ogni volta che si modificano DTO, controller o schemi Prisma, eseguire:
  ```bash
  npm run sync:api
  ```
  Questo script avvia l'applicazione in modalità isolata per rigenerare `services/api/openapi.json` e aggiornare automaticamente la definizione di tipi fortemente tipizzata in `frontend/src/Core/OpenApi/schema.d.ts`.

## 3. Tracciamento dello Stato dei Task Asincroni
- L'API non deve presupporre che un'operazione asincrona (es. generazione PDF) sia conclusa solo perché il tailoring testuale è stato salvato.
- L'endpoint deve restituire l'effettivo stato del documento (`pdfStatus: PENDING | GENERATING | READY | FAILED`) per consentire al frontend di mostrare lo stato di avanzamento in tempo reale.

---

## 4. Filtri Temporali di Freschezza Cumulativi & Inclusivi
- **Comportamento Inclusivo dei Filtri**:
  - Quando un utente seleziona un filtro di intervallo temporale nelle query REST (es. `freshness`), la clausola di database deve essere **inclusiva verso il passato** (gerarchica):
    - `HOT` (Appena pubblicato): solo $\le 7$ giorni (`gte: d7`).
    - `RECENT` (Recente): $\le 30$ giorni (`gte: d30`), **includendo automaticamente sia gli annunci `HOT` che `RECENT`**.
    - `AGING` (In scadenza / 3 mesi): $\le 90$ giorni (`gte: d90`), **includendo `HOT`, `RECENT` e `AGING`**.
    - `OLD` (Datato): nessun vincolo restrittivo (comprende tutto il database).
- **Distinzione tra Badge e Filtro**:
  - I singoli badge visuali sulle card dell'interfaccia (calcolati da `calculateFreshness`) rimangono puntuali sull'intervallo esatto, mentre il filtro REST aggrega cumulativamente.

