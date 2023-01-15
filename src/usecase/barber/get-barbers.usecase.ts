import { Barber } from "@prisma/client";
import { GetBarbersContract } from "../../domain/contracts/barber/get-barbers-contract";

export class GetBarbersUseCase {
  constructor(
    private readonly getBarbersContract: GetBarbersContract
  ) {}

  async execute(): Promise<Barber[]> {
    const barbers = this.getBarbersContract.getAll();
    
    return barbers
  }
}