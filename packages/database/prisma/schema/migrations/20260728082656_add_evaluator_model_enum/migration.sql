-- CreateEnum
CREATE TYPE "EvaluatorModel" AS ENUM ('GEMINI_3_1_FLASH_LITE', 'GEMMA_4_12B', 'UNKNOWN');

-- AlterTable
ALTER TABLE "JobEvaluation" ADD COLUMN     "evaluatorModel" "EvaluatorModel" NOT NULL DEFAULT 'UNKNOWN';

-- CreateIndex
CREATE INDEX "JobEvaluation_evaluatorModel_idx" ON "JobEvaluation"("evaluatorModel");
