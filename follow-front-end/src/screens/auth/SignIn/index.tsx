import FooterLink from "@/components/miscellaneous/FooterLink";
import LogoText from "@/components/miscellaneous/LogoText";
import Title from "@/components/typography/Title";
import { UsersRepository } from "@/repositories/UsersRepository";
import { showErrorToast } from "@/utils/toast";
import { isEmailValid } from "@/utils/validations";
import useAuth from "hooks/useAuth";
import { useLoading } from "hooks/useLoading";
import { useCallback, useMemo, useState } from "react";
import SignInForm from "./components/SignInForm";

const SignIn: React.FC = () => {
  const { authenticateUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, setLoading } = useLoading();

  const usersRepository = useMemo(() => {
    return new UsersRepository();
  }, []);

  const MIN_PASSWORD_LENGTH = 6;

  const isFormValid =
    email &&
    isEmailValid(email) &&
    password &&
    password.length >= MIN_PASSWORD_LENGTH;

  const handleSignIn = useCallback(async () => {
    try {
      setLoading(true);
      const { DATA: data } = await usersRepository.authenticateUser({
        email,
        password,
      });
      if (data) {
        authenticateUser(data);
      }
    } catch (error: any) {
      if (error && error.response && error.response.status === 409) {
        showErrorToast(
          `Credenciais inválidas ou usuário inexistente. \n Por favor, verifique seu e-mail e senha.`
        );
      } else {
        showErrorToast(
          `Houve um erro ao autenticar usuário. \n Por favor, tente novamente mais tarde.`
        );
      }
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  }, [authenticateUser, email, password, setLoading, usersRepository]);

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <div className="w-full flex flex-col items-center mx-auto p-8">
        <LogoText className="mt-12 mb-8 flex justify-center" />
        <Title content="Autenticar no sistema" className="mx-auto" />
        <SignInForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleSignIn}
          disabled={!isFormValid || loading}
          isLoading={loading}
        />
      </div>
      <FooterLink className="absolute bottom-4" />
    </div>
  );
};

export default SignIn;
