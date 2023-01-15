import { Barber } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../../infra/db/prismaClient";
import { UpdateBarberRepository } from "../../infra/repository/barber/update-barber-repository";
import { UpdateBarberUseCase } from "../../usecase/barber/update-barber-usecase";

export class UpdateBarberController {

  async handle(req: Request, res: Response) {

    const { id } = req.params
    const { name } = req.body

    const updateBarberRepo = new UpdateBarberRepository(prisma)
    const updateBarberUseCase = new UpdateBarberUseCase(updateBarberRepo)

    const barber = await updateBarberUseCase.execute({
      id: id,
      name: name,
    })

    return res.status(202).json({ barber })
  }
}