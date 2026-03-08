import React,{useContext} from "react"
import {Link} from "react-router-dom"
import {CartContext} from "../context/CartContext"

function Navbar(){

const {cart}=useContext(CartContext)

return(

<div style={{
background:"#1e293b",
color:"white",
padding:"15px",
display:"flex",
justifyContent:"space-between"
}}>

<h2>Nexora Market</h2>

<div>

<Link to="/" style={{color:"white",margin:"10px"}}>Home</Link>

<Link to="/products" style={{color:"white",margin:"10px"}}>Products</Link>

<Link to="/orders" style={{color:"white",margin:"10px"}}>Orders</Link>

<Link to="/cart" style={{color:"white",margin:"10px"}}>

Cart ({cart.length})

</Link>

<Link to="/login" style={{color:"white",margin:"10px"}}>

Login

</Link>

</div>

</div>

)

}

export default Navbar