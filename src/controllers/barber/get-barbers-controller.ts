import { Request, Response } from "express";
import { prisma } from "../../infra/db/prismaClient";
import { GetBarbersRepository } from "../../infra/repository/barber/get-barbers-repository";
import { GetBarbersUseCase } from "../../usecase/barber/get-barbers.usecase";

export class GetBarbersController {

  async handle(req: Request, res: Response) {
    
    const getBarbersRepository = new GetBarbersRepository(prisma)
    const getBarbersUseCase = new GetBarbersUseCase(getBarbersRepository)

    const barbers = await getBarbersUseCase.execute()

    return res.status(200).json(barbers)

  }
}