import React from "react";

function Navbar() {
  return (
    <div style={{ background: "#333", padding: "10px" }}>
      <a href="/" style={{ color: "white", marginRight: "15px" }}>Home</a>
      <a href="/products" style={{ color: "white", marginRight: "15px" }}>Products</a>
      <a href="/checkout" style={{ color: "white" }}>Checkout</a>
    </div>
  );
}

export default Navbar;