-- CreateTable
CREATE TABLE "services" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barber_bervices" (
    "id" TEXT NOT NULL,
    "barberId" TEXT NOT NULL,
    "servicesId" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "barber_bervices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "barber_bervices" ADD CONSTRAINT "barber_bervices_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "barber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barber_bervices" ADD CONSTRAINT "barber_bervices_servicesId_fkey" FOREIGN KEY ("servicesId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
