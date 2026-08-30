# 📄 Linee Guida Curriculum & PDF Worker

## 1. Ciclo di Vita e Stato del Documento
- I task asincroni di generazione binaria (PDF) devono tracciare il proprio stato nel modello di dominio:
  - All'inizio della compilazione Chromium: impostare `pdfStatus = GENERATING`.
  - Al termine dell'upload su MinIO S3: aggiornare `storageKey` e impostare `pdfStatus = READY`.
  - In caso di eccezione o errore di rendering: catturare l'errore e impostare `pdfStatus = FAILED`.
- *Razionale*: L'Outbox pattern traccia solo l'avvenuto invio del messaggio (`PUBLISHED`), mentre l'interfaccia utente ha bisogno di sapere quando il file fisico è disponibile su MinIO per l'anteprima.

## 2. Gestione Storage Oggetti (MinIO / S3)
- **Divieto di BLOB nel Database**: Non salvare mai file binari o PDF compilati come byte o BLOB all'interno di PostgreSQL.
- **Upload su MinIO**:
  - Salvare il PDF nel bucket dedicato `curriculums` con chiave univoca deterministica (es. `curriculums/{jobOfferId}-{timestamp}.pdf`).
  - Nel database relazionale salvare esclusivamente la stringa `storageKey`.
- **Streaming Proxy da API Gateway**: L'accesso al file da parte del browser avviene tramite l'endpoint API Gateway (`/job-offers/:id/curriculum/pdf`), che esegue lo stream dei byte da MinIO impostando gli header HTTP `Content-Type: application/pdf` e `Content-Disposition: inline`.

## 3. Compilazione Headless & Risorse
- Eseguire il rendering Chromium con le opzioni headless ottimizzate (`PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true`, uso del binario di sistema Alpine `/usr/bin/chromium-browser`) per contenere l'uso di memoria.
