import React,{useContext} from "react"
import {CartContext} from "../context/CartContext"

function Cart(){

const {cart,increase,decrease} = useContext(CartContext)

const total = cart.reduce((sum,i)=>sum+i.price*i.qty,0)

return(

<div style={{padding:"40px"}}>

<h2>Your Cart</h2>

{cart.map(item=>(

<div key={item.id}>

<h3>{item.name}</h3>

<p>₹{item.price}</p>

<button onClick={()=>decrease(item.id)}>-</button>

<span>{item.qty}</span>

<button onClick={()=>increase(item.id)}>+</button>

</div>

))}

<h2>Total ₹{total}</h2>

</div>

)

}

export default Cart