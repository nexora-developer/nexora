import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default Home;