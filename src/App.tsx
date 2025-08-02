// import { useState, useEffect } from "react";
// import axios from "axios";

// import type { Product } from "./interfaces";
// import LoadingAnimation from "./components/LoadingAnimation";

// import ProductCatalogPage from "./pages/ProductCatalogPage";
// import Navbar from "./components/Navbar";

// const App: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   // Navbar input
//   const [searchFilter, setSearchFilter] = useState("");


//   // Fetch products from the API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setIsLoading(true);
//       setIsError(false);

//       try {
//         const response = await axios.get<Product[]>(
//           "https://fakestoreapi.com/products"
//         );
//         setProducts(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error("The error is ", error);
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []); // Re-fetch products when searchFilter changes

//   if (isLoading) return <LoadingAnimation />;
//   if (isError) return <p>Something went wrong while fetching products.</p>;
//   return (
//     <>
//       <Navbar searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
//       <ProductCatalogPage searchFilter={searchFilter} products={products} />
//     </>
//   );
// };

// export default App;
