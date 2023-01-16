import { Request, Response } from "express";
import { prisma } from "../../infra/db/prismaClient";
import { DeleteScheduleRepository } from "../../infra/repository/schedule/delete-schedule-repository";
import { DeleteSchedulesUseCase } from "../../usecase/schedule/delete-schedules-usecase";

export class DeleteScheduleController {
  async handle(req: Request, res: Response) {
    const {barber_id} = req.params
    const deleteScheduleRepo = new DeleteScheduleRepository(prisma)
    const deleteScheduleUseCase = new DeleteSchedulesUseCase(deleteScheduleRepo)

    await deleteScheduleUseCase.execute(barber_id)

    return res.status(202).json({
      msg: 'Barber schedule has been deleted'
    })
  }
}