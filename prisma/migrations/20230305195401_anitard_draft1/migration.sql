/*
  Warnings:

  - You are about to drop the column `firstname` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[appid]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `appid` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provider` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "dashboard" DROP CONSTRAINT "dashboard_userId_fkey";

-- DropIndex
DROP INDEX "user_username_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "firstname",
DROP COLUMN "password",
ADD COLUMN     "appid" INTEGER NOT NULL,
ADD COLUMN     "provider" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_appid_key" ON "user"("appid");

-- AddForeignKey
ALTER TABLE "dashboard" ADD CONSTRAINT "dashboard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("appid") ON DELETE RESTRICT ON UPDATE CASCADE;
