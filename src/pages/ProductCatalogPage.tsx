import { useState } from "react";

import type { SearchFilterProducts } from "../interfaces";

import FilterProduct from "../components/FilterProduct";
import ProductCards from "../components/ProductCards";


const ProductCatalogPage: React.FC<SearchFilterProducts> = ({ products, searchFilter}) => {
  const [clickedCategory, setClickedCategory] = useState("All");
  const [clickedSort, setClickedSort] = useState("default");
  return (
    <section className="container mx-auto p-4">
      <FilterProduct clickedCategory={clickedCategory} setClickedCategory={setClickedCategory} setClickedSort={setClickedSort} />
      <ProductCards clickedCategory={clickedCategory} searchFilter={searchFilter} products={products} clickedSort={clickedSort} />
    </section>
  );
};

export default ProductCatalogPage;
