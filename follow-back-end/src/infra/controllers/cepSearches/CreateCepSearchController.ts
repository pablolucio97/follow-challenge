import { Request, Response } from "express";
import { CreateCepSearchUseCase } from "../../../domain/useCases/cepSearches/CreateCepSearchUseCase";

export class CreateCepSearchController {
  constructor(private createCepSearchUseCase: CreateCepSearchUseCase) {}
  async handle(request: Request, response: Response): Promise<Response | null> {
    const { cep } = request.params;
    const userId = request.userId;
    try {
      if (userId) {
        const cepData = await this.createCepSearchUseCase.execute({
          cep,
          user_id: userId,
        });
        return response.success(cepData, 201);
      }
      return null;
    } catch (error: any) {
      const message = error.message || "Unexpected error.";
      switch (error.message) {
        case "CEP not found.":
          return response.error(message, 404);
        default:
          return response.error(message, 400);
      }
    }
  }
}
