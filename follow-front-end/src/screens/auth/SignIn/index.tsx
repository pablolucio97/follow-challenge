import FooterLink from "@/components/miscellaneous/FooterLink";
import LogoText from "@/components/miscellaneous/LogoText";
import Title from "@/components/typography/Title";
import { UsersRepository } from "@/repositories/UsersRepository";
import useAuth from "hooks/useAuth";
import { useCallback, useMemo, useState } from "react";
import SignInForm from "./components/SignInForm";

const SignIn: React.FC = () => {
  const { authenticateUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usersRepository = useMemo(() => {
    return new UsersRepository();
  }, []);

  const signIn = useCallback(async () => {
    try {
      const authData = await usersRepository.authenticateUser({
        email,
        password,
      });
      if (authData) {
        authenticateUser(authData);
      }
    } catch (error) {
      console.log("Error", error);
    }
  }, [authenticateUser, email, password, usersRepository]);

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
          onSubmit={signIn}
        />
      </div>
      <FooterLink className="absolute bottom-4" />
    </div>
  );
};

export default SignIn;
