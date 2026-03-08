import React from "react";

function Navbar({ cartCount }) {

return (

<div style={{
background:"linear-gradient(90deg,#ff6a00,#ee0979)",
padding:"15px",
color:"white",
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}>

<h2>Nexora</h2>

<input
placeholder="Search products..."
style={{
padding:"8px",
width:"300px",
borderRadius:"6px",
border:"none"
}}
/>

<div>

<span style={{marginRight:"20px"}}>Home</span>

<span style={{marginRight:"20px"}}>Products</span>

<span>Cart ({cartCount})</span>

</div>

</div>

)

}

export default Navbar;