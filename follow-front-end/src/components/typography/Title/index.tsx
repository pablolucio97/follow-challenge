interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
const Title: React.FC<TitleProps> = ({ content, className }) => {
  return (
    <h1 className={`font-bold text-lg md:text-xl text-gray-900 ${className} `}>
      {content}
    </h1>
  );
};
export default Title;
