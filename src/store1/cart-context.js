import React from "react"

const CartContext=React.createContext({
    items:[],
    count:0,
    addCount:()=>{},
    addItem:(item)=>{}
})

export default CartContext;