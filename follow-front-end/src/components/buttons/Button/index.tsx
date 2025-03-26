import Loading from "@/components/miscellaneous/Loading";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  isLoading,
  className,
  ...rest
}) => {
  return (
    <button
      className={`w-full h-[52px] flex items-center justify-center bg-gradient-to-r from-primary to-secondary normal-case lg:text-base text-sm font-medium font-poppins rounded-lg cursor-pointer disabled:cursor-normal disabled:opacity-[0.5] text-gray-50 font-secondary ${className}`}
      {...rest}
    >
      {isLoading ? <Loading hideText color="#ffffff" /> : title}
    </button>
  );
};

export default Button;
