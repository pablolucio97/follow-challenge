import { CepSearchesImplementation } from "./../../repositories/implementations/CepSearchesImplementation";
export class ListCepSearchesByUserUseCase {
  constructor(private CepSearchesImplementation: CepSearchesImplementation) {}
  async execute(userId: string) {
    const cepHistory =
      await this.CepSearchesImplementation.listCepSearchesByUser(userId);
    return cepHistory;
  }
}
