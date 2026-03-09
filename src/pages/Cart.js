import React,{useContext} from "react"
import {CartContext} from "../context/CartContext"

function Cart(){

const {cart,increase,decrease} = useContext(CartContext)

const total = cart.reduce((sum,item)=>sum+item.price*item.qty,0)

return(

<div style={{padding:"40px"}}>

<h2>Your Cart</h2>

{cart.length===0 && <p>No items</p>}

{cart.map(item=>(

<div key={item.id} style={{
border:"1px solid #ccc",
padding:"20px",
marginBottom:"10px"
}}>

<h3>{item.name}</h3>

<p>₹{item.price}</p>

<button onClick={()=>decrease(item.id)}>-</button>

<span style={{margin:"10px"}}>

{item.qty}

</span>

<button onClick={()=>increase(item.id)}>+</button>

</div>

))}

<h2>Total ₹{total}</h2>

</div>

)

}

export default Cart