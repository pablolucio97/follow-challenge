/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/services/api";
import { IAuthenticateUserDTO, ICreateUserDTO } from "dtos/User";
export class UsersRepository {
  async createUser(data: ICreateUserDTO) {
    try {
      const response = await api.post("/user", data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response);
    }
  }
  async authenticateUser(data: IAuthenticateUserDTO) {
    try {
      const response = await api.post("/user/auth", data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response);
    }
  }
}
