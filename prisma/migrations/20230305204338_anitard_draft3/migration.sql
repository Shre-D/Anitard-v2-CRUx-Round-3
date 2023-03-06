-- DropForeignKey
ALTER TABLE "dashboard" DROP CONSTRAINT "dashboard_userId_fkey";

-- AlterTable
ALTER TABLE "dashboard" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "appid" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "dashboard" ADD CONSTRAINT "dashboard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("appid") ON DELETE RESTRICT ON UPDATE CASCADE;
