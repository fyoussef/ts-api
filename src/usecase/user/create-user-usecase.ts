
import { User } from '@prisma/client'
import { CreateUserContract, UserOmitPassword } from '../../domain/contracts/user/create-user-contract'
import { UserDTO } from '../../dto/user/user-dto'

export class CreateUserUseCase {
  constructor(
    private readonly createUser: CreateUserContract
  ) {}

  async execute(userDTO: UserDTO): Promise<UserOmitPassword> {
    const user = await this.createUser.create(userDTO)

    return user
  }
}