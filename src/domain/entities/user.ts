import { UserDTO } from '../../dto/user/user-dto'
import { UserValidation, UserValidationResponse } from '../validations/user'

export class User {
  constructor(private userDTO: UserDTO) {}

  validate(): UserValidationResponse {
    const validator = new UserValidation(this.userDTO)

    return (
      validator.validateName() &&
      validator.validateEmail() &&
      validator.validatePassword() &&
      validator.validatePhone()
    )
  }
}
