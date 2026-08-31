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
1. **Verifica Deal-Breakers (DISQUALIFIED)**:
   - Se l'annuncio richiede **relocation obbligatoria fuori dall'Europa** (es. USA, Canada, Asia, Australia, ecc.), oppure richiede fuso orario/orari/residenza non compatibili con l'Europa (es. "US Only", "Must reside in North America", "APAC only"), imposta immediatamente \`priority: 'DISQUALIFIED'\`, con \`overallScore: 0\` e \`desireMatchScore: 0\`.
   - Se l'annuncio viola altri deal-breaker (es. stipendio non indicato, agenzia di consulenza/body rental, ruoli Senior/Lead/Founding, lavoro non retribuito), imposta \`priority: 'DISQUALIFIED'\`.
2. Valuta l'aderenza del ruolo rispetto ai desiderata dell'utente (0-100 nel campo 'desireMatchScore').
3. Valuta la competenza tecnica del candidato rispetto ai requisiti del ruolo (0-100 nel campo 'competenceScore').
4. Calcola l'overallScore bilanciato (0-100).
5. Determina la priority ('HIGH', 'MEDIUM', 'LOW', 'DISQUALIFIED').
6. Riassumi brevemente il ruolo in 2-4 frasi nel campo 'summary'.
7. Elenca punti di forza ('pros') e criticità ('cons') come array di stringhe (evidenzia se vi sono vincoli geografici o di fuso orario).
8. Fornisci un'analisi dettagliata in markdown ('detailedReasoning').
`;
}
