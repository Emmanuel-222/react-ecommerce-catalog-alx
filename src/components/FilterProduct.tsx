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
    <div className="flex flex-col justify-between items-start mb-8 gap-4">
      <div className="w-full">
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
            value={"Beauty"}
            className={`${
              clickedCategory === "Beauty"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Beauty
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Fragrances"}
            className={`${
              clickedCategory === "Fragrances"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Fragrances
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Furniture"}
            className={`${
              clickedCategory === "Furniture"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Furniture
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Groceries"}
            className={`${
              clickedCategory === "Groceries"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Groceries
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Home-decoration"}
            className={`${
              clickedCategory === "Home-decoration"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Home-decoration
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Kitchen-Accessories"}
            className={`${
              clickedCategory === "Kitchen-Accessories"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Kitchen-Accessories
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Laptops"}
            className={`${
              clickedCategory === "Laptops"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Laptops
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Mens-shirts"}
            className={`${
              clickedCategory === "Mens-shirts"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Mens-Shirts
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Mens-shoes"}
            className={`${
              clickedCategory === "Mens-shoes"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Mens-Shoes
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Mobile-Accessories"}
            className={`${
              clickedCategory === "Mobile-Accessories"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Mobile-Accessories
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Smartphones"}
            className={`${
              clickedCategory === "Smartphones"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Smartphones
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Womens-dresses"}
            className={`${
              clickedCategory === "Womens-dresses"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Womens-dresses
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Womens-jewellery"}
            className={`${
              clickedCategory === "Womens-jewellery"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Womens-jewellery
          </button>
          <button
            onClick={(event) => handleFilterChange(event.currentTarget.value)}
            value={"Womens-Shoes"}
            className={`${
              clickedCategory === "Womens-Shoes"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } px-4 py-2 rounded-full whitespace-nowrap`}
          >
            Womens-Shoes
          </button>
        </div>
      </div>
      <div className="w-full">
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
