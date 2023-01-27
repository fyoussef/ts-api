export class UserEmailException extends Error {
  constructor() {
    super('Email inválido')
    this.name = 'UserEmailException'
  }
}
