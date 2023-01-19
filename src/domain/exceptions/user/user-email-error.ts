export class UserEmailException extends Error {
  constructor() {
    super('user email is invalid')
    this.name = 'UserEmailException'
  }
}