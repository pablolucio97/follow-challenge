import { Request, Response } from "express";
import { ListCepSearchesByUserUseCase } from "../../../domain/useCases/cepSearches/ListCepSearchesByUserUseCase";

export class ListCepSearchesByUserController {
  constructor(
    private listCepSearchesByUserUseCase: ListCepSearchesByUserUseCase
  ) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    try {
      const cepHistory = await this.listCepSearchesByUserUseCase.execute(
        user_id
      );
      return response.success(cepHistory, 200);
    } catch (error) {
      const typedError =
        typeof error === "object" &&
        error !== null &&
        "name" in error &&
        typeof error.name === "string";
      return response.error(
        typedError ? String(error.name) : "Unexpected error",
        typedError ? 400 : 500
      );
    }
  }
}
