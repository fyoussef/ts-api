import { Barber_Schedules, Prisma, PrismaClient } from "@prisma/client";
import { CreateScheduleContract } from "../../../domain/contracts/schedule/create-schedule-contract";
import { CreateScheduleInterface } from "../../../dto/schedule/create-schedule-dto";
import { ScheduleDTO } from "../../../dto/schedule/schedule-dto";

export class CreateScheduleRepository implements CreateScheduleContract {

    constructor(
        private readonly prisma: PrismaClient
    ) {}

    async create(scheduleDTO: ScheduleDTO[]): Promise<void> {
        await this.prisma.barber_Schedules.createMany({
            data: scheduleDTO
        })
    }
}