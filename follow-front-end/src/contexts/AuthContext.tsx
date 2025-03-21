import { IUser } from "dtos/User";
import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContextDefinition";

interface AuthProviderContextProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthProviderContextProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
