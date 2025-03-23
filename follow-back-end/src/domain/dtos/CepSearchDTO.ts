export interface ICepSearchDTO{
    user_id: string;
    cep: string;
    address: string;
    district: string;
    city: string;
    uf: string;
    createdAt: string;
}

export interface ICreateCepSearchDTO{
    user_id: string;
    cep: string;
}