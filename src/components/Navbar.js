import React from "react"
import {Link} from "react-router-dom"

function Navbar(){

return(

<div style={{
display:"flex",
justifyContent:"space-between",
background:"#222",
padding:"15px",
color:"white"
}}>

<h2>Nexora</h2>

<div>

<Link to="/">Products</Link>

<Link to="/cart">Cart</Link>

<Link to="/map">Map</Link>

</div>

</div>

)

}

export default Navbar