import { Request, Response } from "express";
import { UserDTO } from "../../dto/user/user-dto";
import bcrypt from 'bcrypt'
import { CreateUserRepository } from "../../infra/repository/user/create-user-repository";
import { prisma } from "../../infra/db/prismaClient";
import { CreateUserUseCase } from "../../usecase/user/create-user-usecase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, name, password, phone }: UserDTO = req.body

    const hash = await bcrypt.hash(password, 10)

    const createUserRepo = new CreateUserRepository(prisma)
    const createUserUseCase = new CreateUserUseCase(createUserRepo)

    const user = await createUserUseCase.execute({
      email,
      name,
      phone,
      password: hash
    })

    return res.status(201).json({user})

  }
}