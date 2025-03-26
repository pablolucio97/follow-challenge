import ErrorData from "@/components/miscellaneous/ErrorData";
import FooterLink from "@/components/miscellaneous/FooterLink";
import Header from "@/components/miscellaneous/Header";
import Loading from "@/components/miscellaneous/Loading";
import NoData from "@/components/miscellaneous/NoData";
import Title from "@/components/typography/Title";
import { CepSearchesRepository } from "@/repositories/CepSearchesRepository";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { ICepSearchDTO } from "dtos/Search";
import useAuth from "hooks/useAuth";
import { useLoading } from "hooks/useLoading";
import { useCallback, useEffect, useMemo, useState } from "react";
import HistoryTable from "./components/HistoryTable";

const SearchHistory: React.FC = () => {
  const [searchHistory, setSearchHistory] = useState<ICepSearchDTO[]>([]);
  const [hasError, setHasError] = useState(false);
  const { user } = useAuth();
  const { loading, setLoading } = useLoading();

  const cepSearchesRepository = useMemo(() => {
    return new CepSearchesRepository();
  }, []);

  const getUserCepSearchHistory = useCallback(async () => {
    try {
      setLoading(true);
      if (user) {
        const { token } = user;
        if (token) {
          const { DATA: data } =
            await cepSearchesRepository.listCepSearchHistoryByUser({
              token,
              user_id: user.id,
            });
          if (data) {
            setSearchHistory(data);
          }
        }
      }
    } catch (error) {
      showErrorToast("Erro ao carregar histórico de buscas.");
      setHasError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [cepSearchesRepository, setLoading, user]);

  const handleClearCepSearchHistory = useCallback(async () => {
    try {
      setLoading(true);
      if (user) {
        const { token } = user;
        if (token) {
          await cepSearchesRepository.clearCepSearchHistoryByUser({
            token,
            user_id: user.id,
          });
          getUserCepSearchHistory();
          showSuccessToast("Histórico de buscas limpo com sucesso.");
        }
      }
    } catch (error) {
      showErrorToast("Erro ao deletar histórico de buscas.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [cepSearchesRepository, getUserCepSearchHistory, setLoading, user]);

  useEffect(() => {
    getUserCepSearchHistory();
  }, [getUserCepSearchHistory]);

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <Header />
      <div className="w-full md:max-w-[1080px] flex flex-col mx-auto px-8 md:px-4">
        <Title content="Histórico de buscas" className="mt-12 mb-4" />
        <div className="w-full flex items-center justify-between">
          <span className="text-sm md:text-base">
            Exibindo histórico de buscas
          </span>
          <button
            className="flex items-center text-red-600 text-xs md:text-sm ml-6 border-1 border-red-300 p-2 rounded-md cursor-pointer"
            onClick={handleClearCepSearchHistory}
          >
            Limpar histórico
          </button>
        </div>
        <div className="mt-6">
          {loading ? (
            <div className="w-full mt-8">
              <Loading />
            </div>
          ) : hasError ? (
            <div className="w-full mt-8">
              <ErrorData
                content=" Houve um erro ao carregar histórico de buscas."
                className="mt-12"
              />
            </div>
          ) : searchHistory && searchHistory.length === 0 ? (
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
