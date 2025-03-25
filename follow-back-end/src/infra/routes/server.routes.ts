import { Router } from "express";
import { CheckServerHealthController } from "../controllers/serverHealth/CheckServerHealthController";

export const serverRoutes = Router();

const checkServerHealthController = new CheckServerHealthController();

serverRoutes.get("/health", (_, response: any) => {
  checkServerHealthController.handle(_, response);
});
