import LogoText from "@/components/miscellaneous/LogoText";
import Title from "@/components/typography/Title";

const SignIn : React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <div className="flex flex-col mx-auto">
      <LogoText className="mt-8 mb-12"/>
      <Title content="Autenticar no sistema" className="mx-auto" />
      </div>
    </div>
  );
};

export default SignIn;
