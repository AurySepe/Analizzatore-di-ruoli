-- CreateTable
CREATE TABLE "JobCurriculumOutbox" (
    "id" TEXT NOT NULL,
    "jobOfferId" TEXT NOT NULL,
    "status" "OutboxStatus" NOT NULL DEFAULT 'PENDING',
    "forceRegenerate" BOOLEAN NOT NULL DEFAULT false,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "lastError" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobCurriculumOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobCurriculumOutbox_jobOfferId_key" ON "JobCurriculumOutbox"("jobOfferId");

-- CreateIndex
CREATE INDEX "JobCurriculumOutbox_status_idx" ON "JobCurriculumOutbox"("status");

-- CreateIndex
CREATE INDEX "JobCurriculumOutbox_createdAt_idx" ON "JobCurriculumOutbox"("createdAt");

-- AddForeignKey
ALTER TABLE "JobCurriculumOutbox" ADD CONSTRAINT "JobCurriculumOutbox_jobOfferId_fkey" FOREIGN KEY ("jobOfferId") REFERENCES "JobOffer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
