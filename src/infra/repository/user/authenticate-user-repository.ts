import { PrismaClient } from '@prisma/client'
import {
  AuthenticateUser,
  AuthenticateUserContract
} from '../../../domain/contracts/user/authenticate-user-contract'
import { comparePassword } from '../../../utils/helpers/hashPassword'
import jwt from 'jsonwebtoken'
import { HttpResponse } from '../../../utils/helpers/http-response'
import { randomUUID } from 'crypto'

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
      throw new HttpResponse().badRequest(new Error('Credenciais inválidas'))
    }

    const passwordMatch = await comparePassword(user?.password, params.password)

    if (passwordMatch) {
      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone
        },
        String(process.env.JWT_SUPER_SECRET),
        {
          expiresIn: '1h'
        }
      )

      let expiredAt = new Date()

      const oneDayInterval = 60 * 60 * 24 // 1 day
      expiredAt.setSeconds(expiredAt.getSeconds() + oneDayInterval)

      const refreshToken = await this.prisma.refreshToken.create({
        data: {
          userId: user.id,
          token: randomUUID(),
          expiryDate: expiredAt
        }
      })

      return { token, refreshToken: refreshToken.token }
    } else {
      throw new HttpResponse().badRequest(new Error('Credenciais inválidas'))
    }
  }
}
