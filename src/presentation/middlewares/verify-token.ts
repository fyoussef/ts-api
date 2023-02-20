import { NextFunction, Request, Response } from 'express'
import { decode, verify } from 'jsonwebtoken'

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
      verify(token, String(process.env.JWT_SUPER_SECRET))

      const userId = decode(token, {
        json: true
      })?.id

      req.body.userId = userId

      return next()
    } catch (error) {
      return res.status(401).json({
        code: 'token.expired'
      })
    }
  }
}
