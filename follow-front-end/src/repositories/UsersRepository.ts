import { api } from "@/services/api";
import { IAuthenticateUserDTO, ICreateUserDTO } from "dtos/User";
export class UsersRepository {
  async createUser(data: ICreateUserDTO) {
    const response = await api.post("/user", data);
    return response.data;
  }
  async authenticateUser(data: IAuthenticateUserDTO) {
    const response = await api.post("/user/auth", data);
    return response.data;
  }
}
