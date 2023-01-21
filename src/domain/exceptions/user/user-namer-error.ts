export class UserNameException extends Error {
  constructor() {
    super('username must be at least 3 characters')
    this.name = 'UserNameException'
  }
}
