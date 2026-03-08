import React,{useContext} from "react"
import {CartContext} from "../context/CartContext"

function Checkout(){

const {cart} = useContext(CartContext)

const total = cart.reduce((sum,item)=>sum+item.price,0)

return(

<div style={{padding:"40px"}}>

<h2>Checkout</h2>

{cart.map((item,i)=>(

<div key={i}>

{item.name} - ₹{item.price}

</div>

))}

<h3>Total: ₹{total}</h3>

<button
style={{
background:"green",
color:"white",
padding:"10px",
border:"none"
}}
> 
PlaceOrder
</button>

</div>

)

}

export default Checkout