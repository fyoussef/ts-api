import { CreateBarberController } from './barber/create-barber-controller'
import { CreateBarberServiceController } from './barber/create-barber-service-controller'
import { DeleteBarberController } from './barber/delete-barber-controller'
import { GetBarberController } from './barber/get-barber-controller'
import { GetBarbersController } from './barber/get-barbers-controller'
import { UpdateBarberController } from './barber/update-barber-controller'
import { CreateClientScheduleController } from './client_schedule/create-client-schedule-controller'
import { CreateScheduleController } from './schedules/create-schedules-controller'
import { DeleteScheduleController } from './schedules/delete-schedules-controller'
import { GetScheduleController } from './schedules/get-schedules-controller'
import { AuthenticateUserController } from './user/authenticate-user-controller'
import { CreateUserController } from './user/create-user-controller'
import { DeleteUserController } from './user/delete-user-controller'

export const createBarberController = new CreateBarberController()
export const getBarberController = new GetBarberController()
export const getBarbersController = new GetBarbersController()
export const updateBarberController = new UpdateBarberController()
export const deleteBarberController = new DeleteBarberController()

export const createScheduleController = new CreateScheduleController()
export const getSchedulesController = new GetScheduleController()
export const deleteScheduleController = new DeleteScheduleController()

export const createUserController = new CreateUserController()
export const deleteUserController = new DeleteUserController()
export const authenticateUserController = new AuthenticateUserController()

export const clientSchedule = new CreateClientScheduleController()

export const createBarberService = new CreateBarberServiceController()
