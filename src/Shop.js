import React, { useState } from "react";
import ShopContext from "./store1/shop-context";
import { useContext } from "react";
import CartContext from "./store1/cart-context";

const Shop=(props)=>{
    const [name,setName]=useState("")
    const [desc,setDesc]=useState("")
    const [price,setPrice]=useState(0)
    const [l,setL]=useState(0)
    const [m,setM]=useState(0)
    const [s,setS]=useState(0)

    const shopcntx=useContext(ShopContext);
    const cartCtx=useContext(CartContext);

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const obj={
            "name":name,
            "desc":desc,
            "price":price,
            "l":l,
            "m":m,
            "s":s,
            "numberOfL":0,
            "numberOfM":0,
            "numberOfS":0,
        }
        shopcntx.addItem(obj)
        
    }
    console.log(shopcntx)

    return <div style={{display:"flex", justifyContent:"space-around"}}>
    <form onSubmit={handleFormSubmit}>
        <label htmlFor="tshirt">Tshirt Name</label>
        <input type="text" id="tshirt" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <label htmlFor="desc">Description</label>
        <input type="text" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        <label htmlFor="sizeL">L</label>
        <input type="number" id="sizeL" value={l} onChange={(e)=>{setL(e.target.value)}}/>
        <label htmlFor="sizeM">M</label>
        <input type="number" id="sizeM" value={m} onChange={(e)=>{setM(e.target.value)}}/>
        <label htmlFor="sizeS">S</label>
        <input type="number" id="sizeS" value={s} onChange={(e)=>{setS(e.target.value)}}/>
        <button type="submit">Add Product</button>
    </form>
    <button type="click" onClick={props.onShowCart}>Cart{cartCtx.count}</button>
    </div>
}
export default Shop;