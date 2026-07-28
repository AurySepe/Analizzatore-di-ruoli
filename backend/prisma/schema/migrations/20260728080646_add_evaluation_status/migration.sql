-- CreateEnum
CREATE TYPE "EvaluationStatus" AS ENUM ('SUCCESS', 'UNANALYZABLE');

-- AlterTable
ALTER TABLE "JobEvaluation" ADD COLUMN     "status" "EvaluationStatus" NOT NULL DEFAULT 'SUCCESS';

-- CreateIndex
CREATE INDEX "JobEvaluation_status_idx" ON "JobEvaluation"("status");
