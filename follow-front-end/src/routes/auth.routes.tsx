import SignIn from "@/screens/auth/SignIn";
import SignUp from "@/screens/auth/SingnUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IRoute } from "./app.routes";

const authRoutes: IRoute[] = [
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
];

const authRouter = createBrowserRouter(authRoutes);

const AuthRouter: React.FC = () => {
  return <RouterProvider router={authRouter} />;
};

export default AuthRouter;
