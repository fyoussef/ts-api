/*
  Warnings:

  - You are about to drop the column `scheduled` on the `Client_Schedules` table. All the data in the column will be lost.
  - Added the required column `scheduledAt` to the `Client_Schedules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client_Schedules" DROP COLUMN "scheduled",
ADD COLUMN     "scheduledAt" TIMESTAMP(3) NOT NULL;
