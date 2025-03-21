import { ISearch } from "dtos/Search";

interface SearchResultCardProps {
  result: ISearch;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ result }) => {
  return (
    <div className="w-full flex flex-col items-center bg-white rounded-lg shadow-md p-6">
      <span className="text-sm md:text-[1rem]">
        {result.address}, {result.district}
      </span>
      <span className="text-sm md:text-[1rem]">
        {result.city} - {result.uf}
      </span>
      <span className="text-xs md:text-sm mt-4">
        Hora da pesquisa: {result.created_at.toDateString()}
      </span>
    </div>
  );
};

export default SearchResultCard;
