import React from "react";

function Navbar() {
  return (
    <div style={{
      backgroundColor: "#111",
      color: "white",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h2>Nexora</h2>

      <div>
        <a href="/" style={{color:"white", marginRight:"20px"}}>Home</a>
        <a href="/products" style={{color:"white", marginRight:"20px"}}>Products</a>
        <a href="/about" style={{color:"white"}}>About</a>
      </div>
    </div>
  );
}

export default Navbar;