import React from "react";

function ProductCard({ product, addToCart }) {

return (

<div style={{
border:"1px solid #ddd",
borderRadius:"10px",
padding:"15px",
width:"220px",
margin:"10px",
textAlign:"center",
background:"#fff",
boxShadow:"0 3px 8px rgba(0,0,0,0.2)"
}}>

<img
src={product.image}
alt="product"
style={{width:"180px"}}
/>

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

export default ProductCard;