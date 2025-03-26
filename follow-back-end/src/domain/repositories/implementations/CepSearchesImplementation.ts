import axios from "axios";
import { ICepSearchDTO, ICreateCepSearchDTO } from "../../dtos/CepSearchDTO";
import { ICepSearchesRepository } from "../interfaces/CepSearchesRepository";
import { CepSearch } from "./../../../infra/models/CepSearch";
import { User } from "./../../../infra/models/User";

export class CepSearchesImplementation implements ICepSearchesRepository {
  constructor(
    private CepSearchModel: typeof CepSearch,
    private UserModel: typeof User
  ) {}
  async createCepSearch(
    data: ICreateCepSearchDTO
  ): Promise<ICepSearchDTO | null> {
    const { user_id } = data;
    const user = await this.checkUserExists(user_id);
    if (user) {
      const response = await axios.get(
        `https://viacep.com.br/ws/${data.cep}/json/`
      );
      if (response.data.erro) {
        throw new Error("CEP not found.");
      } else if (response.data) {
        const { cep, logradouro, bairro, localidade, uf } = response.data;
        const cepSearch = await this.CepSearchModel.create({
          user_id,
          cep,
          address: logradouro,
          district: bairro,
          city: localidade,
          uf,
        });
        const savedCepSearch = await cepSearch.save();
        return savedCepSearch.dataValues;
      }
    }
    return null;
  }
  async listCepSearchesByUser(userId: string, page: number): Promise<ICepSearchDTO[] | null> {
    const user = await this.checkUserExists(userId);
    if (user) {
      const limit = 10
      const offset = (page - 1) * limit
      const cepHistory = await this.CepSearchModel.findAll({
        where: { user_id: userId },
        limit,
        offset,
        order: [["createdAt", "DESC"]],
      });
      return cepHistory.map((cepSearch) => cepSearch.dataValues);
    }
    return null;
  }
  async clearCepSearches(userId: string): Promise<null> {
    const user = await this.checkUserExists(userId);
    if (user) {
      await this.CepSearchModel.destroy({ where: { user_id: userId } });
    }
    return null;
  }
  async checkUserExists(userId: string): Promise<boolean> {
    const user = await this.UserModel.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error("User not found for the provided id.");
    }
    return user ? true : false;
  }
}
