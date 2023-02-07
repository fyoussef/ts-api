import { User } from '@prisma/client'
import jwt from 'jsonwebtoken'

export const generateJtwAndRefreshtoken = (
  user: User
): {
  token: string
  refreshToken: string
} => {
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone
    },
    String(process.env.JWT_SUPER_SECRET),
    {
      expiresIn: 10
    }
  )

  const refreshToken = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone
    },
    String(process.env.JWT_SUPER_SECRET),
    {
      expiresIn: '1d'
    }
  )

  return {
    token,
    refreshToken
  }
}
