export interface AuthenticateUserContract {
  authenticate(params: AuthenticateUser.Data): Promise<AuthenticateUser.Result>
}

export namespace AuthenticateUser {
  export type Data = {
    email: string
    password: string
  }

  export type Result =
    | {
        token: string
      }
    | Error
}
