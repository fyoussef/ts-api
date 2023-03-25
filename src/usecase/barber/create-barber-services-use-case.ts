import { CreateBarberServiceContract } from '../../domain/contracts/barber/create-barber-service-contract'
import { BarberServiceDTO } from '../../dto/barber/barber-service-dto'

export class CreateBarberServiceUseCase {
  constructor(private readonly repo: CreateBarberServiceContract) {}

  async execute(params: BarberServiceDTO) {
    await this.repo.create(params)
  }
}
