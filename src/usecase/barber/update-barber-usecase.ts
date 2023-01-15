import { Barber } from "@prisma/client";
import { UpdateBarberContract } from "../../domain/contracts/barber/update-barber-contract";
import { BarberDTO } from "../../dto/barber/barber-dto";

export class UpdateBarberUseCase {

  constructor(
    private readonly updateBarberRepo: UpdateBarberContract
  ) {}

  async execute(barberDTO: BarberDTO): Promise<Barber> {

    const barber = await this.updateBarberRepo.update(barberDTO)
    
    return barber
  }

}