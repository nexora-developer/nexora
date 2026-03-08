import React,{useContext} from "react"
import {CartContext} from "../context/CartContext"

function ProductCard({product}){

const {addToCart} = useContext(CartContext)

return(

<div style={{

border:"1px solid #ddd",
borderRadius:"10px",
padding:"15px",
textAlign:"center",
background:"white",
boxShadow:"0 2px 8px rgba(0,0,0,0.1)"

}}>

<img
src={product.image}
alt={product.name}
style={{width:"100%",height:"150px",objectFit:"cover"}}
/>

<h3>{product.name}</h3>

<p>₹{product.price}</p>

<button
onClick={()=>addToCart(product)}
style={{
background:"#ff9900",
border:"none",
padding:"10px",
cursor:"pointer"
}}
> 
Addto Cart
</button>

</div>

)

}

export default ProductCard