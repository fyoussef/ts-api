import { Barber } from "@prisma/client";

export interface GetBarbersContract {
  getAll(): Promise<Barber[]>
}