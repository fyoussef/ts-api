import { PrismaClient } from '@prisma/client'
import {
  AuthenticateUser,
  AuthenticateUserContract
} from '../../../domain/contracts/user/authenticate-user-contract'
import { hashPassword } from '../../../utils/helpers/hashPassword'

export class AuthenticateUserRepository implements AuthenticateUserContract {
  constructor(private readonly prisma: PrismaClient) {}

  async authenticate(
    params: AuthenticateUser.Data
  ): Promise<AuthenticateUser.Result> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: params.email
      }
    })

    if (!user) {
    }
    const passwordHashed = await hashPassword(params.password)
    if (user?.password == passwordHashed) {
      return { token: 'token' }
    }
    throw new Error('Error')
  }
}
