export class UserPhoneException extends Error {
  constructor() {
    super('user phone is invalid')
    this.name = 'UserPhoneException'
  }
}