import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Nexora Ultra</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/myorders">My Orders</Link>
        <Link to="/checkout">
          Cart ({cart.reduce((acc, p) => acc + p.qty, 0)})
        </Link>
      </nav>
    </header>
  );
};

export default Header;