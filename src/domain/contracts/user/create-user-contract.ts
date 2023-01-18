import { User } from "@prisma/client";
import { UserDTO } from "../../../dto/user/user-dto";

export interface UserOmitPassword {
  id: string
  name: string
  email: string
  phone: string
}

export interface CreateUserContract {
  create(userDTO: UserDTO): Promise<UserOmitPassword>
}