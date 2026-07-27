import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { CreateJobOfferInput } from '../types/jobOffer';

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/analizzatore_ruoli?schema=public';
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
export const prisma = new PrismaClient({ adapter });

/**
 * Salva o aggiorna un'offerta di lavoro e l'azienda associata nel DB PostgreSQL.
 * Gestisce la deduplicazione automatica via externalId + source o via URL.
 */
export async function saveOrUpdateJobOffer(input: CreateJobOfferInput) {
  // 1. Assicura che l'azienda esista o la aggiorna con i nuovi dati opzionali
  const company = await prisma.company.upsert({
    where: { name: input.company.name },
    update: {
      ...(input.company.websiteUrl && { websiteUrl: input.company.websiteUrl }),
      ...(input.company.linkedinUrl && { linkedinUrl: input.company.linkedinUrl }),
      ...(input.company.industry && { industry: input.company.industry }),
      ...(input.company.fundingStage && { fundingStage: input.company.fundingStage }),
      ...(input.company.companySizeRange && { companySizeRange: input.company.companySizeRange }),
      ...(input.company.employeeCount !== undefined && { employeeCount: input.company.employeeCount }),
    },
    create: {
      name: input.company.name,
      websiteUrl: input.company.websiteUrl,
      linkedinUrl: input.company.linkedinUrl,
      industry: input.company.industry,
      fundingStage: input.company.fundingStage,
      companySizeRange: input.company.companySizeRange,
      employeeCount: input.company.employeeCount,
    },
  });

  // 2. Prepara la clausola di identificazione univoca dell'offerta
  const whereClause = input.externalId 
    ? { source_externalId: { source: input.source, externalId: input.externalId } }
    : { url: input.url };

  // 3. Upsert dell'offerta di lavoro
  const jobOffer = await prisma.jobOffer.upsert({
    where: whereClause,
    update: {
      title: input.title,
      location: input.location,
      remoteType: input.remoteType ?? 'UNSPECIFIED',
      rawDescription: input.rawDescription,
      salaryMin: input.salaryMin,
      salaryMax: input.salaryMax,
      currency: input.currency ?? 'EUR',
      contractType: input.contractType,
      roleCategory: input.roleCategory,
      experienceLevel: input.experienceLevel ?? 'UNSPECIFIED',
      skills: input.skills ? JSON.stringify(input.skills) : null,
      updatedAt: new Date(),
    },
    create: {
      externalId: input.externalId,
      source: input.source,
      url: input.url,
      title: input.title,
      location: input.location,
      remoteType: input.remoteType ?? 'UNSPECIFIED',
      rawDescription: input.rawDescription,
      datePosted: input.datePosted,
      companyId: company.id,
      salaryMin: input.salaryMin,
      salaryMax: input.salaryMax,
      currency: input.currency ?? 'EUR',
      contractType: input.contractType,
      roleCategory: input.roleCategory,
      experienceLevel: input.experienceLevel ?? 'UNSPECIFIED',
      skills: input.skills ? JSON.stringify(input.skills) : null,
    },
    include: {
      company: true,
    },
  });

  return jobOffer;
}

/**
 * Recupera tutte le offerte salvate nel database con i dati aziendali.
 */
export async function getAllJobOffers() {
  return prisma.jobOffer.findMany({
    include: {
      company: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}
