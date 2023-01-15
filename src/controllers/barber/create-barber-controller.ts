import { Request, Response } from "express";
import { prisma } from "../../infra/db/prismaClient";
import { CreateBarberRepository } from "../../infra/repository/barber/create-barber-repository";
import { CreateBarberUseCase } from "../../usecase/barber/create-barber-usecase";

export class CreateBarberController {

  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createBarberRepo = new CreateBarberRepository(prisma)
    const createBarberUseCase = new CreateBarberUseCase(createBarberRepo)

    const barber = await createBarberUseCase.execute({ name })

    return res.status(201).json(barber)
  }

}