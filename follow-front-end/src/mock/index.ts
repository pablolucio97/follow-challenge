import { ISearch } from "dtos/Search";

export const SearchMock : ISearch = {
    id: "1",
    user_id: "1",
    cep: "12345678",
    city: "São Paulo",
    district: "Jardim Paulista",
    uf: "SP",
    address: "Rua teste",
    created_at: new Date(),
}