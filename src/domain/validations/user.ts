import { UserDTO } from '../../dto/user/user-dto'
import {
  HttpResponse,
  HttpResponseFormat
} from '../../utils/helpers/http-response'
import { UserEmailException } from '../exceptions/user/user-email-error'
import { UserNameException } from '../exceptions/user/user-namer-error'
import { UserPasswordException } from '../exceptions/user/user-password-error'
import { UserPhoneException } from '../exceptions/user/user-phone-error'

export type UserValidationResponse = boolean | HttpResponseFormat

export class UserValidation {
  constructor(private userDTO: UserDTO) {}

  validateName(): UserValidationResponse {
    if (this.userDTO.name.length < 3) {
      throw new HttpResponse().badRequest(new UserNameException())
    }
    return true
  }

  validateEmail(): UserValidationResponse {
    const email = this.userDTO.email
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const valid = reg.test(email)

    if (!valid || !email) {
      throw new HttpResponse().badRequest(new UserEmailException())
    }
    return true
  }

  validatePassword(): UserValidationResponse {
    if (this.userDTO.password.length < 8) {
      throw new HttpResponse().badRequest(new UserPasswordException())
    }
    return true
  }

  validatePhone(): UserValidationResponse {
    if (this.userDTO.phone.length < 11) {
      throw new HttpResponse().badRequest(new UserPhoneException())
    }
    return true
  }
}
