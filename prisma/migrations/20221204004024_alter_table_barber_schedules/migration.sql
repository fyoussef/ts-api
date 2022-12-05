/*
  Warnings:

  - Added the required column `barber_id` to the `barber_schedules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "barber_schedules" ADD COLUMN     "barber_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "barber_schedules" ADD CONSTRAINT "barber_schedules_barber_id_fkey" FOREIGN KEY ("barber_id") REFERENCES "barber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
