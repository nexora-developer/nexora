import React from "react";

function ProductCard({ product, addToCart }) {

  return (

    <div style={{
      border:"1px solid #ddd",
      borderRadius:"10px",
      padding:"10px",
      width:"220px",
      margin:"10px",
      textAlign:"center",
      backgroundColor:"#fff",
      boxShadow:"0px 2px 5px rgba(0,0,0,0.1)"
    }}>

      <img
        src={product.image}
        alt="product"
        style={{width:"200px",height:"200px"}}
      />

      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <p>₹{product.price}</p>

      <button
        onClick={()=>addToCart(product)}
        style={{
          padding:"8px",
          backgroundColor:"#007bff",
          color:"white",
          border:"none",
          borderRadius:"5px",
          cursor:"pointer"
        }}
      >
        Add To Cart
      </button>

    </div>

  )

}

export default ProductCard;