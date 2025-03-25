import { Request, Router } from "express";
import { UsersImplementation } from "../../domain/repositories/implementations/UsersImplementation";
import { CreateUserUseCase } from "../../domain/useCases/users/CreateUserUseCase";
import { CreateUserController } from "../controllers/users/CreateUserController";
import { models } from "../models";

export const usersRoutes = Router();
const { User } = models;
const usersImplementation = new UsersImplementation(User);
const createUserUseCase = new CreateUserUseCase(usersImplementation);
const createUserController = new CreateUserController(createUserUseCase);

usersRoutes.post("/user", async (req: Request, res: any) => {
  await createUserController.handle(req, res);
});
