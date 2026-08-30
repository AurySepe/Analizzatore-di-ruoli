-- AlterTable
ALTER TABLE "JobOffer" ADD COLUMN     "descriptionMarkdown" TEXT;

-- CreateTable
CREATE TABLE "JobEvaluation" (
    "id" TEXT NOT NULL,
    "jobOfferId" TEXT NOT NULL,
    "overallScore" DOUBLE PRECISION NOT NULL,
    "priority" TEXT NOT NULL,
    "competenceMatch" TEXT NOT NULL,
    "detailedReasoning" TEXT NOT NULL,
    "pros" TEXT,
    "cons" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobEvaluation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SyncState" (
    "source" TEXT NOT NULL,
    "lastSyncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalJobsExtracted" INTEGER NOT NULL DEFAULT 0,
    "lastStatus" TEXT NOT NULL DEFAULT 'SUCCESS',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SyncState_pkey" PRIMARY KEY ("source")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "resumeText" TEXT,
    "searchCriteriaText" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobEvaluation_jobOfferId_key" ON "JobEvaluation"("jobOfferId");

-- CreateIndex
CREATE INDEX "JobEvaluation_overallScore_idx" ON "JobEvaluation"("overallScore");

-- CreateIndex
CREATE INDEX "JobEvaluation_priority_idx" ON "JobEvaluation"("priority");

-- AddForeignKey
ALTER TABLE "JobEvaluation" ADD CONSTRAINT "JobEvaluation_jobOfferId_fkey" FOREIGN KEY ("jobOfferId") REFERENCES "JobOffer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
