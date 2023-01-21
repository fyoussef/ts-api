import { UserDTO } from '../../dto/user/user-dto'
import { UserValidation } from '../validations/user'

export class User {
  constructor(private userDTO: UserDTO) {}

  validate() {
    const validator = new UserValidation(this.userDTO)

    return (
      validator.validateName() &&
      validator.validateEmail() &&
      validator.validatePassword() &&
      validator.validatePhone()
    )
  }
}
