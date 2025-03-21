import logo from "@/assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

type ILink = {
  path: string;
  screenName: string;
};

const Header: React.FC = () => {
  const screens: ILink[] = [
    {
      path: "/",
      screenName: "Nova busca",
    },
    {
      path: "/search-history",
      screenName: "Histórico de buscas",
    },
  ];

  const baseUrl = "http://localhost:5173";

  const { pathname } = useLocation();

  return (
    <header className="w-full flex items-center p-4 bg-white shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full md:max-w-[1080px] mx-auto">
        <div className="w-full flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 md:w-12 md:h-12 mr-2 rounded-md"
          />
          <span className="font-bold text-xl md:text-2xl mr-1">Follow</span>
          <span className="text-lg md:text-xl">- Buscador de CEP</span>
        </div>
        <ul className="w-full flex items-center justify-center md:justify-end">
          {screens.map((screen) => (
            <li key={screen.screenName}>
              <Link
                to={`${baseUrl}${screen.path}`}
                className={`ml-4 text-gray-800 text-sm md:text-base ${
                  screen.path === pathname ? "font-bold" : ""
                }`}
              >
                {screen.screenName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Header;
