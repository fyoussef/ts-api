import { PrismaClient } from '@prisma/client'
import { CreateClientSchedule } from '../../../domain/contracts/client_schedule/create-client-schedule-contract'
import { CreateScheduleClientDTO } from '../../../dto/client_schedule/client-schedule-dto'

export class CreateClientScheduleRepository implements CreateClientSchedule {
  constructor(private readonly prisma: PrismaClient) {}

  async create(param: CreateScheduleClientDTO): Promise<any> {
    let client = await this.prisma.client.findFirst({
      where: {
        name: param.name,
        phone: param.phone
      }
    })

    if (!client) {
      client = await this.prisma.client.create({
        data: {
          name: param.name,
          phone: param.phone
        }
      })
    }

    const clientSchedule = await this.prisma.client_Schedules.create({
      data: {
        scheduledAt: param.scheduledAt,
        barber_id: param.barber_id,
        clientId: client.id
      }
    })

    return clientSchedule
  }
}
