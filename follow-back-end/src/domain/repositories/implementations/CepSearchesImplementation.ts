import axios from "axios";
import { ICepSearchDTO, ICreateCepSearchDTO } from "../../dtos/CepSearchDTO";
import { ICepSearchesRepository } from "../interfaces/CepSearchesRepository";
import { CepSearch } from "./../../../infra/models/CepSearch";

export class CepSearchesImplementation implements ICepSearchesRepository {
  constructor(private CepSearchModel: typeof CepSearch) {}
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
}
