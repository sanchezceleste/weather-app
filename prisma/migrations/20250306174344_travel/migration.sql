/*
  Warnings:

  - You are about to drop the `Weather` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Weather" DROP CONSTRAINT "Weather_belongsToId_fkey";

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "opinion" TEXT;

-- DropTable
DROP TABLE "Weather";
