import React from "react";

function ProductCard(props) {

  const product = props.product;

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "10px",
        width: "220px",
        margin: "10px",
        textAlign: "center",
        backgroundColor: "#f5f5f5"
      }}
    >

      <img
        src={product.image}
        alt="product"
        style={{ width: "200px", height: "200px" }}
      />

      <h3>{product.name}</h3>

      <p>Price: ₹{product.price}</p>

      <button
        style={{
          padding: "8px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;