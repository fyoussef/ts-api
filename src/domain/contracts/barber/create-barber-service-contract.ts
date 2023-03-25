import { BarberServiceDTO } from '../../../dto/barber/barber-service-dto'

export interface CreateBarberServiceContract {
  create(params: BarberServiceDTO): Promise<any>
}
