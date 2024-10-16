import { useState } from "react"
import CartContext from "./cart-context"

const CartProvider=(props)=>{

    const [items,setItems]=useState([])
    const [count,setCount]=useState(0)

    const handleAddToCart=(item)=>{
        setItems([...items,item])
    }
    const handleAddCount=()=>{
        setCount(count+1);
    }


    const cartContext={
        items:items,
        count:count,
        addCount:handleAddCount,
        addItem:handleAddToCart,
    }


    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;