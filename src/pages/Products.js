import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 50000, color: "red", image: "/images/product1.jpg" },
  { id: 2, name: "Smartphone", price: 20000, color: "blue", image: "/images/product1.jpg" },
  { id: 3, name: "Headphones", price: 2000, color: "green", image: "/images/product1.jpg" },
];

const Products = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Products;