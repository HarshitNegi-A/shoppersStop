import Modal from "./UI/Modal"
import classes from "./Cart.module.css"
import CartContext from "./store1/cart-context";
import React, {useContext} from "react";

const Cart=(props)=>{
    const cartcntx=useContext(CartContext)
    let totalAmount=cartcntx.items.reduce((curNumber, item)=>{
        return Number(curNumber) + Number(item.price*(item.numberOfL+item.numberOfM+item.numberOfS));
    }, 0);

    
    return <Modal onClose={props.onClose}>
        <ul  className={classes['cart-items']}>{cartcntx.items.map((item,index)=>
         
         <li key={item.name} style={{display:"flex", justifyContent:"space-between"}}>  {item.name}<br />${item.price*(item.numberOfL+item.numberOfM+item.numberOfS)} 
               {item.numberOfL}L  {item.numberOfM}M  {item.numberOfS}S
         </li>
         
     )}</ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart;