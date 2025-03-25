export interface IUserDTO {
    id: string;
    name: string;
    email: string;
}

export interface ICreateUserDTO {
    name: string;
    email: string;
    password: string; 
}

export interface IAuthenticateUserDTO {
    email: string;
    password: string;
}

export interface IAuthenticatedUserData {
    id: string;
    name: string;
    email: string;
    token: string;
}
