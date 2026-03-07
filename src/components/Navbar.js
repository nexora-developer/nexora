import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", display: "flex", justifyContent: "space-between" }}>
      <h2>Nexora Store</h2>
      <div>
        <Link to="/" style={{ color: "white", margin: "0 10px" }}>Home</Link>
        <Link to="/products" style={{ color: "white", margin: "0 10px" }}>Products</Link>
        <Link to="/shops" style={{ color: "white", margin: "0 10px" }}>Shops</Link>
        <Link to="/grain-exchange" style={{ color: "white", margin: "0 10px" }}>Grain Exchange</Link>
        <Link to="/gas-booking" style={{ color: "white", margin: "0 10px" }}>Gas Booking</Link>
        <Link to="/contact" style={{ color: "white", margin: "0 10px" }}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;