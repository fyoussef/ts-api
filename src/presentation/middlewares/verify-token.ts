import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export class VerifyToken {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers

    if (!authorization) {
      return res.status(401).json({
        code: 'token.invalid'
      })
    }

    const [, token] = authorization?.split(' ')

    if (!token) {
      return res.status(401).json({
        code: 'token.invalid'
      })
    }

    try {
      const decode = jwt.verify(token, String(process.env.JWT_SUPER_SECRET))

      return next()
    } catch (error) {
      return res.status(401).json({
        code: 'token.expired'
      })
    }
  }
}
