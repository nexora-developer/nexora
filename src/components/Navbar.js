import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

return(

<div style={{
background:"#0f172a",
color:"white",
padding:"15px",
display:"flex",
justifyContent:"space-between"
}}>

<h2>Nexora Market</h2>

<div>

<Link to="/" style={{color:"white",margin:"10px"}}>Home</Link>

<Link to="/products" style={{color:"white",margin:"10px"}}>Products</Link>

<Link to="/cart" style={{color:"white",margin:"10px"}}>Cart</Link>

<Link to="/gas" style={{color:"white",margin:"10px"}}>Gas Booking</Link>

</div>

</div>

)

}

export default Navbar