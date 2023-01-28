import { Request, Response } from 'express'
import { prisma } from '../../../infra/db/prismaClient'
import { DeleteUserRepository } from '../../../infra/repository/user/delete-user-repository'
import { DeleteUserUseCase } from '../../../usecase/user/delete-user-usecase'

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const deleteUserRepo = new DeleteUserRepository(prisma)
    const deleteUserUseCase = new DeleteUserUseCase(deleteUserRepo)

    await deleteUserUseCase.execute(id)

    return res.status(204).json({
      msg: 'User has been deleted'
    })
  }
}
