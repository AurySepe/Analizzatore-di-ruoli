// eslint-disable-next-line @typescript-eslint/no-var-requires
const TurndownService = require('turndown');

const turndownInstance = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '_',
  strongDelimiter: '**',
});

/**
 * Converte qualsiasi stringa di descrizione (HTML, testo formattato o Markdown) 
 * in una stringa Markdown standardizzata e pulita.
 */
export function convertToMarkdown(input: string | null | undefined): string | null {
  if (!input || input.trim() === '') {
    return null;
  }

  // Se l'input contiene tag HTML (es. <p>, <div>, <ul>, <br>), usiamo turndown per convertirlo
  const isHtml = /<[a-z][\s\S]*>/i.test(input);

  if (isHtml) {
    try {
      return turndownInstance.turndown(input);
    } catch (err) {
      console.warn('⚠️ Impossibile convertire HTML in Markdown, restituzione fallback testo:', err);
      return input;
    }
  }

  // Se è testo semplice o già Markdown, lo restituiamo pulito
  return input.trim();
}
