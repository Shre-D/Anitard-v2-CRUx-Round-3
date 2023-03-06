/*
  Warnings:

  - Added the required column `status` to the `dashboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dashboard" ADD COLUMN     "status" TEXT NOT NULL;
