import { addMinutes, format, isEqual } from 'date-fns'
import pt from "date-fns/locale/pt-BR";
import { NextFunction, Request, Response, Router } from 'express'
import {
  createBarberController,
  createScheduleController,
  deleteBarberController,
  getBarberController,
  getBarbersController,
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

routes.post('/schedules', createScheduleController.handle)

routes.get('/schedules/:barber_id', async (req, res) => {
  const { barber_id } = req.params

  const schedules = await prisma.barber_Schedules.findMany({
    where: {
      barber_id: {
        equals: barber_id
      }
    }
  })

  res.json({
    schedules
  })
})

// routes.post('/schedules', async (req, res) => {
//   const { barber_id } = req.body

//   const hours = [
//     { barber_id, hour: '09:00' },
//     { barber_id, hour: '09:30' },
//     { barber_id, hour: '10:00' },
//     { barber_id, hour: '10:30' },
//     { barber_id, hour: '11:00' },
//     { barber_id, hour: '11:30' },
//     { barber_id, hour: '12:00' },
//     { barber_id, hour: '12:30' },
//     { barber_id, hour: '13:00' },
//     { barber_id, hour: '13:30' },
//     { barber_id, hour: '14:00' },
//     { barber_id, hour: '14:30' },
//     { barber_id, hour: '15:00' },
//     { barber_id, hour: '15:30' },
//     { barber_id, hour: '16:00' },
//     { barber_id, hour: '16:30' },
//     { barber_id, hour: '17:00' },
//     { barber_id, hour: '17:30' },
//     { barber_id, hour: '18:00' },
//     { barber_id, hour: '18:30' },
//     { barber_id, hour: '19:00' }
//   ]

//   const schedules = await prisma.barber_Schedules.createMany({
//     data: hours
//   })

//   return res.json(schedules)
// })

routes.delete('/schedules/:id', validateBarberId, async (req, res) => {
  const id = req.params.id

  const deleted = await prisma.barber_Schedules.deleteMany({
    where: {
      barber_id: {
        equals: id
      }
    }
  })

  res.json(deleted)
})

export { routes }
