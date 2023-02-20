/*
  Warnings:

  - You are about to drop the column `userId` on the `clients` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_userId_fkey";

-- DropIndex
DROP INDEX "clients_userId_key";

-- AlterTable
ALTER TABLE "clients" DROP COLUMN "userId";
