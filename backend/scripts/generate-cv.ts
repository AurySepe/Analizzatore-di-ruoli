import { baseResumeData } from '../src/apps/curriculum-worker/data/base-data';
import { mergeResumeWithTailoring, ResumeTailoringSchema, FullResumeSchema } from '../src/apps/curriculum-worker/curriculum/pdf/schema';
import { generatePdfFromData } from '../src/apps/curriculum-worker/curriculum/pdf/pdf-generator.service';
import * as path from 'path';
import * as fs from 'fs/promises';
import * as fsSync from 'fs';

/**
 * Script CLI generico per generare il PDF del CV personalizzato a partire da un JSON.
 * 
 * Supporta 2 tipi di JSON in input:
 * 1. JSON di Tailoring (`ResumeTailoring`): viene unito automaticamente con `baseResumeData`.
 * 2. JSON di Curriculum Completo (`FullResumeData`): viene renderizzato direttamente in PDF.
 * 
 * Uso:
 *   npx tsx scripts/generate-cv.ts <path-to-json> [output-pdf-path]
 * 
 * Esempio:
 *   npx tsx scripts/generate-cv.ts tailoring.json output.pdf
 */
async function generateCv() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('❌ Errore: Per favore specifica il percorso del file JSON in input.');
    console.log('\nUso: npx tsx scripts/generate-cv.ts <input-json-path> [output-pdf-path]\n');
    process.exit(1);
  }

  const inputJsonPath = path.resolve(args[0]);

  if (!fsSync.existsSync(inputJsonPath)) {
    console.error(`❌ Errore: Il file JSON specificato non esiste: ${inputJsonPath}`);
    process.exit(1);
  }

  let outputPdfPath: string;
  if (args[1]) {
    outputPdfPath = path.resolve(args[1]);
  } else {
    const parsedPath = path.parse(inputJsonPath);
    outputPdfPath = path.join(parsedPath.dir, `${parsedPath.name}.pdf`);
  }

  try {
    const rawData = await fs.readFile(inputJsonPath, 'utf-8');
    const jsonData = JSON.parse(rawData);

    let finalResumeData;

    // Tenta prima la validazione come ResumeTailoring (personalizzazione dinamica)
    const tailoringValidation = ResumeTailoringSchema.safeParse(jsonData);

    if (tailoringValidation.success) {
      console.log('📌 Rilevato JSON di Personalizzazione (ResumeTailoring). Unione con baseResumeData in corso...');
      finalResumeData = mergeResumeWithTailoring(baseResumeData, tailoringValidation.data);
    } else {
      // Se non è un tailoring, tenta la validazione come FullResumeData (CV completo)
      const fullValidation = FullResumeSchema.safeParse(jsonData);
      if (fullValidation.success) {
        console.log('📌 Rilevato JSON di Curriculum Completo (FullResumeData).');
        finalResumeData = fullValidation.data;
      } else {
        console.error('❌ Errore: Il JSON fornito non soddisfa né lo schema ResumeTailoring né lo schema FullResumeData.');
        console.error('\nValidazione Tailoring:', JSON.stringify(tailoringValidation.error.format(), null, 2));
        console.error('\nValidazione Full Resume:', JSON.stringify(fullValidation.error.format(), null, 2));
        process.exit(1);
      }
    }

    console.log(`🚀 Generazione del PDF in corso... Target: ${outputPdfPath}`);
    await generatePdfFromData(finalResumeData, outputPdfPath);
    console.log(`✅ CV PDF generato con successo in: ${outputPdfPath}`);

  } catch (error: any) {
    console.error('❌ Errore durante l\'elaborazione del CV:', error?.message || error);
    process.exit(1);
  }
}

generateCv();
