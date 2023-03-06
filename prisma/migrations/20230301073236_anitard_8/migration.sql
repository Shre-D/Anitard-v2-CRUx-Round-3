/*
  Warnings:

  - The `watched` column on the `dashboard` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `watching` column on the `dashboard` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `notInterested` column on the `dashboard` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "dashboard" DROP COLUMN "watched",
ADD COLUMN     "watched" JSONB[],
DROP COLUMN "watching",
ADD COLUMN     "watching" JSONB[],
DROP COLUMN "notInterested",
ADD COLUMN     "notInterested" JSONB[];
