
import { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';

export default function Navbar() {

  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative border-b border-gray-200 shadow-lg">

      <div className="flex h-16 w-full items-center justify-between px-4">

        {/* LOGO */}
        <div className="flex items-center gap-1 shrink-0">
          <span className="text-xl font-bold text-blue-700">
            LAB
          </span>
          <span className="text-xl font-bold text-gray-700">
            WALE
          </span>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-5 text-sm font-semibold text-gray-600">

          <Link to="/" className="hover:text-blue-600">Home</Link>
          <a href="#browse-categories" className="hover:text-blue-600">Categories</a>
          <a href="#products" className="hover:text-blue-600">Products</a>
          <a href="#about-us" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>

        </div>

        {/* ICONS + MOBILE MENU */}
        <div className="flex items-center gap-4">

          {/* CART */}
          <div className="relative cursor-pointer">
            <ShoppingCart size={20} />

            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
              {cartCount}
            </span>
          </div>

          {/* USER */}
          <User size={19} className="cursor-pointer" />

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

        </div>

      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="absolute left-0 top-16 z-50 w-full border-t border-gray-200 bg-white shadow-lg md:hidden">

          <div className="flex flex-col py-2 text-sm font-semibold text-gray-600">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600"
            >
              Home
            </Link>

            <a
              href="#browse-categories"
              onClick={() => setIsOpen(false)}
              className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600"
            >
              Categories
            </a>

            <a
              href="#products"
              onClick={() => setIsOpen(false)}
              className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600"
            >
              Products
            </a>

            <a
              href="#about-us"
              onClick={() => setIsOpen(false)}
              className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-5 py-3 hover:bg-blue-50 hover:text-blue-600"
            >
              Contact
            </a>

          </div>
        </div>
      )}

    </nav>
  );
}
