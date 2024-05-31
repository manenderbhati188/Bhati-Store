import React, { createContext,useState } from "react";
import all_product from '../Components/Assets/all_product'
export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index < all_product.length;index++)
    {
        cart[index]=0;
    }
    return cart;
}

export const ShopContextProvider=(props)=>{
    const[cartItems,setCartItem]=useState(getDefaultCart());
    
    const addToCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }

    const RemoveFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }
    
    const getTotalCartAmount=()=>{
        let TotalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let iteminfo=all_product.find((product)=>product.id===Number(item));
                TotalAmount+=iteminfo.new_price * cartItems[item];
            }
        }
        return TotalAmount;
    }
    const totalInCart=()=>{
        let total=0;
        for(const Item in cartItems){
            if(cartItems[Item]>0)
                {   
                    total+=cartItems[Item];
                }
        }
        return total;
    }
    const contextValue={all_product,cartItems,addToCart,RemoveFromCart,getTotalCartAmount,totalInCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;