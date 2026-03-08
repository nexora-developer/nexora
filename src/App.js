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