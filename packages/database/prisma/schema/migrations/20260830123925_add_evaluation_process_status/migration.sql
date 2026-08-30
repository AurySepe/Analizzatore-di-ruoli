-- CreateEnum
CREATE TYPE "JobEvaluationProcessStatus" AS ENUM ('NOT_EVALUATED', 'PENDING', 'EVALUATING', 'COMPLETED', 'FAILED');

-- AlterTable
ALTER TABLE "JobOffer" ADD COLUMN     "evaluationProcessStatus" "JobEvaluationProcessStatus" NOT NULL DEFAULT 'PENDING';

-- CreateIndex
CREATE INDEX "JobOffer_evaluationProcessStatus_idx" ON "JobOffer"("evaluationProcessStatus");

-- Backfill: assegna COMPLETED a tutti gli annunci già valutati con successo
UPDATE "JobOffer"
SET "evaluationProcessStatus" = 'COMPLETED'
WHERE "id" IN (SELECT "jobOfferId" FROM "JobEvaluation");

