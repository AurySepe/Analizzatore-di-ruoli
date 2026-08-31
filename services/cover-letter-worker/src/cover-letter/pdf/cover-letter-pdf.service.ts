import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as fsSync from 'fs';
import * as path from 'path';
import puppeteer from 'puppeteer';
import { render, CoverLetterRenderData } from '../../templates/cover-letter/template';
import { baseCoverLetterData } from '../../data/base-cover-letter';

function resolveTemplateCssPath(): string {
  const candidates = [
    path.resolve(__dirname, '../../templates/cover-letter/style.css'),
    path.resolve(__dirname, '../templates/cover-letter/style.css'),
    path.resolve(process.cwd(), 'dist', 'templates', 'cover-letter', 'style.css'),
    path.resolve(process.cwd(), 'src', 'templates', 'cover-letter', 'style.css'),
  ];

  for (const cand of candidates) {
    if (fsSync.existsSync(cand)) {
      return cand;
    }
  }

  return candidates[0];
}

@Injectable()
export class CoverLetterPdfService {
  private readonly logger = new Logger(CoverLetterPdfService.name);

  async generatePdf(data: {
    customLabel?: string | null;
    recipientName?: string | null;
    recipientTitle?: string | null;
    recipientCompany: string;
    recipientAddress?: string | null;
    recipientRole: string;
    date: string;
    salutation: string;
    experienceParagraph1: string;
    experienceParagraph2: string;
    companyMotivation: string;
    callToAction?: string | null;
    signoff?: string | null;
  }): Promise<Buffer> {
    const cssPath = resolveTemplateCssPath();
    let css = '';
    if (fsSync.existsSync(cssPath)) {
      css = await fs.readFile(cssPath, 'utf-8');
    }

    const paragraphs: string[] = [
      data.salutation,
      data.experienceParagraph1,
      data.experienceParagraph2,
      data.companyMotivation,
      data.callToAction || baseCoverLetterData.callToAction,
      data.signoff || baseCoverLetterData.signoff,
    ];

    const renderData: CoverLetterRenderData = {
      basics: {
        name: baseCoverLetterData.basics.name,
        label: data.customLabel || baseCoverLetterData.basics.label,
        email: baseCoverLetterData.basics.email,
        phone: baseCoverLetterData.basics.phone,
        website: baseCoverLetterData.basics.website,
        profiles: baseCoverLetterData.basics.profiles,
      },
      recipient: {
        name: data.recipientName || '',
        title: data.recipientTitle || '',
        company: data.recipientCompany,
        address: data.recipientAddress || '',
        role: data.recipientRole,
      },
      date: data.date,
      letter: {
        paragraphs,
      },
    };

    const html = await render(renderData, css);

    let browser;
    try {
      browser = await puppeteer.launch({
        headless: true,
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
        ],
      });
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'domcontentloaded' });
      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
      });
      return Buffer.from(pdfBuffer);
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  }
}
