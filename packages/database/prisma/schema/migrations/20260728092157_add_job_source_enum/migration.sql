/*
  Warnings:

  - Changed the type of `source` on the `JobOffer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "JobSource" AS ENUM ('ARBEITNOW', 'REMOTIVE');

-- AlterTable
ALTER TABLE "JobOffer" DROP COLUMN "source",
ADD COLUMN     "source" "JobSource" NOT NULL;

-- CreateIndex
CREATE INDEX "JobOffer_source_idx" ON "JobOffer"("source");

-- CreateIndex
CREATE UNIQUE INDEX "JobOffer_source_externalId_key" ON "JobOffer"("source", "externalId");
