import { Request, Response } from 'express'
import { Schedule } from '../../../domain/entities/schedule'
import { prisma } from '../../../infra/db/prismaClient'
import { CreateScheduleRepository } from '../../../infra/repository/schedule/create-schedule-repository'
import { CreateScheduleUseCase } from '../../../usecase/schedule/create-schedule-usecase'

export class CreateScheduleController {
  async handle(req: Request, res: Response) {
    const { barber_id, start_hour, end_hour, interval } = req.body

    const schedules = new Schedule().calculateHours(
      barber_id,
      start_hour,
      end_hour,
      interval
    )

    const createScheduleRepository = new CreateScheduleRepository(prisma)
    const createScheduleUseCase = new CreateScheduleUseCase(
      createScheduleRepository
    )

    await createScheduleUseCase.execute(schedules)

    return res.status(200).json({ msg: 'Barber schedule created' })
  }
}
