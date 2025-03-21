import FooterLink from "@/components/miscellaneous/FooterLink";
import LogoText from "@/components/miscellaneous/LogoText";
import Title from "@/components/typography/Title";
import useAuth from "hooks/useAuth";
import { userMock } from "mock";
import SignInForm from "./components/SignInForm";

const SignIn: React.FC = () => {
  const { authenticateUser } = useAuth();

  const signIn = () => {
    authenticateUser(userMock);
  };

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <div className="w-full flex flex-col items-center mx-auto p-8">
        <LogoText className="mt-12 mb-8 flex justify-center" />
        <Title content="Autenticar no sistema" className="mx-auto" />
        <SignInForm onSubmit={signIn} />
      </div>
      <FooterLink className="absolute bottom-4" />
    </div>
  );
};

export default SignIn;
