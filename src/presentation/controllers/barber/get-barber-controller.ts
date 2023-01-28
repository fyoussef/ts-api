import { Request, Response } from 'express'
import { prisma } from '../../../infra/db/prismaClient'
import { GetBarberRepository } from '../../../infra/repository/barber/get-barber-repository'
import { GetBarberUseCase } from '../../../usecase/barber/get-barber-usecase'

export class GetBarberController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const getBarberRepo = new GetBarberRepository(prisma)
    const getBarberUseCase = new GetBarberUseCase(getBarberRepo)

    const barber = await getBarberUseCase.execute(id)

    return res.status(200).json(barber)
  }
}
