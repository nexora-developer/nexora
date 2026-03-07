import React from "react";

function App() {
  const products = [
    { id: 1, name: "Sugar", price: 50 },
    { id: 2, name: "Rice", price: 60 },
    { id: 3, name: "Wheat", price: 40 }
  ];

  return (
    <div>
      <h1>Nexora Local Market</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default App;