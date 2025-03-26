import { formatDate } from "@/utils/formats";
import { ICepSearchDTO } from "dtos/Search";

interface SearchResultCardProps {
  result: ICepSearchDTO;
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ result }) => {
  return (
    <div className="w-full flex flex-col items-center bg-white rounded-lg shadow-md p-10">
      <span className="text-sm md:text-xl">
        {result.address}, {result.district}
      </span>
      <span className="text-sm md:text-xl">
        {result.city} - {result.uf}
      </span>
      <span className="text-xs md:text-sm mt-4">
        Hora da pesquisa: {formatDate(result.createdAt)}
      </span>
    </div>
  );
};

export default SearchResultCard;
