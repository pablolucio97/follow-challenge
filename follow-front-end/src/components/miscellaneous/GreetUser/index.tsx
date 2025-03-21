interface GreetUserProps {
  userName: string;
  containerClassName?: string;
}

const GreetUser: React.FC<GreetUserProps> = ({
  userName,
  containerClassName,
}) => {
  return (
    <div
      className={`w-full flex items-center ${containerClassName}`}
    >
      <span className="text-md md:text-lg">Olá, </span>
      <span className="text-md md:text-lg ml-2 font-bold">{userName}!</span>
    </div>
  );
};

export default GreetUser;
