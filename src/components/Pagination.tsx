import type { PaginationProps } from "../interfaces";

import { ArrowLeft, ArrowRight } from "lucide-react";

const Pagination: React.FC<PaginationProps> = ({
  setNextPage,
  setPrevPage,
  currentPage,
  setCurrentPage,
  filteredProducts,
  itemsPerPage = 10, // Default to 10 items per page if not provided
}) => {
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const handlePrevPage = () => {
    if (currentPage <= 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
    setPrevPage(true);
  };

  const handleNextPage = () => {
    if (currentPage >= totalPages) {
      return;
    }
    setCurrentPage(currentPage + 1);
    setNextPage(true);
  };
  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center space-x-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage <= 1}
          className="px-3 py-1 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        >
          <ArrowLeft />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md border border-gray-300 ${
              currentPage === i + 1
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage >= totalPages}
          className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100  disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
