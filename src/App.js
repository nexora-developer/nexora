import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar"

import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Login from "./pages/Login"

function App(){

const user = JSON.parse(localStorage.getItem("user"))

if(!user){
return <Login/>
}

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Products/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/cart" element={<Cart/>}/>

</Routes>

</BrowserRouter>

)

}

export default App