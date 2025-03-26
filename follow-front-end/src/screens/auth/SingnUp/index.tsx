import FooterLink from "@/components/miscellaneous/FooterLink";
import LogoText from "@/components/miscellaneous/LogoText";
import Title from "@/components/typography/Title";
import { UsersRepository } from "@/repositories/UsersRepository";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { isEmailValid } from "@/utils/validations";
import { useLoading } from "hooks/useLoading";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();

  const usersRepository = useMemo(() => {
    return new UsersRepository();
  }, []);

  const handleRegisterUser = useCallback(async () => {
    try {
      setLoading(true);
      const user = await usersRepository.createUser({
        name,
        email,
        password,
      });
      if (user) {
        showSuccessToast("Usuário cadastrado com sucesso!");
        navigate("/");
      }
    } catch (error: any) {
      if (error && error.response && error.response.status === 409) {
        showErrorToast(
          `Já existe um usuário cadastradado para os dados informados. Utilize outros dados.`
        );
      } else {
        showErrorToast(
          `Houve um erro ao cadastrar usuário. \n Por favor, tente novamente mais tarde.`
        );
      }
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  }, [email, name, navigate, password, setLoading, usersRepository]);

  const MIN_PASSWORD_LENGTH = 6;

  const isFormValid =
    name &&
    email &&
    isEmailValid(email) &&
    password &&
    password.length >= MIN_PASSWORD_LENGTH &&
    passwordConfirmation &&
    password === passwordConfirmation;

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <div className="w-full flex flex-col items-center mx-auto p-8">
        <LogoText className="mt-12 mb-8 flex justify-center" />
        <Title content="Cadastrar usuário" className="mx-auto" />
        <SignUpForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirmation={passwordConfirmation}
          setPasswordConfirmation={setPasswordConfirmation}
          onSubmit={handleRegisterUser}
          disabled={!isFormValid}
          isLoading={loading}
        />
      </div>
      <FooterLink className="absolute bottom-4" />
    </div>
  );
};

export default SignUp;
