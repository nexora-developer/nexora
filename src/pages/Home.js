import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Shop 1 Rice", price: 100, color: "orange", image: "/images/shop1.jpg" },
    { id: 2, name: "Shop 2 Sugar", price: 150, color: "green", image: "/images/shop2.jpg" },
    { id: 3, name: "Shop 3 Oil", price: 200, color: "blue", image: "/images/shop3.jpg" },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;