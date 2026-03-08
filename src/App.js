import React, { useState } from "react";

const products = [
{
id:1,
name:"Tomato",
price:30,
category:"Vegetables",
shops:[
{name:"Ram Store",price:30},
{name:"Krishna Store",price:28}
]
},

{
id:2,
name:"Potato",
price:25,
category:"Vegetables",
shops:[
{name:"Ram Store",price:25},
{name:"Krishna Store",price:23}
]
},

{
id:3,
name:"Milk",
price:55,
category:"Dairy",
shops:[
{name:"Dairy Farm",price:55},
{name:"Local Milk Shop",price:50}
]
},

{
id:4,
name:"Rice",
price:80,
category:"Grocery",
shops:[
{name:"Big Mart",price:80},
{name:"Village Store",price:70}
]
},

{
id:5,
name:"Gas Cylinder",
price:1100,
category:"Gas",
shops:[
{name:"HP Gas Agency",price:1100},
{name:"Bharat Gas",price:1080}
]
}
]

function App(){

const [cart,setCart] = useState([])
const [search,setSearch] = useState("")
const [category,setCategory] = useState("All")
const [selectedProduct,setSelectedProduct] = useState(null)

const addToCart=(product)=>{
setCart([...cart,product])
}

const filteredProducts = products.filter(p=>

(category==="All" || p.category===category) &&
p.name.toLowerCase().includes(search.toLowerCase())

)

return(

<div style={{fontFamily:"Arial"}}>

{/* Navbar */}

<div style={{
background:"linear-gradient(90deg,#ff6a00,#ee0979)",
padding:"15px",
color:"white",
display:"flex",
justifyContent:"space-between"
}}>

<h2>Nexora Market</h2>

<input
placeholder="Search products"
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{padding:"8px"}}
/>

<div>
Cart ({cart.length})
</div>

</div>

{/* Category Filter */}

<div style={{padding:"20px"}}>

<button onClick={()=>setCategory("All")}>All</button>
<button onClick={()=>setCategory("Vegetables")}>Vegetables</button>
<button onClick={()=>setCategory("Dairy")}>Dairy</button>
<button onClick={()=>setCategory("Grocery")}>Grocery</button>
<button onClick={()=>setCategory("Gas")}>Gas</button>

</div>

{/* Product List */}

<div style={{
display:"flex",
flexWrap:"wrap",
padding:"20px"
}}>

{filteredProducts.map(p=>(

<div key={p.id}
style={{
border:"1px solid #ddd",
padding:"15px",
margin:"10px",
width:"200px"
}}>

<h3>{p.name}</h3>

<p>₹{p.price}</p>

<button onClick={()=>addToCart(p)}>
Add To Cart
</button>

<button
onClick={()=>setSelectedProduct(p)}
style={{marginLeft:"10px"}}
> 
CompareShops
</button>

</div>

))}

</div>

{/* Shop Comparison */}

{selectedProduct && (

<div style={{
position:"fixed",
top:"20%",
left:"30%",
background:"white",
padding:"20px",
border:"2px solid black"
}}>

<h3>{selectedProduct.name} Price Comparison</h3>

{selectedProduct.shops.map((s,i)=>(
<p key={i}>
{s.name} → ₹{s.price}
</p>
))}

<button onClick={()=>setSelectedProduct(null)}>
Close
</button>

</div>

)}

</div>

)

}

export default App;