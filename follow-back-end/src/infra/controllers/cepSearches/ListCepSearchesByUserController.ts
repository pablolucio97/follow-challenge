import { Request, Response } from "express";
import { ListCepSearchesByUserUseCase } from "../../../domain/useCases/cepSearches/ListCepSearchesByUserUseCase";

export class ListCepSearchesByUserController {
  constructor(
    private listCepSearchesByUserUseCase: ListCepSearchesByUserUseCase
  ) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const { page } = request.query;
    const parsedPage = page ? parseInt(page.toString()) :  1
    try {
      const cepHistory = await this.listCepSearchesByUserUseCase.execute(
        user_id,
        parsedPage
      );
      return response.success(cepHistory, 200);
    } catch (error: any) {
      const message = error.message || "Unexpected error.";
      return response.error(message, 400);
    }
  }
}
