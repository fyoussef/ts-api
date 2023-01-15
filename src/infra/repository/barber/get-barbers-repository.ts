import { Barber, PrismaClient } from "@prisma/client";
import { GetBarbersContract } from "../../../domain/contracts/barber/get-barbers-contract";

export class GetBarbersRepository implements GetBarbersContract {
  
  constructor(
    private readonly prisma: PrismaClient
  ) {}
  
  getAll(): Promise<Barber[]> {
    const barbers = this.prisma.barber.findMany()

    return barbers
  }

}