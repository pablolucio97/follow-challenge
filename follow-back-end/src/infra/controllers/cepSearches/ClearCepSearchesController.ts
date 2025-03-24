import { Request, Response } from "express";
import { ClearCepSearchesUseCase } from "../../../domain/useCases/cepSearches/ClearCepSearchesUseCase";

export class ClearCepSearchesController {
  constructor(private clearCepSearchesUseCase: ClearCepSearchesUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    try {
      await this.clearCepSearchesUseCase.execute(user_id);
      return response.status(200).send();
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
