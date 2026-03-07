import React, { useState } from "react";
import Map from "./components/Map";

function App() {

  const products = [
    {
      name: "Sugar",
      shops: [
        { shop: "Sharma Store", owner: "Rakesh", price: 50 },
        { shop: "Gupta Shop", owner: "Amit", price: 48 },
        { shop: "Khan Mart", owner: "Imran", price: 52 }
      ]
    },
    {
      name: "Rice",
      shops: [
        { shop: "Sharma Store", owner: "Rakesh", price: 60 },
        { shop: "Gupta Shop", owner: "Amit", price: 58 },
        { shop: "Khan Mart", owner: "Imran", price: 62 }
      ]
    }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product, shop) => {

    const item = {
      name: product.name,
      shop: shop.shop,
      price: shop.price
    };

    setCart([...cart, item]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>Nexora Local Market</h1>

      <h2>Products</h2>

      {products.map((product, index) => (

        <div key={index} style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "20px"
        }}>

          <h3>{product.name}</h3>

          {product.shops.map((shop, i) => (

            <div key={i} style={{ marginBottom: "10px" }}>

              <p>
                ₹{shop.price} – {shop.shop} (Owner: {shop.owner})
              </p>

              <button
                onClick={() => addToCart(product, shop)}
                style={{
                  padding: "6px 12px",
                  background: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "5px"
                }}
              >
                Buy from {shop.shop}
              </button>

            </div>

          ))}

        </div>

      ))}

      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            {item.name} – ₹{item.price} ({item.shop})
          </div>
        ))
      )}

      <h2>Nearby Shops Map</h2>

      <Map />

    </div>
  );
}

export default App;