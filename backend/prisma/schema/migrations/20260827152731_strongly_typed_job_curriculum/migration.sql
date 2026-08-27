/*
  Warnings:

  - You are about to drop the column `tailoringData` on the `JobCurriculum` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobCurriculum" DROP COLUMN "tailoringData",
ADD COLUMN     "customLabel" TEXT;

-- CreateTable
CREATE TABLE "JobCurriculumWork" (
    "id" TEXT NOT NULL,
    "curriculumId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "include" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobCurriculumWork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobCurriculumProject" (
    "id" TEXT NOT NULL,
    "curriculumId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobCurriculumProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobCurriculumPublication" (
    "id" TEXT NOT NULL,
    "curriculumId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobCurriculumPublication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "JobCurriculumWork_curriculumId_idx" ON "JobCurriculumWork"("curriculumId");

-- CreateIndex
CREATE INDEX "JobCurriculumProject_curriculumId_idx" ON "JobCurriculumProject"("curriculumId");

-- CreateIndex
CREATE INDEX "JobCurriculumPublication_curriculumId_idx" ON "JobCurriculumPublication"("curriculumId");

-- AddForeignKey
ALTER TABLE "JobCurriculumWork" ADD CONSTRAINT "JobCurriculumWork_curriculumId_fkey" FOREIGN KEY ("curriculumId") REFERENCES "JobCurriculum"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobCurriculumProject" ADD CONSTRAINT "JobCurriculumProject_curriculumId_fkey" FOREIGN KEY ("curriculumId") REFERENCES "JobCurriculum"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobCurriculumPublication" ADD CONSTRAINT "JobCurriculumPublication_curriculumId_fkey" FOREIGN KEY ("curriculumId") REFERENCES "JobCurriculum"("id") ON DELETE CASCADE ON UPDATE CASCADE;
