import React from "react";

function ProductCard(props){

  const product = props.product;

  return(
    <div style={{
      border:"1px solid #ddd",
      padding:"10px",
      width:"200px",
      margin:"10px",
      textAlign:"center"
    }}>

      <img src={product.image} alt="product" width="180"/>

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <button>Add To Cart</button>

    </div>
  )

}

export default ProductCard;