import { IUserDTO } from "dtos/User";
import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContextDefinition";

interface AuthProviderContextProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthProviderContextProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUserDTO | null>(null);

  const authenticateUser = (user: IUserDTO) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const signOutUser = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, authenticateUser, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
