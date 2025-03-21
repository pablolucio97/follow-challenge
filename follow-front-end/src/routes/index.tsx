import useAuth from "hooks/useAuth";
import AppRouter from "./app.routes";
import AuthRouter from "./auth.routes";

const Router: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <AppRouter /> : <AuthRouter />;
};

export default Router;
