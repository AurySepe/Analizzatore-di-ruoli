import { PrismaClient, JobSource, RemoteType, ExperienceLevel, ApplicationStatus } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

interface ManualJobInput {
  title: string;
  companyName: string;
  url?: string;
  location?: string;
  remoteType?: RemoteType;
  rawDescription: string;
  descriptionMarkdown?: string;
  salaryMin?: number;
  salaryMax?: number;
  currency?: string;
  contractType?: string;
  roleCategory?: string;
  experienceLevel?: ExperienceLevel;
  skills?: string[];
}

/**
 * Script CLI per inserire un annuncio di lavoro manuale nel database Prisma.
 * L'annuncio viene salvato direttamente con status: SAVED e source: MANUAL,
 * innescando l'elaborazione automatica del worker per la generazione del CV.
 *
 * Uso:
 *   npx ts-node src/add-manual-job.ts <path-to-json>
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    console.log(`
📌 USO SCRIPT INSERIMENTO MANUALE ANNUNCI:
  npx ts-node src/add-manual-job.ts <percorso-file-json>

Esempio JSON input (job_data.json):
{
  "title": "Senior Backend Engineer",
  "companyName": "Acme Inc",
  "url": "https://acme.com/jobs/backend",
  "location": "Milano / Remote",
  "remoteType": "REMOTE",
  "rawDescription": "Descrizione completa del ruolo...",
  "salaryMin": 45000,
  "salaryMax": 60000,
  "skills": ["TypeScript", "Node.js", "PostgreSQL"]
}
`);
    process.exit(0);
  }

  const inputFilePath = path.resolve(args[0]);
  if (!fs.existsSync(inputFilePath)) {
    console.error(`❌ Errore: Il file specificato non esiste: ${inputFilePath}`);
    process.exit(1);
  }

  let jobInput: ManualJobInput;

  try {
    const rawContent = fs.readFileSync(inputFilePath, 'utf-8');
    jobInput = JSON.parse(rawContent);
  } catch (err: any) {
    console.error('❌ Errore durante la lettura o il parsing del file JSON:', err?.message || err);
    process.exit(1);
  }

  if (!jobInput.title || !jobInput.companyName || !jobInput.rawDescription) {
    console.error('❌ Errore: I campi "title", "companyName" e "rawDescription" sono obbligatori.');
    process.exit(1);
  }

  // Se l'URL non è fornito, generiamo un URL fittizio unico basato sul nome azienda e titolo
  const jobUrl = jobInput.url?.trim() || `manual://${encodeURIComponent(jobInput.companyName.toLowerCase())}/${encodeURIComponent(jobInput.title.toLowerCase())}-${Date.now()}`;

  try {
    console.log(`⏳ Inserimento/Aggiornamento dell'azienda: "${jobInput.companyName}"...`);
    const company = await prisma.company.upsert({
      where: { name: jobInput.companyName.trim() },
      update: {},
      create: {
        name: jobInput.companyName.trim(),
      },
    });

    console.log(`🚀 Inserimento annuncio di lavoro "${jobInput.title}" (Source: MANUAL, Status: SAVED)...`);

    const skillsJson = jobInput.skills ? JSON.stringify(jobInput.skills) : null;

    const offer = await prisma.jobOffer.upsert({
      where: { url: jobUrl },
      update: {
        title: jobInput.title,
        location: jobInput.location ?? null,
        remoteType: jobInput.remoteType ?? RemoteType.UNSPECIFIED,
        rawDescription: jobInput.rawDescription,
        descriptionMarkdown: jobInput.descriptionMarkdown ?? jobInput.rawDescription,
        salaryMin: jobInput.salaryMin ?? null,
        salaryMax: jobInput.salaryMax ?? null,
        currency: jobInput.currency ?? 'EUR',
        contractType: jobInput.contractType ?? null,
        roleCategory: jobInput.roleCategory ?? null,
        experienceLevel: jobInput.experienceLevel ?? ExperienceLevel.UNSPECIFIED,
        skills: skillsJson,
        status: ApplicationStatus.SAVED,
        updatedAt: new Date(),
      },
      create: {
        source: JobSource.MANUAL,
        url: jobUrl,
        title: jobInput.title,
        location: jobInput.location ?? null,
        remoteType: jobInput.remoteType ?? RemoteType.UNSPECIFIED,
        rawDescription: jobInput.rawDescription,
        descriptionMarkdown: jobInput.descriptionMarkdown ?? jobInput.rawDescription,
        datePosted: new Date(),
        companyId: company.id,
        salaryMin: jobInput.salaryMin ?? null,
        salaryMax: jobInput.salaryMax ?? null,
        currency: jobInput.currency ?? 'EUR',
        contractType: jobInput.contractType ?? null,
        roleCategory: jobInput.roleCategory ?? null,
        experienceLevel: jobInput.experienceLevel ?? ExperienceLevel.UNSPECIFIED,
        skills: skillsJson,
        status: ApplicationStatus.SAVED,
      },
      include: {
        company: true,
      },
    });

    console.log(`✅ Annuncio manuale salvato con successo!`);
    console.log(`   - ID Annuncio: ${offer.id}`);
    console.log(`   - Titolo: ${offer.title}`);
    console.log(`   - Azienda: ${offer.company.name}`);
    console.log(`   - Stato: ${offer.status}`);
    console.log(`   - Fonte: ${offer.source}`);
    console.log(`\n📌 Se il 'curriculum-worker' è in esecuzione, genererà automaticamente il CV PDF personalizzato.`);

  } catch (err: any) {
    console.error('❌ Errore durante il salvataggio nel database:', err?.message || err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
