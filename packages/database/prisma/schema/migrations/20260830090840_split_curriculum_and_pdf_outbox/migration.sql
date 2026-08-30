-- AlterTable
ALTER TABLE "JobCurriculum" ALTER COLUMN "storageKey" DROP NOT NULL;

-- CreateTable
CREATE TABLE "JobCurriculumPdfOutbox" (
    "id" TEXT NOT NULL,
    "jobOfferId" TEXT NOT NULL,
    "status" "OutboxStatus" NOT NULL DEFAULT 'PENDING',
    "templateName" TEXT,
    "forceRegenerate" BOOLEAN NOT NULL DEFAULT false,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "lastError" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobCurriculumPdfOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobCurriculumPdfOutbox_jobOfferId_key" ON "JobCurriculumPdfOutbox"("jobOfferId");

-- CreateIndex
CREATE INDEX "JobCurriculumPdfOutbox_status_idx" ON "JobCurriculumPdfOutbox"("status");

-- CreateIndex
CREATE INDEX "JobCurriculumPdfOutbox_createdAt_idx" ON "JobCurriculumPdfOutbox"("createdAt");

-- AddForeignKey
ALTER TABLE "JobCurriculumPdfOutbox" ADD CONSTRAINT "JobCurriculumPdfOutbox_jobOfferId_fkey" FOREIGN KEY ("jobOfferId") REFERENCES "JobOffer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
