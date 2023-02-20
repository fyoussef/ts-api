import { Barber_Schedules } from '@prisma/client'

export interface GetScheduleContract {
  get(userId: string): Promise<Barber_Schedules[]>
}
