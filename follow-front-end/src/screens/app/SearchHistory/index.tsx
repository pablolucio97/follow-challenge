import FooterLink from "@/components/miscellaneous/FooterLink";
import Header from "@/components/miscellaneous/Header";
import NoData from "@/components/miscellaneous/NoData";
import Title from "@/components/typography/Title";
import { ISearchDTO } from "dtos/Search";
import { searchHistoryMock } from "mock";
import { useState } from "react";
import HistoryTable from "./components/HistoryTable";

const SearchHistory: React.FC = () => {
  const [searchHistory] = useState<ISearchDTO[]>(searchHistoryMock);

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <Header />
      <div className="w-full md:max-w-[1080px] flex flex-col mx-auto px-8 md:px-4">
        <Title content="Histórico de buscas" className="mt-12 mb-4" />
        <div className="w-full flex items-center justify-between">
          <span className="text-sm md:text-base">
            Exibindo histórico de buscas
          </span>
          <button className="flex items-center text-red-600 text-xs md:text-sm ml-6 border-1 border-red-300 p-2 rounded-md">
            Limpar histórico
          </button>
        </div>
        <div className="mt-6">
          {searchHistory && searchHistory.length === 0 ? (
            <NoData
              content=" Você ainda não realizou nenhuma busca."
              className="mt-12"
            />
          ) : (
            <HistoryTable history={searchHistory} />
          )}
        </div>
      </div>
      <FooterLink className="absolute bottom-4" />
    </div>
  );
};

export default SearchHistory;
