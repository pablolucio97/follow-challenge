import { ISearchDTO } from "dtos/Search";
import { IUserDTO } from "dtos/User";

export const searchMock: ISearchDTO = {
  id: "1",
  user_id: "1",
  cep: "12345678",
  city: "São Paulo",
  district: "Jardim Paulista",
  uf: "SP",
  address: "Rua teste",
  created_at: "2021-09-01T00:00:00.000Z",
};

export const searchHistoryMock: ISearchDTO[] = [
  {
    id: "1",
    user_id: "1",
    cep: "01415-001",
    city: "São Paulo",
    district: "Jardim Paulista",
    uf: "SP",
    address: "Rua Batataes, próximo ao Parque Ibirapuera",
    created_at: "2021-09-01T08:35:42.000Z",
  },
  {
    id: "2",
    user_id: "1",
    cep: "30112-010",
    city: "Belo Horizonte",
    district: "Savassi",
    uf: "MG",
    address: "Rua Alagoas, perto da Praça da Liberdade",
    created_at: "2021-09-15T15:20:10.000Z",
  },
  {
    id: "3",
    user_id: "1",
    cep: "22021-001",
    city: "Rio de Janeiro",
    district: "Copacabana",
    uf: "RJ",
    address: "Rua Figueiredo Magalhães, nas proximidades da Estação de Metrô Siqueira Campos",
    created_at: "2021-09-25T13:00:25.000Z",
  },
  {
    id: "4",
    user_id: "1",
    cep: "80010-200",
    city: "Curitiba",
    district: "Centro",
    uf: "PR",
    address: "Praça Zacarias, perto do Teatro Guaíra",
    created_at: "2021-10-02T09:45:33.000Z",
  },
  {
    id: "5",
    user_id: "1",
    cep: "90570-070",
    city: "Porto Alegre",
    district: "Moinhos de Vento",
    uf: "RS",
    address: "Rua Tobias da Silva, ao lado do Shopping Moinhos de Vento",
    created_at: "2021-10-10T17:05:49.000Z",
  },
];


export const userMock: IUserDTO = {
  id: "1",
  name: "John Doe",
  email: "johndoe@gmail.com",
};
