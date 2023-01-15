import { DeleteBarberContract } from "../../domain/contracts/barber/delete-barber-contract";

export class DeleteBarberUseCase {
  constructor(
    private readonly deleteBarberContract: DeleteBarberContract
  ) {}

  async execute(id: string): Promise<void> {
    await this.deleteBarberContract.delete(id)
  }
}