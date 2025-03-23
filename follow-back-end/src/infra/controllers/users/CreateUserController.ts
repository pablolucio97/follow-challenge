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
      return response.status(201).json(user);
    } catch (error) {
      const typedError =
        typeof error === "object" &&
        error !== null &&
        "message" in error &&
        typeof error.message === "string";

      return response.status(400).json({
        message: typedError ? error.message : "Unexpected error.",
      });
    }
  }
}
