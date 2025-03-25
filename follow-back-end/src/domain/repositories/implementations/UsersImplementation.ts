import { compare, hash } from "bcryptjs";
import { generateToken } from "../../../auth/auth";
import { User } from "../../../infra/models/User";
import {
  IAuthenticatedUserData,
  IAuthenticateUserDTO,
  ICreateUserDTO,
  IUserDTO,
} from "../../dtos/UserDTO";
import { IUsersRepository } from "../interfaces/UsersRepository";

export class UsersImplementation implements IUsersRepository {
  constructor(private UserModel: typeof User) {}
  async createUser(data: ICreateUserDTO): Promise<IUserDTO> {
    const userAlreadyExists = await this.UserModel.findOne({
      where: { email: data.email },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists. Please, provide another email.");
    }

    const encryptedPassword = await hash(data.password, 8);

    const user = await this.UserModel.create({
      ...data,
      password: encryptedPassword,
    });
    const savedUser = await user.save();
    return savedUser.dataValues;
  }
  async authenticateUser(
    data: IAuthenticateUserDTO
  ): Promise<IAuthenticatedUserData | null> {
    const user = await this.UserModel.findOne({
      where: { email: data.email },
    });

    if (!user) {
      throw new Error("User not found or credentials does not matches.");
    }

    const passwordMatches = await compare(
      data.password,
      user.dataValues.password
    );

    if (!passwordMatches) {
      throw new Error("User not found or credentials does not matches.");
    }

    const token = generateToken(user.dataValues.id);
    if (token) {
      return {
        id: user.dataValues.id,
        name: user.dataValues.name,
        email: user.dataValues.email,
        token,
      };
    }
    return null;
  }
}
