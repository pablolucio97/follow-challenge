import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./../../../domain/useCases/users/AuthenticateUserUseCase";
export class AuthenticateUserController {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const authenticatedUser = await this.authenticateUserUseCase.execute(
        request.body
      );
      return response.success(authenticatedUser, 200);
    } catch (error: any) {
      const message = error.message || "Unexpected error.";
      switch (error.message) {
        case "User not found or credentials does not matches.":
          return response.error(message, 409);
        default:
          return response.error(message, 400);
      }
    }
  }
}
