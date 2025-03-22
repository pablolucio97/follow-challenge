import SearchCepInput from "@/components/inputs/SearchCepInput";
import FooterLink from "@/components/miscellaneous/FooterLink";
import GreetUser from "@/components/miscellaneous/GreetUser";
import Header from "@/components/miscellaneous/Header";
import NoData from "@/components/miscellaneous/NoData";
import Title from "@/components/typography/Title";
import { ISearchDTO } from "dtos/Search";
import useAuth from "hooks/useAuth";
import { searchMock } from "mock";
import { useState } from "react";
import SearchResultCard from "./components/SearchResultCard";

const NewSearch: React.FC = () => {
  const [search] = useState<ISearchDTO | null>(searchMock);
  const { user } = useAuth();

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <Header />
      <div className="w-[90%] md:max-w-[1080px] flex flex-col items-center mx-auto px-8 md:px-4 mt-12">
        <GreetUser userName={user!.name} />
        <Title
          content="Informe um CEP para começar"
          className="mx-auto mt-16 mb-6"
        />
        <div className="w-full md:max-w-[400px]">
          <SearchCepInput />
        </div>
        <div className="mt-8">
          {search ? (
            <div className="flex flex-col">
              <span className="text-sm md:text-[1rem] text-center mb-4">
                Dados encontrados para o cep {search.cep}:
              </span>
              <SearchResultCard result={search} />
            </div>
          ) : (
            <NoData content="Cep não encontrado, tente realizar uma nova busca." />
          )}
        </div>
      </div>
      <FooterLink className="absolute bottom-4" />
    </div>
  );
};

export default NewSearch;
