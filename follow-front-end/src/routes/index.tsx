import AppRouter from "./app.routes";
import AuthRouter from "./auth.routes";

const Router: React.FC = () => {
  const isAuthenticate = true;

  return isAuthenticate ? <AppRouter /> : <AuthRouter />;
};

export default Router;
