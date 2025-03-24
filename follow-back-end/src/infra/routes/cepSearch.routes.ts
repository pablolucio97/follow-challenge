import { Request, Response, Router } from "express";
import { CepSearchesImplementation } from "../../domain/repositories/implementations/CepSearchesImplementation";
import { CreateCepSearchUseCase } from "../../domain/useCases/cepSearches/CreateCepSearchUseCase";
import { ListCepSearchesByUserUseCase } from "../../domain/useCases/cepSearches/ListCepSearchesByUserUseCase";
import { CreateCepSearchController } from "../controllers/cepSearches/CreateCepSearchController";
import { models } from "../models";
import { ListCepSearchesByUserController } from "./../controllers/cepSearches/ListCepSearchesByUserController";

export const cepSearchRoutes = Router();
const { CepSearch } = models;
const cepSearchImplementation = new CepSearchesImplementation(CepSearch);

const createCepSearchUseCase = new CreateCepSearchUseCase(
  cepSearchImplementation
);
const createCepSearchController = new CreateCepSearchController(
  createCepSearchUseCase
);
const listCepSearchesByUserUseCase = new ListCepSearchesByUserUseCase(
  cepSearchImplementation
);
const listCepSearchesByUserController = new ListCepSearchesByUserController(
  listCepSearchesByUserUseCase
);

cepSearchRoutes.get(
  "/cep/:cep/:user_id",
  async (req: Request, res: Response) => {
    await createCepSearchController.handle(req, res);
  }
);
cepSearchRoutes.get(
  "/cep-history/:user_id",
  async (req: Request, res: Response) => {
    await listCepSearchesByUserController.handle(req, res);
  }
);
