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
      console.log("Already on the first page");
      return;
    }
    setCurrentPage(currentPage - 1);
    console.log("Previous page clicked");
    setPrevPage(true);
  };

  const handleNextPage = () => {
    if (currentPage >= totalPages) {
      console.log("Already on the last page");
      return;
    }
    setCurrentPage(currentPage + 1);
    console.log("Next page clicked");
    setNextPage(true);
  };
  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center space-x-2">
        <button
          onClick={handlePrevPage}
          className="px-3 py-1 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        >
          <ArrowLeft className="" />
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
        {/* <button className="px-3 py-1 rounded-md border border-gray-300 bg-indigo-600 text-white">
          {currentPage}
        </button> */}
        {/* <button className="px-3 py-1 rounded-md border border-gray-300">
          2
        </button> */}
        <button
          onClick={handleNextPage}
          className="px-3 py-1 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
        >
          <ArrowRight className="" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
