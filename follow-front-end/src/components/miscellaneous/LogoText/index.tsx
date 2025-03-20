import logo from "@/assets/logo.svg";

interface LogoTextProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const LogoText: React.FC<LogoTextProps> = ({ className }) => {
  return (
    <div className={`w-full flex items-center p-3 ${className}`}>
      <img
        src={logo}
        alt="Logo"
        className="w-8 h-8 md:w-12 md:h-12 mr-2 rounded-md"
      />
      <span className="font-bold text-xl md:text-2xl mr-1">Follow</span>
      <span className="text-lg md:text-xl">- Buscador de CEP</span>
    </div>
  );
};
export default LogoText;
