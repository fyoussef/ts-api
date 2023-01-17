import { PrismaClient, User } from "@prisma/client";
import { CreateUserContract } from "../../../domain/contracts/user/create-user-contract";
import { UserDTO } from "../../../dto/user/user-dto";

export class CreateUserRepository implements CreateUserContract {
  constructor (
    private readonly prisma: PrismaClient
  ) {}

  async create({ email, name, password, phone }: UserDTO): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        email, name, password, phone
      }
    })

    return user
  }

}