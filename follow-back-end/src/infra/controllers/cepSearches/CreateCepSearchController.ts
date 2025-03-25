import { Request, Response } from "express";
import { CreateCepSearchUseCase } from "../../../domain/useCases/cepSearches/CreateCepSearchUseCase";

export class CreateCepSearchController {
  constructor(private createCepSearchUseCase: CreateCepSearchUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { cep, user_id } = request.params;
    try {
      const cepData = await this.createCepSearchUseCase.execute({
        cep,
        user_id,
      });
      return response.success(cepData, 201);
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
