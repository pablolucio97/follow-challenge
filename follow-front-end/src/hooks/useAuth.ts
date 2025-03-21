import { AuthContext } from "@/contexts/AuthContextDefinition";
import { useContext } from "react";

const useAuth = () => {
  const useAuth = useContext(AuthContext);
  return useAuth;
};

export default useAuth;
