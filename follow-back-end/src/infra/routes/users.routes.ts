import { Request, Response, Router } from "express";
import { UsersImplementation } from "../../domain/repositories/implementations/UsersImplementation";
import { CreateUserUseCase } from "../../domain/useCases/users/CreateUserUseCase";
import { CreateUserController } from "../controllers/users/CreateUserController";
import { User } from "../models/User";

const usersRoutes = Router();
const usersImplementation = new UsersImplementation(User);
const createUserUseCase = new CreateUserUseCase(usersImplementation);
const createUserController = new CreateUserController(createUserUseCase);

usersRoutes.post("/user", async (req: Request, res: Response) => {
  await createUserController.handle(req, res);
});

export { usersRoutes };
