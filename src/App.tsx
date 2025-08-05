import { useState, useEffect } from "react";
import axios from "axios";

import type { ApiResponse } from "./interfaces";
import LoadingAnimation from "./components/LoadingAnimation";

import ProductCatalogPage from "./pages/ProductCatalogPage";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [products, setProducts] = useState<ApiResponse>({
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Navbar input
  const [searchFilter, setSearchFilter] = useState("");


  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await axios.get<ApiResponse>(
          "https://dummyjson.com/products?limit=194"
        );
        setProducts({ products: response.data.products, total: response.data.total, skip: response.data.skip, limit: response.data.limit });
        // console.log(response.data);
      } catch (error) {
        console.error("The error is ", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []); // Re-fetch products when searchFilter changes

  if (isLoading) return <LoadingAnimation />;
  if (isError) return <p>Something went wrong while fetching products.</p>;
  return (
    <>
      <Navbar searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
      <ProductCatalogPage searchFilter={searchFilter} products={products.products} />
    </>
  );
};

export default App;
