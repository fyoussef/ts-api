import { Barber } from "@prisma/client";
import { GetBarberContract } from "../../domain/contracts/barber/get-barber-contract";

export class GetBarberUseCase {
  constructor(
    private readonly getBarberContract: GetBarberContract
  ) {}

  async execute(id: string): Promise<Barber | null> {
    const barber = this.getBarberContract.get(id)

    return barber
  }
}