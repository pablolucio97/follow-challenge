import Button from "@/components/buttons/Button";
import { TextInput } from "@/components/inputs/TextInput";
import { Link } from "react-router-dom";

interface SignUpFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  return (
    <form
      className="w-full md:w-[480px] flex flex-col rounded-lg shadow-md bg-white p-6 mt-3"
      onSubmit={onSubmit}
    >
      <TextInput inputLabel="Nome" placeholder="Seu nome" type="text" />
      <TextInput inputLabel="Email" placeholder="Seu email" type="email" />
      <TextInput inputLabel="Senha" placeholder="Sua senha" type="password" />
      <TextInput
        inputLabel="Confirmação de senha"
        placeholder="Confirme sua senha"
        type="password"
      />
      <Button title="Cadastrar usuário" className="my-2" type="submit" />
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
