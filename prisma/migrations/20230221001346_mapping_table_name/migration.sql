/*
  Warnings:

  - You are about to drop the `Client_Schedules` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Client_Schedules" DROP CONSTRAINT "Client_Schedules_barber_id_fkey";

-- DropForeignKey
ALTER TABLE "Client_Schedules" DROP CONSTRAINT "Client_Schedules_clientId_fkey";

-- DropTable
DROP TABLE "Client_Schedules";

-- CreateTable
CREATE TABLE "client_schedules" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "barber_id" TEXT NOT NULL,
    "scheduledAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "client_schedules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "client_schedules" ADD CONSTRAINT "client_schedules_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_schedules" ADD CONSTRAINT "client_schedules_barber_id_fkey" FOREIGN KEY ("barber_id") REFERENCES "barber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
