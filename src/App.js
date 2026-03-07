import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shops from "./pages/Shops";
import GrainExchange from "./pages/GrainExchange";
import GasBooking from "./pages/GasBooking";
import Checkout from "./pages/Checkout";
import AIPage from "./pages/AIPage";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/grain-exchange" element={<GrainExchange />} />
          <Route path="/gas-booking" element={<GasBooking />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/ai" element={<AIPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;