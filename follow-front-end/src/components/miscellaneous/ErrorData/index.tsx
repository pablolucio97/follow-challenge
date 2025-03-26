import errorData from "@/assets/error.svg";

interface ErrorDataProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  className?: string;
}

const ErrorData: React.FC<ErrorDataProps> = ({ content, className }) => {
  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <img
        src={errorData}
        alt="Erro ao exibir dados"
        className="w-12 h-12 md:w-16 md:h-16 mb-3 opacity-80"
      />
      <span className="text-sm md:text-[1rem] text-center">{content}</span>
    </div>
  );
};
export default ErrorData;
