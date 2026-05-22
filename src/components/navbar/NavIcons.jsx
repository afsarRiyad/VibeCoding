import { Heart, ShoppingBag, Menu } from 'lucide-react';
import SearchBar from './SearchBar';

export default function NavIcons({ onMenuOpen }) {
  return (
    <div className="flex items-center gap-4">
      <SearchBar />

      <button aria-label="Wishlist" className="cursor-pointer hover:scale-110 transition-all duration-200">
        <Heart size={20} />
      </button>

      <button aria-label="Cart" className="cursor-pointer hover:scale-110 transition-all duration-200">
        <ShoppingBag size={20} />
      </button>

      <button className="hidden sm:block bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-900 transition-colors">
        Login
      </button>

      <button
        className="lg:hidden cursor-pointer hover:scale-110 transition-all duration-200"
        onClick={onMenuOpen}
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>
    </div>
  );
}
