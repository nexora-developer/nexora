import React, { useState } from "react";

function App() {
  const products = [
    { id: 1, name: "Sugar", price: 50 },
    { id: 2, name: "Rice", price: 60 },
    { id: 3, name: "Wheat", price: 40 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Nexora Local Market</h1>

      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            {item.name} - ₹{item.price}
          </div>
        ))
      )}
    </div>
  );
}

export default App;