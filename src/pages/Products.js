// src/pages/Products.js
import React from "react";
import products from "../data/ProductData";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;