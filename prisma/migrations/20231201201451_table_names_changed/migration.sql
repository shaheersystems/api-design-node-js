/*
  Warnings:

  - You are about to drop the `APIKey` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `APIRequests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IP` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "APIKey" DROP CONSTRAINT "APIKey_userId_fkey";

-- DropForeignKey
ALTER TABLE "APIRequests" DROP CONSTRAINT "APIRequests_userId_fkey";

-- DropForeignKey
ALTER TABLE "IP" DROP CONSTRAINT "IP_userId_fkey";

-- DropTable
DROP TABLE "APIKey";

-- DropTable
DROP TABLE "APIRequests";

-- DropTable
DROP TABLE "IP";

-- CreateTable
CREATE TABLE "ApiRequests" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "userId" TEXT,

    CONSTRAINT "ApiRequests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiKey" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ip" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip" TEXT NOT NULL,
    "reason" TEXT,
    "blocked" BOOLEAN NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Ip_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_key_key" ON "ApiKey"("key");

-- CreateIndex
CREATE UNIQUE INDEX "Ip_ip_key" ON "Ip"("ip");

-- AddForeignKey
ALTER TABLE "ApiRequests" ADD CONSTRAINT "ApiRequests_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiKey" ADD CONSTRAINT "ApiKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ip" ADD CONSTRAINT "Ip_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
