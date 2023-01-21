import { User } from '@prisma/client'
import {
  CreateUserContract,
  UserOmitPassword
} from '../../domain/contracts/user/create-user-contract'
import { User as UserEntity } from '../../domain/entities/user'
import {
  UserValidation,
  UserValidationResponse
} from '../../domain/validations/user'
import { UserDTO } from '../../dto/user/user-dto'

export class CreateUserUseCase {
  constructor(private readonly createUser: CreateUserContract) {}

  async execute(
    userDTO: UserDTO
  ): Promise<UserOmitPassword | UserValidationResponse> {
    const isValid = new UserEntity(userDTO).validate()
    console.log('isValid', isValid)
    if (!isValid) {
      return isValid
    }
    const user = await this.createUser.create(userDTO)
    return user
  }
}
