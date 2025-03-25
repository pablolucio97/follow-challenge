import { Router } from "express";
import { cepSearchRoutes } from "./cepSearch.routes";
import { serverRoutes } from "./server.routes";
import { usersRoutes } from "./users.routes";

export const routes = Router();

routes.use(usersRoutes);
routes.use(cepSearchRoutes);
routes.use(serverRoutes);
