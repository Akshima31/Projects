import {  ShoppingCart , User} from 'lucide-react';
import { Link } from "react-router-dom";

import {useCart} from '../context/CartContext'

export default function Navbar(){

  const { cartCount} = useCart();
  return(
    <nav className='border-b border-gray-200 shadow-lg'>
    <div className=' flex flex-nowrap w-full h-16 items-center justify-between px-4'>
         {/*LOGO */}
        <div className="flex items-center gap-1">
            <span className="text-xl font-bold text-blue-700">
            LAB
          </span>

          <span className="text-xl font-bold text-gray-700">
            WALE
          </span>
        </div>

        {/*NAV LINKS  */}
        <div className='flex items-center gap-2 text-sm font-semibold text-gray-600 sm:gap-5 md:text-md'>
            <Link to='/' className='hover:text-blue-600 active:scale-90'>Home</Link> 
            <a href="#browse-categories" className='hover:text-blue-600 active:scale-90'>Categories</a>  
            <a href='#products' className='hover:text-blue-600 active:scale-90'>Products</a>  
            <a href='#about-us' className='hover:text-blue-600 active:scale-90'>About</a>  
            <a href='#contact' className='hover:text-blue-600 active:scale-90'>Contact</a>   
        </div>
     {/* ICONS */}
        <div className="flex items-center gap-5">

          <div className="relative cursor-pointer">

            <ShoppingCart size={19} />

            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
              {cartCount}
            </span>

          </div>

          <User
            size={18}
            className="cursor-pointer"
          />

        </div>

    </div>
    </nav>
  )
}