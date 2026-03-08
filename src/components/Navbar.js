import React from "react"
import {Link} from "react-router-dom"

function Navbar(){

const user = JSON.parse(localStorage.getItem("user"))

function logout(){

localStorage.removeItem("user")
window.location="/"

}

return(

<div style={{
background:"#111",
color:"white",
padding:"15px",
display:"flex",
justifyContent:"space-between"
}}>

<h2>Nexora</h2>

<div>

<Link to="/">Home</Link>
<Link to="/products">Products</Link>
<Link to="/cart">Cart</Link>
<Link to="/map">Shops Map</Link>
</div>

<div>

<h3>Hello {user?.name}</h3>

<button onClick={logout}>
Logout
</button>

</div>

</div>

)

}

export default Navbar