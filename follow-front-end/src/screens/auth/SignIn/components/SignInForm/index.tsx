import Button from "@/components/buttons/Button";
import { TextInput } from "@/components/inputs/TextInput";
import { Link } from "react-router-dom";

interface SignInFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  return (
    <form
      className="w-full md:w-[480px] flex flex-col rounded-lg shadow-md bg-white p-6 mt-3"
      onSubmit={onSubmit}
    >
      <TextInput inputLabel="Email" placeholder="Seu email" type="email" />
      <TextInput inputLabel="Senha" placeholder="Sua senha" type="password" />
      <Button title="Fazer login" className="my-2" type="submit" />
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
