/*
  Warnings:

  - You are about to drop the `barber_bervices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "barber_bervices" DROP CONSTRAINT "barber_bervices_barberId_fkey";

-- DropForeignKey
ALTER TABLE "barber_bervices" DROP CONSTRAINT "barber_bervices_serviceId_fkey";

-- DropTable
DROP TABLE "barber_bervices";

-- CreateTable
CREATE TABLE "barber_services" (
    "id" TEXT NOT NULL,
    "barberId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "barber_services_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "barber_services" ADD CONSTRAINT "barber_services_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "barber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barber_services" ADD CONSTRAINT "barber_services_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
