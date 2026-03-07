import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Shops from "./pages/Shops";

function App() {

  return (
    <Router>

      <div style={{ padding: "20px", fontFamily: "Arial" }}>

        <h1>Nexora Marketplace</h1>

        <nav style={{ marginBottom: "20px" }}>

          <Link to="/">Home</Link> |{" "}
          <Link to="/products">Products</Link> |{" "}
          <Link to="/cart">Cart</Link> |{" "}
          <Link to="/shops">Shops</Link>

        </nav>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shops" element={<Shops />} />

        </Routes>

      </div>

    </Router>
  );
}

export default App;