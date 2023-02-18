import { Router } from 'express'
import { prisma } from './infra/db/prismaClient'
import {
  authenticateUserController,
  createBarberController,
  createScheduleController,
  createUserController,
  deleteBarberController,
  deleteScheduleController,
  deleteUserController,
  getBarberController,
  getBarbersController,
  getSchedulesController,
  updateBarberController
} from './presentation/controllers'
import { VerifyToken } from './presentation/middlewares/verify-token'
import { CheckRefreshtokenIsValid } from './usecase/user/check-refreshtoken-is-valid'
import { generateJtwAndRefreshtoken } from './utils/helpers/generateJwtAndRefreshtoken'

const routes = Router()

const middleware = new VerifyToken()

routes.get('/', (req, res) => {
  return res.status(200).json({ msg: 'RODANDOO', headers: req.headers })
})

routes.get('/barber', getBarbersController.handle)
routes.get('/barber/:id', getBarberController.handle)
routes.post('/barber', createBarberController.handle)
routes.put('/barber/:id', updateBarberController.handle)
routes.delete('/barber/:id', deleteBarberController.handle)

routes.get('/schedules/:barber_id', getSchedulesController.handle)
routes.post('/schedules', createScheduleController.handle)
routes.delete('/schedules/:barber_id', deleteScheduleController.handle)

routes.post('/user', createUserController.handle)
routes.delete('/user/:id', deleteUserController.handle)

routes.post('/refresh/:id', middleware.handle, async (req, res) => {
  const { id } = req.params
  const { refreshToken: oldRefreshtoken } = req.body

  const user = await prisma.user.findFirst({
    where: {
      id
    }
  })

  if (!user) {
    return res.status(400).json({
      message: 'User not found'
    })
  }

  const isTokenValid = await new CheckRefreshtokenIsValid(prisma).execute(
    oldRefreshtoken
  )
  if (!isTokenValid) {
    return res.status(401).json({
      code: 'token.invalid'
    })
  }

  const { refreshToken, token } = generateJtwAndRefreshtoken(user)

  return res.status(201).json({
    refreshToken,
    token
  })
})

routes.post('/user/authenticate', authenticateUserController.handle)

export { routes }
