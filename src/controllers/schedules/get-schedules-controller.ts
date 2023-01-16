import { Request, Response } from "express";
import { prisma } from "../../infra/db/prismaClient";
import { GetScheduleRepository } from "../../infra/repository/schedule/get-schedule-repository";
import { GetSchedulesUseCase } from "../../usecase/schedule/get-schedules-usecase";

export class GetScheduleController {
  
	async handle(req: Request, res: Response) {

		const { barber_id } = req.params
		
		const getSchedulesRepo = new GetScheduleRepository(prisma)
		const getScheduleUseCase = new GetSchedulesUseCase(getSchedulesRepo)

		const schedules = await getScheduleUseCase.execute(barber_id)

		return res.status(200).json({
			schedules
		})
	}
}