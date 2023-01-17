import { PrismaClient } from "@prisma/client";
import { DeleteUserContract } from "../../../domain/contracts/user/delete-user-contract";

export class DeleteUserRepository implements DeleteUserContract {
  constructor(
    private readonly prisma: PrismaClient
  ) {}
  
  async delete(id: string): Promise<void> {
    const user = await this.prisma.user.findFirst({
      where: {
        id
      }
    })

    if (!user) {
      throw new Error('User not found')
    }

    await this.prisma.user.delete({
      where: {
        id
      }
    })
  }
}