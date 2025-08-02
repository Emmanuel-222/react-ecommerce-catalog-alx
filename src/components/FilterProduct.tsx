import { ChevronDown } from "lucide-react";

const FilterProduct: React.FC<{
  clickedCategory: string;
  setClickedCategory: (category: string) => void;
  setClickedSort: (category: string) => void;
}> = ({ clickedCategory, setClickedCategory, setClickedSort }) => {
  const handleFilterChange = (value: string) => {
    setClickedCategory(value);
  };

  const handleSortChange = (value: string) => {
    setClickedSort(value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div className="w-full md:w-auto">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"All"}
            className={`${
              clickedCategory === "All"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            All
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Electronics"}
            className={`${
              clickedCategory === "Electronics"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Electronics
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Footwear"}
            className={`${
              clickedCategory === "Footwear"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Footwear
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Clothing"}
            className={`${
              clickedCategory === "Clothing"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Clothing
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Jewelery"}
            className={`${
              clickedCategory === "Jewelery"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Jewelery
          </button>
        </div>
      </div>
      <div className="w-full md:w-auto">
        <div className="relative">
          <select
            onChange={(e) => handleSortChange(e.currentTarget.value)}
            className="w-full appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="default">Default Sorting</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-ascending">Name: A - Z</option>
            <option
              onClick={(event) => setClickedSort(event.currentTarget.value)}
              value="name-descending"
            >
              Name: Z- A
            </option>
          </select>
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <ChevronDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
