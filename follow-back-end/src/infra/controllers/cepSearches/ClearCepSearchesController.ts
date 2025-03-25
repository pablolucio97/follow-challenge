import { Request, Response } from "express";
import { ClearCepSearchesUseCase } from "../../../domain/useCases/cepSearches/ClearCepSearchesUseCase";

export class ClearCepSearchesController {
  constructor(private clearCepSearchesUseCase: ClearCepSearchesUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    try {
      await this.clearCepSearchesUseCase.execute(user_id);
      return response.success(null, 200);
    } catch (error: any) {
      const message = error.message || "Unexpected error.";
      return response.error(message, 400);
    }
  }
}
