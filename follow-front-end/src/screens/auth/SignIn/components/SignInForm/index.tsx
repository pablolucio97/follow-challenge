import Button from "@/components/buttons/Button";
import { TextInput } from "@/components/inputs/TextInput";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface SignInFormProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  onSubmit: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

const SignInForm: React.FC<SignInFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  disabled,
  isLoading
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form
      className="w-full md:w-[480px] flex flex-col rounded-lg shadow-md bg-white p-6 mt-3"
      onSubmit={handleSubmit}
    >
      <TextInput
        inputLabel="Email"
        placeholder="Seu email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        inputLabel="Senha"
        placeholder="Sua senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        title="Fazer login"
        className="my-2"
        type="submit"
        disabled={disabled}
        isLoading={isLoading}
      />
      <div className="mt-2 flex justify-center">
        <span className="text-gray-800 text-xs md:text-sm">
          Não tem uma conta?{" "}
          <Link to="/register" className="text-xs md:text-sm text-blue-600">
            Criar minha conta
          </Link>
        </span>
      </div>
    </form>
  );
};

export default SignInForm;
