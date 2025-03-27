import Button from "@/components/buttons/Button";
import SearchCepInput from "@/components/inputs/SearchCepInput";
import ErrorData from "@/components/miscellaneous/ErrorData";
import FooterLink from "@/components/miscellaneous/FooterLink";
import GreetUser from "@/components/miscellaneous/GreetUser";
import Header from "@/components/miscellaneous/Header";
import Loading from "@/components/miscellaneous/Loading";
import Title from "@/components/typography/Title";
import { CepSearchesRepository } from "@/repositories/CepSearchesRepository";
import { maskCep, removeCepMask } from "@/utils/formats";
import { showErrorToast } from "@/utils/toast";
import { ICepSearchDTO } from "dtos/Search";
import useAuth from "hooks/useAuth";
import { useLoading } from "hooks/useLoading";
import { useCallback, useMemo, useState } from "react";
import SearchResultCard from "./components/SearchResultCard";

const NewSearch: React.FC = () => {
  const [cep, setCep] = useState("");
  const [search, setSearch] = useState<ICepSearchDTO | null>(null);
  const [hasError, setHasError] = useState(false);

  const { user } = useAuth();
  const { loading, setLoading } = useLoading();

  const cepSearchesRepository = useMemo(() => {
    return new CepSearchesRepository();
  }, []);

  const handleMakeNewSearch = useCallback(async () => {
    try {
      setLoading(true);
      if (user?.token) {
        const { DATA: data } = await cepSearchesRepository.createCepSearch({
          cep: removeCepMask(cep),
          token: user.token,
        });
        if (data) {
          setSearch(data);
        }
      }
    } catch (error: any) {
      if (
        (error && error.response && error.response.status === 429) ||
        error.code === "ERR_NETWORK"
      ) {
        showErrorToast(
          `Você atingiu o número máximo de pesquisas por minuto. Tente novamente mais tarde.`
        );
      }else{
        setHasError(true);
      }
    } finally {
      setLoading(false);
    }
  }, [cep, cepSearchesRepository, setLoading, user]);

  const MASKED_CEP_LENGTH = 10;

  const handleResetSearch = useCallback(() => {
    setCep("");
    setSearch(null);
    setHasError(false);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <Header />
      <div className="w-[90%] md:max-w-[1080px] flex flex-col items-center mx-auto px-8 md:px-4 mt-12">
        <GreetUser userName={user!.name} />
        <Title
          content={
            search
              ? `Dados encontrados para o cep ${maskCep(search.cep)}`
              : "Informe um CEP para fazer uma busca"
          }
          className="mx-auto mt-16 "
        />

        <div className="w-full md:max-w-[400px] flex flex-col items-center mt-8">
          {loading ? (
            <div className="w-full mt-8">
              <Loading />
            </div>
          ) : hasError ? (
            <div className="w-full mt-8">
              <ErrorData
                content="Cep não encontrado ou inválido."
                className="mt-12"
              />
              <Button
                title="Fazer nova busca"
                onClick={handleResetSearch}
                className="mt-4"
              />
            </div>
          ) : search ? (
            <div className="w-full flex flex-col">
              <SearchResultCard result={search} />
              <Button
                title="Fazer nova busca"
                onClick={handleResetSearch}
                className="mt-4"
              />
            </div>
          ) : (
            <div className="w-full">
              <SearchCepInput
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                onSearch={handleMakeNewSearch}
                disabled={
                  loading || cep.length < MASKED_CEP_LENGTH || search !== null
                }
              />
            </div>
          )}
        </div>
      </div>
      <FooterLink className="absolute bottom-4" />
    </div>
  );
};

export default NewSearch;
