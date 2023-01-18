import { PrismaClient } from "@prisma/client";
import { CreateUserContract, UserOmitPassword } from "../../../domain/contracts/user/create-user-contract";
import { UserDTO } from "../../../dto/user/user-dto";

export class CreateUserRepository implements CreateUserContract {
  constructor (
    private readonly prisma: PrismaClient
  ) {}

  async create({ email, name, password, phone }: UserDTO): Promise<UserOmitPassword> {
    const user = await this.prisma.user.create({
      data: {
        email, name, password, phone
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