import { CreateScheduleClientDTO } from '../../../dto/client_schedule/client-schedule-dto'

export interface CreateClientSchedule {
  create(param: CreateScheduleClientDTO): Promise<any>
}
