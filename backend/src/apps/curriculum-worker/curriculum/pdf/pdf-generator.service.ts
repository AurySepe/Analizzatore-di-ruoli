import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as fsSync from 'fs';
import * as path from 'path';
import puppeteer from 'puppeteer';
import { FullResumeSchema, type FullResumeData } from './schema';
import { render as defaultRender } from '../../templates/default/template';

const DEFAULT_TEMPLATE_DIR = path.resolve(
  process.cwd(),
  'src',
  'apps',
  'curriculum-worker',
  'templates',
  'default',
);

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Genera un file PDF a partire dall'oggetto dati curriculum validato (FullResumeData).
 */
export async function generatePdfFromData(
  resumeData: FullResumeData,
  targetPdfPath: string,
  templateDir: string = DEFAULT_TEMPLATE_DIR,
): Promise<string> {
  // 1. Validazione con Zod Schema
  const validationResult = FullResumeSchema.safeParse(resumeData);
  if (!validationResult.success) {
    throw new Error(
      `Validazione dello schema curriculum fallita: ${JSON.stringify(validationResult.error.format())}`,
    );
  }

  const validResume: FullResumeData = validationResult.data;

  // 2. Rendering HTML (usando il template di default in TypeScript o template personalizzato)
  const resolvedTemplateDir = path.resolve(templateDir);
  const cssPath = path.join(resolvedTemplateDir, 'style.css');

  if (!fsSync.existsSync(cssPath)) {
    throw new Error(`File CSS non trovato nella directory template: ${resolvedTemplateDir}`);
  }

  const cssContent = await fs.readFile(cssPath, 'utf-8');

  let html: string;
  if (resolvedTemplateDir === DEFAULT_TEMPLATE_DIR) {
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

  // 3. Generazione PDF in-memory con Puppeteer (senza creare file HTML temporanei su disco)
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    await page.pdf({
      path: targetPdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
    });
  } finally {
    if (browser) {
      await browser.close();
    }
  }

  return targetPdfPath;
}

/**
 * Genera un file PDF leggendo ed interpretando un file JSON su disco.
 */
export async function generatePdfFromJson(
  jsonInputPath: string,
  outputPath?: string,
  templateDir: string = DEFAULT_TEMPLATE_DIR,
): Promise<string> {
  const resolvedInputPath = path.resolve(jsonInputPath);
  if (!(await fileExists(resolvedInputPath))) {
    throw new Error(`File JSON non trovato: ${resolvedInputPath}`);
  }

  const rawInput = await fs.readFile(resolvedInputPath, 'utf-8');
  let resumeData: unknown;
  try {
    resumeData = JSON.parse(rawInput);
  } catch (err: any) {
    throw new Error(`Errore di parsing JSON: ${err.message}`);
  }

  const targetPdfPath = outputPath
    ? path.resolve(outputPath)
    : resolvedInputPath.replace(/\.json$/i, '.pdf');

  return generatePdfFromData(resumeData as FullResumeData, targetPdfPath, templateDir);
}

@Injectable()
export class PdfGeneratorService {
  private readonly logger = new Logger(PdfGeneratorService.name);

  /**
   * Wrapper NestJS per la generazione PDF a partire dai dati in memoria
   */
  async generateFromData(
    data: FullResumeData,
    outputPath: string,
    templateDir?: string,
  ): Promise<string> {
    this.logger.log(`🖨️ Generazione PDF in corso per: ${outputPath}`);
    return generatePdfFromData(data, outputPath, templateDir);
  }

  /**
   * Wrapper NestJS per la generazione PDF a partire da un file JSON
   */
  async generateFromJson(
    jsonInputPath: string,
    outputPath?: string,
    templateDir?: string,
  ): Promise<string> {
    this.logger.log(`🖨️ Generazione PDF da JSON (${jsonInputPath}) -> ${outputPath || 'auto'}`);
    return generatePdfFromJson(jsonInputPath, outputPath, templateDir);
  }
}
