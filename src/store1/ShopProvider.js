import { useState } from "react"
import ShopContext from "./shop-context"


const ShopProvider=(props)=>{

    const [items,setItems]=useState([])

    const addItemHandler=(item)=>{
        setItems([...items,item])
        console.log(items)
    }

    
    const shopContext={
        items:items,
        addItem:addItemHandler,
    }
    return <ShopContext.Provider value={shopContext}>
        {props.children}
    </ShopContext.Provider>
}

export default ShopProvider;