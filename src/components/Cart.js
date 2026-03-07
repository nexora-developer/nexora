import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          {item.name} - ₹{item.price} x {item.qty || 1}{" "}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;