import { PrismaClient } from '@prisma/client'
import {
  AuthenticateUser,
  AuthenticateUserContract
} from '../../../domain/contracts/user/authenticate-user-contract'
import {
  comparePassword,
  hashPassword
} from '../../../utils/helpers/hashPassword'
import jwt from 'jsonwebtoken'

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
      throw new Error('User not found')
    }
    const passwordMatch = await comparePassword(user?.password, params.password)

    if (passwordMatch) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
          phone: user.phone
        },
        String(process.env.JWT_SUPER_SECRET),
        {
          expiresIn: '5h'
        }
      )
      return { token }
    } else {
      throw new Error('Error')
    }
  }
}
