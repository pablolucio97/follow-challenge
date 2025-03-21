import { IUser } from "dtos/User";
import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContextDefinition";

interface AuthProviderContextProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthProviderContextProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const authenticateUser = (user: IUser) => {
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
