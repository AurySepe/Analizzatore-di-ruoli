import * as fs from 'fs/promises';
import * as path from 'path';

// Helper per formattare le stringhe di data
function formatDate(dateStr?: string): string {
  if (!dateStr) return '';
  const trimmed = dateStr.trim();
  if (/^(present|current|oggi|ora)$/i.test(trimmed)) return 'Present';
  const parts = trimmed.split(/[-/]/);
  if (parts.length >= 2) {
    const year = parts[0];
    const month = parts[1];
    if (year.length === 4 && month.length <= 2) {
      return `${month}/${year}`;
    }
  }
  return dateStr;
}

export async function render(resume: any, customCss?: string): Promise<string> {
  let css = customCss;
  if (!css) {
    const cssPath = path.join(__dirname, 'style.css');
    css = await fs.readFile(cssPath, 'utf-8');
  }

  const basics = resume.basics || {};
  const work = resume.work || [];
  const education = resume.education || [];
  const projects = resume.projects || [];
  const publications = resume.publications || [];
  const languages = resume.languages || [];
  const interests = resume.interests || [];

  const scholarProfile = basics.profiles?.find((p: any) => (p.network || '').toLowerCase().includes('scholar'));
  const scholarUrl = scholarProfile?.url || 'https://scholar.google.com/citations?user=RZ4gW0wAAAAJ';

  const linkedinProfile = basics.profiles?.find((p: any) => (p.network || '').toLowerCase().includes('linkedin'));
  const linkedinUrl = linkedinProfile?.url || 'https://www.linkedin.com/in/aurelio-sepe/';

  const githubProfile = basics.profiles?.find((p: any) => (p.network || '').toLowerCase().includes('github'));
  const githubUrl = githubProfile?.url || 'https://github.com/AurySepe';

  // Work experience formatting
  const workHtml = work.map((w: any) => {
    const bullets = w.summary ? w.summary.split('\n').filter((line: string) => line.trim()) : [];
    const bulletsHtml = bullets.length ? `
      <ul class="resume-list">
        ${bullets.map((b: string) => `<li>${b.replace(/^[-\*\s\•]+/, '').trim()}</li>`).join('')}
      </ul>
    ` : '';

    return `
      <div class="item-wrapper">
        <div class="item-main-header">
          <span class="item-title">${w.position || ''} <span class="item-company">@ ${w.name || ''}</span></span>
          <span class="item-meta">${formatDate(w.startDate)} — ${formatDate(w.endDate)}</span>
        </div>
        ${bulletsHtml}
      </div>
    `;
  }).join('');

  // Technical Projects formatting
  const projectsHtml = projects.map((proj: any) => {
    const bullets = proj.description ? proj.description.split('\n').filter((line: string) => line.trim()) : [];
    const bulletsHtml = bullets.length ? `
      <ul class="resume-list">
        ${bullets.map((b: string) => `<li>${b.replace(/^[-\*\s\•]+/, '').trim()}</li>`).join('')}
      </ul>
    ` : '';

    return `
      <div class="item-wrapper">
        <div class="item-main-header">
          <span class="item-title">${proj.name || ''}</span>
        </div>
        ${bulletsHtml}
      </div>
    `;
  }).join('');

  // Education formatting
  const educationHtml = education.map((edu: any) => {
    const cleanCourses = edu.courses ? edu.courses.filter((c: string) => !/credits/i.test(c)) : [];
    return `
      <div class="item-wrapper">
        <div class="item-main-header">
          <span class="item-title">${edu.studyType || ''} in ${edu.area || ''} <span class="item-company">@ ${edu.institution || ''}</span></span>
          <span class="item-meta">${formatDate(edu.startDate)} — ${formatDate(edu.endDate)}</span>
        </div>
        ${edu.score ? `
          <div class="education-grade">
            Grade: <span>${edu.score}</span>
          </div>
        ` : ''}
        ${cleanCourses.length ? `
          <ul class="resume-list">
            ${cleanCourses.map((course: string) => `<li>${course}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `;
  }).join('');

  // Publications formatting
  const publicationsHtml = publications.map((pub: any) => `
    <div class="publication-item">
      <div class="item-main-header">
        <span class="publication-title">
          ${pub.url ? `<a href="${pub.url}" target="_blank">"${pub.name || ''}"</a>` : `"${pub.name || ''}"`}
        </span>
        <span class="item-meta">${pub.releaseDate || ''}</span>
      </div>
      <div class="publication-venue">
        Published in ${pub.publisher || ''}
      </div>
    </div>
  `).join('');

  // Interests formatting
  const allInterestKeywords: string[] = [];
  interests.forEach((interest: any) => {
    if (interest.keywords) {
      allInterestKeywords.push(...interest.keywords);
    }
  });
  const interestsHtml = allInterestKeywords.length ? `
    <div style="font-size: 9.3px; color: var(--secondary-color); line-height: 1.4;">
      ${allInterestKeywords.join(', ')}
    </div>
  ` : '';

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>${basics.name || 'Curriculum Vitae'}</title>
        <style>${css}</style>
      </head>
      <body>
        <div class="resume-wrapper">
          <!-- HEADER -->
          <header class="header-container" role="banner">
            <div class="header-left">
              <h1 class="header-name">${basics.name || 'Aurelio Sepe'}</h1>
              <div class="header-label">
                <span>${basics.label || 'Full-Stack & Product Engineer'}</span>
              </div>
              <div style="margin-top: 3px; font-size: 7.2px; color: var(--text-muted); line-height: 1.25;">
                I authorize the processing of my personal data in accordance with Art. 13 D. Lgs. 196/2003 and Art. 13 GDPR 679/16.
              </div>
            </div>
            <div class="header-right">
              <div>Email: <a href="mailto:${basics.email || ''}" class="header-contact-link">${basics.email || ''}</a></div>
              <div>LinkedIn: <a href="${linkedinUrl}" target="_blank" class="header-contact-link">linkedin.com/in/aurelio-sepe</a></div>
              <div>GitHub: <a href="${githubUrl}" target="_blank" class="header-contact-link">github.com/AurySepe</a></div>
              <div>Scholar: <a href="${scholarUrl}" target="_blank" class="header-contact-link">Google Scholar Citations</a></div>
              ${languages && languages.length > 0 ? `<div style="margin-top: 2px;">Languages: ${languages.map((l: any) => `${l.language} (${l.fluency})`).join(', ')}</div>` : ''}
            </div>
          </header>

          <!-- WORK EXPERIENCE -->
          ${work.length ? `
            <section class="section-block" aria-label="Work Experience">
              <span class="sr-only">START SECTION: Work Experience</span>
              <div class="section-title-wrapper">
                <h2 class="section-title">Work <em>Experience</em></h2>
              </div>
              <div class="items-list">
                ${workHtml}
              </div>
              <span class="sr-only">END SECTION: Work Experience</span>
            </section>
          ` : ''}

          <!-- TECHNICAL PROJECTS -->
          ${projects.length ? `
            <section class="section-block" aria-label="Technical Projects">
              <span class="sr-only">START SECTION: Technical Projects</span>
              <div class="section-title-wrapper">
                <h2 class="section-title">Technical <em>Projects</em></h2>
              </div>
              <div class="items-list">
                ${projectsHtml}
              </div>
              <span class="sr-only">END SECTION: Technical Projects</span>
            </section>
          ` : ''}

          <!-- EDUCATION HISTORY -->
          ${education.length ? `
            <section class="section-block" aria-label="Education History">
              <span class="sr-only">START SECTION: Education</span>
              <div class="section-title-wrapper">
                <h2 class="section-title">Education <em>History</em></h2>
              </div>
              <div class="items-list">
                ${educationHtml}
              </div>
              <span class="sr-only">END SECTION: Education</span>
            </section>
          ` : ''}

          <!-- FEATURED PUBLICATIONS -->
          ${publications.length ? `
            <section class="section-block" aria-label="Publications">
              <span class="sr-only">START SECTION: Publications</span>
              <div class="section-title-wrapper">
                <h2 class="section-title">Featured <em>Publications</em></h2>
              </div>
              ${resume.publicationsNote ? `
                <div class="publications-note">
                  ${resume.publicationsNote}
                </div>
              ` : ''}
              <div class="publications-list">
                ${publicationsHtml}
              </div>
              <span class="sr-only">END SECTION: Publications</span>
            </section>
          ` : ''}

          <!-- PERSONAL INTERESTS -->
          ${interestsHtml ? `
            <section class="section-block" aria-label="Personal Interests" style="page-break-inside: avoid; break-inside: avoid; margin-bottom: 0;">
              <span class="sr-only">START SECTION: Personal Interests</span>
              <div class="section-title-wrapper">
                <h2 class="section-title">Personal <em>Interests</em></h2>
              </div>
              ${interestsHtml}
              <span class="sr-only">END SECTION: Personal Interests</span>
            </section>
          ` : ''}

        </div>
      </body>
    </html>
  `;
}
