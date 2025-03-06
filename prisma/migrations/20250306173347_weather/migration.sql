/*
  Warnings:

  - You are about to drop the column `opinion` on the `Country` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Country" DROP COLUMN "opinion";

-- CreateTable
CREATE TABLE "Weather" (
    "id" TEXT NOT NULL,
    "main" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "belongsToId" TEXT NOT NULL,

    CONSTRAINT "Weather_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Weather" ADD CONSTRAINT "Weather_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
