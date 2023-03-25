import { Request, Response } from 'express'
import { CreateBarberServiceRepository } from '../../../infra/repository/barber/create-barber-service-repository'
import { CreateBarberServiceUseCase } from '../../../usecase/barber/create-barber-services-use-case'

export class CreateBarberServiceController {
  async handle(req: Request, res: Response) {
    const { barberId, duration, service } = req.body

    const repo = new CreateBarberServiceRepository()
    const useCase = new CreateBarberServiceUseCase(repo)

    try {
      await useCase.execute({ barberId, duration, service })

      return res.status(201).json({
        message: 'Serviço cadastrado com sucesso'
      })
    } catch (error: any) {
      return res.status(500).json({
        message: error.message
      })
    }
  }
}
