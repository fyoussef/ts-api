import { CreateBarberController } from "./barber/create-barber-controller"
import { DeleteBarberController } from "./barber/delete-barber-controller"
import { GetBarberController } from "./barber/get-barber-controller"
import { GetBarbersController } from "./barber/get-barbers-controller"
import { UpdateBarberController } from "./barber/update-barber-controller"
import { CreateScheduleController } from "./schedules/create-schedules-controller"


export const createBarberController = new CreateBarberController()
export const getBarberController = new GetBarberController()
export const getBarbersController = new GetBarbersController()
export const updateBarberController = new UpdateBarberController()
export const deleteBarberController = new DeleteBarberController()

export const createScheduleController = new CreateScheduleController()
