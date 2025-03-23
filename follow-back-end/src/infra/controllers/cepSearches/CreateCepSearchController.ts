import { Request, Response } from "express";
import { CreateCepSearchUseCase } from "../../../domain/useCases/cepSearches/CreateCepSearchUseCase";

export class CreateCepSearchController {
  constructor(private createCepSearchUseCase: CreateCepSearchUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { cep } = request.params;
    const user_id = "ce23086d-ee71-4f78-9124-bdb412a26437";
    try {
      const cepSearch = await this.createCepSearchUseCase.execute({
        cep,
        user_id,
      });
      return response.status(201).json(cepSearch);
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
