import { Barber, PrismaClient } from '@prisma/client'
import { CreateBarberContrac } from '../../../domain/contracts/barber/create-barber-contract'
import { BarberDTO } from '../../../dto/barber/barber-dto'

export class CreateBarberRepository implements CreateBarberContrac {
  constructor(private readonly prisma: PrismaClient) {}

  async create({ name, userId }: BarberDTO): Promise<Barber> {
    const barber = await this.prisma.barber.create({
      data: {
        name,
        userId
      }
    })

    return barber
  }
}
