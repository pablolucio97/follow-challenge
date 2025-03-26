import { api } from "@/services/api";
import {
  ICreateCepSearchDTO,
  IDeleteCepSearchHistoryDTO,
  IGetCepSearchHistoryDTO,
} from "dtos/Search";

export class CepSearchesRepository {
  async createCepSearch(data: ICreateCepSearchDTO) {
    const { cep, token } = data;
    const response = await api.get(`/cep/${cep}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
  async listCepSearchHistoryByUser(data: IGetCepSearchHistoryDTO) {
    const { user_id, token } = data;
    const response = await api.get(`/cep-history/${user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
  async clearCepSearchHistoryByUser(data: IDeleteCepSearchHistoryDTO) {
    const { user_id, token } = data;
    const response = await api.delete(`/cep-history/${user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
}
