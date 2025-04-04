import Text from "@/components/typography/Text";

import "@/styles/historyTable.css";
import { formatDate } from "@/utils/formats";
import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { ICepSearchDTO } from "dtos/Search";
import { useCallback, useEffect, useState } from "react";

const TABLE_HEAD = [
  { label: "Cep", propRef: "cep" },
  { label: "Endereço", propRef: "endereço" },
  { label: "Bairro", propRef: "bairro" },
  { label: "Cidade", propRef: "cidade" },
  { label: "UF", propRef: "uf" },
  { label: "Data da consulta", propRef: "dataConsulta" },
];

interface HistoryTableProps {
  history: ICepSearchDTO[];
  onNextPage: () => void;
  onPreviousPage: () => void;
  currentPage: number;
}

const HistoryTable: React.FC<HistoryTableProps> = ({
  history,
  currentPage,
  onNextPage,
  onPreviousPage,
}) => {
  const [page, setPage] = useState(1);
  const [sortedHistory, setSortedHistory] = useState<ICepSearchDTO[]>([]);
  const [tableData, setTableData] = useState<ICepSearchDTO[]>([]);
  const itemsPerPage = 10;

  const currentTableData = useCallback(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setTableData(sortedHistory.slice(startIndex, endIndex) as never);
  }, [itemsPerPage, page, sortedHistory]);

  useEffect(() => {
    setSortedHistory(history);
  }, [history]);

  useEffect(() => {
    currentTableData();
  }, [currentTableData]);

  useEffect(() => {
    setPage(1);
  }, [itemsPerPage]);

  return (
    <Card
      className="w-full  flex flex-col lg:justify-between mx-auto bg-white rounded-lg"
      placeholder=""
      onPointerEnterCapture={null}
      onPointerLeaveCapture={null}
    >
      <CardBody
        className="overflow-auto p-0 rounded-lg w-full custom-scrollbar"
        placeholder=""
        onPointerEnterCapture={null}
        onPointerLeaveCapture={null}
      >
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-200">
              {TABLE_HEAD.map((head, i) => (
                <th key={head.label + i} className="bg-gray-200 p-3">
                  <Text content={head.label} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" w-[90%] lg:w-full">
            {tableData.map(
              ({ id, cep, city, district, uf, createdAt, address }, index) => {
                const isLast = index === tableData.length - 1;
                const classes = isLast
                  ? "md:py-1 py-0"
                  : "md:py-1 py-0 border-b border-gray-200";
                return (
                  <tr
                    key={id + index}
                    className="even:bg-gray-50 border-b-1 border-gray-200"
                  >
                    <td className={classes}>
                      <div className="flex items-center p-2 pl-3">
                        <Text
                          content={cep}
                          className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs md:text-sm text-gray-700 "
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center p-2 pl-3">
                        <Text
                          content={address}
                          className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs md:text-sm text-gray-700 "
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center p-2 pl-3">
                        <Text
                          content={district}
                          className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs md:text-sm  text-gray-700 "
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center p-2 pl-3">
                        <Text
                          content={city}
                          className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs md:text-sm text-gray-700"
                        />
                      </div>
                    </td>

                    <td className={classes}>
                      <Text
                        content={uf}
                        className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs md:text-sm ml-3 md:ml-4 text-gray-700"
                      />
                    </td>
                    <td className={classes}>
                      <Text
                        content={formatDate(createdAt)}
                        className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs md:text-sm ml-3 md:ml-4 mr-4 text-gray-700"
                      />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter
        className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-200 p-2 w-full"
        placeholder=""
        onPointerEnterCapture={null}
        onPointerLeaveCapture={null}
      >
        <button
          onClick={onPreviousPage}
          disabled={currentPage <= 1}
          className="lg:w-[96px] text-[11px] lg:text-sm mx-auto normal-case text-gray-700 shadow-none border-1 border-gray-300 p-2 cursor-pointer rounded-sm disabled:cursor-auto"
        >
          Anterior
        </button>
        <div className="flex md:flex-row flex-col md:w-full w-[90%] mx-auto items-center justify-center">
          <div className="flex items-center gap-2  mb-4 lg:mb-0">
            <span className="mt-2 text-[11px] lg:text-sm font-bold">
              Página {currentPage}
            </span>
          </div>
        </div>
        <button
          onClick={onNextPage}
          disabled={tableData.length < itemsPerPage}
          className="lg:w-[96px] text-[11px] lg:text-sm mx-auto normal-case text-gray-700 shadow-none border-1 border-gray-300 p-2 cursor-pointer rounded-sm disabled:cursor-auto"
        >
          Próximo
        </button>
      </CardFooter>
    </Card>
  );
};

export default HistoryTable;
