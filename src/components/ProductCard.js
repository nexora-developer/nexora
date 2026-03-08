import React,{useContext} from "react"
import {CartContext} from "../context/CartContext"

function ProductCard({product}){

const {addToCart} = useContext(CartContext)

return(

<div style={{
border:"1px solid #ddd",
padding:"15px",
textAlign:"center"
}}>

<img
src={product.image}
alt=""
style={{width:"150px"}}
/>

<h3>{product.name}</h3>

<p>₹{product.price}</p>

<button onClick={()=>addToCart(product)}>
Add to Cart
</button>

</div>

)

}

export default ProductCard