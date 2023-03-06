-- CreateTable
CREATE TABLE "dashboard" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "watched" TEXT[],
    "watching" TEXT[],
    "notInterested" TEXT[],

    CONSTRAINT "dashboard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dashboard_userId_key" ON "dashboard"("userId");

-- AddForeignKey
ALTER TABLE "dashboard" ADD CONSTRAINT "dashboard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
