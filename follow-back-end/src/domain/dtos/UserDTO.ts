export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface ICreateUserDTO {
    name: string;
    email: string;
    password: string; 
}

export interface IAuthenticateUserDTO {
    name: string;
    email: string;
    password: string;
}

export interface IAuthenticatedUserData {
    id: string;
    name: string;
    email: string;
    token: string;
}

