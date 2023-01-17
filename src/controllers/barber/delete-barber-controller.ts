import { Request, Response } from "express";
import { prisma } from "../../infra/db/prismaClient";
import { DeleteBarberRepository } from "../../infra/repository/barber/delete-barber-repository";
import { DeleteBarberUseCase } from "../../usecase/barber/delete-barber-usecase";

export class DeleteBarberController {

  async handle(req: Request, res: Response) {

    const { id } = req.params

    const deleteBarberRepo = new DeleteBarberRepository(prisma)
    const deleteBarberUseCase = new DeleteBarberUseCase(deleteBarberRepo)

    await deleteBarberUseCase.execute(id)

    return res.status(204).json({
      msg: 'Barber deleted'
    })
  }
}