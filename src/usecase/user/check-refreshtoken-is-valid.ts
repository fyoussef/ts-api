import { PrismaClient, RefreshToken } from '@prisma/client'

export class CheckRefreshtokenIsValid {
  constructor(private readonly prisma: PrismaClient) {}

  async execute(refreshToken: string): Promise<RefreshToken | null> {
    const refreshTokenExists = await this.prisma.refreshToken.findFirst({
      where: {
        token: refreshToken
      }
    })

    return refreshTokenExists
  }
}
