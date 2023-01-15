import { Barber } from "@prisma/client";
import { BarberDTO } from "../../../dto/barber/barber-dto";

export interface UpdateBarberContract {
  update(barberDTO: BarberDTO): Promise<Barber>
}