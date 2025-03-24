import axios from "axios";
import { ICepSearchDTO, ICreateCepSearchDTO } from "../../dtos/CepSearchDTO";
import { ICepSearchesRepository } from "../interfaces/CepSearchesRepository";
import { CepSearch } from "./../../../infra/models/CepSearch";
import { User } from "./../../../infra/models/User";

export class CepSearchesImplementation implements ICepSearchesRepository {
  constructor(
    private CepSearchModel: typeof CepSearch,
     private UserModel : typeof User
    ) {}
  async createCepSearch(
    data: ICreateCepSearchDTO
  ): Promise<ICepSearchDTO | null> {
    const response = await axios.get(
      `https://viacep.com.br/ws/${data.cep}/json/`
    );
    const user_id = data.user_id;
    if (response.data) {
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
    return null;
  }
  async listCepSearchesByUser(userId: string): Promise<ICepSearchDTO[]> {
    const cepHistory = await this.CepSearchModel.findAll({
      where: { user_id: userId },
      limit: 10,
      order: [["createdAt", "DESC"]],
    });
    return cepHistory.map((cepSearch) => cepSearch.dataValues);
  }
  async clearCepSearches(userId: string): Promise<null> {
    const user = await this.UserModel.findOne({ where: { id: userId } });
    if(!user){
      throw new Error("User not found");
    }
    await this.CepSearchModel.destroy({ where: { user_id: userId } });
    return null;
  }
}
