-- CreateTable
CREATE TABLE "JobCurriculum" (
    "id" TEXT NOT NULL,
    "jobOfferId" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobCurriculum_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobCurriculum_jobOfferId_key" ON "JobCurriculum"("jobOfferId");

-- CreateIndex
CREATE INDEX "JobCurriculum_jobOfferId_idx" ON "JobCurriculum"("jobOfferId");

-- AddForeignKey
ALTER TABLE "JobCurriculum" ADD CONSTRAINT "JobCurriculum_jobOfferId_fkey" FOREIGN KEY ("jobOfferId") REFERENCES "JobOffer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
