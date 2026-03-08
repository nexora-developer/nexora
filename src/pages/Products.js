import React,{useState} from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({ addToCart }){

const [category,setCategory] = useState("All")

const filteredProducts = category==="All"
? products
: products.filter(p=>p.category===category)

return(

<div style={{padding:"20px"}}>

<h2>Products</h2>

<div style={{marginBottom:"20px"}}>

<button onClick={()=>setCategory("All")}>All</button>
<button onClick={()=>setCategory("Grocery")}>Grocery</button>
<button onClick={()=>setCategory("Electronics")}>Electronics</button>

</div>

<div style={{
display:"flex",
flexWrap:"wrap"
}}>

{filteredProducts.map((p)=>(
<ProductCard
key={p.id}
product={p}
addToCart={addToCart}
/>
))}

</div>

</div>

)

}

export default Products;