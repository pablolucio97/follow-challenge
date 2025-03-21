import { ISearch } from "dtos/Search";
import { IUser } from "dtos/User";

export const searchMock: ISearch = {
  id: "1",
  user_id: "1",
  cep: "12345678",
  city: "São Paulo",
  district: "Jardim Paulista",
  uf: "SP",
  address: "Rua teste",
  created_at: new Date(),
};

export const userMock: IUser = {
  id: "1",
  name: "John Doe",
  email: "johndoe@gmail.com",
};
