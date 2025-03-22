interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
const Text: React.FC<TextProps> = ({ content, className }) => {
  return (
    <h1 className={`text-sm md:text-base text-gray-700 ${className} `}>
      {content}
    </h1>
  );
};
export default Text;
