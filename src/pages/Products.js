import React from "react"
import products from "../data/products"
import ProductCard from "../components/ProductCard"

function Products({addToCart}){

return(

<div style={{
display:"flex",
flexWrap:"wrap",
justifyContent:"center",
padding:"20px"
}}>

{products.map((p)=>(
<ProductCard key={p.id} product={p} addToCart={addToCart}/>
))}

</div>

)

}

export default Products