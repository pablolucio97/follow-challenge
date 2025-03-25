import FooterLink from "@/components/miscellaneous/FooterLink";
import LogoText from "@/components/miscellaneous/LogoText";
import Title from "@/components/typography/Title";
import { UsersRepository } from "@/repositories/UsersRepository";
import { isEmailValid } from "@/utils/validations";
import { useCallback, useMemo, useState } from "react";
import SignUpForm from "./components/SignUpForm";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const usersRepository = useMemo(() => {
    return new UsersRepository();
  }, []);

  const handleRegisterUser = useCallback(async () => {
    try {
      const user = await usersRepository.createUser({
        name,
        email,
        password,
      });
      if (user) {
        console.log(user);
      }
    } catch (error) {
      console.log("Error", error);
    }
  }, [email, name, password, usersRepository]);
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
        />
      </div>
      <FooterLink className="absolute bottom-4" />
    </div>
  );
};

export default SignUp;
