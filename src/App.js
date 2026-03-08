import React,{useState} from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"

function App(){

const [cart,setCart] = useState([])

const addToCart=(product)=>{

setCart([...cart,product])

}

return(

<div>

<Navbar cartCount={cart.length}/>

<Home/>

<Products addToCart={addToCart}/>

</div>

)

}

export default App