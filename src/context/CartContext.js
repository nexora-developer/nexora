import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([
    { id: 1, name: "SIM Card", price: 100, qty: 1 },
    { id: 2, name: "Gas Cylinder", price: 500, qty: 1 }
  ]);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};