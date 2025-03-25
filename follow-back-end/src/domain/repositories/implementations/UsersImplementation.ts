import { User } from "../../../infra/models/User";
import { ICreateUserDTO, IUser } from "../../dtos/UserDTO";
import { IUsersRepository } from "../interfaces/UsersRepository";

export class UsersImplementation implements IUsersRepository {
  constructor(private UserModel: typeof User) {}
  async createUser(data: ICreateUserDTO): Promise<IUser> {
    const userAlreadyExists = await this.UserModel.findOne({
      where: { email: data.email },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists. Please, provide another email.");
    }
    
    const user = await this.UserModel.create({ ...data });
    const savedUser = await user.save();
    return savedUser.dataValues;
  }
}
