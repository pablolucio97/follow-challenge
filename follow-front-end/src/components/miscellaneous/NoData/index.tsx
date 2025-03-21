import noData from "@/assets/no_data.svg";

interface NoDataProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  className?: string;
}

const NoData: React.FC<NoDataProps> = ({ content, className }) => {
  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <img
        src={noData}
        alt="Sem dados para exibir"
        className="w-12 h-12 md:w-16 md:h-16 mb-3 opacity-50"
      />
      <span className="text-sm md:text-[1rem] text-center">{content}</span>
    </div>
  );
};
export default NoData;
