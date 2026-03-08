import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

const [cart, setCart] = useState([]);

useEffect(() => {

const savedCart = localStorage.getItem("cart");

if (savedCart) {
setCart(JSON.parse(savedCart));
}

}, []);

useEffect(() => {

localStorage.setItem("cart", JSON.stringify(cart));

}, [cart]);

function addToCart(product) {

setCart([...cart, product]);

}

function removeFromCart(index) {

setCart(cart.filter((_, i) => i !== index));

}

return (

<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>

{children}

</CartContext.Provider>

);

}

export default CartProvider;