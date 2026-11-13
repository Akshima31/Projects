import {useCart} from '../context/CartContext'
import { ShoppingCart } from 'lucide-react';

export default function DealsCard({ product }){
   const {addToCart} = useCart();

    return(
        <div className='rounded-xl border border-gray-200 bg-white p-3 shadow-md'>
            {/* IMAGE */}
             <div className='relative'>

                <img src={product.image} alt={product.name} 
                className='h-40 w-full rounded-2xl object-contain'/>

            {/* DISCOUNT */}
            <span className='absolute left-1 top-1 rounded-md bg-red-500 px-2 py-1  text-[8px] font-bold text-white'>
                {product.discount}</span>

             </div>

            {/* CATEGORY */}
            <p className="mt-3 text-[9px] font-bold text-gray-400">
               {product.category} </p>

            {/* NAME */}
             <h2 className="mt-1 truncate text-xs font-bold text-gray-800">
                {product.name} </h2> 
            
            {/* PRICE */}

         <div className="mt-2 flex items-center gap-2">

             <span className="text-sm font-bold text-gray-900">
                ₹{product.price.toLocaleString("en-IN")} </span>
   
             <span className="text-[10px] text-gray-400 line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")} </span>
            </div>

        {/* ADD TO CART */}
        <button onClick={()=>{
            addToCart(product)
            alert('Added to Cart')
        }}
        className='mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2 text-xs font-medium text-white transition hover:bg-blue-900 active:scale-95'>
           <ShoppingCart size={13} /> Add to Cart
        </button>
           
        </div>
    )
}