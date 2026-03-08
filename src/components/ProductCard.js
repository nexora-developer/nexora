import React,{useContext} from "react"
import {CartContext} from "../context/CartContext"

function ProductCard({product}){

const {addToCart}=useContext(CartContext)

return(

<div style={{
border:"1px solid #ddd",
padding:"20px",
borderRadius:"10px",
background:"#f8fafc"
}}>

<h3>{product.name}</h3>

<p>₹{product.price}</p>

<button
onClick={()=>addToCart(product)}
style={{
background:"#22c55e",
color:"white",
border:"none",
padding:"10px"
}}
>

Add to Cart

</button>

</div>

)

}

export default ProductCard