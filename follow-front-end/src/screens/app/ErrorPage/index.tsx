import Button from "@/components/buttons/Button";
import ErrorData from "@/components/miscellaneous/ErrorData";
import FooterLink from "@/components/miscellaneous/FooterLink";
import Header from "@/components/miscellaneous/Header";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col relative ">
      <Header />
      <div className="w-[90%] md:max-w-[480px] flex flex-col items-center mx-auto px-8 md:px-4 mt-12">
        <ErrorData content="Ops! Algo deu errado." className="mt-12" />
        <Link to="/" className="mt-4 w-full">
          <Button title="Voltar para página inicial" />
        </Link>
      </div>
      <FooterLink className="absolute bottom-4" />
    </div>
  );
};

export default ErrorPage;
