import Button from "@/components/buttons/Button";
import { TextInput } from "@/components/inputs/TextInput";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface SignUpFormProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  onSubmit: () => void;
  passwordConfirmation: string;
  setPasswordConfirmation: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
  isLoading?: boolean;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
  onSubmit,
  disabled,
  isLoading,
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
        inputLabel="Nome"
        placeholder="Seu nome"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        inputLabel="Email"
        placeholder="Seu email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        inputLabel="Senha"
        placeholder="Senha de pelo menos 6 dígitos"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        inputLabel="Confirmação de senha"
        placeholder="Confirme sua senha"
        type="password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <Button
        title="Cadastrar usuário"
        className="my-2"
        type="submit"
        disabled={disabled}
        isLoading={isLoading}
      />
      <div className="mt-2 flex justify-center">
        <span className="text-gray-800 text-xs md:text-sm">
          Já possui um usuário?{" "}
          <Link to="/" className="text-xs md:text-sm text-blue-600">
            Fazer login
          </Link>
        </span>
      </div>
    </form>
  );
};

export default SignUpForm;
