import { Request, Response } from 'express'
import { prisma } from '../../../infra/db/prismaClient'
import { CreateClientScheduleRepository } from '../../../infra/repository/client_schedule/create-client-schedule-repository'
import { ClientScheduleUseCase } from '../../../usecase/client_schedule/client-schedule-usecase'

export class CreateClientScheduleController {
  async handle(req: Request, res: Response) {
    const { name, phone, scheduledAt, barber_id } = req.body

    const repo = new CreateClientScheduleRepository(prisma)
    const useCase = new ClientScheduleUseCase(repo)

    try {
      await useCase.execute({ name, phone, scheduledAt, barber_id })

      return res.status(201).json({
        message: 'Agendamento realizado com sucesso'
      })
    } catch (error) {
      return res.status(400).json({
        message: 'Erro no agendamento de horário'
      })
    }
  }
}
