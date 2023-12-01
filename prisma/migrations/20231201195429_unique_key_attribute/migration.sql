/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `APIKey` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "APIKey_key_key" ON "APIKey"("key");
