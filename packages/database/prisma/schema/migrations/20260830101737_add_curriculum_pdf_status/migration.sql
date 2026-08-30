-- CreateEnum
CREATE TYPE "JobCurriculumPdfStatus" AS ENUM ('PENDING', 'GENERATING', 'READY', 'FAILED');

-- AlterTable
ALTER TABLE "JobCurriculum" ADD COLUMN     "pdfStatus" "JobCurriculumPdfStatus" NOT NULL DEFAULT 'PENDING';
