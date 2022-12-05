-- CreateTable
CREATE TABLE "barber_schedules" (
    "hour" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "barber_schedules_hour_key" ON "barber_schedules"("hour");
