import React,{useState} from "react"
import productsData from "../data/products"
import ProductCard from "../components/ProductCard"

function Products(){

const [search,setSearch] = useState("")
const [category,setCategory] = useState("all")

const filtered = productsData.filter(p=>{

const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
const matchCategory = category==="all" || p.category===category

return matchSearch && matchCategory

})

return(

<div style={{padding:"30px"}}>

<h2>Products</h2>

<input
placeholder="Search product..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{padding:"10px",marginRight:"10px"}}
/>

<select
onChange={(e)=>setCategory(e.target.value)}
>

<option value="all">All</option>
<option value="vegetables">Vegetables</option>
<option value="grocery">Grocery</option>
<option value="dairy">Dairy</option>
<option value="gas">Gas</option>
<option value="sweets">Sweets</option>

</select>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px",
marginTop:"20px"
}}
>

{filtered.map(product=>(
<ProductCard key={product.id} product={product}/>
))}

</div>

</div>

)

}

export default Products