import {
    IAuthenticatedUserData,
    IAuthenticateUserDTO,
    ICreateUserDTO,
    IUserDTO,
} from "../../dtos/UserDTO";

export interface IUsersRepository {
  createUser(data: ICreateUserDTO): Promise<IUserDTO>;
  authenticateUser(data: IAuthenticateUserDTO): Promise<IAuthenticatedUserData | null>;
}
