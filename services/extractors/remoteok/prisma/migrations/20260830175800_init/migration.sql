-- CreateEnum
CREATE TYPE "OutboxStatus" AS ENUM ('PENDING', 'PUBLISHED', 'FAILED');

-- CreateTable
CREATE TABLE "remoteok_scraped_jobs" (
    "id" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "slug" TEXT,
    "title" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "location" TEXT,
    "remoteType" TEXT DEFAULT 'REMOTE',
    "salaryMin" DOUBLE PRECISION,
    "salaryMax" DOUBLE PRECISION,
    "currency" TEXT DEFAULT 'USD',
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

    CONSTRAINT "remoteok_scraped_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "remoteok_sync_states" (
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'REMOTEOK',
    "lastSyncAt" TIMESTAMP(3),
    "lastSuccessfulSyncAt" TIMESTAMP(3),
    "itemsExtracted" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "remoteok_sync_states_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "remoteok_scraped_jobs_externalId_key" ON "remoteok_scraped_jobs"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "remoteok_scraped_jobs_url_key" ON "remoteok_scraped_jobs"("url");

-- CreateIndex
CREATE INDEX "remoteok_scraped_jobs_outboxStatus_idx" ON "remoteok_scraped_jobs"("outboxStatus");

-- CreateIndex
CREATE INDEX "remoteok_scraped_jobs_createdAt_idx" ON "remoteok_scraped_jobs"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "remoteok_sync_states_source_key" ON "remoteok_sync_states"("source");
