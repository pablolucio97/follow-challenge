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
    const user_id = "ce23086d-ee71-4f78-9124-bdb412a26437";
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
}
