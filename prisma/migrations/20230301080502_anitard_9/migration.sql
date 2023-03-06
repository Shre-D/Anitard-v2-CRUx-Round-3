/*
  Warnings:

  - Changed the type of `watched` on the `dashboard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `watching` on the `dashboard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `notInterested` on the `dashboard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "dashboard" DROP COLUMN "watched",
ADD COLUMN     "watched" JSONB NOT NULL,
DROP COLUMN "watching",
ADD COLUMN     "watching" JSONB NOT NULL,
DROP COLUMN "notInterested",
ADD COLUMN     "notInterested" JSONB NOT NULL;
