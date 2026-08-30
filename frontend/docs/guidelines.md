# 🎨 Linee Guida Frontend (React, Jotai, TanStack Query)

## 1. Gestione dello Stato & Caching TanStack Query
- **Invalidazione Gerarchica**:
  - Quando si esegue una mutation che aggiorna un'offerta (es. tailoring, status, note), invalidare la chiave radice `['jobOffers']` per sincronizzare all'istante la scheda di dettaglio, le liste filtrate e i contatori di sfondo.
- **Polling Condizionale per Task Asincroni**:
  - Per operazioni asincrone in corso (es. compilazione PDF), configurare `refetchInterval` condizionale nella query atom:
    - Eseguire polling rapido (es. ogni 1.5s) finché `pdfStatus === 'PENDING' || pdfStatus === 'GENERATING'`.
    - Disattivare il polling (`false`) non appena lo stato diventa `READY` o `FAILED`.

## 2. Anteprima Documenti Iframe & Cache-Busting
- **Cache-Busting URL**: L'URL dei file PDF generati dinamicamente deve sempre includere un parametro timestamp (`?t=${updatedAtTime}`) e un attributo univoco su React (`key={pdfUrl}`).
- *Razionale*: I browser mantengono in cache i PDF visualizzati nei tag `<iframe>` o `<embed>`; il parametro timestamp forza il caricamento del file appena compilato su S3.
- **Feedback di Caricamento Dedicato**: Quando il PDF è in compilazione (`PENDING` o `GENERATING`), nascondere l'iframe e mostrare un box di caricamento animato dedicato con spinner e messaggio descrittivo.
