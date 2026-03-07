import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={{
      border: 2px solid ${product.color},
      borderRadius: "12px",
      padding: "10px",
      width: "220px",
      margin: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      textAlign: "center",
      backgroundColor: "#fdfdfd",
      transition: "0.3s",
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
      />
      <h3 style={{ color: product.color }}>{product.name}</h3>
      <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "8px 15px",
          backgroundColor: product.color,
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;