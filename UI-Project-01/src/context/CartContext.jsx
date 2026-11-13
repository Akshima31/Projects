import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cart, setCart]= useState([]);

    const addToCart = (product) =>{
        setCart((perCart)=>{

            const existingProduct = perCart.find(
                (item) => item.id === product.id
            );

            if(existingProduct){
                return perCart.map((item) =>
                    item.id  === product.id ? { ...item, quantity: item.quantity +1,} : item 
            ); 
            }
             return [
                ...perCart,
                {
                    ...product, quantity:1
                }
             ]
        })
    }


const cartCount = cart.reduce(
    (total , item) => total +item.quantity, 0
)

return(
    <CartContext.Provider 
    value={{cart , addToCart , cartCount}}>
        {children}
    </CartContext.Provider>
    )
}

export const useCart =() => {
    return useContext(CartContext);
}