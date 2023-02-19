import { Barber } from '@prisma/client'
import { CreateBarberContrac } from '../../domain/contracts/barber/create-barber-contract'
import { BarberDTO } from '../../dto/barber/barber-dto'

export class CreateBarberUseCase {
  constructor(private readonly createBarberContract: CreateBarberContrac) {}

  async execute({ name, userId }: BarberDTO): Promise<Barber> {
    const barber = await this.createBarberContract.create({ name, userId })

    return barber
  }
}
