import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Welcome to Nexora - World's First Smart Market
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;