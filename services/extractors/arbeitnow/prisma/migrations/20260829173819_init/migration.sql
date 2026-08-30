-- CreateEnum
CREATE TYPE "OutboxStatus" AS ENUM ('PENDING', 'PUBLISHED', 'FAILED');

-- CreateEnum
CREATE TYPE "ExtractionStatus" AS ENUM ('IDLE', 'RUNNING', 'ERROR');

-- CreateTable
CREATE TABLE "ArbeitnowScrapedJob" (
    "id" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "location" TEXT,
    "remoteType" TEXT NOT NULL DEFAULT 'UNSPECIFIED',
    "salaryMin" DOUBLE PRECISION,
    "salaryMax" DOUBLE PRECISION,
    "currency" TEXT DEFAULT 'EUR',
    "contractType" TEXT,
    "rawDescription" TEXT NOT NULL,
    "descriptionMarkdown" TEXT,
    "datePosted" TIMESTAMP(3),
    "tags" TEXT,
    "outboxStatus" "OutboxStatus" NOT NULL DEFAULT 'PENDING',
    "publishedAt" TIMESTAMP(3),
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "lastError" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ArbeitnowScrapedJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArbeitnowSyncState" (
    "id" TEXT NOT NULL DEFAULT 'DEFAULT',
    "lastSyncTimestamp" TIMESTAMP(3),
    "lastPage" INTEGER NOT NULL DEFAULT 1,
    "status" "ExtractionStatus" NOT NULL DEFAULT 'IDLE',
    "lastRunAt" TIMESTAMP(3),
    "lastError" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ArbeitnowSyncState_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ArbeitnowScrapedJob_externalId_key" ON "ArbeitnowScrapedJob"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "ArbeitnowScrapedJob_url_key" ON "ArbeitnowScrapedJob"("url");

-- CreateIndex
CREATE INDEX "ArbeitnowScrapedJob_outboxStatus_idx" ON "ArbeitnowScrapedJob"("outboxStatus");

-- CreateIndex
CREATE INDEX "ArbeitnowScrapedJob_createdAt_idx" ON "ArbeitnowScrapedJob"("createdAt");
