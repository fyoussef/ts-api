/*
  Warnings:

  - Added the required column `userId` to the `barber` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('ADMIN', 'CLIENT', 'BARBER');

-- AlterTable
ALTER TABLE "barber" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" "Roles" NOT NULL DEFAULT 'CLIENT';

-- AddForeignKey
ALTER TABLE "barber" ADD CONSTRAINT "barber_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
