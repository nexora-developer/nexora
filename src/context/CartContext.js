import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import GasBooking from "./pages/GasBooking"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/products" element={<Products/>}/>

<Route path="/cart" element={<Cart/>}/>

<Route path="/gas" element={<GasBooking/>}/>

</Routes>

</BrowserRouter>

)

}

export default App
import React,{createContext,useState,useEffect} from "react";

export const CartContext=createContext()

function CartProvider({children}){

const [cart,setCart]=useState([])

useEffect(()=>{

const savedCart=localStorage.getItem("cart")

if(savedCart){
setCart(JSON.parse(savedCart))
}

},[])

useEffect(()=>{

localStorage.setItem("cart",JSON.stringify(cart))

},[cart])

function addToCart(product){

setCart([...cart,product])

}

function removeFromCart(index){

setCart(cart.filter((_,i)=>i!==index))

}

return(

<CartContext.Provider value={{cart,addToCart,removeFromCart}}>

{children}

</CartContext.Provider>

)

}

export default CartProvider