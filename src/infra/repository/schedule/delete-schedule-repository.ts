import { PrismaClient } from "@prisma/client";
import { DeleteScheduleContract } from "../../../domain/contracts/schedule/delete-schedule-contract";

export class DeleteScheduleRepository implements DeleteScheduleContract {
  constructor(
    private readonly prisma: PrismaClient
  ) {}
  
  async delete(barber_id: string): Promise<void> {
    await this.prisma.barber_Schedules.deleteMany({
      where: {
        barber_id
      }
    })
  }
}