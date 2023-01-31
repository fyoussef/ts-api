import { Request, Response } from 'express'
import { prisma } from '../../infra/db/prismaClient'
import jwt from 'jsonwebtoken'

export class VerifyToken {
  async handle(req: Request, res: Response) {
    const { userId } = req.body

    const refreshToken = await prisma.refreshToken.findFirst({
      where: {
        userId
      }
    })

    if (!refreshToken) {
      return res.status(403).json({
        message: 'Este usuário não foi encontrado'
      })
    }

    const user = await prisma.user.findFirst({
      where: {
        id: userId
      }
    })

    if (!user) {
      return res.status(400).json({
        message: 'Este usuário não foi encontrado'
      })
    }

    const handleToken = jwt.verify(
      refreshToken.token,
      String(process.env.JWT_SUPER_SECRET),
      (err, decode) => {
        if (err) {
          return res.status(406).json({ message: 'Faça login novamente' })
        }

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

        return res.status(200).json({ token })
      }
    )
  }
}
