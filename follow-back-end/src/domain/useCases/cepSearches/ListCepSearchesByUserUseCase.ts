import { CepSearchesImplementation } from "./../../repositories/implementations/CepSearchesImplementation";
export class ListCepSearchesByUserUseCase {
  constructor(private CepSearchesImplementation: CepSearchesImplementation) {}
  async execute(userId: string, page: number) {
    const cepHistory =
      await this.CepSearchesImplementation.listCepSearchesByUser(userId, page);
    return cepHistory;
  }
}
