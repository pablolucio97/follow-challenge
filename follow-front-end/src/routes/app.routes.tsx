import NewSearch from "@/screens/app/NewSearch";
import SearchHistory from "@/screens/app/SearchHistory";
import { ReactNode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export type IRoute = {
  path: string;
  element: ReactNode;
};

const appRoutes: IRoute[] = [
  {
    path: "/",
    element: <NewSearch />,
  },
  {
    path: "/search-history",
    element: <SearchHistory />,
  },
];

const appRouter = createBrowserRouter(appRoutes);

const AppRouter: React.FC = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRouter;
