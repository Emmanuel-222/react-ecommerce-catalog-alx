export interface Product {
  id: number;
  title: string;
  price: number;
//   description: string;
  category: string;
  image: string;
//   rating?: Rating;
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