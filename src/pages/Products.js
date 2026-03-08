import React from "react";

const products=[
{name:"Tomato",price:30},
{name:"Potato",price:25},
{name:"Rice",price:80},
{name:"Milk",price:55},
{name:"Cake",price:400}
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

<div key={i}
style={{
border:"1px solid #ddd",
padding:"20px"
}}>

<h3>{p.name}</h3>

<p>₹{p.price}</p>

<button>Add to Cart</button>

</div>

))}

</div>

)

}

export default Products