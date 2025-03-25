import { Request, Response } from "express";
import { ICreateUserDTO } from "../../../domain/dtos/UserDTO";
import { CreateUserUseCase } from "../../../domain/useCases/users/CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body as ICreateUserDTO;
    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });
      return response.success(user, 201);
    } catch (error: any) {
      const message = error.message || "Unexpected error.";
      return response.error(message, 400);
    }
  }
}
