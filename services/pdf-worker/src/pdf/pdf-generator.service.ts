import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as fsSync from 'fs';
import * as path from 'path';
import puppeteer from 'puppeteer';
import { FullResumeSchema, type FullResumeData } from './schema';
import { render as defaultRender } from '../templates/default/template';

function resolveTemplateDir(templateDir?: string): string {
  if (templateDir && fsSync.existsSync(path.join(path.resolve(templateDir), 'style.css'))) {
    return path.resolve(templateDir);
  }

  const candidates = [
    path.resolve(__dirname, '../templates/default'),
    path.resolve(__dirname, '../../templates/default'),
    path.resolve(process.cwd(), 'dist', 'templates', 'default'),
    path.resolve(process.cwd(), 'src', 'templates', 'default'),
  ];

  for (const cand of candidates) {
    if (fsSync.existsSync(path.join(cand, 'style.css'))) {
      return cand;
    }
  }

  return templateDir ? path.resolve(templateDir) : candidates[0];
}

export async function generatePdfBufferFromData(
  resumeData: FullResumeData,
  templateDir?: string,
): Promise<Buffer> {
  const validationResult = FullResumeSchema.safeParse(resumeData);
  if (!validationResult.success) {
    throw new Error(
      `Validazione dello schema curriculum fallita: ${JSON.stringify(validationResult.error.format())}`,
    );
  }

  const validResume: FullResumeData = validationResult.data;
  const resolvedTemplateDir = resolveTemplateDir(templateDir);
  const cssPath = path.join(resolvedTemplateDir, 'style.css');

  if (!fsSync.existsSync(cssPath)) {
    throw new Error(`File CSS non trovato nella directory template: ${resolvedTemplateDir}`);
  }

  const cssContent = await fs.readFile(cssPath, 'utf-8');

  let html: string;
  const isDefaultDir =
    !templateDir ||
    resolvedTemplateDir === path.resolve(__dirname, '../templates/default') ||
    resolvedTemplateDir.endsWith(path.join('templates', 'default'));

  if (isDefaultDir) {
    html = await defaultRender(validResume, cssContent);
  } else {
    const templateJsPath = path.join(resolvedTemplateDir, 'template.js');
    const templateTsPath = path.join(resolvedTemplateDir, 'template.ts');
    let templateModule: any;
    if (fsSync.existsSync(templateTsPath)) {
      templateModule = await import(path.resolve(templateTsPath));
    } else if (fsSync.existsSync(templateJsPath)) {
      templateModule = require(path.resolve(templateJsPath));
    } else {
      throw new Error(`Nessun template.js/template.ts trovato in: ${resolvedTemplateDir}`);
    }
    const renderFn = templateModule.render || templateModule.default;
    html = await renderFn(validResume, cssContent);
  }

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
    const pdfUint8 = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
    });
    return Buffer.from(pdfUint8);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

@Injectable()
export class PdfGeneratorService {
  private readonly logger = new Logger(PdfGeneratorService.name);

  async generateBufferFromData(
    data: FullResumeData,
    templateDir?: string,
  ): Promise<Buffer> {
    this.logger.log(`🖨️ Generazione PDF in-memory in corso...`);
    return generatePdfBufferFromData(data, templateDir);
  }
}
