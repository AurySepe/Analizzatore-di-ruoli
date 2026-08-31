-- CreateEnum
CREATE TYPE "JobCoverLetterPdfStatus" AS ENUM ('PENDING', 'GENERATING', 'READY', 'FAILED');

-- CreateTable
CREATE TABLE "JobCoverLetter" (
    "id" TEXT NOT NULL,
    "jobOfferId" TEXT NOT NULL,
    "customLabel" TEXT,
    "recipientName" TEXT,
    "recipientTitle" TEXT,
    "recipientCompany" TEXT NOT NULL,
    "recipientAddress" TEXT,
    "recipientRole" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "salutation" TEXT NOT NULL,
    "experienceParagraph1" TEXT NOT NULL,
    "experienceParagraph2" TEXT NOT NULL,
    "companyMotivation" TEXT NOT NULL,
    "callToAction" TEXT NOT NULL DEFAULT 'Happy to talk through any of this in more detail.',
    "signoff" TEXT NOT NULL DEFAULT 'Sincerely,',
    "explanation" TEXT,
    "storageKey" TEXT,
    "pdfStatus" "JobCoverLetterPdfStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobCoverLetter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobCoverLetterOutbox" (
    "id" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "status" "OutboxStatus" NOT NULL DEFAULT 'PENDING',
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "errorMessage" TEXT,
    "processedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobCoverLetterOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobCoverLetter_jobOfferId_key" ON "JobCoverLetter"("jobOfferId");

-- CreateIndex
CREATE INDEX "JobCoverLetter_jobOfferId_idx" ON "JobCoverLetter"("jobOfferId");

-- CreateIndex
CREATE INDEX "JobCoverLetterOutbox_status_createdAt_idx" ON "JobCoverLetterOutbox"("status", "createdAt");

-- AddForeignKey
ALTER TABLE "JobCoverLetter" ADD CONSTRAINT "JobCoverLetter_jobOfferId_fkey" FOREIGN KEY ("jobOfferId") REFERENCES "JobOffer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
