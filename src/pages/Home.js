import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Nexora E-Commerce</h1>
      <p>Explore Shops, Grain Exchange, Gas Booking and AI Features!</p>
      <nav>
        <Link to="/shops">Shops</Link> |{" "}
        <Link to="/grain-exchange">Grain Exchange</Link> |{" "}
        <Link to="/gas-booking">Gas Booking</Link> |{" "}
        <Link to="/checkout">Checkout</Link> |{" "}
        <Link to="/ai">AI Page</Link>
      </nav>
    </div>
  );
};

export default Home;