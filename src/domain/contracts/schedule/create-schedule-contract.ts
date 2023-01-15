import { Barber_Schedules } from "@prisma/client";
import { ScheduleDTO } from "../../../dto/schedule/schedule-dto";

export interface CreateScheduleContract {
	create(createScheduleInterface: ScheduleDTO[]): Promise<void>
}