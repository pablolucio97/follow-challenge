import { Request, RequestHandler, Router } from "express";
import { CepSearchesImplementation } from "../../domain/repositories/implementations/CepSearchesImplementation";
import { ClearCepSearchesUseCase } from "../../domain/useCases/cepSearches/ClearCepSearchesUseCase";
import { CreateCepSearchUseCase } from "../../domain/useCases/cepSearches/CreateCepSearchUseCase";
import { ListCepSearchesByUserUseCase } from "../../domain/useCases/cepSearches/ListCepSearchesByUserUseCase";
import { ClearCepSearchesController } from "../controllers/cepSearches/ClearCepSearchesController";
import { CreateCepSearchController } from "../controllers/cepSearches/CreateCepSearchController";
import { checkAuth } from "../middlewares/checkAuth.middleware";
import { models } from "../models";
import { ListCepSearchesByUserController } from "./../controllers/cepSearches/ListCepSearchesByUserController";

export const cepSearchRoutes = Router();
const { CepSearch, User } = models;
const cepSearchImplementation = new CepSearchesImplementation(CepSearch, User);

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
const clearCepSearchesUseCase = new ClearCepSearchesUseCase(
  cepSearchImplementation
);
const clearCepSearchesController = new ClearCepSearchesController(
  clearCepSearchesUseCase
);

cepSearchRoutes.get(
  "/cep/:cep",
  checkAuth as RequestHandler,
  async (req: Request, res: any) => {
    await createCepSearchController.handle(req, res);
  }
);
cepSearchRoutes.get(
  "/cep-history/:user_id",
  checkAuth as RequestHandler,
  async (req: Request, res: any) => {
    await listCepSearchesByUserController.handle(req, res);
  }
);
cepSearchRoutes.delete(
  "/cep-history/:user_id",
  checkAuth as RequestHandler,
  async (req: Request, res: any) => {
    await clearCepSearchesController.handle(req, res);
  }
);
