import { Barber } from "@prisma/client";
import { BarberDTO } from "../../../dto/barber/barber-dto";

export interface CreateBarberContrac {
  create(params: BarberDTO): Promise<Barber>
}