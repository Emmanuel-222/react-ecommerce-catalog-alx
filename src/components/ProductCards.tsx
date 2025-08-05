import { useState, useEffect } from "react";
import type { FilterProductProps } from "../interfaces";

import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductCards: React.FC<FilterProductProps> = ({
  products,
  searchFilter,
  clickedCategory,
  clickedSort,
}) => {
  const [prevPage, setPrevPage] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchFilter
      ? product.title.toLowerCase().includes(searchFilter.toLowerCase())
      : true;

    const matchesCategory =
      clickedCategory && clickedCategory !== "All"
        ? product.category.toLowerCase().includes(clickedCategory.toLowerCase())
        : true;
    return matchesSearch && matchesCategory;
  });
  // Sort products based on clickedSort
  if (clickedSort === "default") {
    filteredProducts.sort((a, b) => a.id - b.id);
  }
  if (clickedSort === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (clickedSort === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  if (clickedSort === "name-ascending") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  }
  if (clickedSort === "name-descending") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  // Determine if we need pagination
  const shouldPaginate =
    (searchFilter && searchFilter.trim() !== "") ||
    (clickedCategory && clickedCategory !== "All");

  const itemsPerPage = 10; // Assuming 10 items per page
  const StartIndex = (currentPage - 1) * itemsPerPage;
  const EndIndex = StartIndex + itemsPerPage;

  // Final products to render
  const displayedProducts = shouldPaginate
    ? filteredProducts.slice(StartIndex, EndIndex)
    : filteredProducts;

  useEffect(() => {
  // Reset page when search or category changes
  setCurrentPage(1);
}, [searchFilter, clickedCategory]);

useEffect(() => {
  // Scroll to top when page changes
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [currentPage]);
  
  return (
    <main className="container mx-auto p-4">
      {/* <span>Shwoing 3 of 5 produts</span> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {/* Pagination component can be added here */}
      { shouldPaginate && (
        <Pagination
          setNextPage={setNextPage}
          setPrevPage={setPrevPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          filteredProducts={filteredProducts}
          itemsPerPage={itemsPerPage}
        />  
      )}
    </main>
  );
};

export default ProductCards;
