import logo from "@/assets/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center p-4 bg-gray-100">
      <img
        src={logo}
        alt="Logo"
        className="w-8 h-8 md:w-12 md:h-12 mr-2 rounded-md"
      />
      <span className="font-bold text-xl md:text-2xl mr-1">Follow</span>
      <span className="text-lg md:text-xl">- Buscador de CEP</span>
    </header>
  );
};
export default Header;
