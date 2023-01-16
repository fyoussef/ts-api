import { Barber_Schedules } from "@prisma/client";

export interface GetScheduleContract {
	get(barber_id: string): Promise<Barber_Schedules []>
}