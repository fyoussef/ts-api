import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(5000, () => console.log('Server running on port :5000'))
