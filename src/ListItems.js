import { useContext } from "react";
import ShopContext from "./store1/shop-context";
import CartContext from "./store1/cart-context";

const ListItems=()=>{
    const shopctnx=useContext(ShopContext);
    const cartctnx=useContext(CartContext);

    const handleLSizeItem=(item,index)=>{
        cartctnx.addItem(item)
        shopctnx.items[index].l=shopctnx.items[index].l-1
        
        
    }
    const handleMSizeItem=(item,index)=>{
        cartctnx.addItem(item)
        shopctnx.items[index].m=shopctnx.items[index].m-1
    }
    const handleSSizeItem=(item,index)=>{
        cartctnx.addItem(item)
        shopctnx.items[index].s=shopctnx.items[index].s-1
    }


    const shopItems=<ul>
        {shopctnx.items.map((item,index)=>
            <li key={item.name} style={{listStyle:"none"}}><b>Name:</b>{item.name}   <b>Description:</b>{item.desc}  <b>Price:</b> {item.price}  <button onClick={()=>handleLSizeItem(item,index)}>Buy Large{item.l}</button>   <button onClick={()=>handleMSizeItem(item,index)}>Buy Medium{item.m}</button>   <button onClick={()=>handleSSizeItem(item,index)}>Buy Small{item.s}</button> </li>
        )}
    </ul>
    return <div>
        {shopItems}
    </div>
}

export default ListItems;