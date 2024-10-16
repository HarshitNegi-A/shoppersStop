import { useContext } from "react";
import ShopContext from "./store1/shop-context";
import CartContext from "./store1/cart-context";

const ListItems = () => {
  const shopctnx = useContext(ShopContext);
  const cartctnx = useContext(CartContext);

  const handleLSizeItem = (item, index) => {
    let count = 0;
    for (let i of cartctnx.items) {
      count = 0;
      if (i.name === item.name) {
        count++;
        break;
      }
    }
    if (count === 0) {
      item.numberOfL = 1;
      cartctnx.addItem(item);
    } else {
      item.numberOfL++;
    }
    shopctnx.items[index].l = shopctnx.items[index].l - 1;
    cartctnx.addCount();
  };
  const handleMSizeItem = (item, index) => {
    let count = 0;
    for (let i of cartctnx.items) {
      count = 0;
      if (i.name === item.name) {
        count++;
        break;
      }
    }
    if (count === 0) {
      item.numberOfM = 1;
      cartctnx.addItem(item);
    } else {
      item.numberOfM++;
    }

    shopctnx.items[index].m = shopctnx.items[index].m - 1;
    cartctnx.addCount();
  };
  const handleSSizeItem = (item, index) => {
    let count = 0;
    for (let i of cartctnx.items) {
      count = 0;
      if (i.name === item.name) {
        count++;
        break;
      }
    }
    if (count === 0) {
      item.numberOfS = 1;
      cartctnx.addItem(item);
    } else {
      item.numberOfS++;
    }

    shopctnx.items[index].s = shopctnx.items[index].s - 1;
    cartctnx.addCount();
  };

  const shopItems = (
    <ul>
      {shopctnx.items.map((item, index) => (
        <li key={item.name} style={{ listStyle: "none" }}>
          <b>Name:</b>
          {item.name} <b>Description:</b>
          {item.desc} <b>Price:</b> {item.price}{" "}
          <button onClick={() => handleLSizeItem(item, index)}>
            Buy Large{item.l}
          </button>{" "}
          <button onClick={() => handleMSizeItem(item, index)}>
            Buy Medium{item.m}
          </button>{" "}
          <button onClick={() => handleSSizeItem(item, index)}>
            Buy Small{item.s}
          </button>{" "}
        </li>
      ))}
    </ul>
  );
  return <div>{shopItems}</div>;
};

export default ListItems;
