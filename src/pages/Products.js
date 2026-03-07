import React from "react";
import products from "../data/products"; // Ensure products.js exist

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div key={product.id} style={{ margin: "10px", border: "1px solid gray", padding: "10px" }}>
            <img src={product.image} alt={product.name} width="150" />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;