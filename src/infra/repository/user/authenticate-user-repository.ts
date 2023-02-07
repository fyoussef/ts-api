import { PrismaClient } from '@prisma/client'
import {
  AuthenticateUser,
  AuthenticateUserContract
} from '../../../domain/contracts/user/authenticate-user-contract'
import { comparePassword } from '../../../utils/helpers/hashPassword'
import jwt from 'jsonwebtoken'
import { HttpResponse } from '../../../utils/helpers/http-response'
import { add } from 'date-fns'
import { generateJtwAndRefreshtoken } from '../../../utils/helpers/generateJwtAndRefreshtoken'

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
      const { refreshToken, token } = generateJtwAndRefreshtoken(user)

      // save refresh token
      await this.prisma.refreshToken.create({
        data: {
          expiryDate: add(new Date(), {
            days: 1
          }),
          token: refreshToken,
          userId: user.id
        }
      })

      return { token, refreshToken }
    } else {
      throw new HttpResponse().badRequest(new Error('Credenciais inválidas'))
    }
  }
}
