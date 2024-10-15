import { useState } from "react"
import CartContext from "./cart-context"

const CartProvider=(props)=>{

    const [items,setItems]=useState([])

    const handleAddToCart=(item)=>{
        setItems([...items,item])
    }

    const cartContext={
        items:items,
        addItem:handleAddToCart
    }


    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;