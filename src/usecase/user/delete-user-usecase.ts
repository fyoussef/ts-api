import { DeleteUserContract } from "../../domain/contracts/user/delete-user-contract";

export class DeleteUserUseCase {
  constructor(
    private readonly deleteUser: DeleteUserContract
  ) {}

  async execute(id: string): Promise<void> {
    await this.deleteUser.delete(id)
  }
}