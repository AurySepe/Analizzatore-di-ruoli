/*
  Warnings:

  - Changed the type of `priority` on the `JobEvaluation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "EvaluationPriority" AS ENUM ('HIGH', 'MEDIUM', 'LOW', 'DISQUALIFIED');

-- AlterTable
ALTER TABLE "JobEvaluation" ALTER COLUMN "priority" TYPE "EvaluationPriority" USING "priority"::"EvaluationPriority";


