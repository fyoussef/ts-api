import {
  AuthenticateUser,
  AuthenticateUserContract
} from '../../domain/contracts/user/authenticate-user-contract'

export class AuthenticateUserUseCase {
  constructor(
    private readonly authenticateUserRepo: AuthenticateUserContract
  ) {}

  async execute(
    params: AuthenticateUser.Data
  ): Promise<AuthenticateUser.Result> {
    const token = await this.authenticateUserRepo.authenticate({
      email: params.email,
      password: params.password
    })

    return token
  }
}
