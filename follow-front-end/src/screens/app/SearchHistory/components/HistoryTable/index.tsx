import Text from "@/components/typography/Text";

import { formatDate } from "@/utils/formats";
import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { ISearchDTO } from "dtos/Search";
import { useCallback, useEffect, useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import '@/styles/historyTable.css'

const TABLE_HEAD = [
  { label: "Cep", propRef: "cep" },
  { label: "Endereço", propRef: "endereço" },
  { label: "Bairro", propRef: "bairro" },
  { label: "Cidade", propRef: "cidade" },
  { label: "UF", propRef: "uf" },
  { label: "Data da consulta", propRef: "dataConsulta" },
];

interface HistoryTableProps {
  history: ISearchDTO[];
}

const HistoryTable: React.FC<HistoryTableProps> = ({ history }) => {
  const [page, setPage] = useState(1);
  const [pagesListIndex, setPagesListIndex] = useState(0);
  const [sortedHistory, setSortedHistory] = useState<ISearchDTO[]>([]);
  const [tableData, setTableData] = useState<ISearchDTO[]>([]);
  const itemsPerPage = 10;

  const pages = Array.from(
    { length: Math.ceil(sortedHistory.length / itemsPerPage) },
    (_, idx) => idx + 1
  );

  const MAX_PAGES_TO_SHOW = 5;

  const canGoToPreviousSet = pagesListIndex > 0;
  const canGoToNextSet =
    pagesListIndex < Math.ceil(pages.length / MAX_PAGES_TO_SHOW) - 1;

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
                <th key={head.label + i} className="bg-gray-200 p-4">
                  <Text content={head.label} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" w-[90%] lg:w-full">
            {tableData.map(
              ({ id, cep, city, district, uf, created_at, address }, index) => {
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
                      <div className="flex items-center p-4">
                        <Text
                          content={cep}
                          className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-700 "
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center p-4">
                        <Text
                          content={address}
                          className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-700 "
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center p-4">
                        <Text
                          content={district}
                          className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs  text-gray-700 "
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center p-4">
                        <Text
                          content={city}
                          className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-700"
                        />
                      </div>
                    </td>

                    <td className={classes}>
                      <Text
                        content={uf}
                        className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs ml-4 md:ml-5 text-gray-700"
                      />
                    </td>
                    <td className={classes}>
                      <Text
                        content={formatDate(created_at)}
                        className="block overflow-hidden text-ellipsis whitespace-nowrap text-xs mx-6 text-gray-700"
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
        className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-200 p-4 w-full"
        placeholder=""
        onPointerEnterCapture={null}
        onPointerLeaveCapture={null}
      >
        <button
          onClick={() => setPage(page - 1)}
          disabled={page <= 1}
          className="lg:w-[96px] text-[11px] lg:text-sm mx-auto normal-case text-gray-700 shadow-none"
        >
          Anterior
        </button>
        <div className="flex md:flex-row flex-col md:w-full w-[90%] mx-auto items-center justify-center">
          <div className="flex items-center gap-4  mb-4 lg:mb-0">
            {pages.length > MAX_PAGES_TO_SHOW ? (
              <div className="flex flex-row">
                {canGoToPreviousSet && (
                  <button
                    onClick={() => setPagesListIndex(pagesListIndex - 1)}
                    className="text-gray-700"
                  >
                    <MdKeyboardDoubleArrowLeft className="h-5 w-5 text-gray-800" />
                  </button>
                )}
                {pages
                  .slice(
                    pagesListIndex * MAX_PAGES_TO_SHOW,
                    MAX_PAGES_TO_SHOW * (pagesListIndex + 1)
                  )
                  .map((historyPage) => (
                    <button
                      key={historyPage}
                      onClick={() => setPage(historyPage)}
                      className="text-[11px] lg:text-sm w-6 h-6 lg:w-8 lg:h-8 mr-2 mt-2 text-gray-700  shadow-none"
                    >
                      {historyPage}
                    </button>
                  ))}
                {canGoToNextSet && (
                  <button
                    onClick={() => setPagesListIndex(pagesListIndex + 1)}
                    className="text-gray-700"
                  >
                    <MdKeyboardDoubleArrowRight className="h-5 w-5 text-gray-800" />
                  </button>
                )}
              </div>
            ) : (
              pages.map((historyPage) => (
                <button
                  key={historyPage}
                  onClick={() => setPage(historyPage)}
                  className="text-[11px] lg:text-sm w-6 h-6 lg:w-8 lg:h-8 mr-2 mt-2 text-gray-700 shadow-none"
                >
                  {historyPage}
                </button>
              ))
            )}
          </div>
        </div>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === pages[pages.length - 1]}
          className="lg:w-[96px] text-[11px] lg:text-sm mx-auto normal-case text-gray-700   shadow-none"
        >
          Próximo
        </button>
      </CardFooter>
    </Card>
  );
};

export default HistoryTable;
