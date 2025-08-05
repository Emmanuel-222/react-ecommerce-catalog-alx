import { useState, useEffect } from "react";
import type { FilterProductProps } from "../interfaces";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingAnimation } from "./LoadingAnimation";

const ProductCards: React.FC<FilterProductProps> = ({
  products,
  searchFilter,
  clickedCategory,
  clickedSort,
}) => {
  const [prevPage, setPrevPage] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  console.log("Prev button clicked:", prevPage);
  console.log("Next button clicked:", nextPage);

  // Infinite scroll state
  const [displayedCount, setDisplayedCount] = useState(16); // Show 20 items initially

  const itemsPerPage = 8;
  const StartIndex = (currentPage - 1) * itemsPerPage;
  const EndIndex = StartIndex + itemsPerPage;

  // Filter
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

  // Sort
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

  // Determine mode
  const shouldPaginate =
    (searchFilter && searchFilter.trim() !== "") ||
    (clickedCategory && clickedCategory !== "All");

  // Pagination products
  const paginatedProducts = filteredProducts.slice(StartIndex, EndIndex);

  // Infinite scroll products
  const infiniteScrollProducts = filteredProducts.slice(0, displayedCount);

  const fetchMoreData = () => {
    setTimeout(() => {
      setDisplayedCount((prev) => prev + 8); // Load 10 more items
    }, 1000); // simulate delay
  };

  // Reset page or scroll count when filters change
  useEffect(() => {
    setCurrentPage(1);
    setDisplayedCount(20); // Reset scroll count when filter/category changes
  }, [searchFilter, clickedCategory]);

  // Scroll to top when page changes in pagination mode
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <main className="container mx-auto p-4">
      {shouldPaginate ? (
        <>
        <span className="text-gray-600">Showing 3 of 5 produts</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <Pagination
            setNextPage={setNextPage}
            setPrevPage={setPrevPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            filteredProducts={filteredProducts}
            itemsPerPage={itemsPerPage}
          />
        </>
      ) : (
        <InfiniteScroll
          dataLength={infiniteScrollProducts.length}
          next={fetchMoreData}
          hasMore={infiniteScrollProducts.length < filteredProducts.length}
          loader={<LoadingAnimation />}
          endMessage={
            <p className="text-center mt-4 text-indigo-600">
              <b>Yay! You have seen it all 🎉🎉</b>
            </p>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {infiniteScrollProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </main>
  );
};

export default ProductCards;