import React from "react"
import ProductCard from "../components/ProductCard"

const products=[

{name:"Tomato",price:30},

{name:"Potato",price:25},

{name:"Onion",price:40},

{name:"Milk",price:60},

{name:"Gas Cylinder",price:1100},

{name:"Chocolate Cake",price:450},

{name:"Rice",price:80},

{name:"Sugar",price:45},

{name:"Paneer",price:90}

]

function Products(){

return(

<div style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px",
padding:"40px"
}}>

{products.map((p,i)=>(

<ProductCard key={i} product={p}/>

))}

</div>

)

}

export default Products