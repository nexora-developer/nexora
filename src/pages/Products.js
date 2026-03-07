import React from "react";

function Products() {

  const products = [
    { id: 1, name: "SIM Card", price: 100 },
    { id: 2, name: "Gas Cylinder", price: 500 },
    { id: 3, name: "Wheat", price: 200 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button style={{ marginLeft: "10px" }}>
            Add to Cart
          </button>
        </div>
      ))}

    </div>
  );
}

export default Products;