export function buildEvaluationPrompt(
  title: string,
  description: string,
  companyName: string,
  userResume: string,
  searchCriteria: string,
): string {
  return `
Sei un valutatore tecnico e recruiter AI esperto. Devi analizzare la seguente offerta di lavoro rispetto al profilo e ai criteri dell'utente, fornendo una valutazione strutturata in formato JSON.

### DATI OFFERTA DI LAVORO:
- **Titolo Ruolo**: ${title}
- **Azienda**: ${companyName}
- **Descrizione Annuncio**:
${description}

---

### PROFILO CANDIDATO:
- **CV / Esperienze**:
${userResume}

- **Criteri & Desiderata di Ricerca**:
${searchCriteria}

---

### ISTRUZIONI:
1. Valuta l'aderenza del ruolo rispetto ai desiderata dell'utente (0-100).
2. Valuta la competenza tecnica del candidato rispetto ai requisiti del ruolo (0-100).
3. Calcola l'overallScore bilanciato (0-100).
4. Determina la priority ('HIGH', 'MEDIUM', 'LOW', 'DISQUALIFIED').
5. Riassumi brevemente il ruolo in 2-4 frasi nel campo 'summary'.
6. Elenca punti di forza ('pros') e criticità ('cons') come array di stringhe.
7. Fornisci un'analisi dettagliata in markdown ('detailedReasoning').
`;
}
