import { Request, Response } from 'express'
import { prisma } from '../../infra/db/prismaClient'
import { AuthenticateUserRepository } from '../../infra/repository/user/authenticate-user-repository'
import { AuthenticateUserUseCase } from '../../usecase/user/authenticate-user-usecase'

export class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body

    const authenticateUserRepo = new AuthenticateUserRepository(prisma)
    const authenticateUserUseCase = new AuthenticateUserUseCase(
      authenticateUserRepo
    )

    try {
      const token = await authenticateUserUseCase.execute({
        email,
        password
      })

      return res.json(token)
    } catch (error: any) {
      return res.status(error.statusCode).json(error.body)
    }
  }
}
