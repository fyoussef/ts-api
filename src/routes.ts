import { Router } from 'express'
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

const routes = Router()

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

routes.post('/user/authenticate', authenticateUserController.handle)

export { routes }
