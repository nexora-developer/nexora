import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products(){

  return(

    <div style={{display:"flex",flexWrap:"wrap"}}>

      {products.map((item)=>(
        <ProductCard key={item.id} product={item}/>
      ))}

    </div>

  )

}

export default Products;