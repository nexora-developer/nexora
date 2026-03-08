import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../product";

function Home() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default Home;