export class UserPasswordException extends Error {
  constructor() {
    super('user password must be at least 8 characters')
    this.name = 'UserPasswordException'
  }
}