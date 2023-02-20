/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `barber` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "barber_userId_key" ON "barber"("userId");
