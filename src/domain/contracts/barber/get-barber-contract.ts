import { Barber } from "@prisma/client";
import { BarberDTO } from "../../../dto/barber/barber-dto";

export interface GetBarberContract {
  get(id: string): Promise<Barber | null>
}