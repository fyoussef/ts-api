import { addMinutes, format, isEqual } from 'date-fns'
import pt from "date-fns/locale/pt-BR";
import { NextFunction, Request, Response, Router } from 'express'
import {
  createBarberController,
  createScheduleController,
  deleteBarberController,
  deleteScheduleController,
  getBarberController,
  getBarbersController,
  getSchedulesController,
  updateBarberController
} from './controllers'
import { Schedule } from './domain/entities/schedule';
import { prisma } from './infra/db/prismaClient'

const routes = Router()

function validateBarberId(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id
  if (!id) {
    throw new Error('O id é obrigatório')
  }
  next()
}

routes.get('/', (req, res) => {
  const { barber_id, start_hour, end_hour, interval }: any = req.body
  const schedule = new Schedule().calculateHours(barber_id, start_hour, end_hour, interval)
  return res.status(200).json({ schedule })
})

routes.get('/barber', getBarbersController.handle)
routes.get('/barber/:id', getBarberController.handle)
routes.post('/barber', createBarberController.handle)
routes.put('/barber/:id', updateBarberController.handle)
routes.delete('/barber/:id', deleteBarberController.handle)

routes.get('/schedules/:barber_id', getSchedulesController.handle)
routes.post('/schedules', createScheduleController.handle)
routes.delete('/schedules/:barber_id', deleteScheduleController.handle)

// routes.delete('/schedules/:id', validateBarberId, async (req, res) => {
//   const id = req.params.id

//   const deleted = await prisma.barber_Schedules.deleteMany({
//     where: {
//       barber_id: {
//         equals: id
//       }
//     }
//   })

//   res.json(deleted)
// })

export { routes }
