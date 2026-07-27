# Guida ai Comandi del Progetto (Scripts)

Questo documento spiega come utilizzare correttamente i comandi definiti nel `package.json` per lo sviluppo e il deploy del backend.

## 🗄 Gestione Database (Prisma)

Ogni volta che viene modificato lo schema del database (file in `prisma/schema/`), è **obbligatorio** seguire questo ordine:

1.  **`npm run prisma:migrate:dev`**: Applica le modifiche al database locale e crea una nuova migrazione.
2.  **`npm run prisma:generate`**: Rigenera il Prisma Client per riflettere i cambiamenti nel codice TypeScript.

> [!WARNING]
> Non dimenticare mai di eseguire `prisma:generate` dopo una migrazione, altrimenti TypeScript non riconoscerà i nuovi modelli o campi.

---

## 🚀 Sviluppo Locale

Per testare e sviluppare il progetto velocemente:

-   **`npm run start:dev`**: Avvia l'applicazione in modalità "watch". Il server si riavvierà automaticamente ad ogni modifica del codice. È il comando principale da usare durante lo sviluppo.

---

## 🐳 Docker e Produzione

Per avviare il progetto in locale tramite Docker (Postgres + API):

```bash
docker compose up --build
```

Note:
- Il container dell'API imposta `LOCAL=true` per disabilitare SSL verso Postgres in ambiente locale.
- Puoi sovrascrivere i default creando un file `.env` a partire da `.env.example`.


-   **`npm run startAndMigrate`**: Questo comando esegue le migrazioni di produzione (`migrate deploy`) e poi avvia l'app.
    -   **UTILIZZO**: Deve essere utilizzato **esclusivamente** all'interno dell'immagine Docker (EntryPoint).

---

## 🛠 Altri Comandi Utili

-   **`npm run lint`**: Esegue ESLint con correzione automatica (`--fix`).
-   **`npm run format`**: Formatta il codice usando Prettier.
-   **`npm run build`**: Compila il progetto NestJS nella cartella `dist/`.
