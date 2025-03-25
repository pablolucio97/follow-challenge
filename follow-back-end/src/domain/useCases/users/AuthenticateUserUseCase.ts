import { IAuthenticateUserDTO } from "../../dtos/UserDTO";
import { UsersImplementation } from "../../repositories/implementations/UsersImplementation";

export class AuthenticateUserUseCase {
  constructor(private usersImplementation: UsersImplementation) {}
  async execute(data: IAuthenticateUserDTO) {
    const user = await this.usersImplementation.authenticateUser(data);
    return user;
  }
}
