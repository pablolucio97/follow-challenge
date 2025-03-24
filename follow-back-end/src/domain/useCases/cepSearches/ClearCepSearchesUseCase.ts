import { CepSearchesImplementation } from "../../repositories/implementations/CepSearchesImplementation";

export class ClearCepSearchesUseCase {
  constructor(private CepSearchesImplementation: CepSearchesImplementation) {}
  async execute(userId: string) {
    await this.CepSearchesImplementation.clearCepSearches(userId);
  }
}
