import { PrismaClient } from '@prisma/client'
import {
  CreateUserContract,
  UserOmitPassword
} from '../../../domain/contracts/user/create-user-contract'
import { UserDTO } from '../../../dto/user/user-dto'
import { HttpResponse } from '../../../utils/helpers/http-response'

export class CreateUserRepository implements CreateUserContract {
  constructor(private readonly prisma: PrismaClient) {}

  async create({
    email,
    name,
    password,
    phone
  }: UserDTO): Promise<UserOmitPassword> {
    const userAlreadyExists = await this.prisma.user.findFirst({
      where: {
        email
      }
    })

    if (userAlreadyExists) {
      throw new HttpResponse().badRequest(
        new Error('Esta email não está indisponível')
      )
    }

    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        password,
        phone
      },
      select: {
        email: true,
        id: true,
        name: true,
        phone: true
      }
    })

    return user
  }
}
