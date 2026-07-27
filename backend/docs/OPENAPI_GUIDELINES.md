# Linee Guida OpenAPI (Swagger)

In questo progetto, la documentazione OpenAPI (Swagger) non è solo un accessorio, ma il **contratto fondamentale** che guida lo sviluppo del Backend e permette la generazione automatica degli SDK per il Frontend.

## 🛠 Integrazione e Visualizzazione

-   **Endpoint UI**: La documentazione interattiva è disponibile all'indirizzo `/api` (es. `http://localhost:3000/api`).
-   **File Spec**: Ad ogni avvio dell'applicazione in modalità sviluppo, viene rigenerato il file `MioCfo_Openapi.json` nella root del progetto. Questo file viene utilizzato per generare i client TypeScript/Flutter.

---

## 🏗 Come OpenAPI Guida la Creazione delle Rotte

Ogni rotta definita in un Controller deve essere "auto-esplicativa" per Swagger seguendo queste regole:

### 1. Tagging dei Controller
Ogni controller deve avere il decoratore `@ApiTags('nome-modulo')` per raggruppare logicamente gli endpoint nella documentazione.

### 2. Documentazione dei DTO (Mandatoria)
Swagger non è in grado di leggere i tipi TypeScript a runtime senza decoratori espliciti.
-   **`@ApiProperty()`**: Ogni campo di ogni DTO (sia in entrata che in uscita) deve avere questo decoratore.
-   **Specificità dei Tipi**: Per i numeri interi, usa sempre `@ApiProperty({ type: 'integer' })`.
-   **Ereditarietà**: Usa `OmitType`, `PickType` e `PartialType` di `@nestjs/swagger` (non quelli di NestJS standard) per mantenere la documentazione coerente tra classi padre e figlio.

### 3. Sicurezza (Auth)
Ogni endpoint o controller protetto da `AuthGuard()` deve avere il decoratore **`@ApiBearerAuth()`**. Senza di esso, Swagger UI non mostrerà il pulsante "Authorize" e non invierà il token JWT nelle richieste di test.

### 4. Risposte Complesse (Paginazione)
Per gli endpoint che restituiscono dati paginati, non usare un generico `PaginatedDto`. Usa il decoratore custom:
`@ApiPaginatedResponse(IlTuoDto)`
Questo permette a Swagger di mostrare correttamente lo schema dell'oggetto contenuto nell'array `data`.

### 5. Descrizioni e Operazioni
Usa `@ApiOperation({ summary: 'Breve descrizione' })` per spiegare cosa fa l'endpoint se il nome del metodo non è sufficientemente chiaro.

---

## 🔍 Checklist OpenAPI per l'AI

Prima di completare una rotta, verifica:
- [ ] Il Controller ha `@ApiTags()`?
- [ ] L'endpoint ha `@ApiBearerAuth()` se è protetto?
- [ ] Tutti i campi dei DTO coinvolti hanno `@ApiProperty()`?
- [ ] I tipi numerici sono specificati correttamente (integer vs number)?
- [ ] Le risposte paginate usano `@ApiPaginatedResponse()`?
