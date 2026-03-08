// src/components/ProductCard.js
import React from "react";

function ProductCard({ product }) {
  return (
    <div
      style={{
        border: 2px solid ${product.color},
        borderRadius: "12px",
        padding: "10px",
        width: "220px",
        margin: "10px",
        textAlign: "center",
        backgroundColor: product.color,
      }}
    >
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "180px", height: "180px", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            width: "180px",
            height: "180px",
            backgroundColor: "#e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            color: "#555",
            margin: "auto",
          }}
        >
          Image not available
        </div>
      )}
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}

export default ProductCard;