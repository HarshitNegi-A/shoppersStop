import React from "react";

const ShopContext=React.createContext({
    items:[],
    addItem: (item)=>{},
})

export default ShopContext;