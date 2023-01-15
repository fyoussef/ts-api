import { CreateScheduleContract } from "../../domain/contracts/schedule/create-schedule-contract";
import { ScheduleDTO } from "../../dto/schedule/schedule-dto";

export class CreateScheduleUseCase {
  constructor (
    private readonly createSchedule: CreateScheduleContract
  ) {}

  async execute(
    createScheduleDTO: ScheduleDTO[]
  ): Promise<void> {
    this.createSchedule.create(createScheduleDTO)
  }
}