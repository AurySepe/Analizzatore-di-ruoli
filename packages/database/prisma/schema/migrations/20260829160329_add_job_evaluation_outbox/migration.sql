-- CreateEnum
CREATE TYPE "OutboxStatus" AS ENUM ('PENDING', 'PUBLISHED', 'FAILED');

-- CreateTable
CREATE TABLE "JobEvaluationOutbox" (
    "id" TEXT NOT NULL,
    "jobOfferId" TEXT NOT NULL,
    "status" "OutboxStatus" NOT NULL DEFAULT 'PENDING',
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "lastError" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobEvaluationOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobEvaluationOutbox_jobOfferId_key" ON "JobEvaluationOutbox"("jobOfferId");

-- CreateIndex
CREATE INDEX "JobEvaluationOutbox_status_idx" ON "JobEvaluationOutbox"("status");

-- CreateIndex
CREATE INDEX "JobEvaluationOutbox_createdAt_idx" ON "JobEvaluationOutbox"("createdAt");

-- AddForeignKey
ALTER TABLE "JobEvaluationOutbox" ADD CONSTRAINT "JobEvaluationOutbox_jobOfferId_fkey" FOREIGN KEY ("jobOfferId") REFERENCES "JobOffer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
