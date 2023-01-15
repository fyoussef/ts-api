import { PrismaClient } from "@prisma/client";
import { DeleteBarberContract } from "../../../domain/contracts/barber/delete-barber-contract";

export class DeleteBarberRepository implements DeleteBarberContract {
  constructor (
    private readonly prisma: PrismaClient
  ) {}

  async delete(id: string): Promise<void> {
    await this.prisma.barber.delete({
      where: {
        id
      }
    })
  }

}