import { Barber, PrismaClient } from "@prisma/client";
import { UpdateBarberContract } from "../../../domain/contracts/barber/update-barber-contract";
import { BarberDTO } from "../../../dto/barber/barber-dto";
import { GetBarberUseCase } from "../../../usecase/barber/get-barber-usecase";
import { GetBarberRepository } from "./get-barber-repository";

export class UpdateBarberRepository implements UpdateBarberContract {
  
  constructor (
    private readonly prisma: PrismaClient
  ) {}

  async update(barberDTO: BarberDTO): Promise<Barber> {
    
    if (!barberDTO.id) {
      throw new Error("Barber id is necessary");
    }

    const getBarberRepo = new GetBarberRepository(this.prisma);
    const getBarberUseCase = new GetBarberUseCase(getBarberRepo)

    const barberFound =  await getBarberUseCase.execute(barberDTO.id)

    if (!barberFound) {
      throw new Error("Barber not found");
    }

    const barber = await this.prisma.barber.update({
      data: {
        name: barberDTO.name
      },
      where: {
        id: barberDTO.id
      }
    })
    
    return barber
  }
  
}