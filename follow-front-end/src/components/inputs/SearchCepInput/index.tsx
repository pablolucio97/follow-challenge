import { InputMask, InputMaskProps } from "@react-input/mask";
import { FaSearch } from "react-icons/fa";

interface TextInputProps extends InputMaskProps {
  containerClassName?: string;
}

const SearchCepInput: React.FC<TextInputProps> = ({
  containerClassName,
  ...rest
}) => {
  return (
    <div className={`mb-2 w-full ${containerClassName}`}>
      <span className="text-gray-800 text-sm">CEP</span>
      <div className="w-full flex items-center">
        <InputMask
          mask="__.___-___"
          replacement={{ _: /\d/ }}
          className="w-[85%] h-[52px] p-4 border-1 rounded-lg text-gray-700 border-gray-200 focus:border-secondary focus:border-2 focus:outline-none focus:text-gray-500 bg-white placeholder-custom text-sm md:text-md"
          placeholder="__.___-___"
          {...rest}
        />
        <button className="w-[15%] rounded-br-lg rounded-tr-lg bg-gradient-to-r from-primary to-secondary h-[52px] flex items-center justify-center ml-[-1rem]">
          <FaSearch className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchCepInput;
