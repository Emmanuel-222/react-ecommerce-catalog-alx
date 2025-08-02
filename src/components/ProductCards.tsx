import type { FilterProductProps } from "../interfaces";

import ProductCard from "./ProductCard";

const ProductCards: React.FC<FilterProductProps> = ({
  products,
  searchFilter,
  clickedCategory,
  clickedSort,
}) => {
  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchFilter
      ? product.title.toLowerCase().includes(searchFilter.toLowerCase())
      : true;

    const matchesCategory = clickedCategory
      ? product.category.toLowerCase().includes(clickedCategory.toLowerCase())
      : true;
    if (clickedCategory === "All") {
      return matchesSearch;
    }
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
  return (
    <main className="container mx-auto p-4">
      <span>Shwoing 3 of 5 produts</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
};

export default ProductCards;
