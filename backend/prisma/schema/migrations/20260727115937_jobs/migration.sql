-- CreateEnum
CREATE TYPE "RemoteType" AS ENUM ('REMOTE', 'HYBRID', 'ON_SITE', 'UNSPECIFIED');

-- CreateEnum
CREATE TYPE "ExperienceLevel" AS ENUM ('ENTRY_LEVEL', 'JUNIOR', 'MID', 'SENIOR', 'LEAD', 'EXECUTIVE', 'UNSPECIFIED');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('NEW', 'SAVED', 'APPLIED', 'INTERVIEWING', 'REJECTED', 'ARCHIVED');

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "websiteUrl" TEXT,
    "linkedinUrl" TEXT,
    "industry" TEXT,
    "fundingStage" TEXT,
    "companySizeRange" TEXT,
    "employeeCount" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobOffer" (
    "id" TEXT NOT NULL,
    "externalId" TEXT,
    "source" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT,
    "remoteType" "RemoteType" NOT NULL DEFAULT 'UNSPECIFIED',
    "rawDescription" TEXT NOT NULL,
    "datePosted" TIMESTAMP(3),
    "companyId" TEXT NOT NULL,
    "salaryMin" DOUBLE PRECISION,
    "salaryMax" DOUBLE PRECISION,
    "currency" TEXT DEFAULT 'EUR',
    "contractType" TEXT,
    "roleCategory" TEXT,
    "experienceLevel" "ExperienceLevel" NOT NULL DEFAULT 'UNSPECIFIED',
    "skills" TEXT,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'NEW',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobOffer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "JobOffer_url_key" ON "JobOffer"("url");

-- CreateIndex
CREATE INDEX "JobOffer_companyId_idx" ON "JobOffer"("companyId");

-- CreateIndex
CREATE INDEX "JobOffer_source_idx" ON "JobOffer"("source");

-- CreateIndex
CREATE INDEX "JobOffer_status_idx" ON "JobOffer"("status");

-- CreateIndex
CREATE UNIQUE INDEX "JobOffer_source_externalId_key" ON "JobOffer"("source", "externalId");

-- AddForeignKey
ALTER TABLE "JobOffer" ADD CONSTRAINT "JobOffer_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
