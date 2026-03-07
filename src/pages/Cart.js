import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";

function Cart(){

  const { cart } = useContext(CartContext);

  return(
    <div>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item,index)=>(
          <div key={index}>
            {item.name} - ₹{item.price}
          </div>
        ))
      )}

    </div>
  )
}

export default Cart;