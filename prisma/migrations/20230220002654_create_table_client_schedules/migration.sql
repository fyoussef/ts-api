-- CreateTable
CREATE TABLE "Client_Schedules" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "barber_id" TEXT NOT NULL,
    "scheduled" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_Schedules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Client_Schedules" ADD CONSTRAINT "Client_Schedules_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client_Schedules" ADD CONSTRAINT "Client_Schedules_barber_id_fkey" FOREIGN KEY ("barber_id") REFERENCES "barber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
