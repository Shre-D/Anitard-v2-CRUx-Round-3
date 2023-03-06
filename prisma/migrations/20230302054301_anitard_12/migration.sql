/*
  Warnings:

  - You are about to drop the column `status` on the `dashboard` table. All the data in the column will be lost.
  - Added the required column `watchstatus` to the `dashboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dashboard" DROP COLUMN "status",
ADD COLUMN     "watchstatus" TEXT NOT NULL;
