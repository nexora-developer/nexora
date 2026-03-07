import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: "2px solid " + product.color,
        borderRadius: "12px",
        padding: "10px",
        width: "220px",
        margin: "10px",
        backgroundColor: "#fefefe",
        boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
    </div>
  );
};

export default ProductCard;