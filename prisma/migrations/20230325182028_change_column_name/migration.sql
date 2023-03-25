/*
  Warnings:

  - You are about to drop the column `servicesId` on the `barber_bervices` table. All the data in the column will be lost.
  - Added the required column `serviceId` to the `barber_bervices` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "barber_bervices" DROP CONSTRAINT "barber_bervices_servicesId_fkey";

-- AlterTable
ALTER TABLE "barber_bervices" DROP COLUMN "servicesId",
ADD COLUMN     "serviceId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "barber_bervices" ADD CONSTRAINT "barber_bervices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
