-- Backfill: assegna COMPLETED a tutti gli annunci già valutati con successo
UPDATE "JobOffer"
SET "evaluationProcessStatus" = 'COMPLETED'
WHERE "id" IN (SELECT "jobOfferId" FROM "JobEvaluation");
