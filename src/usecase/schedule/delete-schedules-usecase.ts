import { DeleteScheduleContract } from "../../domain/contracts/schedule/delete-schedule-contract";

export class DeleteSchedulesUseCase {
  constructor(
		private readonly deleteSchedule: DeleteScheduleContract
	) {}

	async execute(barber_id: string) {
		await this.deleteSchedule.delete(barber_id)
	}
}