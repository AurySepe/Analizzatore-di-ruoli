-- DropIndex
DROP INDEX "JobCoverLetterOutbox_status_createdAt_idx";

-- AlterTable
ALTER TABLE "JobCoverLetterOutbox" DROP COLUMN "errorMessage",
DROP COLUMN "payload",
DROP COLUMN "processedAt",
DROP COLUMN "retryCount",
ADD COLUMN     "attempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "forceRegenerate" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "jobOfferId" TEXT NOT NULL,
ADD COLUMN     "lastError" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "JobCoverLetterOutbox_jobOfferId_key" ON "JobCoverLetterOutbox"("jobOfferId");

-- CreateIndex
CREATE INDEX "JobCoverLetterOutbox_status_idx" ON "JobCoverLetterOutbox"("status");

-- CreateIndex
CREATE INDEX "JobCoverLetterOutbox_createdAt_idx" ON "JobCoverLetterOutbox"("createdAt");

-- AddForeignKey
ALTER TABLE "JobCoverLetterOutbox" ADD CONSTRAINT "JobCoverLetterOutbox_jobOfferId_fkey" FOREIGN KEY ("jobOfferId") REFERENCES "JobOffer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
