import { IUser } from "dtos/User";
import { createContext } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  authenticateUser: (user: IUser) => void;
  signOutUser: () => void;
  user: IUser | null;
}

export const AuthContext = createContext({} as AuthContextProps);
