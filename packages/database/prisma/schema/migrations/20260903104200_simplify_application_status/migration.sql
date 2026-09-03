/*
  Warnings:

  - The values [SCREENING,ACCEPTED] on the enum `ApplicationStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ApplicationStatus_new" AS ENUM ('NEW', 'SAVED', 'APPLIED', 'INTERVIEWING', 'OFFER', 'REJECTED', 'ARCHIVED');
ALTER TABLE "public"."JobOffer" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "JobOffer" ALTER COLUMN "status" TYPE "ApplicationStatus_new" USING ("status"::text::"ApplicationStatus_new");
ALTER TABLE "JobStatusHistory" ALTER COLUMN "fromStatus" TYPE "ApplicationStatus_new" USING ("fromStatus"::text::"ApplicationStatus_new");
ALTER TABLE "JobStatusHistory" ALTER COLUMN "toStatus" TYPE "ApplicationStatus_new" USING ("toStatus"::text::"ApplicationStatus_new");
ALTER TYPE "ApplicationStatus" RENAME TO "ApplicationStatus_old";
ALTER TYPE "ApplicationStatus_new" RENAME TO "ApplicationStatus";
DROP TYPE "public"."ApplicationStatus_old";
ALTER TABLE "JobOffer" ALTER COLUMN "status" SET DEFAULT 'NEW';
COMMIT;
