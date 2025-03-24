import { ICepSearchDTO, ICreateCepSearchDTO } from "../../dtos/CepSearchDTO";

export interface ICepSearchesRepository {
    createCepSearch(data: ICreateCepSearchDTO): Promise<ICepSearchDTO | null> ;
    listCepSearchesByUser(userId: string): Promise<ICepSearchDTO[]>;
    clearCepSearches(userId: string): Promise<null>;
}