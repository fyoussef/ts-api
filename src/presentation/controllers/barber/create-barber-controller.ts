import { Request, Response } from 'express'
import { prisma } from '../../../infra/db/prismaClient'
import { CreateBarberRepository } from '../../../infra/repository/barber/create-barber-repository'
import { CreateBarberUseCase } from '../../../usecase/barber/create-barber-usecase'

export class CreateBarberController {
  async handle(req: Request, res: Response) {
    const { name, userId } = req.body

    if (!name || !userId) {
      throw new Error('Data invalid to create barber')
    }

    const createBarberRepo = new CreateBarberRepository(prisma)
    const createBarberUseCase = new CreateBarberUseCase(createBarberRepo)

    const barber = await createBarberUseCase.execute({ userId, name })

    return res.status(201).json(barber)
  }
}
