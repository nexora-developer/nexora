import React from "react";

function ProductCard({product,addToCart}){

return(

<div style={{
border:"1px solid #ddd",
padding:"15px",
width:"220px",
margin:"10px",
borderRadius:"10px",
textAlign:"center",
background:"linear-gradient(#ffffff,#f2f2f2)",
boxShadow:"0px 3px 8px rgba(0,0,0,0.2)"
}}>

<img src={product.image} width="180"/>

<h3>{product.name}</h3>

<p>{product.category}</p>

<p>₹{product.price}</p>

<button
onClick={()=>addToCart(product)}
style={{
padding:"8px",
background:"#007bff",
color:"white",
border:"none",
borderRadius:"5px"
}}
> 
AddTo Cart
</button>

</div>

)

}

export default ProductCard