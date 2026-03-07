import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Shops from "./pages/Shops";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shops" element={<Shops />} />
      </Routes>
    </Router>
  );
}

export default App;