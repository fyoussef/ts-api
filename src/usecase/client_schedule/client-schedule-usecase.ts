import { CreateClientSchedule } from '../../domain/contracts/client_schedule/create-client-schedule-contract'
import { CreateScheduleClientDTO } from '../../dto/client_schedule/client-schedule-dto'

export class ClientScheduleUseCase {
  constructor(private readonly repo: CreateClientSchedule) {}

  async execute(param: CreateScheduleClientDTO): Promise<any> {
    return await this.repo.create(param)
  }
}
