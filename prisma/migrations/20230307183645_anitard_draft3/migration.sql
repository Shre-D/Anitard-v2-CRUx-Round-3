-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "animeID" INTEGER NOT NULL,
    "Comment" TEXT NOT NULL,
    "Rating" INTEGER NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "review_userId_key" ON "review"("userId");

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("appid") ON DELETE RESTRICT ON UPDATE CASCADE;
