import { User } from "@prisma/client";
import { UserDTO } from "../../../dto/user/user-dto";

export interface CreateUserContract {
  create(userDTO: UserDTO): Promise<User>
}