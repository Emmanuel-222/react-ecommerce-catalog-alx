export interface ApiResponse{
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  images: string[];
}

// interface Rating {
//   rate: number;
//   count: number;
// }


export interface SearchFilterProducts {
  searchFilter: string;
  products: Product[];
}
export interface FilterProductProps {
  searchFilter: string;
  products: Product[];
  clickedCategory: string;
  clickedSort: string;
}

export interface NavbarProps {
  searchFilter?: string;
  setSearchFilter: (filter: string) => void;
}

export interface CategoryProps {
  clikedCategory: string;
  setClickedCategory: (category: string) => void 
}


import { Dispatch, SetStateAction } from "react";
export interface PaginationProps {
  setNextPage: Dispatch<SetStateAction<boolean>>;
  setPrevPage: Dispatch<SetStateAction<boolean>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  filteredProducts: Product[];
  itemsPerPage: number; // Optional, default to 10 if not provided
}