import { IUserDTO } from "dtos/User";
import { createContext } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  authenticateUser: (user: IUserDTO) => void;
  signOutUser: () => void;
  user: IUserDTO | null;
}

export const AuthContext = createContext({} as AuthContextProps);
