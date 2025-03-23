import { ICreateCepSearchDTO } from "../../dtos/CepSearchDTO";
import { CepSearchesImplementation } from "./../../repositories/implementations/CepSearchesImplementation";

export class CreateCepSearchUseCase {
  constructor(private CepSearchesImplementation: CepSearchesImplementation) {}
  async execute(data: ICreateCepSearchDTO) {
    const cepSearch = await this.CepSearchesImplementation.createCepSearch(
      data
    );
    return cepSearch;
  }
}
