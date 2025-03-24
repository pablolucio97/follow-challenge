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
      return response.status(200).json(cepHistory);
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
