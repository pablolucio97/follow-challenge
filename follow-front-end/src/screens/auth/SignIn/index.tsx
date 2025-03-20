import LogoText from "@/components/miscellaneous/LogoText";
import Title from "@/components/typography/Title";
import SignInForm from "./components/SignInForm";

const SignIn : React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col mx-auto">
      <LogoText className="mt-12 mb-8 flex justify-center"/>
      <Title content="Autenticar no sistema" className="mx-auto" />
      <SignInForm onSubmit={() => {}} />
      </div>
    </div>
  );
};

export default SignIn;
