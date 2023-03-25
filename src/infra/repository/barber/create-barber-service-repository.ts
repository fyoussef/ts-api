import { PrismaClient } from '@prisma/client'
import { CreateBarberServiceContract } from '../../../domain/contracts/barber/create-barber-service-contract'
import { BarberServiceDTO } from '../../../dto/barber/barber-service-dto'
import { prisma } from '../../db/prismaClient'

export class CreateBarberServiceRepository
  implements CreateBarberServiceContract
{
  async create(params: BarberServiceDTO): Promise<any> {
    const service = await prisma.services.findFirst({
      where: {
        name: params.service
      }
    })
    if (!service) {
      throw new Error('Service not found')
    }

    await prisma.barber_Services.create({
      data: {
        duration: params.duration,
        barberId: params.barberId,
        serviceId: service?.id
      }
    })
  }
}
