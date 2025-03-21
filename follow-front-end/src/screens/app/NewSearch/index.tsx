import SearchCepInput from "@/components/inputs/SearchCepInput";
import Header from "@/components/miscellaneous/Header";
import Title from "@/components/typography/Title";

const NewSearch: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <Header />
      <div className="w-full md:max-w-[480px] flex flex-col items-center mx-auto p-8">
        <Title content="Informe um CEP para começar" className="mx-auto" />
        <SearchCepInput />
      </div>
    </div>
  );
};

export default NewSearch;
