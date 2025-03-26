export interface ICepSearchDTO{
    id: string;
    user_id: string;
    cep: string;
    address: string;
    district: string;
    city: string;
    uf: string;
    createdAt: string;
}

export interface ICreateCepSearchDTO{
    token: string;
    cep: string;
}

export interface IGetCepSearchHistoryDTO{
    token: string;
    user_id: string;
}

export interface IDeleteCepSearchHistoryDTO{
    token: string;
    user_id: string;
}