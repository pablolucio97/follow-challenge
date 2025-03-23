import { Request, Response } from "express";
import { CreateCepSearchUseCase } from "../../../domain/useCases/cepSearches/CreateCepSearchUseCase";

export class CreateCepSearchController {
  constructor(private createCepSearchUseCase: CreateCepSearchUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { cep, user_id } = request.params;
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
