import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import productsData from "./data/products";

function App(){

  const [products] = useState(productsData)

  const [cart,setCart] = useState([])

  const addToCart = (product)=>{

    setCart([...cart,product])

  }

  return(

    <div style={{backgroundColor:"#f5f5f5",minHeight:"100vh"}}>

      <Navbar cartCount={cart.length}/>

      <div style={{
        padding:"30px",
        textAlign:"center"
      }}>

        <h1>Welcome To Nexora</h1>

        <p>World's First Smart Market</p>

      </div>

      <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center"
      }}>

        {products.map((product)=>{

          return(

            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />

          )

        })}

      </div>

    </div>

  )

}

export default App