import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

app.listen(5000, () => console.log('Server running on port :5000'))
