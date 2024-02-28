import { useState } from "react";

export type Pagination = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ totalItems, itemsPerPage, onPageChange }: Pagination) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startIndex: number = (currentPage - 1) * itemsPerPage + 1;
  const endIndex: number = Math.min(currentPage * itemsPerPage, totalItems);
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`inline-block mx-1 px-3 py-2  bg-gray-200 rounded-lg cursor-pointer ${
            currentPage === i ? "bg-green-600 text-white" : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  return (
    <div className="flex flex-col ">
      <div className="text-center  text-white  ">
        Mostrando {(endIndex - startIndex)+1} de {totalItems} resultados
      </div>
      <div className="text-center mt-4 lg:mr-8  ">
        <ul>{renderPagination()}</ul>
      </div>
    </div>
  );
};

export default Pagination;
