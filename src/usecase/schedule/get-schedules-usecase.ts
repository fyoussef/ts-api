import { Barber_Schedules } from '@prisma/client'
import { GetScheduleContract } from '../../domain/contracts/schedule/get-schedule-contract'

export class GetSchedulesUseCase {
  constructor(private readonly getSchedule: GetScheduleContract) {}

  async execute(useId: string): Promise<Barber_Schedules[]> {
    const schedules = await this.getSchedule.get(useId)

    return schedules
  }
}
