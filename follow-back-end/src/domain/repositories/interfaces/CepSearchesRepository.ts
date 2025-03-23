import { ICepSearchDTO, ICreateCepSearchDTO } from "../../dtos/CepSearchDTO";

export interface ICepSearchesRepository {
    createCepSearch(data: ICreateCepSearchDTO): Promise<ICepSearchDTO | null> ;
    listCepSearchesByUser?(user_id: string): Promise<ICepSearchDTO[]>;
    deleteCepSearchesByUser?(user_id: string): Promise<void>;
}