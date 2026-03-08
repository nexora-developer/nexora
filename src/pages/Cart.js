import React,{useContext} from "react"
import {CartContext} from "../context/CartContext"

function Cart(){

const {cart,removeFromCart}=useContext(CartContext)

return(

<div style={{padding:"40px"}}>

<h2>Your Cart</h2>

{cart.length===0 && <p>Cart empty</p>}

{cart.map((item,index)=>(

<div key={index}
style={{
border:"1px solid #ddd",
padding:"15px",
marginBottom:"10px"
}}>

<h3>{item.name}</h3>

<p>₹{item.price}</p>

<button onClick={()=>removeFromCart(index)}>

Remove

</button>

</div>

))}

</div>

)

}

export default Cart