-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "websiteUrl" TEXT,
    "linkedinUrl" TEXT,
    "industry" TEXT,
    "fundingStage" TEXT,
    "companySizeRange" TEXT,
    "employeeCount" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "JobOffer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "externalId" TEXT,
    "source" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT,
    "remoteType" TEXT NOT NULL DEFAULT 'UNSPECIFIED',
    "rawDescription" TEXT NOT NULL,
    "datePosted" DATETIME,
    "companyId" TEXT NOT NULL,
    "salaryMin" REAL,
    "salaryMax" REAL,
    "currency" TEXT DEFAULT 'EUR',
    "contractType" TEXT,
    "roleCategory" TEXT,
    "experienceLevel" TEXT NOT NULL DEFAULT 'UNSPECIFIED',
    "skills" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "JobOffer_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
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
