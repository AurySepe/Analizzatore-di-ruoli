-- AlterTable
ALTER TABLE "JobEvaluation" ADD COLUMN     "competenceScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "desireMatchReasoning" TEXT,
ADD COLUMN     "desireMatchScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
ALTER COLUMN "overallScore" SET DEFAULT 0;

-- CreateIndex
CREATE INDEX "JobEvaluation_desireMatchScore_idx" ON "JobEvaluation"("desireMatchScore");
