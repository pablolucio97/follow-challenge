import SearchCepInput from "@/components/inputs/SearchCepInput";
import Header from "@/components/miscellaneous/Header";
import NoData from "@/components/miscellaneous/NoData";
import Title from "@/components/typography/Title";
import { ISearch } from "dtos/Search";
import { SearchMock } from "mock";
import { useState } from "react";
import SearchResultCard from "./components/SearchResultCard";

const NewSearch: React.FC = () => {
  const [search] = useState<ISearch | null>(SearchMock);

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <Header />
      <div className="w-full md:max-w-[480px] flex flex-col items-center mx-auto p-8">
        <Title
          content="Informe um CEP para começar"
          className="mx-auto mt-12 mb-4"
        />
        <SearchCepInput />
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
    </div>
  );
};

export default NewSearch;
