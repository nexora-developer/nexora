import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: 2px solid ${product.color},
      borderRadius: "8px",
      padding: "10px",
      width: "200px"
    }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button style={{ padding: "5px 10px", backgroundColor: product.color, color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;