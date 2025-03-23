import { Request, Response, Router } from "express";
import { CepSearchesImplementation } from "../../domain/repositories/implementations/CepSearchesImplementation";
import { CreateCepSearchUseCase } from "../../domain/useCases/cepSearches/CreateCepSearchUseCase";
import { CreateCepSearchController } from "../controllers/cepSearches/CreateCepSearchController";
import { models } from "../models";

export const cepSearchRoutes = Router();
const { CepSearch } = models;
const cepSearchImplementation = new CepSearchesImplementation(CepSearch);
const createCepSearchUseCase = new CreateCepSearchUseCase(
  cepSearchImplementation
);
const createCepSearchController = new CreateCepSearchController(
  createCepSearchUseCase
);

cepSearchRoutes.get("/cep/:cep/:user_id", async (req: Request, res: Response) => {
  await createCepSearchController.handle(req, res);
});
