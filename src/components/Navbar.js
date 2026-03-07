import React from "react";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#FF9900", color: "white" }}>
      <h1>Nexora</h1>
      <div>
        <a href="/" style={{ margin: "0 10px", color: "white" }}>Home</a>
        <a href="/products" style={{ margin: "0 10px", color: "white" }}>Products</a>
        <a href="/contact" style={{ margin: "0 10px", color: "white" }}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;