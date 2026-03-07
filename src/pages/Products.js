import React from "react";
import ProductCard from "../components/ProductCard";

// Sample Products (Ultra-Level 1)
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    color: "red",
    image: "/images/shop1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 150,
    color: "blue",
    image: "/images/shop2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 200,
    color: "green",
    image: "/images/shop3.jpg",
  },
];

const Products = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;