import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App(){

const [cart,setCart] = useState([])

const addToCart=(product)=>{

setCart([...cart,product])

}

return(

<div>

<Navbar cartCount={cart.length}/>

<Products addToCart={addToCart}/>

<Cart cart={cart}/>

<Footer/>

</div>

)

}

export default App;