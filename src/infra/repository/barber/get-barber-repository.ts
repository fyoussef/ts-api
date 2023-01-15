import { Barber, PrismaClient } from "@prisma/client";
import { GetBarberContract } from "../../../domain/contracts/barber/get-barber-contract";

export class GetBarberRepository implements GetBarberContract{
  
  constructor(
    private readonly prisma: PrismaClient
  ) {}
  
  async get(id: string): Promise<Barber | null> {
    const barber = this.prisma.barber.findFirst({
      where: {
        id
      }
    })

    if (!barber) {
      throw new Error("Barber not found")
    }

    return barber
  }

}