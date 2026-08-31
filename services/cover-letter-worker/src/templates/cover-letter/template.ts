import * as fs from 'fs/promises';
import * as path from 'path';

export interface CoverLetterRenderData {
  basics: {
    name?: string;
    label?: string;
    email?: string;
    phone?: string;
    website?: string;
    profiles?: Array<{ network: string; url: string }>;
  };
  recipient: {
    name?: string;
    title?: string;
    company: string;
    address?: string;
    role: string;
  };
  date: string;
  letter: {
    paragraphs: string[];
  };
}

export async function render(coverLetterData: CoverLetterRenderData, customCss?: string): Promise<string> {
  let css = customCss;
  if (!css) {
    const cssPath = path.join(__dirname, 'style.css');
    css = await fs.readFile(cssPath, 'utf-8');
  }

  const { basics, recipient, date, letter } = coverLetterData;

  const linkedinProfile = basics.profiles?.find((p) => (p.network || '').toLowerCase().includes('linkedin'));
  const linkedinUrl = linkedinProfile ? linkedinProfile.url : 'https://www.linkedin.com/in/aurelio-sepe/';

  const githubProfile = basics.profiles?.find((p) => (p.network || '').toLowerCase().includes('github'));
  const githubUrl = githubProfile ? githubProfile.url : 'https://github.com/AurySepe';

  // Format paragraphs
  const paragraphsHtml = (letter?.paragraphs || [])
    .map((p) => {
      if (p.toLowerCase().includes('sincerely')) {
        return `
          <div class="closing-block">
            <p class="closing-signoff">${p}</p>
            <p class="closing-name">${basics.name || 'Aurelio Sepe'}</p>
          </div>
        `;
      }
      return `<p class="letter-p">${p}</p>`;
    })
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Cover Letter - ${basics.name || 'Aurelio Sepe'}</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        <div class="resume-wrapper">
          <!-- HEADER -->
          <header class="header-container" role="banner">
            <div class="header-left">
              <h1 class="header-name">${basics.name || 'Aurelio Sepe'}</h1>
              <div class="header-label">${basics.label || 'Full-Stack & Product Engineer'}</div>
            </div>
            <div class="header-right">
              <div>Email: <a href="mailto:${basics.email || ''}" class="header-contact-link">${basics.email || ''}</a></div>
              <div>LinkedIn: <a href="${linkedinUrl}" target="_blank" class="header-contact-link">linkedin.com/in/aurelio-sepe</a></div>
              <div>GitHub: <a href="${githubUrl}" target="_blank" class="header-contact-link">github.com/AurySepe</a></div>
              <div style="margin-top: 2px;">Phone: ${basics.phone || ''}</div>
            </div>
          </header>

          <!-- RECIPIENT & DATE -->
          <div class="recipient-block">
            <div class="letter-date">${date}</div>
            <div style="font-size: 9px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 2px;">To:</div>
            ${recipient.name ? `<div class="recipient-company">${recipient.name}</div><div style="font-size: 9px; color: var(--text-muted); margin-bottom: 2px;">${recipient.title || ''}</div>` : ''}
            <div class="${!recipient.name ? 'recipient-company' : ''}">${recipient.company}</div>
            <div>${recipient.address || ''}</div>
          </div>

          <!-- SUBJECT -->
          <div class="letter-subject">
            Subject: Application for the ${recipient.role} position
          </div>

          <!-- LETTER BODY -->
          <main role="main">
            ${paragraphsHtml}
          </main>

          <!-- GDPR FOOTER -->
          <footer aria-label="Privacy Declaration" style="margin-top: 24px; padding-top: 6px; border-top: 1px dashed var(--border-color); page-break-inside: avoid; break-inside: avoid;">
            <span style="font-size: 8px; color: var(--text-muted); display: block; line-height: 1.3;">
              I authorize the processing of my personal data in accordance with art. 13 d. lgs. 30 June 2003 n. 196 and art. 13 GDPR 679/16.
            </span>
          </footer>
        </div>
      </body>
    </html>
  `;
}
