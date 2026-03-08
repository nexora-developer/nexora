import React from "react"
import products from "../data/products"
import ProductCard from "../components/ProductCard"

function Products(){

return(

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px",
padding:"30px"
}}
>

{products.map(p=>(
<ProductCard key={p.id} product={p}/>
))}

</div>

)

}

export default Products