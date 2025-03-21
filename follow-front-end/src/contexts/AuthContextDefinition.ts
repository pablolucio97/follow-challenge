import { IUser } from "dtos/User";
import { createContext, Dispatch, SetStateAction } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}

export const AuthContext = createContext({} as AuthContextProps);
