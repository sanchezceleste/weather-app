-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weather" (
    "id" TEXT NOT NULL,
    "main" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "belongsToId" TEXT NOT NULL,

    CONSTRAINT "Weather_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- AddForeignKey
ALTER TABLE "Weather" ADD CONSTRAINT "Weather_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
