import { Search, Heart, ShoppingCart } from "lucide-react";
import type { NavbarProps } from "../interfaces";

const Navbar: React.FC<NavbarProps> = ({ setSearchFilter }) => {
  return (
    <nav className="bg-white shadow-md font-poppins">
      <header className="flex flex-wrap md:flex-nowrap items-center justify-between p-4 gap-4">
        <h1 className="text-2xl text-indigo-600 font-bold">ShopEase</h1>
        <label className="relative w-full md:w-96" htmlFor="search">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            id="search"
            placeholder="Search products..."
            type="text"
            onChange={(event) => {setSearchFilter(event.target.value);}}
          />
        </label>
        <div className="flex items-center space-x-4">
          <button className="relative text-gray-600 hover:text-indigo-600">
            <Heart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </button>
          <button className="relative text-gray-600 hover:text-indigo-600">
            <ShoppingCart className="text-xl" />
            <span  className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
          </button>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
