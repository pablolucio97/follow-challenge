import {
  IAuthenticatedUserData,
  IAuthenticateUserDTO,
  ICreateUserDTO,
  IUser,
} from "../../dtos/UserDTO";

export interface IUsersRepository {
  createUser(data: ICreateUserDTO): Promise<IUser>;
  authenticateUser?(data: IAuthenticateUserDTO): Promise<IAuthenticatedUserData>;
}
