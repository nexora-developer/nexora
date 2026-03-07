import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Shops from "./pages/Shops";
import GrainExchange from "./pages/GrainExchange";
import GasBooking from "./pages/GasBooking";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/grain-exchange" element={<GrainExchange />} />
        <Route path="/gas-booking" element={<GasBooking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;