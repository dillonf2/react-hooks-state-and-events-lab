import React,{ useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart]=useState(false)

  function clickToShowItemsInCart(){
    setInCart(!inCart)
  }
  const status= inCart? 
    <li className="in-cart">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clickToShowItemsInCart}>Add to Cart</button>
  </li>: 
     <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clickToShowItemsInCart}>Add to Cart</button>
   </li>

  return (
  status
    // <li className="">
    //   <span>{name}</span>
    //   <span className="category">{category}</span>
    //   <button className="add" onClick={clickToShowItemsInCart}>Add to Cart</button>
    // </li>
  );
}

export default Item;
