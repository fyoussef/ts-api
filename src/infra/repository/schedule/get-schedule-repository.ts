import { Barber_Schedules, PrismaClient } from '@prisma/client'
import { GetScheduleContract } from '../../../domain/contracts/schedule/get-schedule-contract'

export class GetScheduleRepository implements GetScheduleContract {
  constructor(private readonly prisma: PrismaClient) {}

  async get(userId: string): Promise<Barber_Schedules[]> {
    const barber = await this.prisma.barber.findFirst({
      where: {
        userId
      }
    })

    if (!barber) {
      throw new Error('User not found')
    }

    const schedules = await this.prisma.barber_Schedules.findMany({
      where: {
        barber_id: barber.id
      }
    })

    if (!schedules) {
      throw new Error('Barber schedules not found')
    }
    return schedules
  }
}
