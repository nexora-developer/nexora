import React,{useContext} from "react"
import products from "../data/products"

import {CartContext} from "../context/CartContext"

function Products(){

const {addToCart} = useContext(CartContext)

return(

<div style={{padding:"40px"}}>

<h2>Products</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px"
}}>

{products.map((p)=>(
<div key={p.id} style={{border:"1px solid #ccc",padding:"20px"}}>

<img src={p.image} alt="" width="100%" />

<h3>{p.name}</h3>

<p>₹{p.price}</p>

<button onClick={()=>addToCart(p)}>

Add To Cart

</button>

</div>
))}

</div>

</div>

)

}

export default Products