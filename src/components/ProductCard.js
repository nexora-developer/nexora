import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: 2px solid ${product.color}, // ✅ backticks for dynamic color
        borderRadius: "12px",
        padding: "10px",
        width: "220px",
        margin: "10px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ color: product.color }}>{product.name}</h3>
      <p>₹{product.price}</p>
      <button
        style={{
          backgroundColor: product.color,
          color: "#fff",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;