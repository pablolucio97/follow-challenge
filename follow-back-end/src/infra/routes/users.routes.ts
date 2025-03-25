import { Request, Router } from "express";
import { UsersImplementation } from "../../domain/repositories/implementations/UsersImplementation";
import { AuthenticateUserUseCase } from "../../domain/useCases/users/AuthenticateUserUseCase";
import { CreateUserUseCase } from "../../domain/useCases/users/CreateUserUseCase";
import { AuthenticateUserController } from "../controllers/users/AuthenticateUserController";
import { CreateUserController } from "../controllers/users/CreateUserController";
import { models } from "../models";

export const usersRoutes = Router();
const { User } = models;
const usersImplementation = new UsersImplementation(User);
const createUserUseCase = new CreateUserUseCase(usersImplementation);
const createUserController = new CreateUserController(createUserUseCase);

const authenticateUserUseCase = new AuthenticateUserUseCase(
  usersImplementation
);
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

usersRoutes.post("/user", async (req: Request, res: any) => {
  await createUserController.handle(req, res);
});

usersRoutes.post("/user/auth", async (req: Request, res: any) => {
  await authenticateUserController.handle(req, res);
});