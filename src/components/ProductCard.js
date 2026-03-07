import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: 2px solid ${product.color},
        borderRadius: "12px",
        padding: "10px",
        width: "220px",
        margin: "10px",
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