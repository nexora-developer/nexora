import React from "react";
import { CartProvider } from "./context/CartContext";
import Products from "./pages/Products";

function App() {
  return (
    <CartProvider>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h1 style={{ textAlign: "center", color: "#FF6600" }}>NEXORA E-Commerce</h1>
        <Products />
      </div>
    </CartProvider>
  );
}

export default App;