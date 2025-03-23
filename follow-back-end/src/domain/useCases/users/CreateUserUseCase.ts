import { ICreateUserDTO } from "../../dtos/UserDTO";
import { UsersImplementation } from "../../repositories/implementations/UsersImplementation";

export class CreateUserUseCase {
  constructor(private userImplementation: UsersImplementation) {}
  async execute(data: ICreateUserDTO) {
    const user = await this.userImplementation.createUser(data);
    return user;
  }
}
